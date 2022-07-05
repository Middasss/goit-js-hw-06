const liItemsById = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${liItemsById}`);

const liItemsByClass = document.querySelectorAll('li.item');
// console.log(liItemsByClass);

liItemsByClass.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
