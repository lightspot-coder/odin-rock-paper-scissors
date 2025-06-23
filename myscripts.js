//console.log("Hello, World!");
let humanScore = 0;
let computerScore = 0;


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



function getHumanChoice(){
    let humanChoice = prompt("Enter your choice (rock, paper, scissors): ");
    return humanChoice;
}



function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    
    if(humanChoice === computerChoice){
        console.log(`Draw! human:${humanChoice} and computer:${computerChoice}`);
        
    }
    else{
        if(humanChoice === "rock" && computerChoice === "paper"){            
            console.log(`You lose! paper beats rock, human:${humanChoice} and computer:${computerChoice}`);
            computerScore = ++computerChoice;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){            
            console.log(`You win! rock beat scissors, human:${humanChoice} and computer:${computerChoice}`);
            humanScore = ++humanScore;
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){            
            console.log(`You lose! rock beats scissors, human:${humanChoice} and computer:${computerChoice}`);
            computerScore = ++computerChoice;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){            
            console.log(`You win! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`);
            humanScore = ++humanScore;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){            
            console.log(`You lose! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`);
            computerChoice = ++computerChoice;
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){            
            console.log(`You win! paper beats rock, human:${humanChoice} and computer:${computerChoice}`);
            humanScore = ++humanScore;
        }
        
    }

}


const computerSelection = getComputerChoice();
console.log("This is the random computer choice: " + computerSelection);

const humanSelection = getHumanChoice();
console.log("This is the human choice: " + humanSelection);

playRound(humanSelection,computerSelection);