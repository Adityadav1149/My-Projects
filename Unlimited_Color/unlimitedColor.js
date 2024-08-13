// const body = document.querySelector("body");
// const random = Math.floor(Math.random() * 16);
// // console.log(random);

function createHexCode() {
  const hexCode = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexCode[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// start Button
let startId;

const startBtn = function () {
  document.body.style.backgroundColor = createHexCode();
};

document.querySelector("#start").addEventListener("click", (e) => {
  if (!startId) {
    startId = setInterval(startBtn, 1000);
  }
});

// for stop button

document.querySelector("#stop").addEventListener("click", (e) => {
  clearInterval(startId);
  startId = null;
});
