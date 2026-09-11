const playerWins = () => {
  gameObject.score.player += 1;
  return "You win";
};

const computerWins = () => {
  gameObject.score.computer += 1;
  return "Computer wins";
};

const playRound = (computerSelection, playerSelection) => {
  if (computerSelection === playerSelection) {
    return "Draw";
  }

  if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      return playerWins();
    }

    if (playerSelection === "scissors") {
      return computerWins();
    }
  }

  if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      return computerWins();
    }
    if (playerSelection === "scissors") {
      return playerWins();
    }
  }

  if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      return playerWins();
    }

    if (playerSelection === "paper") {
      return computerWins();
    }
  }
};

const afterRound = (roundResult, computerChoice, playerChoice, goesNext) => {
  const roundsPlayed = gameObject.roundCount;
  alert(`Round ${roundsPlayed} Ends 🚩:
    \nComputer chose 🤖: ${computerChoice} <|> You chose 🙍‍♂️: ${playerChoice}
    \nResult: ${roundResult}
    \n${getScoreReport()}`);

  if (!winnerAvailable()) {
    gameObject.goesFirst = goesNext;
    game();
  } else {
    const gameWinner = determineGameWinner();
    alert(
      `Game Over 🎉🏆: ${gameWinner} after ${roundsPlayed} round${roundsPlayed > 1 ? "s" : ""}
      \n${getScoreReport()}`,
    );
    resetGameObject();
  }
};
