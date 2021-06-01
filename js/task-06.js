const inputRef = document.querySelector('#validation-input');

const OnInputLengthChecking = event => {
    const inputValue = event.currentTarget.value;
    const dataLengthValue = event.currentTarget.getAttribute('data-length');
    if (inputValue.length == dataLengthValue) {
        event.currentTarget.classList.remove('invalid')
        event.currentTarget.classList.add('valid')
    } else {
        event.currentTarget.classList.remove('valid')
        event.currentTarget.classList.add('invalid')
    }
};

inputRef.addEventListener('change',OnInputLengthChecking);