const questions = [
    {
        question: "Who invented Java Programming?",
        answer: [
            { text: "Guido van Rossum", correct: false },
            { text: " James Gosling", correct: true },
            { text: "Dennis Ritchie", correct: false },
            { text: "Bjarne Stroustrup", correct: false },
        ]
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        answer: [
            { text: "JRE", correct: false },
            { text: "JIT", correct: false },
            { text: "JDK", correct: true },
            { text: "JVM", correct: false },
        ]
    },
    {
        question: "Which one of the following is not a Java feature?",
        answer: [
            { text: "Object-oriented", correct: false },
            { text: "Use of pointers", correct: true },
            { text: "Portable", correct: false },
            { text: "Dynamic and Extensible", correct: false },
        ]
    },
    {
        question: "Which of the following is not an OOPS concept in Java?",
        answer: [
            { text: "Polymorphism", correct: false },
            { text: "Inheritance", correct: false },
            { text: "Compilation", correct: true },
            { text: "Encapsulation", correct: false },
        ]
    },
    {
        question: "Which of the following is a superclass of every class in Java?",
        answer: [
            { text: "ArrayList", correct: false },
            { text: "Abstract class", correct: false },
            { text: "Object class", correct: true },
            { text: "String", correct: false },
        ]
    },

];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();