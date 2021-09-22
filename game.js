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
        return [0, `The round is a DRAW: 
        Player Selection: ${playerSelection}
        Computer Selection: ${computerSelection}.`];
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
        default:
            result =  2;
            break;
    }

    
    if(result === 1){
        return [result, `You LOSE this round, the Computer WINS: 
        Player Selection: ${playerSelection}
        Computer Selection: ${computerSelection}.`];
    }else{
        return [result, `You WIN this round, the Computer LOSES: 
        Player Selection: ${playerSelection}
        Computer Selection: ${computerSelection}.`];
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let outcome;
    let playerMove, computerMove;
    for(let i = 0; i < 5; i++){
        playerMove = prompt("Enter your selection: ").toLowerCase();
        computerMove = computerPlay();
        outcome = playRound(computerMove, playerMove);
        switch(outcome[0]){
            case 0:
                break;
            case 1:
                computerScore++;
            case 2:
                playerScore++;
        }
        console.log(outcome[1]);
        console.log( `
        Player..........${playerScore}
        Computer..........${computerScore}
        `);
    }

    if(playerScore === computerScore){
        console.log(`The game ends in a DRAW: 
        Player Score: ${playerScore}
        computerScore: ${computerScore}`);
    }else if(playerScore > computerScore){
        console.log(`You WIN the game: 
        Player Score: ${playerScore}
        computerScore: ${computerScore}`);
    }else {
        console.log(`You LOSE the game: 
        Player Score: ${playerScore}
        computerScore: ${computerScore}`);
    }
}

game();