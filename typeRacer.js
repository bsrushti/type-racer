let interval;
let score = 0;
let index;
let intervalTime = 1000;
let alphabet = "";
let time = 60;
let getRandomNumber = function (max, min) {
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

let startGame = function () {
  interval =
    setInterval(() => {
      alphabet = getRandomNumber(65, 91);
      document.getElementById("letter").innerHTML = alphabet;
      document.getElementById("timer").innerHTML = "Timer 00:" + --time;
      if (isEqualsZero(time)) {
        document.getElementById("letter").innerHTML = "Game Over";
        clearInterval(interval);
      }
    }, intervalTime);
}

let isEqualsZero = function (arg) {
  return arg == 0;
}

let checkInput = function (event) {
  let inputLetter = event.key.toUpperCase();
  if (alphabet == inputLetter) {
    score += 10;
    print(score);
  }
}

let print = function (score) {
  document.getElementById("score").innerHTML = "score : " + score;
}