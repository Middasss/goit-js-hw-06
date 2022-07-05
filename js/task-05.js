const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputChange = (event) => {
  console.log(event.currentTarget.value);

  spanEl.textContent = event.currentTarget.value;
  if (inputEl.value === '') {
    spanEl.textContent = 'Anonymous'
  }
}

inputEl.addEventListener('input', onInputChange);