function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}

// Game rules
let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return scoreComputer++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return scorePlayer++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return scorePlayer++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return scoreComputer++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return scoreComputer++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return scorePlayer++;
    } else if (playerSelection === computerSelection) {
        return 'Tie!'
    } else {
        return 'Something went wrong!'
    }

}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Pick rock, paper or scissors')
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Game number: ${i + 1}`)
        console.log(`Player picked: ${playerSelection}`);
        console.log(`Computer picked: ${computerSelection}`)

        console.log(`Player score: ${scorePlayer}`);
        console.log(`Computer score: ${scoreComputer}`);
        console.log('***************************')
    }
    if (scorePlayer > scoreComputer) {
        console.log('Player wins the game!');
    } else if (scorePlayer < scoreComputer) {
        console.log(`Computer wins the game!`);
    } else {
        console.log(`It's a tie!`);
    }
}

game();