const opts = ["scissors", "paper", "rock"];

function getComputerChoice() {
    const i = Math.floor(Math.random() * 3);
    return opts[i];
}

function getHumanChoice() {
    return prompt("What is your choice?").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("You tied!");
            return;
        }

        const wins = {
            rock: "scissors",
            scissors: "paper",
            paper: "rock",
        };
        if (wins[humanChoice] === computerChoice) {
            humanScore++;
            console.log(
                `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`
            );
        } else {
            computerScore++;
            console.log(
                `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`
            );
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore)
        console.log(`You tied with ${humanScore} points each!`);
    else {
        humanScore > computerScore
            ? console.log(
                  `You won with ${humanScore} points to ${computerScore}`
              )
            : console.log(
                  `You lost with ${humanScore} points to ${computerScore}`
              );
    }
}
playGame();
