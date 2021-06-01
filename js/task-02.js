const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

// const listRef = document.createElement('ul');
// listRef.setAttribute('id', ingredientsRef.getAttribute('id'));

const listRef = ingredientsRef.cloneNode(false);

ingredients.forEach(elem => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = elem;
    listRef.append(listItemRef);
});

ingredientsRef.replaceWith(listRef);
