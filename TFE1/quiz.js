const quizData = [
    {
        question: "Qual imperator gladiou no Colisseu?",
        a: "Augustus",
        b: "Caesar",
        c: "Commodus",
        d: "Germanos",
        correct: "c",
    },
    {
        question: "Qual invasor derrubou Roma e se declarou rei da Italia?",
        a: "Chatti",
        b: "Odroacer",
        c: "Marcomanni",
        d: "Arminius",
        correct: "b",
    },
    {
        question: "Qual destes não é um evento romano?",
        a: "Dacialia",
        b: "Vulcanalia",
        c: "Floralia",
        d: "Saturnalia",
        correct: "a",
    },
    {
        question: "Qual o primeiro rei de Roma?",
        a: "Remo",
        b: "Romulus",
        c: "Julius Caesar",
        d: "Roma nunca teve um rei",
        correct: "b",
    },
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Placar: ${score}/${quizData.length}
                <button onclick="location.reload()">Recarregar</button>
                <hr>
                <button onclick="location.href = './index.html';" id="funciona?" class="float-left submit-button" >Retornar ao portal</button>

            `
        }
    }
})