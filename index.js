const moveForward = (player) => {
  const car = document.querySelector(`#player-${player} .active`);
  const start1 = document.getElementById('start1');
  const start2 = document.getElementById('start2');
  const middle = document.querySelector('.middle-active');
  if(car.nextElementSibling) {
    car.nextElementSibling.classList.add('active');
    car.classList.remove('active');
  } else {
    alert(`Player ${player} wins! Play again?`);
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
