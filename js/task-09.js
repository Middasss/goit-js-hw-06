const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const btnColorChanger = () => {
  const getRandomHexColor = () =>`#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
  spanEl.textContent = getRandomHexColor();
  
  body.style.background = getRandomHexColor();
}

body.addEventListener('click', btnColorChanger);

