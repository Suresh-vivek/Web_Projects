/*document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  // when there is no guess
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number';
    displayMessage("No Number");
  }

  // when player wins
  else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = 'Correct Guess';
    displayMessage("Correct Guess");

    //implementing CSS changes
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }

  // when number differs
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        secretNumber < guess ? "Too high" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  // when guess is too high
  //   else if (secretNumber < guess) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //When guess is too low
  //   else if (secretNumber > guess) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  //document.querySelector('.message').textContent = 'Start Guessing....';
  displayMessage("Start Guessing....");

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = highscore;
});
