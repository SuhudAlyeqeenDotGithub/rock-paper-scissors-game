/*
rock wins scissors
scissors wins paper
paper wins rock

*/

const game = () => {
  // add the new round for tracking the number of rounds played
  addToRoundCount();

  // get round count after update
  const roundCount = gameObject.roundCount;

  // stores who goes first in the next round after this current round
  let goesNext = "";

  // determine who goes first in the current round based on gameObject.goesFirst
  if (gameObject.goesFirst === "Player") {
    // since the player goes first this round, the computer will go first in the next round
    goesNext = "Computer";

    alert(`Rock-Paper-Scissors Round ${roundCount} starts 🚀:
      \nYou go first 🙍‍♂️`);

    // get the player's choice first since the player goes first this round
    const playerChoice = playerPlay();

    // get the computer's choice after the player has made their choice
    const computerChoice = computerPlay(gameObject.options);

    // play the round with the choices and determine the result
    const roundResult = playRound(computerChoice, playerChoice);

    // handle the result of the round and update the game state accordingly
    afterRound(roundResult, computerChoice, playerChoice, goesNext);
  }

  // if the computer goes first in the current round
  else {
    // since the computer goes first this round, the player will go first in the next round
    goesNext = "Player";

    alert(`Rock-Paper-Scissors Round ${roundCount} starts 🚀:
      \nComputer goes first 🤖`);

    // get the computer's choice since the computer goes first this round
    const computerChoice = computerPlay(gameObject.options);

    // get the player's choice after the computer has made its choice
    const playerChoice = playerPlay();

    // play the round with the choices and determine the result
    const roundResult = playRound(computerChoice, playerChoice);

    // handle the result of the round and update the game state accordingly
    afterRound(roundResult, computerChoice, playerChoice, goesNext);
  }
};

window.game = game;
let isAffirmative = false;

function instructionMessage() {
  console.log("Rock Paper Scissors Game");

  console.log(
    "How to Play\n\n" +
    "You will play against the computer in a series of rounds.\n\n" +
    "Each round, you and the computer choose Rock, Paper, or Scissors.",
  );

  alert(
    "Rock Paper Scissors Game\n\n" +
    "How to Play\n\n" +
    "You will play against the computer in a series of rounds.\n\n" +
    "Each round, you and the computer choose Rock, Paper, or Scissors.",
  );

  console.log(
    "Game Rules\n\n" +
    "Rock beats Scissors.\n" +
    "Scissors beats Paper.\n" +
    "Paper beats Rock.\n\n" +
    "If both players choose the same option, the round is a draw.",
  );

  alert(
    "Game Rules\n\n" +
    "Rock beats Scissors.\n" +
    "Scissors beats Paper.\n" +
    "Paper beats Rock.\n\n" +
    "If both players choose the same option, the round is a draw.",
  );

  console.log(
    "Winning the Game\n\n" +
    "The rounds continue until either the player or computer wins 3 rounds.\n\n" +
    "The winner of the game is the one who wins 3 rounds first.\n\n" +
    "Whoever goes first in the current round will also go second in the next round.",
  );

  alert(
    "Winning the Game\n\n" +
    "The rounds continue until either the player or computer wins 3 rounds.\n\n" +
    "The winner of the game is the one who wins 3 rounds first.\n\n" +
    "Whoever goes first in the current round will also go second in the next round.",
  );

  console.log(
    "Start the Game\n\n" +
    "You can start the game by opening your browser's Developer Tools and going to the Console tab.\n\n" +
    "You can also open Developer Tools by pressing F12.\n\n" +
    "Once you are in the Console, type:\n\n" +
    "game()\n\n" +
    "Then press Enter to start the game.",
  );

  isAffirmative = confirm(
    "Start the Game\n\n" +
    "You can start the game by opening your browser's Developer Tools and going to the Console tab.\n\n" +
    "You can also open Developer Tools by pressing F12.\n\n" +
    "Once you are in the Console, type:\n\n" +
    "game()\n\n" +
    "Then press Enter to start the game.",
  );
  if (isAffirmative) {game()}
}

instructionMessage();