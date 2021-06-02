const inputRef=document.querySelector('#controls input');
const buttonCreateRef = document.querySelector('button[data-action=render]');
const buttonDestroyRef = document.querySelector('button[data-action=destroy]');
const galleryContainerRef = document.querySelector('#boxes');

const START_WIDTH = 30;
const START_HEIGHT = 30;


let width=START_WIDTH;
let height = START_HEIGHT;

/*Функция генерации рандомного rgb-цвета*/
const generateRandomColor = () => {
    const red = Math.random() * (255 - 0) + 0;
    const green = Math.random() * (255 - 0) + 0;
    const blue = Math.random() * (255 - 0) + 0;
    return `rgb(${red},${green},${blue})`;
};

/*Функция формирования и добавления коллекции элементов*/
const createBoxes = amount => {
    const container = document.createElement('div');
        
    for (let i = 1; i <= amount; i += 1) {
        const tmp = document.createElement('div');

        tmp.style.backgroundColor = generateRandomColor();
        tmp.style.width = `${width}px`;
        tmp.style.height = `${height}px`;

        container.append(tmp);

        width += 10;
        height += 10;
    }
    
    galleryContainerRef.append(...container.children);
}

/*Функция удаления всей коллекции элементов*/
const destroyBoxes = () => galleryContainerRef.innerHTML = '';

/*Функция для обработчика события клика мыши на кнопку Создать*/
const onButtonCreateClick = () => {
    const quantity = (inputRef.value === '0' || inputRef.value === '')
        ? false
        : inputRef.value;
    
    if (quantity) {
        createBoxes(quantity);
        inputRef.value = '';
    } else {
        return alert(`Указано некорректное количество елементов!`);
    }
    
};

/*Функция для обработчика события клика мыши на кнопку Очистить*/
const onButtonClearClick = () => {
    destroyBoxes();
    width=START_WIDTH;
    height=START_HEIGHT;
};

buttonCreateRef.addEventListener('click', onButtonCreateClick);
buttonDestroyRef.addEventListener('click', onButtonClearClick);

