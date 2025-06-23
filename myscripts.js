//console.log("Hello, World!");

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


// 0 is a draw or fault
// 1 human win
// 2 computer win

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    
    if(humanChoice === computerChoice){
        console.log(`Draw! human:${humanChoice} and computer:${computerChoice}`);
        return 0;
        
    }
    else{
        if(humanChoice === "rock" && computerChoice === "paper"){            
            console.log(`You lose! paper beats rock, human:${humanChoice} and computer:${computerChoice}`);
            return 2;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){            
            console.log(`You win! rock beat scissors, human:${humanChoice} and computer:${computerChoice}`);
            return 1;
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){            
            console.log(`You lose! rock beats scissors, human:${humanChoice} and computer:${computerChoice}`);
            return 2;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){            
            console.log(`You win! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`);
            return 1;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){            
            console.log(`You lose! scissors beats paper, human:${humanChoice} and computer:${computerChoice}`);
            return 2;
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){            
            console.log(`You win! paper beats rock, human:${humanChoice} and computer:${computerChoice}`);
            return 1;
        }
        else{
            console.log(`Ups! something goes wrong, human:${humanChoice} and computer:${computerChoice}`);
            return 0;
        }
        
    }

}

function playGame(){


    let totalHumanScore = 0;
    let totalComputerScore = 0;

    let roundWinner = 0;

    // 1 round
    console.log("Round 1");
    let computerSelection = getComputerChoice();
    console.log("This is the random computer choice: " + computerSelection);

    let humanSelection = getHumanChoice();
    console.log("This is the human choice: " + humanSelection);

    roundWinner = playRound(humanSelection,computerSelection);

    if(roundWinner === 1){
        totalHumanScore = ++totalHumanScore;
    }
    else if(roundWinner === 2){
        totalComputerScore = ++totalComputerScore;
    }

    // 2 round
    console.log("Round 2");
    computerSelection = getComputerChoice();
    console.log("This is the random computer choice: " + computerSelection);

    humanSelection = getHumanChoice();
    console.log("This is the human choice: " + humanSelection);

    roundWinner = playRound(humanSelection,computerSelection);

    if(roundWinner === 1){
        totalHumanScore = ++totalHumanScore;
    }
    else if(roundWinner === 2){
        totalComputerScore = ++totalComputerScore;
    }

    // 3 round
    console.log("Round 3");
    computerSelection = getComputerChoice();
    console.log("This is the random computer choice: " + computerSelection);

    humanSelection = getHumanChoice();
    console.log("This is the human choice: " + humanSelection);

    roundWinner = playRound(humanSelection,computerSelection); 

    if(roundWinner === 1){
        totalHumanScore = ++totalHumanScore;
    }
    else if(roundWinner === 2){
        totalComputerScore = ++totalComputerScore;
    }

    // 4 round
    console.log("Round 4");
    computerSelection = getComputerChoice();
    console.log("This is the random computer choice: " + computerSelection);

    humanSelection = getHumanChoice();
    console.log("This is the human choice: " + humanSelection);

    roundWinner = playRound(humanSelection,computerSelection);

    if(roundWinner === 1){
        totalHumanScore = ++totalHumanScore;
    }
    else if(roundWinner === 2){
        totalComputerScore = ++totalComputerScore;
    }

    // 5 round
    console.log("Round 5");
    computerSelection = getComputerChoice();
    console.log("This is the random computer choice: " + computerSelection);

    humanSelection = getHumanChoice();
    console.log("This is the human choice: " + humanSelection);

    roundWinner = playRound(humanSelection,computerSelection); 

    if(roundWinner === 1){
        totalHumanScore = ++totalHumanScore;
    }
    else if(roundWinner === 2){
        totalComputerScore = ++totalComputerScore;
    }

    // who win

    console.log("Total Score:");
    console.log(`Human: ${totalHumanScore}`);
    console.log(`Computer: ${totalComputerScore}`);
    if(totalHumanScore > totalComputerScore){
        console.log("Human Win!!!!!!!!");
    }
    else if(totalComputerScore > totalHumanScore){
        console.log("Machine Win!!!!!!!!");
    }
    else{
        console.log("Draw!!!!!!!");
    }
    
}

playGame();
