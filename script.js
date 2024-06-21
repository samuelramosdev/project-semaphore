const semaphoreImg = document.getElementById('img');
const buttons = document.getElementById('buttons');

const turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
}

const semaphore = (event) => {
  const buttonClicked = event.target.id;
  turnOn[buttonClicked]();
}

buttons.addEventListener('click', semaphore);
