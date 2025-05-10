console.log("Day 07");

function game() {
  const userChoice = prompt("rock, paper or scissors");

  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = options[randomNumber];

  if (userChoice === computerChoice) alert("No winner, play again");

  if (userChoice === "rock") {
    if (computerChoice === "paper") alert("Computer wins");
    else if (computerChoice === "scissors") alert("Player wins");
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") alert("Player wins");
    else if (computerChoice === "scissors") alert("Computer wins");
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") alert("Computer wins");
    else if (computerChoice === "rock") alert("Player wins");
  }

  const newGame = prompt("Want to play again");
  if (newGame === "y") game();
}

game();
