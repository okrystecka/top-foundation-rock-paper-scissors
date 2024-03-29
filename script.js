const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const LOSE = 'losed'
const WIN = 'win';
const DRAW = 'Draw!';

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    switch (randomValue) {
        case 0:
            return ROCK;
            break;
        case 1:
            return PAPER;
            break;
        case 2:
            return SCISSORS;
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    const player = playerSelection?.toLowerCase(); 
    const comp = computerSelection?.toLowerCase(); 
    if(player === comp) {
        return 0;
    }          
    if(player == ROCK && comp == SCISSORS 
        || player == PAPER && comp == ROCK
        || player == SCISSORS && comp == PAPER) {
        return 1;
    }
    return -1;
}

let pointCounter = 0;
const resultOutput = document.querySelector('#result');
resultOutput.textContent = pointCounter;

const buttonContainer = document.querySelector('#buttons');
buttonContainer.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    pointCounter += playRound(playerChoice)
    resultOutput.textContent = pointCounter;
})

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    pointCounter = 0;
    resultOutput.textContent = pointCounter;
})