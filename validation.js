const sanitizeChoice = (choice) => {
  if (choice === null) {
    return null;
  }

  if (choice === "") {
    return "";
  }
  return choice.trim().toLowerCase();
};

const validateChoice = (choice) => {
  // if the choice is null - meaning player clicks cancel

  if (choice === null) {
    endGame();
  }

  let playerChoice = sanitizeChoice(choice);

  //  if the choice is empty string - meaning player clicks ok with empty input or it is the first attempt
  if (playerChoice === "") {
    const input = prompt("please enter an option");
    playerChoice = validateChoice(input);
  }

  //   check if player choice is allowed
  if (!gameObject.options.includes(playerChoice)) {
    const input = prompt(
      "please enter choices between rock paper and scissors",
    );
    playerChoice = validateChoice(input);
  }

  return playerChoice;
};
