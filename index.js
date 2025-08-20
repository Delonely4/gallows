console.log("Виселица");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretWord = "порка";
const secretWordArr = secretWord.split("");
const guessedWord = new Array(secretWord.length).fill("_");

let hp = 5;
let gameRunning = true;

console.log("==Начать Игру==");
console.log("Угадай слово из ", secretWord.length, "букв.");
console.log("Тебе попалось слово " + guessedWord.join(" "));
console.log("У вас есть ", hp);

function isGuess(letter) {
  let letterFound = false;

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWordArr[i] === letter) {
      guessedWord[i] = letter;
      letterFound = true;
    }
  }

  if (letterFound) {
    console.log(guessedWord.join(" "));
  } else {
    console.log("Неверно!");
    hp--;
    printGallow();
  }
}

function printGallow() {
  console.log("ОШИБКА");
  console.log("Осталось жизней: ", hp);
}

function isGame() {
  if (guessedWord.join("") === secretWord) {
    console.log("Вы выиграли!", "Слово - ", secretWord);
    gameRunning = false;
  }

  if (hp > 0) {
    processStep();
  }

  if (hp <= 0) {
    console.log("Вы проиграли!");
    gameRunning = false;
    rl.close();
  }
}

function processStep() {
  if (gameRunning) {
    rl.question("Введите букву: ", (answer) => {
      console.log(answer);
      const letter = answer;
      isGuess(letter);
      isGame();
    });
  } else {
    rl.close();
  }
}

processStep();
