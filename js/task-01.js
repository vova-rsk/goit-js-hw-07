/*Вариант 1*/

const mainListRef = document.querySelector('#categories');

const categories = mainListRef.children;

[...categories].forEach(category => {
    const categoryTitle = category.firstElementChild.textContent;
    console.log(`Категория: ${categoryTitle}`);

    const subListElements = category.lastElementChild.children;
    console.log(`Количество элементов: ${subListElements.length}`);
});







/*Вариант 2*/

// const headersRef = document.querySelectorAll('.item > h2');

// const subListsRef = document.querySelectorAll('.item > ul');

// const categoriesQuantity = headersRef.length;

// for (let i = 0; i < categoriesQuantity; i += 1) {
//     console.log(`Категория: ${headersRef[i].textContent}`);
//     console.log(`Количество элементов: ${subListsRef[i].children.length}`);
// }


