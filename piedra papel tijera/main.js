const OPTIONS = ["✊", "✋", "✂️"];
let playerScore = 0;
let computerScore = 0;

function randomize() {
    return Math.floor(Math.random() * 3)
};

function game(playerChoice) {
    computerChoice = OPTIONS[randomize()];

    let resultContainer = document.getElementById("container-result");
    resultContainer.innerHTML = "";

    let userChoiceHeader = document.createElement("p");
    userChoiceHeader.textContent = "Tu elección: " + playerChoice;
    resultContainer.appendChild(userChoiceHeader);

    let computerChoiceHeader = document.createElement("p");
    computerChoiceHeader.textContent = "Elección de la computadora: " + computerChoice;
    resultContainer.appendChild(computerChoiceHeader);

    let gameResultHeader = document.createElement("h4");
    let gameResultText = "";

    if (playerChoice === computerChoice) {
      gameResultText = "¡Es un empate!";
    } else if (
      (playerChoice === "✊" && computerChoice === "✂️") ||
      (playerChoice === "✋" && computerChoice === "✋") ||
      (playerChoice === "✂️" && computerChoice === "✊")
    ) {
      gameResultText = "Tú ganas. ¡Felicidades!";
      playerScore++;
    } else {
      gameResultText = "La computadora gana. ¡Inténtalo de nuevo!";
      computerScore++;
    }

    gameResultHeader.textContent = gameResultText;
    resultContainer.appendChild(gameResultHeader);

    if (playerScore === 3 || computerScore === 3) {
      let finalResultHeader = document.createElement("h2");
      finalResultHeader.textContent = playerScore === 3 ? "¡Ganaste el juego!" : "¡La computadora ganó el juego!";
      resultContainer.appendChild(finalResultHeader);

      let buttons = document.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
}
