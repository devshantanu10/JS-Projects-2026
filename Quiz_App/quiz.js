const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;




const questions = [
    {
        question: "What does HTML stand for?", 
        answers: [
            {text: "Hyper Text MarkUp Language" , correct: true},
            { text: "Hyper text Machiner lNaguage", correct: false},
            {text: "Hyper tool multi language" , correct: false },
            {text: "Home Tool Markup Language" , correct: false}
        ]

    },



    {
        question: "which language is used to style a webpage?",
        answers: [
            { text: "HTML" , correct: false},
            { text: "CSS" , correct: true},
            { text: "Javascript" , correct: false},
            { text: "python" , correct: false},
            
        ]
    }
];



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
} 
 
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.clasSList.add("btn");
        answerButtons.appendChild(button);
    });
}



