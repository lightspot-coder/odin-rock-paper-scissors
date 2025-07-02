function getComputerChoice(){
    
    let randomChoice = Math.floor(Math.random() * 3);
    
    if(randomChoice === 0){
        return "rock";
    }
    else if(randomChoice === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){

    if(gameStop){
        if(!gameStopMessage){
            gameMessage.textContent = gameMessage.textContent + "  THE GAME IS OVER!!!!";
            gameStopMessage = true;
        }
    }
    else{

        if(humanChoice === computerChoice){
            console.log(`Draw! human:${humanChoice} and computer:${computerChoice}`);
            gameMessage.textContent = `Draw! human:${humanChoice} and computer:${computerChoice}`;
            
            
        }
        else{
            if(humanChoice === "rock" && computerChoice === "paper"){            
                console.log(`You lose! paper beats rock, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `You lose! paper beats rock, human:${humanChoice} and computer:${computerChoice}`;
                computerWin++;
                
            
            }
            else if(humanChoice === "rock" && computerChoice === "scissors"){            
                console.log(`You win! rock beat scissors, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `You win! rock beat scissors, human:${humanChoice} and computer:${computerChoice}`;
                humanWin++;
                
            }
            else if(humanChoice === "scissors" && computerChoice === "rock"){            
                console.log(`You lose! rock beats scissors, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `You lose! rock beats scissors, human:${humanChoice} and computer:${computerChoice}`;
                computerWin++;
            
            }
            else if(humanChoice === "scissors" && computerChoice === "paper"){            
                console.log(`You win! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `You win! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`;
                humanWin++;
                
            }
            else if(humanChoice === "paper" && computerChoice === "scissors"){            
                console.log(`You lose! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `You lose! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`;
                computerWin++;
                
                
            }
            else if(humanChoice === "paper" && computerChoice === "rock"){            
                console.log(`You win! paper beats rock, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `You win! paper beats rock, human:${humanChoice} and computer:${computerChoice}`;
                humanWin++;
                
            }
            else{
                console.log(`Ups! something goes wrong, human:${humanChoice} and computer:${computerChoice}`);
                gameMessage.textContent = `Ups! something goes wrong, human:${humanChoice} and computer:${computerChoice}`;
                computerWin++;
                
            }
            
        }
        rpsContainer.appendChild(gameMessage);

        if(humanWin == 5){
            gameMessage.textContent = "YOU WIN THE GAME!!!!";
            gameStop = true;
        }
        if(computerWin == 5){
            gameMessage.textContent = "YOU LOSE THE GAME!!!!!";
            gameStop = true;
        }
    
    }

    rpsContainer.appendChild(gameMessage);
    score.textContent = `Total Score: Human = ${humanWin} Computer = ${computerWin}`;
    rpsContainer.appendChild(score);
}

const rpsContainer = document.querySelector("#container");
const gameMessage = document.createElement("p");
let humanWin = 0;
let computerWin = 0;
const score = document.createElement("p");
let gameStop = false;
let gameStopMessage = false;

function playGame(){

    const rpsContainer = document.querySelector("#container");
    
    const rockOption = document.createElement("button");
    const paperOption = document.createElement("button");
    const scissorsOption = document.createElement("button");

    rockOption.textContent = "Rock";
    paperOption.textContent = "Paper";
    scissorsOption.textContent = "Scissors";

    rpsContainer.appendChild(rockOption);
    rpsContainer.appendChild(paperOption);
    rpsContainer.appendChild(scissorsOption);

    rockOption.addEventListener("click",() => playRound("rock",getComputerChoice()));
    paperOption.addEventListener("click",() => playRound("paper",getComputerChoice()));
    scissorsOption.addEventListener("click",() => playRound("scissors",getComputerChoice()));


    
    
}

playGame();

