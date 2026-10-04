const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
]; 


// assign element id 

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let curretIndex = 0;
let score = 0;

function startsQuiz(){

    curretIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();   
}


function showQuestion() {
    resetState();
    const current = questions[currentIndex];
    question.textContent = `${currentIndex + 1}. ${current.question}`;

    

}