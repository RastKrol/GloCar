const score = document.querySelector(".score"),
  game = document.querySelector(".game"),
  gameArea = document.querySelector(".gameArea"),
  start = document.querySelector(".start"),
  car = document.createElement("div");
  car.classList.add('car');
  // gameArea.appendChild(car);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);
start.addEventListener('click', startGame);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const settings = {
  start: false,
  score: 0, 
  speed: 3
};

function startGame() {
  gameArea.appendChild(car);
  start.classList.add('hide');
  settings.start = true;
  
}


// function playGame() {
//   console.log("Play game!");
//   if (settings.start === true) {
//   }
// }

function startRun(e) {
  // e.preventDefault();
  keys[e.key] = true;
}
function stopRun(e) {
  // e.preventDefault();
  keys[e.key] = false;
}
start.addEventListener("click", function () {
  start.classList.add("hide");
});
