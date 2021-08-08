const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameLabelRef.textContent = event.currentTarget.value.trim() || "незнайомець";
};