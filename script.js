// keep track of stats

const stats = {
    wins: 0,
    losses: 0,
    ties: 0,
    picks: {
      rock: 0,
      paper: 0,
      scissors: 0,
    }
  }
  
  const playRPS = function () {
  //   ask the user for an input
  
    const userChoice = prompt("Choose R, P, or S");
  
  
    const choices = ["R", "P", "S"];
  
  
    if (!userChoice) {
      // once return is hit, nothing else in the function will run
      // exit early
      return;
    }
  
    alert(`You chose ${userChoice.toUpperCase()}`);
  
  //  keep track of user picks
    if (userChoice.toUpperCase() === "R") {
      stats.picks.rock++;
    } else if (userChoice.toUpperCase() === "P") {
      stats.picks.paper++;
    } else {
      stats.picks.scissors++;
    }
  
  
  //  Check if the users choice is valid
    if (choices.includes(userChoice.toUpperCase())) {
      //   if valid, make computer roll and then compare who wins
      const computerRoll = Math.round(Math.random() * 2) // generates a random number between 0 and 2
  
  
      const computerChoice = choices[computerRoll];
  
      alert(`Computer chose ${computerChoice}`);
  
      // compare choices
      //   check winning conditions first
      if (
        (userChoice.toUpperCase() === "R" && computerChoice === "S") ||
        (userChoice.toUpperCase() === "P" && computerChoice === "R") ||
        (userChoice.toUpperCase() === "S" && computerChoice === "P")
      ) {
        alert("You win")
        stats.wins++;
      } else if (
        (userChoice.toUpperCase() === "R" && computerChoice === "P") ||
        (userChoice.toUpperCase() === "P" && computerChoice === "S") ||
        (userChoice.toUpperCase() === "S" && computerChoice === "R")
      ) {
        alert("You lose")
        stats.losses++;
      } else {
        alert("It's a tie")
        stats.ties++;
      }
    } else {
      // user choice is invalid, play again
      alert("Invalid choice, try again");
      playRPS();
    }
  
    // ask if they want to play again
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      playRPS();
    } else {
      alert(`
      Record: 
      Wins: ${stats.wins}
      Losses: ${stats.losses}
      Ties: ${stats.ties}
      
      Picks:
      Rock: ${stats.picks.rock}
      Paper: ${stats.picks.paper}
      Scissors: ${stats.picks.scissors}
    `);
  
    }
  }
  
  
  playRPS();