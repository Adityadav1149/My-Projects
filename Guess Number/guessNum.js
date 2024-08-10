let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(`Random Number is ${randomNum}`);

const userInput = document.querySelector("#inpNumber");
const btn = document.querySelector("#submit");
const storeAllValue = document.querySelector("#enterValue");
const remainingChance = document.querySelector("#leftChance");
const resultText = document.querySelector("#resultOut");
const resetBtn = document.querySelector(".resetbtn");
const p = document.createElement("button");
let allNumber = [];
let chanceNum = 1;
let playGame = true;

if (playGame) {
  btn.addEventListener("click", (e) => {
    const userNum = parseInt(userInput.value);
    // console.log(userNum);
    validate(userNum);
  });
}

function validate(userNum) {
  if (isNaN(userNum)) {
    userInput.value = "";
    disMsg(`Please Enter Number`);
  } else if (userNum > 100) {
    userInput.value = "";
    disMsg(`Enter Number less than or equal to 100`);
  } else if (userNum < 1) {
    userInput.value = "";
    disMsg(`Enter Number greater than or equal 1.`);
  } else {
    allNumber.push(userNum);
    // console.log(allNumber);
    if (chanceNum === 11) {
      displayShow(userNum);
      disMsg(`Game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayShow(userNum);
      condition(userNum);
    }
  }
}

function condition(userNum) {
  if (userNum == randomNum) {
    disMsg(`You are win. Random Number is ${randomNum}`);
    endGame();
  } else if (userNum > randomNum) {
    disMsg(`Your number is greater than random number.`);
  } else {
    disMsg(`Your number is less than random number`);
  }
}

function disMsg(msg) {
  resultText.innerHTML = `<h4>${msg}</h4>`;
}

function displayShow(userNum) {
  userInput.value = "";
  storeAllValue.innerHTML += ` ${userNum}, `;
  chanceNum++;
  remainingChance.innerHTML = `${11 - chanceNum}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  btn.setAttribute("disabled", "");
  p.classList.add("btn");
  p.innerHTML = `<button id='Butn'> Start new game </button>`;
  resetBtn.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  const button = document.querySelector("#Butn");
  button.addEventListener("click", (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    // console.log(randomNum);
    userInput.value = "";
    allNumber = [];
    chanceNum = 1;
    storeAllValue.innerHTML = "";
    remainingChance.innerHTML = `${11 - chanceNum}`;
    resultText.innerHTML = "";
    userInput.removeAttribute("disabled");
    btn.removeAttribute("disabled");
    resetBtn.removeChild(p);
    playGame = true;
  });
}
