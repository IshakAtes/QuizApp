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
        "question": "Was bedeutet das Html Tag &lt;a&gt;?",
        "answer1": "Text Fett",
        "answer2": "Container",
        "answer3": "Ein Link",
        "answer4": "Kursiv",
        "rightAnswer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer1": "iframe, frame, and frameset",
        "answer2": "iframe",
        "answer3": "frame",
        "answer4": "frameset",
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
let rightAnswersCounter = 0;



function init(){
    document.getElementById('totalQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion(){
    if (currentQuestion >= questions.length) {
        // Show end screen
        let score = document.getElementById('score');
        score.innerHTML = '';
        score.innerHTML = `${rightAnswersCounter}/${questions.length}`;
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';
        document.getElementById('footerContainer').style = 'display: none;';
        document.getElementById('progressBar').innerHTML = `${100}%`;
        document.getElementById('progressBar').style = `width: ${100}%;`;
    } else { // Show Question
        let currentQuestionCounter = currentQuestion + 1;
        let question = questions[currentQuestion];
        let percent = (currentQuestion) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progressBar').innerHTML = `${percent}%`;
        document.getElementById('progressBar').style = `width: ${percent}%;`;
        document.getElementById('questionNumber').innerHTML = currentQuestionCounter;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
    }
}


function answer(answer){
    let question = questions[currentQuestion];
        let selectedQuestionNumber = answer.slice(-1);
        // console.log(`selected Answer ${selectedQuestionNumber}`)
        // console.log(`right Answer ${question['rightAnswer']}`)

        let idOfRightAnswer = `answer${question['rightAnswer']}`;
        
        if (selectedQuestionNumber == question['rightAnswer']) {
            document.getElementById(answer).classList.add('bg-success');
            rightAnswersCounter++;
        } else {
            document.getElementById(answer).classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).classList.add('bg-success');
        }
        document.getElementById('nextButton').disabled = false;
}


function nextQuestion(){
    currentQuestion++; // Currentquestion wird um 1 erhöht und showQuestion neu aufgerufen damit die Fragen vom zweiten Json Array angezeigt werden.
    showQuestion();
    document.getElementById('nextButton').disabled = true;
    resetAnswerBtn();
    showQuestion();    
}

function resetAnswerBtn(){
    document.getElementById('answer1').classList.remove('bg-danger');
    document.getElementById('answer1').classList.remove('bg-success');
    document.getElementById('answer2').classList.remove('bg-danger');
    document.getElementById('answer2').classList.remove('bg-success');
    document.getElementById('answer3').classList.remove('bg-danger');
    document.getElementById('answer3').classList.remove('bg-success');
    document.getElementById('answer4').classList.remove('bg-danger');
    document.getElementById('answer4').classList.remove('bg-success');
}


function restartGame(){
    rightAnswersCounter = 0;
    currentQuestion = 0;
    document.getElementById('endScreen').style = 'display: none;'; // endscreen ausblenden
    document.getElementById('questionBody').style = 'display: flex; width: 30rem;'; // question body wider einblenden
    document.getElementById('footerContainer').style = 'display: flex;'; // footer wieder einblenden
    init();
}