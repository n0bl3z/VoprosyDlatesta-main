// Парсер для инновационных технологий (test.txt)
// Формат: answers с { text, isCorrect }
// Правильный ответ - первый вариант

const fs = require('fs');

const inputFile = process.argv[2] || 'test.txt';
const outputFile = process.argv[3] || 'innovation_questions_new.js';

const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n');

const questions = [];
let currentQuestion = null;

for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('Вопрос')) {
        // Сохраняем предыдущий вопрос
        if (currentQuestion && currentQuestion.answers.length >= 2) {
            questions.push(currentQuestion);
        }
        // Новый вопрос - убираем "Вопрос" и пробелы
        const questionText = trimmed.replace(/^Вопрос\s+/, '').trim();
        currentQuestion = {
            question: questionText,
            answers: []
        };
    } else if (trimmed.startsWith('?????')) {
        // Вариант ответа
        const optionText = trimmed.replace(/^\?+\s*/, '').trim();
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
const jsContent = `// Инновационные технологии (новые вопросы)
// Сгенерировано автоматически: ${new Date().toLocaleString('ru-RU')}
// Всего вопросов: ${shuffledQuestions.length}

const innovationQuestionsNew = ${JSON.stringify(shuffledQuestions, null, 2)};

// Экспорт для использования
if (typeof window !== 'undefined') {
    window.innovationQuestionsNew = innovationQuestionsNew;
}
`;

fs.writeFileSync(outputFile, jsContent);

console.log('✅ Готово!');
console.log('📝 Вопросов: ' + questions.length);
console.log('📁 Файл: ' + outputFile);
console.log('📋 Формат: answers с { text, isCorrect }');
