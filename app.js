function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'ROCK';
    } else if (choice === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function getHumanChoice() {
    let choice = prompt('SELECT ROCK, PAPER, OR SCISSORS');
    choice = choice.toUpperCase();
    if (choice == 'ROCK') {
        return 'ROCK';
    } else if (choice == 'PAPER') {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('TIE!', humanChoice,'CANCELS OUT', computerChoice);
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        console.log('WIN! ROCK BEATS SCISSORS');
        humanScore++;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        console.log('WIN! SCISSORS BEATS PAPER');
        humanScore++;
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        console.log('WIN! PAPER BEATS ROCK');
        humanScore++;
    }  else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        console.log('LOSE! PAPER LOSES TO SCISSORS');
        computerScore++;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        console.log('LOSE! SCISSORS LOSES TO ROCK');
        computerScore++;
    } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        console.log('LOSE! ROCK LOSES TO PAPER');
        computerScore++;
    } 
}

for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

if (humanScore > computerScore) {
    console.log('YOU BEAT THE COMPUTER!!');
} else if (humanScore <computerScore) {
    console.log('YOU LOST TO THE COMPUTER :(');
} else {
    console.log('you and the computer tied, refresh and play again')
}
