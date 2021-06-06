let userScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");
main();
function getBotChoice(){
    const choices = ['r', 'p', 's'];
    
    const finalChoice = Math.floor(Math.random()*3);
    return choices[finalChoice];
}
function win(){
    userScore ++;
    playerScore_span.innerHTML = userScore;
    botScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You won";
}
function lost(){
    computerScore++;
    playerScore_span.innerHTML = userScore;
    botScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Bot won";
}
function draw(){
    
    playerScore_span.innerHTML = userScore;
    botScore_span.innerHTML = computerScore;
    result_div.innerHTML = "DRAW";
}


function game(userChoice){
    const computerChoice = getBotChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win();
            break;
        case "sr":
        case "ps":
        case "rp":
            lost();
            break;
        case "rr":
        case "ss":
        case "pp":
            draw();                           

    }

}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
    
}

