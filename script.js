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

function getComputerChoice(choices){
    console.log("Enter Your Choice(0, 1 or 2):");
    console.log(" 1. For Rock \n 2. For Paper \n 3. For Scissor");
    console.log("Your choice: ");
}


function main(){
    
    let gameTime = 10;
    let userPoints = 0;
    let computerPoints = 0;

    let finalWinner;
    
    const choices = ['rock', 'paper', 'scissor'];

    while(gameTime--){
        
        const computerChoice = getComputerChoice(choices);
        const userChoice = getUserChoice(choices);
        let winner = calculateWinner(computerChoice, userChoice);
        
        // points calculation
        (winner === 0)?computerPoints++:userPoints++;
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

main();
