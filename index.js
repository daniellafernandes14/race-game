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
let counterDisplayElem1 = document.querySelector('.counter-display1');
let counterDisplayElem2 = document.querySelector('.counter-display2');
let count1 = 1;
let count2 = 1;

const updateDisplay = () => {
  const car1 = document.querySelector(`#player-1 td.active`).getBoundingClientRect().x;
  const car2 = document.querySelector(`#player-2 td.active`).getBoundingClientRect().x;
  const finish1 = document.getElementById('finish-1').getBoundingClientRect().x;
  const finish2 = document.getElementById('finish-2').getBoundingClientRect().x;
  // counterDisplayElem.forEach(element => {
    if(car1 === finish1) {
      counterDisplayElem1.innerText = count1++;
      console.log(counterDisplayElem1[0]);
    } else if(car2 === finish2) {
      counterDisplayElem2.innerText = count2++;
      console.log(counterDisplayElem2[0]);
    }
  // })
};
