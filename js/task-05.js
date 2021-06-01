const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const changeName = event => {
    const value = event.currentTarget.value;
    spanRef.textContent = value;
    if (value === '') spanRef.textContent = 'незнакомец';
};
 
inputRef.addEventListener('input', changeName);



