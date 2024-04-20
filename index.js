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

console.log(getComputerChoice())