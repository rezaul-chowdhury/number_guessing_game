let randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".last-result");
const lowOrHighGuesses = document.querySelector(".low-or-high-Guesses");

const guessField = document.querySelector(".guess-field");
const guessSubmit = document.querySelector(".guess-submit");

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess() {
  // this line of code allow the count only number...
  let userGuess = Number(guessField.value);
  guessField.focus();
  // if user guess there 1st guess, then this pice of code will be executed...
  if (guessCount === 1) {
    // guesses paragraph textContent will be 'Previouse guesses'...
    guesses.textContent = "Previous guesses: ";
  }
  // append userGuess onto the guesses paragraph and add space between each guesses shown...
  guesses.textContent = guesses.textContent + userGuess + " ";
  // this will increment by 1 each guesses unti 10 guesses...
  guessCount++;
  // after submiting the each guesess the guessFiled will be celared for next guess...
  guessField.value = "";

  // if user guess currect random number, then this pice of code will be executed...
  if (userGuess === randomNumber) {
    // lastResult paragraph textContent will be this and background color will be green if this statement true...
    lastResult.textContent = "Congratulated! You got it right!";
    lastResult.style.backgroundColor = "green";
    // lowOrHighGuesses paragraph will be empty string if this statement true...
    lowOrHighGuesses.textContent = "";
    setGameOver();
    // else if user can not guess currect random number in 10 turns, then this pice of code will be executed...
  } else if (guessCount === 10) {
    // lastResult paragraph textContent will be '!!!GAME OVER!!!'...
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    // else(means nothing are true from above two statements) lastResult paragraph textContent will be 'Worng' and it's background color will be red ...
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    // if the above else statement is true then and if the uesr guess low number of random number then this code show this massage...
    if (userGuess < randomNumber) {
      lowOrHighGuesses.textContent = "Last guess was too low!";
    }
    // if the above else statement is true and then if the uesr guess high number of random number then this code show this massage...
    if (userGuess > randomNumber) {
      lowOrHighGuesses.textContent = "Last guess was too high!";
    }
  }
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

guessSubmit.addEventListener("click", checkGuess);

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".result-paras p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  guessField.disabled = false;
  guessField.value = "";
  guessField.focus();
  guessSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100 + 1);
  // console.log(randomNumber);
}

// guessSubmit.addEventListener("click", function () {
//   console.log("hello");
// });

// hello
=======
  console.log(resetParas);

  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  guessField.disabled = false;
  guessField.value = "";
  guessField.focus();
  guessSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100 + 1);
  // console.log(randomNumber);
}

// guessSubmit.addEventListener("click", function () {
//   console.log("hello");
// });
>>>>>>> GitHub

// hello
