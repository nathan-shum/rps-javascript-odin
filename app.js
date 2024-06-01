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

function getHumanChoice(event) {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            return 'ROCK'
        case 'paper':
            return 'PAPER'
        case 'scissors':
            return 'SCISSORS'
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const playerChoice = document.querySelector('#player-choice');
    const comChoice = document.querySelector('#computer-choice');
    playerChoice.textContent = humanChoice;
    comChoice.textContent = computerChoice

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
    const hscore = document.querySelector('#player-score');
    hscore.textContent = humanScore
    const cscore = document.querySelector('#computer-score');
    cscore.textContent = computerScore
}

const menu = document.querySelector(".button-wrapper");
let rounds = 5;
menu.addEventListener('click', (event) => {
    if (rounds === 0) {
        endgame()
    }
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    rounds--;
})

function endgame() {
    const end = document.createElement("div");
    if (humanScore > computerScore) {
        end.textContent = 'YOU BEAT THE COMPUTER!!'
    } else if (humanScore <computerScore) {
        end.textContent = 'YOU LOST TO THE COMPUTER :('
    } else {
        end.textContent = 'you and the computer tied, refresh and play again'
    }
    const body = document.querySelector("body");
    body.appendChild(end);
    document.querySelectorAll(".button-wrapper button").forEach(button => {
        button.disabled = true;
    });    
}

