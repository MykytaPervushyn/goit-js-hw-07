const catItemEl = document.querySelectorAll('.item');


console.log(`У списку ${catItemEl.length} категорії.`);

const itemTitle = document.querySelector('.item'). firstElementChild.textContent;
console.log('Категорія:', itemTitle);
const itemsQuantiti =
    document.querySelector('.item').lastElementChild.children.length;
console.log('Кількість елементів:', itemsQuantiti);


console.log('Категорія:', catItemEl[1].firstElementChild.textContent);
console.log('Кількість елементів:', catItemEl[1].lastElementChild.children.length);



const thirdItemTitle =
    document.querySelector('#categories').lastElementChild.firstElementChild.textContent;
console.log('Категорія:', thirdItemTitle);
const thirdItemsQuantiti =
    document.querySelector('#categories').lastElementChild.lastElementChild.children.length;
console.log('Кількість елементів:', thirdItemsQuantiti);





