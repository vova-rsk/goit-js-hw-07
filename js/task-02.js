const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

/*Вариант 1*/
// const ingredientsRef = document.querySelector('#ingredients');

// const listRef = ingredientsRef.cloneNode(false);

// ingredients.forEach(elem => {
//     const listItemRef = document.createElement('li');
//     listItemRef.textContent = elem;
//     listRef.append(listItemRef);
// });

// ingredientsRef.replaceWith(listRef);



/*Вариант 2*/
const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...ingredients.map(elem => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = elem;
    return listItemRef;
}));