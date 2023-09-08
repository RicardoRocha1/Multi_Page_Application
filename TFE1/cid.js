const quizData = [
    {
        question: "Ave Caesar...",
        a: "morituri te salutant",
        b: "Ave Maria",
        c: "e aquele cargo que discutiamos..?",
        d: "Sic semper tyrannis!",
        correct: "c",
    },
    {
        question: "Voltando para Roma você vê um apostolo pregando para as massas. O que você faz?",
        a: "Eu sou o apostolo",
        b: "Me junto ao povo o ouvindo",
        c: "Sigo meu caminho",
        d: "O denuncio ao pontifex maximus",
        correct: "d",
    },
    {
        question: "Qual são os maiores inimigos de Roma?",
        a: "Pontus e a provincia de Gallia",
        b: "Parthia e tribos germanicas",
        c: "Os gregos e britões",
        d: "Os egipcios e o reino de Kush",
        correct: "b",
    },
    {
        question: "Qual o significado de S.P.Q.R?",
        a: "Senatus Populusque Romanus",
        b: "Sanctus Populusque Romanus",
        c: "Semper Prosperum Quorum Roma",
        d: "Senatus Prosperum Quorum Romanus",
        correct: "a",
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
const test = 1
 
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
        } 
        else {
            if(test < score) {
                quiz.innerHTML = `
                    <h2>Placar: ${score}/${quizData.length} Cidadania Aprovada. Tempo médio de espera de processamento: 12,5 anos
                    <button onclick="location.reload()">Ir novamente</button>
                    <hr>
                    <button onclick="location.href = './index.html';" id="funciona?" class="float-left submit-button" >Retornar ao portal</button>
                `
            }
            else {
                quiz.innerHTML = `
                    <h2>Placar: ${score}/${quizData.length} Barbaro Imundo
                    <button onclick="location.reload()">Ir novamente</button>
                    <hr>
                    <button onclick="location.href = './index.html';" id="funciona?" class="float-left submit-button" >Retornar ao portal</button>

                `
            }
        }
    }
})