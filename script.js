const buttons = document.querySelectorAll('.btn');
const winner = document.querySelector('.winner');
const playAgainBtn = document.querySelector('.btn-again');

let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}
//Keeping score
let scorePlayer = 0;
let scoreComputer = 0;


function playRound(playerSelection) {

    computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore.textContent = `${scoreComputer +=1}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore.textContent = `${scorePlayer+=1}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore.textContent = `${scorePlayer+=1}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore.textContent = `${scoreComputer +=1}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore.textContent = `${scoreComputer +=1}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore.textContent = `${scorePlayer+=1}`;
    } else if (playerSelection === computerSelection) {
        console.log('Tie!')

    }
    console.log(`player picked: ${playerSelection} and computer picked: ${computerSelection}`)
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.value);
        if (scorePlayer == 5) {
            winner.textContent = 'Player is the winner!';
            buttons.forEach(el => {
                el.disabled = true;
            })
        } else if (scoreComputer == 5) {
            winner.textContent = 'Computer is the winner!';
            buttons.forEach(el => {
                el.disabled = true;
            })
        }

    })
})



function playAgain() {
    scorePlayer = 0;
    scoreComputer = 0;
    playerScore.textContent = '';
    computerScore.textContent = '';
    winner.textContent = '';
    buttons.forEach(el => {
        el.disabled = false;
    })
}



playAgainBtn.addEventListener('click', playAgain);