
const questions = [
  {
    question: "Who has won the highest number of Ballon d'Or awards?",
    answer: [{ text: "Lionel Messi" }],
  },
  {
    question: "Who is the current prime minister of Nepal?",
    answer: [{ text: "Balendra Shah" }],
  },
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const showAnswerButton =  document.getElementById("show-answer-btn");

let currentIndex = 0;
let isAnswerVisible = false;

function resetState() {
  answer.textContent = "";
  answer.hidden = true;
  isAnswerVisible = false;
}

function startFlashcards() {
  currentIndex = 0;
  nextButton.textContent = "Next";
  showFlashCards();
}

function showFlashCards() {
  resetState();

  const current = questions[currentIndex];

  question.textContent =
    `${currentIndex + 1}. ${current.question}`;
    nextButton.textContent =
    currentIndex === questions.length - 1 ? "Finish" : "Next";

    prevButton.disabled = currentIndex === 0;
}

startFlashcards();

showAnswerButton.addEventListener("click", () => {
    const current = questions[currentIndex];
    answer.textContent = current.answer[0].text;
    answer.hidden = false;
    currentIndex === questions.length - 1 ? "Finish" : "Next";
});


nextButton.addEventListener("click" , () => {

    if(currentIndex < questions.length - 1){
        currentIndex++;

        showFlashCards();



    }
})

prevButton.addEventListener("click" , () => {
    if( currentIndex > 0){
        currentIndex--;
        showFlashCards();
        
    }
})