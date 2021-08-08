const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsEl = document.querySelector('#ingredients');
const ingredient = ingredients.map( ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  return itemEl;
});

console.log(ingredients);

ingredientsEl.append(...ingredient);
