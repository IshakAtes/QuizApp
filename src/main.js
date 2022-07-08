let questions = [
    {
        "question": "Wer hat Html erfunden?",
        "answer1": "Robbie Williams",
        "answer2": "Lady Gaga",
        "answer3": "Tim Berners-Lee",
        "answer4": "Justin Bieber",
        "rightAnswer": 3
    },
    {
        "question": "Was bedeutet das Html Tag &lt;e&gt;?",
        "answer1": "Text Fett",
        "answer2": "Container",
        "answer3": "Ein Link",
        "answer4": "Kursiv",
        "rightAnswer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer1": "Robbie Williams",
        "answer2": "Kein Plan",
        "answer3": "Tim Berners-Lee",
        "answer4": "Justin Bieber",
        "rightAnswer": 2
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer1": "let 100 = rate;",
        "answer2": "100 = let rate;",
        "answer3": "rate = 100;",
        "answer4": "let rate = 100;",
        "rightAnswer": 4
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer1": "readonly",
        "answer2": "max",
        "answer3": "from",
        "answer4": "spellcheck",
        "rightAnswer": 1
    },
];

let currentQuestion = 0;



function init(){
    document.getElementById('totalQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}


function answer(answer){
    let question = questions[currentQuestion];
        let selectedQuestionNumber = answer.slice(-1);
        if (selectedQuestionNumber == question['rightAnswer']) {
            console.log('richtige Antwort')
            document.getElementById(answer).classList.add('bg-success');
        } else {
            document.getElementById(answer).classList.add('bg-danger');
        }
}