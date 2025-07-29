let randomNumber = numbergenrator();
let attempts = 3;

let attempt = document.getElementById('attempt-count');
attempt.textContent = `Attempts Remaining: ${attempts}`;

function numbergenrator() {
  return Math.floor(Math.random() * 10) + 1;
}

document.getElementById("guessButton").addEventListener("click", guessGame);
document.getElementById("tryagain").addEventListener("click", reset);

function guessGame() {
  let userInput = document.getElementById("guessInput");
  let guessValue = parseInt(userInput.value.trim());
  let message = document.getElementById("message");

  if (isNaN(guessValue)) {
    message.textContent = "Please Enter a valid number";
    message.style.color = "red";
    return;
  }

  if (guessValue === randomNumber) {
    message.textContent = `Correct 🎉 The number was ${randomNumber}`;
    message.style.color = "green";
    playCorrectSound();
    disableGame();
    return;
  }

  // Wrong guess
  if (guessValue < randomNumber) {
    message.textContent = "Your guess was less than the targeted number";
    message.style.color = "orange";
  } else {
    message.textContent = "Your guess was greater than the targeted number";
    message.style.color = "red";
  }

  playWrongSound();
  attempts--;
  attemptsUpdate();

  if (attempts === 0) {
    message.textContent = `Attempts expired. The target number was ${randomNumber}`;
    message.style.color = "red";
    disableGame();
  }
}

function attemptsUpdate() {
  const attemptCount = document.getElementById("attempt-count");
  attemptCount.textContent = `Attempts Remaining: ${attempts}`;
}

function disableGame() {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("guessButton").disabled = true;
}

function reset() {
  randomNumber = numbergenrator();
  attempts = 3;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessButton").disabled = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempt-count").textContent = `Attempts Remaining: ${attempts}`;
}

function playCorrectSound() {
  const sound = document.getElementById("correctSound");
  sound.currentTime = 0;
  sound.play();
}

function playWrongSound() {
  const sound = document.getElementById("wrongSound");
  sound.currentTime = 0;
  sound.play();
}
