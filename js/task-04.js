
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = document.querySelector('#value');
// 1 спосіб
let total = 0;

// 2 спосіб
// let total = Number(counterValue.textContent);

const increment = () => {
  total += 1;
  // 1 спосіб
  counterValue.textContent = total;

  // 2 спосіб
  // counterValue.textContent = String(total);
}


const decrement = () => {
  total -= 1;
  // 1 спосіб
  counterValue.textContent = total;

  // 2 спосіб
  // counterValue.textContent = String(total);
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);