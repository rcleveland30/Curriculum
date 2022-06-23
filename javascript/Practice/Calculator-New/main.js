const numbers = document.querySelector('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators');

let displayNumbers = '';

//Calculator Buttons to Display
numbers.addEventListener('click', function(e) {
    const digit = e.target.innerText;
    displayNumbers += digit;     //displayNumber = displayNumbers + digit
    const isNumber = e.target.getAttribute('data-number');
    if (isNumber) {
        display.innerText = displayNumbers;
   }
});

operators.addEventListener('click', function(e) {
    const operator = e.target.getAttribute('data-operator');
    alert(operator);
})