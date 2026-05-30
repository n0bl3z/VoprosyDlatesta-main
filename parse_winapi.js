const fs = require('fs');

function parseQuestions(filePath) {
    const buf = fs.readFileSync(filePath);
    const decoder = new TextDecoder('windows-1251');
    const content = decoder.decode(buf);

    const lines = content.split('\n');
    const questions = [];
    
    let currentQuestion = null;
    let currentAnswers = [];
    let questionId = 0;
    
    const questionRegex = /^(\d+)\.\s*(.+)$/;
    // Supports # a), ! a), a), #a), etc.
    const answerRegex = /^([#!]?)\s*([a-zA-Zа-яА-Я])\)\s*(.+)$/;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const qMatch = line.match(questionRegex);
        if (qMatch) {
            if (currentQuestion && currentAnswers.length > 0) {
                questions.push({
                    id: questionId,
                    question: currentQuestion,
                    answers: currentAnswers
                });
            }
            questionId = parseInt(qMatch[1], 10);
            currentQuestion = qMatch[2].trim();
            currentAnswers = [];
            continue;
        }
        
        const aMatch = line.match(answerRegex);
        if (aMatch) {
            const isCorrect = (aMatch[1] === '#' || aMatch[1] === '!');
            const answerText = aMatch[3].trim();
            currentAnswers.push({
                text: answerText,
                isCorrect: isCorrect
            });
        } else if (currentQuestion && currentAnswers.length === 0) {
            // Continuation of question text
            currentQuestion += ' ' + line;
        }
    }
    
    if (currentQuestion && currentAnswers.length > 0) {
        questions.push({
            id: questionId,
            question: currentQuestion,
            answers: currentAnswers
        });
    }
    
    return questions;
}

const questions = parseQuestions('Тест WinApi.txt');
const outputContent = `// Parsed ${questions.length} questions for WinAPI\nconst winapiQuestions = ${JSON.stringify(questions, null, 2)};\n`;

fs.writeFileSync('winapi_questions.js', outputContent, 'utf8');
console.log(`Done! Parsed ${questions.length} questions.`);
