const validationInputRef = document.querySelector('#validation-input');
const validationValueRef = Number(validationInputRef.dataset.length);

validationInputRef.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
    if (event.currentTarget.value.length === validationValueRef) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove("invalid");
        return;
    }
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
}
