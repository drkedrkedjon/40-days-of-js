// console.log("Day 07");

// function game() {
//   const userChoice = prompt("rock, paper or scissors");

//   const options = ["rock", "paper", "scissors"];
//   let randomNumber = Math.floor(Math.random() * 3);
//   const computerChoice = options[randomNumber];

//   if (userChoice === computerChoice) alert("No winner, play again");

//   if (userChoice === "rock") {
//     if (computerChoice === "paper") alert("Computer wins");
//     else if (computerChoice === "scissors") alert("Player wins");
//   }

//   if (userChoice === "paper") {
//     if (computerChoice === "rock") alert("Player wins");
//     else if (computerChoice === "scissors") alert("Computer wins");
//   }

//   if (userChoice === "scissors") {
//     if (computerChoice === "paper") alert("Computer wins");
//     else if (computerChoice === "rock") alert("Player wins");
//   }

//   const newGame = prompt("Want to play again");
//   if (newGame === "y") game();
// }

// game();

// random number to 10
// prompt user to enter number
// keep track of number of atempt
// compare both numbers and prompt again the user for next one
// keep on going until user hits
// Alert user how did he worked.

let computerNumberChoice = Math.floor(Math.random() * 10) + 1;
console.log(computerNumberChoice);
let userChoiceString = prompt("Enter a number from 1 to 10");
let userChoice = "";
let numberOfAttempts = 0;

function tooSmall() {
  userChoiceString = prompt(
    "Enter new number, your choice number is too SMALL"
  );
  userChoiceString && game();
}

function tooBig() {
  userChoiceString = prompt("Enter new number, your choice number is too BIG");
  userChoiceString && game();
}

function game() {
  console.log(computerNumberChoice);
  userChoice = Number(userChoiceString);
  numberOfAttempts++;

  if (computerNumberChoice === userChoice) {
    alert(`You have guessed the corect NUMBER in ${numberOfAttempts} attempts`);
    computerNumberChoice = Math.floor(Math.random() * 10) + 1;
    userChoiceString = prompt("Enter a number from 1 to 10");
    userChoice = Number(userChoiceString);
    numberOfAttempts = 0;
  }

  if (computerNumberChoice > userChoice) {
    tooSmall();
  }
  if (computerNumberChoice < userChoice) {
    tooBig();
  }
}

game();
