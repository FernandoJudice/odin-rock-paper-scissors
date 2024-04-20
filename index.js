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

    let result = ""
    let playerNumber = getChoiceNumber(playerSelection);
    let computerNumber = getChoiceNumber(computerSelection);
    
    if (playerSelection === computerSelection) {
        result = "Tie!"
    }

    if (playerNumber - computerNumber === 1 || playerNumber - computerNumber === -2) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerNumber - computerNumber === -1 || playerNumber - computerNumber === 2) {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

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

console.log(playRound("RocK",getComputerChoice()))