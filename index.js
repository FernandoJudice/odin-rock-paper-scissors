const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click",() => playRound("rock",getComputerChoice()));
paperButton.addEventListener("click",() => playRound("paper",getComputerChoice()));
scissorsButton.addEventListener("click",() => playRound("scissors",getComputerChoice()));


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*10)%3;
    let choice = ""
    switch (randomNumber){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            console.log("Invalid computer selection");
            break;
    }
    return choice
}

function playRound(playerSelection, computerSelection){

    playerSelection = formatPlayerSelection(playerSelection);

    let result;
    let playerNumber = getChoiceNumber(playerSelection);
    let computerNumber = getChoiceNumber(computerSelection);
    
    if (playerSelection === computerSelection) {
        result = 0
    }

    if (playerNumber - computerNumber === 1 || playerNumber - computerNumber === -2) {
        result = 1
    }

    if (playerNumber - computerNumber === -1 || playerNumber - computerNumber === 2) {
        result = -1;
    }

    showRoundResult(result,playerSelection,computerSelection);
    return result
}

function getChoiceNumber(selection){
    switch (selection){
        case "Rock":
            choice = 0;
            break;
        case "Paper":
            choice = 1;
            break;
        case "Scissors":
            choice = 2;
            break;
        default:
            console.log("Invalid selection");
            break;
    }
    return choice
}

function formatPlayerSelection(selection){
    return selection.at(0).toUpperCase() + selection.slice(1).toLowerCase();
}

function showRoundResult(roundResult,playerSelection,computerSelection){
    switch(roundResult) {
        case -1:
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            break;
        case 0:
            console.log("Tie!");
            break;
        case 1:
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            break;
        default:
            console.log(`invalid match result`)
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let currentRound;
    for(i=0;i<5;i++){
        currentRound = playRound(prompt(),getComputerChoice()) 
        if (currentRound > 0) {
            playerScore++;
        }
        if (currentRound <0) {
            computerScore++;
        }

        console.log(`Player: ${playerScore} Computer: ${computerScore}`)
    }
    if (playerScore == computerScore) {
        console.log("Tie!")
    }
    else if (playerScore > computerScore) {
        console.log("You Win! :)")
    }
    else {
        console.log("You Lose! :(")
    }

}

// playGame()