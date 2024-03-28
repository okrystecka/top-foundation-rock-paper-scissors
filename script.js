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
        console.log(DRAW);
        return 0;
    }          
    if(player == ROCK && comp == SCISSORS 
        || player == PAPER && comp == ROCK
        || player == SCISSORS && comp == PAPER) {
        console.log(`You ${WIN}! ${player} beats ${comp}!`);
        return 1;
    }
    console.log(`You ${LOSE}! ${comp} beats ${player}!`);
    return -1;
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(prompt("Whats your move?"));
    }
    return 'Your score: ' + score;
}

console.log(playGame());