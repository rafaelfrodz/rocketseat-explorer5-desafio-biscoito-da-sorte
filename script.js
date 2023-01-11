// Variaveis do projeto:

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const positiveMessages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Pensamento positivo e atitudes vencedoras; quando você une estes dois elementos nada é capaz de ficar entre você e os seus objetivos.",
    "Acredite em você, trabalhe com empenho e dedique-se aos seus sonhos. Estas são as regras da prosperidade.",
    "Ainda que outros duvidem, você conhece realmente seu valor e não deve desistir até conquistar suas metas."
]


// Callbacks:
screen1.querySelector(".screen1 img").addEventListener('click', generateMessage)
screen2.querySelector(".screen2 button").addEventListener('click', homeScreen)


//Funções:
function generateMessage () {
    resetScreens()
    let message = positiveMessages[Math.floor((Math.random() * positiveMessages.length))]
    screen2.querySelector(".card p").innerText = message
}

function homeScreen() {
    resetScreens()
}

function resetScreens (){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}