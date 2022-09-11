function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}

// Game rules
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper!'
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
        console.log(playRound(playerSelection.toLowerCase(), computerSelection), `game${i + 1}`);
    }
}

game();
// const playerSelection = prompt('Pick: rock, paper or scissors');
// const computerSelection = getComputerChoice();


// console.log(playRound(playerSelection, computerSelection));



// console.log(computerSelection);