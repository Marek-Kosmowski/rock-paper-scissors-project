const buttons = document.querySelectorAll('.btn');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}

// Game rules
let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('comp won'), scoreComputer++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('player won'), scorePlayer++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('player won'), scorePlayer++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('comp won'), scoreComputer++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('comp won'), scoreComputer++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('player won'), scorePlayer++;
    } else if (playerSelection === computerSelection) {
        console.log('Tie!')

    } else {
        console.log()
        'Something went wrong!'
    }

}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Pick rock, paper or scissors')
//         let computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(`Game number: ${i + 1}`)
//         console.log(`Player picked: ${playerSelection}`);
//         console.log(`Computer picked: ${computerSelection}`)

//         console.log(`Player score: ${scorePlayer}`);
//         console.log(`Computer score: ${scoreComputer}`);
//         console.log('***************************')
//     }
//     if (scorePlayer > scoreComputer) {
//         console.log('Player wins the game!');
//     } else if (scorePlayer < scoreComputer) {
//         console.log(`Computer wins the game!`);
//     } else {
//         console.log(`It's a tie!`);
//     }
// }


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.value);
    })
})