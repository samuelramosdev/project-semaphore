const semaphoreImg = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => setInterval(semaphoreLoop, 2000)
}

const semaphore = (event) => {
  const buttonClicked = event.target.id;
  turnOn[buttonClicked]();
}

const nextIndex = () => colorIndex < 2 ? colorIndex++ : colorIndex = 0;

const semaphoreLoop = () => {
  const colors = ['red', 'yellow', 'green'];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex()
}

buttons.addEventListener('click', semaphore);
