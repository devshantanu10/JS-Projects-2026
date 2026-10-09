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

    {
    question: "Who is trhe best player? ",
    answers: [
      { text: "Messi", correct: true },
      { text: "Ronaldo", correct: false },
      { text: "Zalatan", correct: false },
      { text: "neymar", correct: false },
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
    const current = questions[curretIndex];
    question.textContent = `${curretIndex + 1}. ${current.question}`;

    current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if(answer.correct) button.dataset.correct = "true";
    button.addEventListener("click" , selectAnswer);
    answerButtons.appendChild(button);
})

} 
 
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Disable all buttons + highlight the correct one
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });

    nextButton.style.display = "block";  // show Next btn
}


nextButton.addEventListener("click", () => {
    curretIndex++;
    if (curretIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});


function showScore() {
    resetState();
    question.textContent = `You scored ${score} out of ${questions.length}! 🎉`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";

    nextButton.addEventListener("click", startsQuiz, { once: true });
}

startsQuiz();

function startsQuiz() {
  let currentIndex = 0;
  score = 0;
  nextButton.textContent = "next";
  showQuestion();
}


function showQuestion () {
  resetState();
  const current = questions[curretIndex];
  question.textContent = `${curretIndex + 1} . ${current.question}`

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if(answer.correct) button.dataset.correct = "true";
    button.addEventListener("click" , selectAnswer)
    answerButtons.appendChild(button);



  })
}











