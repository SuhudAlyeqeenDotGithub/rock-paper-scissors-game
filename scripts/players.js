const computerPlay = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return sanitizeChoice(options[randomIndex]);
};
const playerPlay = () => {
  let playerChoice = "";
  playerChoice = validateChoice(playerChoice);
  return playerChoice;
};
