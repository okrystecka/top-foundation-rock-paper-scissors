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
        return DRAW;
    }          
    if(player == ROCK && comp == SCISSORS 
        || player == PAPER && comp == ROCK
        || player == SCISSORS && comp == PAPER) {
        return `You ${WIN}! ${player} beats ${comp}!`;
    }
    return `You ${LOSE}! ${comp} beats ${player}!`;
}

function playGame() {

}

console.log(playRound('rock'));