const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

loadQuestion();

function loadQuestion() {
    resetOptions();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });

    prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Submit" : "Next";
}

function resetOptions() {
    optionsContainer.innerHTML = "";
}

function selectOption(option) {
    questions[currentQuestionIndex].selected = option;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateScore();
        displayScore();
    }
}


function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function calculateScore() {
    score = questions.reduce((total, question) => {
        return total + (question.selected === question.answer ? 1 : 0);
    }, 0);
}

function displayScore() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    scoreContainer.innerHTML = <h2>Your Score: ${score}/${questions.length}</h2>;
}
function selectOption(option) {
    questions[currentQuestionIndex].selected = option;

    Array.from(optionsContainer.children).forEach(child => {
        child.classList.remove("selected");
    });

    event.target.classList.add("selected");
}