// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4p2FijyJfwhaaGx9UiNG2d3DzuSkLIVw",
    authDomain: "quiz-admin-fe871.firebaseapp.com",
    databaseURL: "https://quiz-admin-fe871-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quiz-admin-fe871",
    storageBucket: "quiz-admin-fe871.firebasestorage.app",
    messagingSenderId: "348155303890",
    appId: "1:348155303890:web:cbc7a907486ec797129a0b",
    measurementId: "G-5SL3Y0C0YX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ============================================
// Presence Tracking — отслеживание пользователей
// ============================================

const FirebasePresence = {
    userRef: null,

    // Регистрация пользователя онлайн
    goOnline(userId, userName, screen = 'start') {
        this.userRef = database.ref('presence/' + userId);

        this.userRef.set({
            name: userName || 'Аноним',
            screen: screen,
            subject: 'hardware',
            question: 0,
            score: 0,
            lastSeen: Date.now(),
            userAgent: navigator.userAgent.substring(0, 50)
        });

        // Автоматически удалять при отключении
        this.userRef.onDisconnect().remove();

        console.log('🔥 Firebase: user online');
    },

    // Обновить статус пользователя
    updateStatus(data) {
        if (this.userRef) {
            this.userRef.update({
                ...data,
                lastSeen: Date.now()
            });
        }
    },

    // Выход
    goOffline() {
        if (this.userRef) {
            this.userRef.remove();
            console.log('🔥 Firebase: user offline');
        }
    },

    // Слушать входящие команды от админа
    listenForCommands(userId, callback) {
        const commandRef = database.ref('commands/' + userId);
        commandRef.on('value', (snapshot) => {
            const command = snapshot.val();
            if (command) {
                callback(command);
                // Удалить команду после выполнения
                commandRef.remove();
            }
        });
    }
};

// ============================================
// Alert System — Обработка команд от админа
// ============================================

