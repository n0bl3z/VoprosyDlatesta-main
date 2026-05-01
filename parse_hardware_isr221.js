// Парсер для аппаратного обеспечения ПК ИСР-221
// Формат: answers с { text, isCorrect }
// Правильный ответ - первый вариант

const fs = require('fs');

const inputFile = process.argv[2] || 'Аппаратное обеспечение ПК ИСР-221.txt';
const outputFile = process.argv[3] || 'hardware_isr221_questions.js';

const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n').map(l => l.trim());

const questions = [];
let currentQuestion = null;

for (const line of lines) {
    if (line.startsWith('#####')) {
        // Сохраняем предыдущий вопрос
        if (currentQuestion && currentQuestion.answers.length >= 2) {
            questions.push(currentQuestion);
        }
        // Новый вопрос
        const questionText = line.replace('#####', '').trim();
        currentQuestion = {
            question: questionText,
            answers: []
        };
    } else if (line.startsWith('?????')) {
        // Вариант ответа
        const optionText = line.replace('?????', '').trim();
        if (currentQuestion && optionText) {
            // Первый вариант - правильный
            const isCorrect = currentQuestion.answers.length === 0;
            currentQuestion.answers.push({
                text: optionText,
                isCorrect: isCorrect
            });
        }
    }
}

// Добавляем последний вопрос
if (currentQuestion && currentQuestion.answers.length >= 2) {
    questions.push(currentQuestion);
}

// Перемешиваем варианты ответов
function shuffleAnswers(q) {
    const shuffled = [...q.answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return {
        question: q.question,
        answers: shuffled
    };
}

const shuffledQuestions = questions.map(shuffleAnswers);

// Генерируем JS файл
const jsContent = `// Аппаратное обеспечение ПК ИСР-221
// Сгенерировано автоматически: ${new Date().toLocaleString('ru-RU')}
// Всего вопросов: ${shuffledQuestions.length}

const hardwareISR221Questions = ${JSON.stringify(shuffledQuestions, null, 2)};

// Экспорт для использования
if (typeof window !== 'undefined') {
    window.hardwareISR221Questions = hardwareISR221Questions;
}
`;

fs.writeFileSync(outputFile, jsContent);

console.log(`✅ Готово!`);
console.log(`📝 Вопросов: ${questions.length}`);
console.log(`📁 Файл: ${outputFile}`);
console.log(`📋 Формат: answers с { text, isCorrect }`);
