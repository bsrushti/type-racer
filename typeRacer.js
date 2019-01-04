let interval;
let score = 100;
let index;
let time = 1000;
let alphabet = "";

let getRandomNumber = function (max, min) {
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

let startGame = function () {
  interval =
    setInterval(() => {
      alphabet = getRandomNumber(65, 91);
      document.getElementById("letter").innerHTML = alphabet;
    }, time);
}

let getInput = function (event) {
  let inputLetter = event.key.toUpperCase();
  if (alphabet == inputLetter) {
    score += 10;
    print(score);
  }
  if (alphabet != inputLetter && score > 0) {
    score -= 10;
    print(score);
  }
}

let print = function (score) {
  if (score == 0) {
    document.getElementById("letter").innerHTML = "Game Over";
    clearInterval(interval);
    score = 0;
  }
  document.getElementById("score").innerHTML = "score : " + score;
}