const AlertSystem = {
    init(userId) {
        FirebasePresence.listenForCommands(userId, (command) => {
            console.log('📢 Received command:', command);
            this.executeCommand(command);
        });
    },

    executeCommand(command) {
        switch (command.type) {
            case 'alert':
                alert(command.message || '📢 Сообщение от админа!');
                break;

            case 'rainbow':
                this.applyRainbowEffect();
                break;

            case 'shake':
                document.body.classList.add('shake-effect');
                setTimeout(() => {
                    document.body.classList.remove('shake-effect');
                }, 2000);
                break;

            case 'jumpscare':
                this.showJumpscare(command.imageUrl);
                break;

            case 'fake_error':
                alert('⚠️ ОШИБКА: Ваш тест был аннулирован из-за подозрительной активности. Обратитесь в деканат.');
                break;

            case 'confetti':
                this.showConfetti();
                break;

            case 'invert':
                this.toggleStyle('invert-effect', 'html { filter: invert(1) hue-rotate(180deg); }');
                break;

            case 'blur':
                this.toggleStyle('blur-effect', 'body { filter: blur(5px); pointer-events: none; }');
                break;

            case 'comic_sans':
                this.toggleStyle('comic-effect', '* { font-family: "Comic Sans MS", "Chalkboard SE", sans-serif !important; }');
                break;

            case 'cursor_none':
                this.toggleStyle('cursor-effect', '* { cursor: none !important; }');
                break;

            case 'glitch':
                document.body.classList.add('glitch-mode');
                setTimeout(() => document.body.classList.remove('glitch-mode'), 5000);
                break;

            case 'rotate':
                // Barrel Roll (360 spin)
                this.toggleStyle('rotate-effect', `
                    body { animation: barrel-roll 2s linear infinite; }
                    @keyframes barrel-roll {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `);
                break;

            case 'gravity':
                this.toggleStyle('gravity-effect', `
                    body * { transition: transform 2s ease-in !important; transform: translateY(100vh) rotate(20deg) !important; }
                    body { overflow: hidden !important; }
                `);
                break;

            case 'dvd':
                this.showDVD();
                break;

            case 'fake_update':
                this.showFakeUpdate();
                break;

            case 'show_image':
                this.showImageOverlay(command.imageUrl);
                break;

            case 'vibrate':
                if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 500]);
                break;

            case 'low_battery':
                this.showLowBattery();
                break;

            case 'screen_crack':
                this.showScreenCrack();
                break;

            case 'fake_notification':
                this.showFakeNotification();
                break;

            default:
                console.warn('Unknown command:', command.type);
        }
    },

    toggleStyle(id, css) {
        const existing = document.getElementById(id);
        if (existing) {
            existing.remove();
        } else {
            const style = document.createElement('style');
            style.id = id;
            style.textContent = css;
            document.head.appendChild(style);

            // Auto-remove after 10 seconds for most effects
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.remove();
            }, 10000);
        }
    },

    applyRainbowEffect() {
        this.toggleStyle('rainbow-effect', `
      body { animation: rainbow-bg 2s linear infinite !important; }
      @keyframes rainbow-bg {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `);
    },

    showJumpscare(imageUrl) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: black url('${imageUrl || 'https://i.imgur.com/JtGWIad.gif'}') center/cover !important;
      z-index: 999999 !important;
    `;
        document.body.appendChild(overlay);

        try {
            const audio = new Audio('https://www.myinstants.com/media/sounds/scream_horror1.mp3');
            audio.play().catch(e => console.log('Audio play failed', e));
        } catch (e) { }

        setTimeout(() => overlay.remove(), 2000);
    },

    showConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.textContent = ['🎉', '🎊', '✨', '🌟', '💫', '🤡', '💩'][Math.floor(Math.random() * 7)];
            confetti.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * 100}vw;
        font-size: ${20 + Math.random() * 30}px;
        z-index: 9999;
        animation: fall ${2 + Math.random() * 3}s linear forwards;
        pointer-events: none;
      `;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }

        if (!document.getElementById('confetti-style')) {
            const style = document.createElement('style');
            style.id = 'confetti-style';
            style.textContent = `
        @keyframes fall {
          to { top: 110vh; transform: rotate(720deg); }
        }
      `;
            document.head.appendChild(style);
        }
    },

    showDVD() {
        const dvd = document.createElement('div');
        dvd.textContent = 'DVD';
        dvd.style.cssText = `
            position: fixed;
            font-size: 50px;
            font-weight: bold;
            color: white;
            background: blue;
            padding: 10px 20px;
            border-radius: 10px;
            z-index: 99999;
            animation: bounce 5s linear infinite alternate;
            top: 0; left: 0;
        `;
        document.body.appendChild(dvd);

        // Simple CSS bounce (not perfect physics but good enough for a prank)
        if (!document.getElementById('dvd-style')) {
            const style = document.createElement('style');
            style.id = 'dvd-style';
            style.textContent = `
                @keyframes bounce {
                    0% { transform: translate(0, 0); background: red; }
                    25% { transform: translate(80vw, 20vh); background: green; }
                    50% { transform: translate(20vw, 80vh); background: blue; }
                    75% { transform: translate(80vw, 80vh); background: yellow; }
                    100% { transform: translate(0, 0); background: purple; }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => dvd.remove(), 10000);
    },

    showFakeUpdate() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: #0078d7; color: white; font-family: 'Segoe UI', sans-serif;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            z-index: 999999; cursor: none;
        `;
        overlay.innerHTML = `
            <div style="font-size: 80px; margin-bottom: 20px;">:(</div>
            <div style="font-size: 24px; margin-bottom: 40px;">Your PC ran into a problem and needs to restart.</div>
            <div style="font-size: 20px;">0% complete</div>
        `;
        document.body.appendChild(overlay);

        setTimeout(() => overlay.remove(), 10000);
    },

    showImageOverlay(url) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(0,0,0,0.8) !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      z-index: 999999 !important;
      backdrop-filter: blur(5px) !important;
      animation: fadeIn 0.5s ease-out !important;
    `;

        const img = document.createElement('img');
        img.src = url;
        img.style.cssText = `
      max-width: 90vw !important;
      max-height: 90vh !important;
      border-radius: 10px !important;
      box-shadow: 0 0 50px rgba(0,0,0,0.5) !important;
      transform: scale(0);
      animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards !important;
    `;

        overlay.appendChild(img);
        document.body.appendChild(overlay);

        if (!document.getElementById('anim-styles')) {
            const style = document.createElement('style');
            style.id = 'anim-styles';
            style.textContent = `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } }
      `;
            document.head.appendChild(style);
        }

        const remove = () => {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 500);
        };

        setTimeout(remove, 10000);
        overlay.onclick = remove;
    },

    showLowBattery() {
        const div = document.createElement('div');
        div.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:999999;display:flex;justify-content:center;align-items:center;color:white;font-family:system-ui;flex-direction:column;';
        div.innerHTML = '<div style="font-size:50px;">🔋</div><h2 style="margin:20px 0;">Low Battery</h2><p>10% remaining</p><div style="margin-top:20px;padding:10px 30px;border:1px solid #555;border-radius:5px;">Close</div>';
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 5000);
    },

    showScreenCrack() {
        const img = document.createElement('img');
        img.src = 'https://i.imgur.com/3p6v9vZ.png'; // Transparent crack overlay
        img.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:999999;opacity:0.8;';
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 10000);
    },

    showFakeNotification() {
        const div = document.createElement('div');
        div.style.cssText = 'position:fixed;top:-100px;left:10px;right:10px;background:rgba(255,255,255,0.95);color:black;padding:15px;border-radius:15px;box-shadow:0 5px 15px rgba(0,0,0,0.2);z-index:999999;font-family:system-ui;transition:top 0.5s;display:flex;gap:15px;align-items:center;backdrop-filter:blur(10px);';
        div.innerHTML = '<div style="font-size:30px;">💬</div><div><div style="font-weight:bold;">Мать</div><div>Ты где гнида?</div></div>';
        document.body.appendChild(div);
        setTimeout(() => div.style.top = '10px', 100);
        setTimeout(() => div.style.top = '-100px', 5000);
        setTimeout(() => div.remove(), 5500);
    }
};

// CSS для shake и glitch эффекта
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  .shake-effect {
    animation: shake 0.1s linear infinite;
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px) rotate(-5deg); }
    75% { transform: translateX(10px) rotate(5deg); }
  }
  
  .glitch-mode {
    animation: glitch-anim 0.2s infinite;
  }
  @keyframes glitch-anim {
    0% { transform: translate(0) }
    20% { transform: translate(-2px, 2px) }
    40% { transform: translate(-2px, -2px) }
    60% { transform: translate(2px, 2px) }
    80% { transform: translate(2px, -2px) }
    100% { transform: translate(0) }
  }
`;
document.head.appendChild(globalStyles);

console.log('🔥 Firebase config loaded');
