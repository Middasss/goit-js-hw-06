const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');

const inputElSizeController = () => {
  spanEl.style.fontSize =  inputEl.value + 'px';
}

inputEl.addEventListener('input', inputElSizeController);