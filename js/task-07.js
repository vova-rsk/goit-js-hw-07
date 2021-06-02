const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const onInputValueChange = event => {
    const value = event.currentTarget.value;
    spanRef.style.fontSize = `${value}px`;
};

inputRef.addEventListener('input', onInputValueChange);

