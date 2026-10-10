 
const questions = [
    {
        question: "Who has won highest number of ballondor",
        answer: [
            {text:Messi},
        ],
    },

    {
        question: "Who is the current prime minister of Nepal",
        answer: [
            {text:Balendra-Shah},
        ]
    }
]




const question = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");


let currentIndex = 0;
let isAnswerVisible = false;

function startFlashcards (){
     currentIndex = 0;
     isAnswerVisible = false;
     nextButton.textContent = "Next"

} 


function showFlashCards() {
    const current = questions[currentIndex];
     question.textContent = `${curretIndex + 1}. ${current.question}`;
     const answerButtons = document.getElementById("answer");
}



