const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const onChangeInputValue = event => {
    const value = event.currentTarget.value;
    spanRef.style.fontSize = `${value}px`;
};

inputRef.addEventListener('change', onChangeInputValue);

