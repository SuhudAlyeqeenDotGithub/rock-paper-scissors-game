let gameObject = {
  options: ["rock", "paper", "scissors"],
  goesFirst: "",
  roundCount: 0,
  score: {
    computer: 0,
    player: 0,
  },
};
const resetGameObject = () => {
  gameObject = {
    options: ["rock", "paper", "scissors"],
    goesFirst: "",
    roundCount: 0,
    score: {
      computer: 0,
      player: 0,
    },
  };
};
