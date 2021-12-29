function getRandomInt(min, max){
    let temp = min + Math.floor(Math.random() * (max - min + 1));
    return temp;
}

function computerPlay(){
    let choice = getRandomInt(0, 2); // rock, paper, scissors are 0, 1, 2 respectively.

    let selection;
    switch(choice){
        case 0:
            selection = "rock";
            break;
        case 1:
            selection = "paper";
            break;
        case 2:
            selection = "scissors";
            break;
    }
    return selection;
}


function playRound(computerSelection, playerSelection){
    // draw, computer wins, you win, are 0, 1, 2, respectively.
    if(computerSelection === playerSelection){
        return 0;
    }

    let result;
    switch(computerSelection){
        case "rock": 
            result = playerSelection === "scissors" ? 1 : 2;
            break;
        case "paper":
            result = playerSelection === "rock" ? 1 : 2;
            break;
        case "scissors":
            result = playerSelection === "paper" ? 1 : 2;
            break;
    }

    
    return result;
}