const counterEl = document.querySelector('#counter');
const counterValueEl = document.querySelector('#value');
const decrementCounterButtonEl = document.querySelector('[data-action="decrement"]');
const incrementCounterButtonEl = document.querySelector('[data-action="increment"]');

decrementCounterButtonEl.addEventListener('click', onDecrementClick);
incrementCounterButtonEl.addEventListener('click', onIncrementClick);


function onDecrementClick() {
    counterValueEl.textContent = Number(counterValueEl.textContent) - 1;
}

function onIncrementClick() {
    counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
}