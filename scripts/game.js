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
