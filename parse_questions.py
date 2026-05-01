import re
import json

def parse_questions(file_path, encoding='utf-8'):
    with open(file_path, 'r', encoding=encoding) as f:
        content = f.read()
    
    # Split into question blocks
    question_pattern = r'(\d+)\.\s*(.+?)(?=\n\d+\.|$)'
    lines = content.split('\n')
    
    questions = []
    current_question = None
    current_answers = []
    question_id = 0
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if new question starts
        match = re.match(r'^(\d+)\.\s*(.+)$', line)
        if match:
            # Save previous question
            if current_question and current_answers:
                questions.append({
                    'id': question_id,
                    'question': current_question,
                    'answers': current_answers
                })
            
            question_id = int(match.group(1))
            current_question = match.group(2).strip()
            current_answers = []
            continue
        
        # Check if answer line
        answer_match = re.match(r'^(!?)\s*([a-zA-Zа-яА-Я])\)\s*(.+)$', line)
        if answer_match:
            is_correct = answer_match.group(1) == '!'
            answer_text = answer_match.group(3).strip()
            current_answers.append({
                'text': answer_text,
                'isCorrect': is_correct
            })
    
    # Don't forget last question
    if current_question and current_answers:
        questions.append({
            'id': question_id,
            'question': current_question,
            'answers': current_answers
        })
    
    return questions

# Parse Innovation questions
innovation_questions = parse_questions(r'c:\Project\TestSite\Вопросы.txt')

# Write to file with UTF-8
with open(r'c:\Project\TestSite\innovation_questions.js', 'w', encoding='utf-8') as f:
    f.write(f"// Parsed {len(innovation_questions)} questions for Innovation Technologies\n")
    f.write("const innovationQuestions = " + json.dumps(innovation_questions, ensure_ascii=False, indent=2) + ";\n")
    
print(f"Done! Parsed {len(innovation_questions)} questions")
