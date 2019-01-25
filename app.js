// Strict mode provides assurance against global variables
"use strict";

/* Initialize key variables (Caching the DOM - storing these variables for performance boost) */

//Use 'let' to initialize these variables because we want their value to be dymanic and not fixed
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const board_section = document.querySelector(".border");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//Letter to Word Converter
function wordConverter(letter) {
  if (letter === "r") return "Rock";
  if (letter === "r") return "Rock";
  return "Scissors";
}

//Computer Choice AI using Math.random method
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_img = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  //Use template literals or string literals for embedded expressions.
  result_p.innerHTML = `
   ${wordConverter(userChoice)}${smallUserWord} 
    beats 
   ${wordConverter(computerChoice)}${smallCompWord} 
    You win!`;
  //classList and setTimeOut method
  userChoice_img.classList.add("green-glow");
  setTimeout(() => userChoice_img.classList.remove("green-glow"), 500);
}
function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_img = document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `
     ${wordConverter(userChoice)}${smallUserWord} 
      loses to <br>
     ${wordConverter(computerChoice)}${smallCompWord} 
      Your a loser!!! 💩💩💩`;
  userChoice_img.classList.add("red-glow");
  setTimeout(() => userChoice_img.classList.remove("red-glow"), 500);
}
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_img = document.getElementById(userChoice);
  result_p.innerHTML = `sighs... There needs to be a winner or loser...!!! 💩💩💩`;
  userChoice_img.classList.add("gray-glow");
  setTimeout(() => userChoice_img.classList.remove("gray-glow"), 500);
}

//Switch Statement for game logic and all possible outcomes
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "pr":
    case "sp":
    case "rs":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

//Event HANDLERS
function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissor_div.addEventListener("click", () => game("s"));
}

main();
