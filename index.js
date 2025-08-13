console.log("Виселица");
let gameRunning = true;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = ["покой", "голод", "кровопролитный", "талант", "усердие"];
for (let i = 0; i < arr.length; i++) {
  console.log("Слово " + (i + 1) + ": " + arr[i]);
}

function showWord(displayArr) {
  return displayArr.join(" ");
}

function playHangman() {
  console.log("==ИГРА НАЧАЛАСЬ==");
  let randomIndex = Math.floor(Math.random() * arr.length);
  let currentWord = arr[randomIndex];

  let displayWord = [];
  for (let i = 0; i < currentWord.length; i++) {
    displayWord.push("_");
  }

  console.log("Загаданное слово из " + currentWord.length + " букв");
  console.log(showWord(displayWord));
  console.log("Игра окончена");
}

function checkLetter(Letter, word, displayArr) {
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === Letter) {
      displayArr[i] = Letter;
      found = true;
    }
  }
  return found;
}

function startGame() {
  while (gameRunning) {
    console.log("==МЕНЮ==");
    console.log("1. Играть");
    console.log("2. Выйти");

    let choice = "1";

    if (choice === "1") {
      playHangman();
      console.log("Возвращаемся в меню");
      choice = "2";
    }

    if (choice === "2") {
      console.log("До свидания!");
      gameRunning = false;
    }
  }
}
startGame();

//   if (choice === "1") {
//     console.log("Начинаем игру...");
//   } else if (choice === "2") {
//     console.log("До свидания!");
//     gameRunning = false;
//   }
//   const arr = ["покой", "голод", "кровопролитный", "талант", "усердие"];
// }

// console.log("hello world");
// function calculator(a, b, c) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   const d = 5;
//   if (b == "-") {
//     console.log(a - c);
//   }
//   if (b == "+") {
//     console.log(a + c);
//   }
//   if (b == "/") {
//     console.log(a / c);
//   }
//   if (b == "*") {
//     console.log(a * c);
//   }

//   switch (b) {
//     case "+":
//       console.log(a + c);
//       break;
//     case "-":
//       console.log(a - c);
//       break;
//     case "/":
//       console.log(a / c);
//       break;
//     case "*":
//       console.log(a * c);
//       break;
//     default:
//       console.log("not supported");
//   }
// }
// calculator(6, "*", 3);
// const arr = [0, 1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }
// const arr = [];
// for (let i = 0; i < arr.length; i++) {}
// console.log(arr[0]);

// const arr = [0, 1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }
