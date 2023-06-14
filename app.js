//const prompt = require("prompt-sync")();

const cpuChoice = document.querySelector(".cpu-choice");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playAgain = document.querySelector(".play-again");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

let userScore = 0;
let cpuScore = 0;
let color = "#f6e938";

function printResult(str) {
    result.textContent = str;
    score.textContent = `${userScore} - ${cpuScore}`;
}

function winCondition() {
    if (userScore === 5 || cpuScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.style.cursor = "default";
        paper.style.cursor = "default";
        scissors.style.cursor = "default";
        playAgain.disabled = false;
        playAgain.style.visibility = "visible";
    }
    
    if (cpuScore == 5) {
        winner.textContent = "I win the match! HAHA!!";
    }
    if (userScore == 5) {
        winner.textContent = "You win the match!! Well played!";
    }
}

function resetGame() {
    userScore = 0;
    cpuScore = 0;
    cpuChoice.textContent = "I choose...";
    result.textContent = "First to Five";
    score.textContent = "0 - 0";
    winner.textContent = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    rock.style.cursor = "pointer";
    paper.style.cursor = "pointer";
    scissors.style.cursor = "pointer";
    playAgain.disabled = true;
    playAgain.style.visibility = "hidden";
}

function colorCycle() {
    if (color == "#f6c338") {
        result.style.color = "#f6e938";
        color = "#f6e938";
    }
    else if (color == "#f6e938") {
        result.style.color = "#adf638";
        color = "#adf638";
    }
    else if (color == "#adf638") {
        result.style.color = "#f6c338";
        color = "#f6c338";
    }
}


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0) {
        cpuChoice.textContent = "I choose Rock!";
        return "rock";
    }
    if (num == 1) {
        cpuChoice.textContent = "I choose Paper!";
        return "paper";
    }
    if (num == 2) {
        cpuChoice.textContent = "I choose Scissors!";
        return "scissors";
    }
}

function playRound(userSel) {
    let user = userSel.toLowerCase();
    let cpu = getComputerChoice();

    if (user == "rock") {
        if (cpu == "rock") {
            return "Tie!";
        }
        if (cpu == "paper") {
            cpuScore++;
            return "You lose! My Paper beats Your Rock.";
        }
        if (cpu == "scissors") {
            userScore++;
            return "You win!! Your Rock beats My Scissors!";
        }
    }

    if (user == "paper") {
        if (cpu == "rock") {
            userScore++;
            return "You win!! Your Paper beats My Rock!";
        }
        if (cpu == "paper") {
            return "Tie!";
        }
        if (cpu == "scissors") {
            cpuScore++;
            return "You lose! My Scissors beats Your Paper.";
        }
    }

    if (user == "scissors") {
        if (cpu == "rock") {
            cpuScore++;
            return "You lose! My Rock beats Your Scissors.";
        }
        if (cpu == "paper") {
            userScore++
            return "You win!! Your Scissors beats My Paper!";
        }
        if (cpu == "scissors") {
            return "Tie!";
        }
    }
}

rock.addEventListener("click", function () { printResult(playRound("rock"));
                                             winCondition();
                                             colorCycle(); });
paper.addEventListener("click", function () { printResult(playRound("paper"));
                                              winCondition();
                                              colorCycle(); });
scissors.addEventListener("click", function () { printResult(playRound("scissors"));
                                                 winCondition();
                                                 colorCycle(); });
playAgain.addEventListener("click", function () { resetGame(); });