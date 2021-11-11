// MOVING CARS
const moveForward = (player) => {
  const car = document.querySelector(`#player-${player} .active`);
  const start1 = document.getElementById('start1');
  const start2 = document.getElementById('start2');
  const middle = document.querySelectorAll('.middle');
  if(car.nextElementSibling) {
    car.nextElementSibling.classList.add('active');
    car.classList.remove('active');
  } else {
    alert(`Player ${player} wins! Play again?`);
    updateDisplay();
    // window.location.reload();
    start1.classList.add('active');
    start2.classList.add('active');
    middle.classList.remove('active');
  }
};

const moveCars = (event) => {
  if (event.key === "p") {
    moveForward(1);
  } else if (event.key === "q") {
    moveForward(2);
  }
};

document.addEventListener("keyup", moveCars);

// COUNTER
let counterDisplayElem = document.querySelectorAll('.counter-display');
let count = 0;

const updateDisplay = () => {
  const car1 = document.querySelector(`#player-1 .active`).getBoundingClientRect().top;
  const car2 = document.querySelector(`#player-2 .active`).getBoundingClientRect().top;
  const finish1 = document.getElementById('finish-1').getBoundingClientRect().top;
  const finish2 = document.getElementById('finish-2').getBoundingClientRect().top;
  // counterDisplayElem.forEach(element => {
    if(car1 === finish1) {
      counterDisplayElem[0].innerHTML = count + 1;
    } else if (car2 === finish2) {
      counterDisplayElem[0].innerHTML = count + 1;
    }
  // })
};
