const addToRoundCount = (count = 1) => {
  gameObject.roundCount += count;
};

const winnerAvailable = () => {
  const { player, computer } = gameObject.score;
  return player === 3 || computer == 3;
};
const determineGameWinner = () => {
  const computerScore = gameObject.score.computer;
  const playerScore = gameObject.score.player;
  if (computerScore > playerScore) {
    return "Computer wins";
  } else {
    return "You win";
  }
};

const getScoreReport = () => {
  const computerScore = gameObject.score.computer;
  const playerScore = gameObject.score.player;
  return `Score Board 🎰: You 🙍‍♂️: ${playerScore} <|> Computer 🤖: ${computerScore}`;
};

const endGame = () => {
  alert(`Game ended 🚫: No winner
    \n${getScoreReport()}`);
  resetGameObject();
  throw new Error("Game Ended No Winner");
};
