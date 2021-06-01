const incrementButtonRef = document.querySelector('[data-action="increment"]');
const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

incrementButtonRef.addEventListener('click', increment);
decrementButtonRef.addEventListener('click', decrement);
