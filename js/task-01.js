const catItemEl = document.querySelectorAll('.item');


console.log(`У списку ${catItemEl.length} категорії.`);

console.log('Категорія:', catItemEl[0].firstElementChild.textContent);
console.log('Кількість елементів:', catItemEl[0].lastElementChild.children.length);

console.log('Категорія:', catItemEl[1].firstElementChild.textContent);
console.log('Кількість елементів:', catItemEl[1].lastElementChild.children.length);

console.log('Категорія:', catItemEl[2].firstElementChild.textContent);
console.log('Кількість елементів:', catItemEl[2].lastElementChild.children.length);





