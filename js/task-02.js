const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// console.log(ingredients);

const ulIngred = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const liIngred = document.createElement('li');

  liIngred.textContent = ingredient;
  liIngred.classList.add('item');
  
  return liIngred;
});

ulIngred.append(...items);

