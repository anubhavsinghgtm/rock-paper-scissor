/* 

1. computer choice: automatic
2. user choice: input
3. game calculation: win/loss or draw
4. points calculation
5. total gametime
6. quit

*/


function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*3)];
}

function getUserChoice(choices){
    console.log("Enter Your Choice(1, 2, 3 or 0 for quiting):");
    console.log(" 1. For Rock \n 2. For Paper \n 3. For Scissor \n 0. Quit Game" );
    let choice = prompt("Enter your choice: ");
    if(choice == 0){
        console.log("Game Over");
        return 0;
    }
    return choices[choice-1];
}

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




function showResult(winner){
    if(winner == 2)
        console.log("Match is Draw!");
    else if(winner == 1) 
        console.log("You win this round!");
    else
        console.log("Computer wins this round!");
}

async function playGame(gameTime){
    
    let userPoints = 0;
    let computerPoints = 0;

    let finalWinner;
    
    const choices = ['rock', 'paper', 'scissor'];

    while(gameTime--){
        
        const computerChoice = getComputerChoice(choices);
        const userChoice = getUserChoice(choices);
        
        if(userChoice === 0) 
            break;

        let winner = calculateWinner(computerChoice, userChoice);
        
        showResult(winner);
        
        // points updation 
        if(winner == 0) computerPoints++;
        else if(winner == 1) userPoints++;

        console.log("Your Points: " + userPoints + " | Computer Points: " + computerPoints);
        console.log("====================================================");
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // result declaration
    if(userPoints > computerPoints){
        console.log('Hurrah! You have won the match!');
    } 
    else if(computerPoints > userPoints){
        console.log("Alas! You lose the game");
    }
    else{
        console.log("OHH! You played pretty well but Game is Draw");
    }

}
