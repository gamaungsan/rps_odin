const scoreboard = document.getElementById('score');
const cards = document.querySelector('.cards');

let round = 0;
let player = 0;
let computer = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 2); 
}

function winner(play){
    if(round == 5){
        round = 0;
        player = 0;
        computer = 0;
    }

    
    switch(play){
        case 'player':
            player++;
            break;
        case 'computer':
            computer++;
            break;
    }
    console.log(play);
    console.log(player);
    round++;
}

function playRound(playerSelection, computerSelection, winner){
    switch(playerSelection)
    {
        //rock
        case 0:
            if(computerSelection == 0){
                winner('tie');
                return "Tie! Rock ties Rock";
            }
            else if(computerSelection == 1){
                winner('computer');
                return "You Lose! Paper beats Rock";
            }
            else{
                winner('player');
                return "You Won! Rock beats Scissor";
            }

        //paper
        case 1:
            if(computerSelection == 1){
                winner('tie');
                return "Tie! Paper ties Paper";
            }
            else if(computerSelection == 2){
                winner('computer');
                return "You Lose! Scissor beats Paper";
            }
            else{
                winner('player');
                return "You Won! Paper beats Rock";
            }
        //scissor
        case 2:
            if(computerSelection == 2){
                winner('tie');
                return "Tie! Scissor ties Scissor";
            }
            else if(computerSelection == 0){
                winner('computer');
                return "You Lose! Rock beats Scissor";
            }
            else{
                winner('player');
                return "You Won! Scissor beats Paper";
                
            }
        default:
            return "Tie!"
    }
}



cards.addEventListener('click', (event)=> {
    let target = event.target;

    switch(target.id){
        case 'r':
            scoreboard.textContent = "You've selected ROCK!";
            let result = playRound(0, getComputerChoice(), winner);
            setTimeout(() => {
                scoreboard.textContent = result;
            }, 1000);

            setTimeout(() => {
                scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer;
                if(round == 5)
                {
                    if(player > computer)
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Player Wins!';
                    else if(player < computer)
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Computer Wins!';
                    else
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Overall Tie!';

                }
            }, 3000)
            
            break;
        case 'p':
            scoreboard.textContent = "You've selected PAPER!";
            let result1 = playRound(1, getComputerChoice(), winner);
            setTimeout(() => {
                scoreboard.textContent = result1;
            }, 1000);

            setTimeout(() => {
                scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer;
                if(round == 5)
                {
                    if(player > computer)
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Player Wins!';
                    else if(player < computer)
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Computer Wins!';
                    else
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Overall Tie!';

                }
            }, 3000)
            break;
        case 's':
            scoreboard.textContent = "You've selected SCISSORS!";
            let result2 = playRound(2, getComputerChoice(), winner);
            setTimeout(() => {
                scoreboard.textContent = result2;
            }, 1000);

            setTimeout(() => {
                scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer;
                if(round == 5)
                {
                    if(player > computer)
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Player Wins!';
                    else if(player < computer)
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Computer Wins!';
                    else
                        scoreboard.textContent = 'Round ' + round + ": " + player + ' - ' + computer + '. Overall Tie!';

                }
            }, 3000)
            break;
    }
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    round = 0;
    player = 0;
    computer = 0;
    scoreboard.textContent = 'Game Reset!'
});


