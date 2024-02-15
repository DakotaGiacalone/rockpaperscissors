let userScore = 0
let computerScore = 0

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }
  
  console.log(computerPlay())

  function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore += 1;
        return ("You win! Rock beats scissors");
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return ("You lose! Paper beats rock");
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore += 1;
        return ("You win! Paper beats rock");
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return ("You lose! Scissors beat paper");
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore += 1;
        return ("You win! Scissors beat paper");
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return ("You lose!Rock beats scissors");
      }
    
    }

    function game() {
        for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your move? Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + userScore);
        console.log("Computer: " +computerScore);
    
        }
    }
    

    game();

    if (userScore == computerScore) {
        console.log(`Game Result: Ugh it's a Tie! ${userScore} to ${computerScore}`);
    }
    else if (userScore > computerScore) {
        console.log(`Game Result: Congrats! You win! ${userScore} to ${computerScore}`);
    }
    else {
        console.log(`Game Result: You lose! ${computerScore} to ${userScore}`);
    }