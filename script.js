function getComputerChoice(){
    return Math.floor(Math.random() * 2); 
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection)
    {
        //rock
        case 0:
            if(computerSelection == 0)
                return "Tie! Rock ties Rock";
            else if(computerSelection == 1)
                return "You Lose! Paper beats Rock";
            else
                return "You Won! Rock beats Scissor";

            break;
        //paper
        case 1:
            if(computerSelection == 1)
                return "Tie! Paper ties Paper";
            else if(computerSelection == 2)
                return "You Lose! Scissor beats Paper";
            else
                return "You Won! Paper beats Rock";

            break;
        //scissor
        case 2:
            if(computerSelection == 2)
                return "Tie! Scissor ties Scissor";
            else if(computerSelection == 0)
                return "You Lose! Rock beats Scissor";
            else
                return "You Won! Scissor beats Paper";
            break;
        default:
            return "Tie!"
    }
}

function game(){
    for(let i=0;i<5;i++)
    {
        let choice = prompt("Enter Choice: ");
        playRound()
    }
}

