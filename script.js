/* 

1. computer choice: automatic
2. user choice: input
3. game calculation: win/loss or draw
4. points calculation
5. total gametime
6. quit

*/


let playerPoints = 0;
let computerPoints = 0;
let gameScore = 5;


function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*3)];
}

// function getUserChoice(choices){
//     console.log("Enter Your Choice(1, 2, 3 or 0 for quiting):");
//     console.log(" 1. For Rock \n 2. For Paper \n 3. For Scissor \n 0. Quit Game" );
//     let choice = prompt("Enter your choice: ");
//     if(choice == 0){
//         console.log("Game Over");
//         return 0;
//     }
//     return choices[choice-1];
// }

function calculateWinner(computerChoice, userChoice){

    console.log("Your choice: " + userChoice + " | Computer choice: "+ computerChoice);

    // for draw
    if(userChoice == computerChoice ) return 2;

    // for user winner
    if((userChoice == 'rock' && computerChoice == 'scissor') || 
    (userChoice == 'paper' && computerChoice == 'rock') ||
    (userChoice == 'scissor' && computerChoice == 'paper'))
     return 1;

    // for computer winner 
    return 0;
}





function updateResult(winner){
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const currentWinner = document.querySelector(".current-winner");

    if(winner === 0){
        computerPoints++;
        computerScore.innerHTML = computerPoints;
        currentWinner.innerHTML = "Ohh! You lose!";
    }
    else if(winner === 1){
        playerPoints++;
        playerScore.innerHTML = playerPoints;
        currentWinner.innerHTML = "Yeah, You win!";
    }
    else{
        currentWinner.innerHTML = "Haha! You both choose the same"
    }
}


async function showChoices(computerChoice, playerChoice){
    const currentResultSection = document.querySelector(".current-result");
    const playerChoiceEle = document.querySelector(".player-choice");
    const computerChoiceEle = document.querySelector(".computer-choice");
    
    currentResultSection.style.visibility = "visible";
    
    playerChoiceEle.innerHTML = "You: <strong>" + playerChoice + "<strong>";
    computerChoiceEle.innerHTML = "Computer: <strong>" + computerChoice + "<strong>";

    await new Promise(resolve => setTimeout(resolve, 3500));
    currentResultSection.style.visibility = 'hidden';
}


function stopGame(){
    const currentResultSection = document.querySelector(".current-result");
    const gamePlayingSection = document.querySelector(".game-time");
    gamePlayingSection.style.display = "none";
    currentResultSection.style.display = "none"
    
}

function showWinner(winner){
    const finalResultEle = document.querySelector(".final-result");
    finalResultEle.innerHTML = " "+ winner + " wins!!!"
}

async function playGame(userChoice){
    
    let finalWinner;
    
    const choices = ['rock', 'paper', 'scissor'];

    const computerChoice = getComputerChoice(choices);
    
    showChoices(computerChoice, userChoice);

    let winner = calculateWinner(computerChoice, userChoice);
        
    updateResult(winner);

    await new Promise(resolve => setTimeout(resolve, 500));

    if(playerPoints >= 5 || computerPoints >= 5){
        stopGame();
        if(playerPoints > computerPoints){
            showWinner("Hurrah! You");
        }
        else{
            showWinner("Ohh! Computer");
        }
    }

}


// Dom manipulation 

const startBtn = document.querySelector(".start-game-btn");
const startGameSection = document.querySelector(".start-game");

const gamePlayingSection = document.querySelector(".game-time");
const scoreCardSection = document.querySelector(".score-area");

startBtn.addEventListener('click',() => {
    startGameSection.style.display = "none";
    gamePlayingSection.style.display = "flex";
    scoreCardSection.style.display = "block"; 
})