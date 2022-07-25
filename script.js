"use strict";
let pcScore = 0;
let userScore = 0;
let pcChoice;
let userChoice;

//USER CHOICE
let promptUser = function () {
  userChoice = prompt("Rock, paper or scissors?").toLowerCase();
  while (
    // originally used short-circuiting here, made more sense to use while loop
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    console.log("I don't know that!");
    promptUser(); // If userchoice is not r/p/s, promptUser again;
  }
};

//WINNING FUNCTIONALITY
let win = function () {
  ++userScore;
  console.log(`----------------------------------------`);
  console.log(`PC picked ${pcChoice}, you win!`);
  console.log(`USER: ${userScore} --------- PC: ${pcScore}`);
  console.log(`----------------------------------------`);
};

let lose = function () {
  ++pcScore;
  console.log(`----------------------------------------`);
  console.log(`PC picked ${pcChoice}, you lose!`);
  console.log(`USER: ${userScore} --------- PC: ${pcScore}`);
  console.log(`----------------------------------------`);
};

let draw = function () {
  console.log(`----------------------------------------`);
  console.log(`PC picked ${pcChoice}, draw!`);
  console.log(`USER: ${userScore} --------- PC: ${pcScore}`);
  console.log(`----------------------------------------`);
};

//COMPUTER CHOICE
let computerChoice = function () {
  const pcList = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  pcChoice = pcList[randNum];
};

let playRound = function () {
  promptUser();
  computerChoice();
  switch (userChoice + pcChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      break;
  }
};

//PLAYS ROUNDS AND PICKS WINNER AT END
let game = function () {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (userScore > pcScore) {
    console.log(`YOU WIN! USER: ${userScore} vs. PC: ${pcScore}`);
  } else if (pcScore > userScore) {
    console.log(`YOU LOSE! USER: ${userScore} vs. PC: ${pcScore}`);
  } else if (pcScore === userScore) {
    console.log(`YOU DRAW! USER: ${userScore} vs. PC: ${pcScore}`);
  }
};

game();
