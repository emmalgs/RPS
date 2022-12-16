const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choice')

let userChoice
let computerChoice
let result

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor((Math.random() * possibleChoices.length)+1)

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice == userChoice) {
        result = "It's a draw!"
    }
    if(computerChoice == 'rock' && userChoice == 'paper'
        || computerChoice == 'paper' && userChoice == 'scissors'
        || computerChoice == 'scissors' && userChoice == 'rock') {
        result = "you win!"
    }
    if(computerChoice == 'paper' && userChoice == 'rock'
        || computerChoice == 'rock' && userChoice == 'scissors'
        || computerChoice == 'scissors' && userChoice == 'paper') {
        result = "you lose!"
    }
    resultDisplay.innerHTML = result
}