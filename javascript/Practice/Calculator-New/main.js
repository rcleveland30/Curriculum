const equals = document.querySelector('.equals')
const numbers = document.querySelector('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators')

let displayNumbers = ''; //created as a string to concactanate(sp?)
let hasOperator = false;  //when you hit an operator, it becomes true
let sign = null;
let x = 0;
let y = 0;

const signs = {
    add: '+',
    minus: '-',
    times: '*',
    divide: '/',  
};

const renderDisplay = function () {
    display.innerText = displayNumbers;
};

const clearData = function( ) {
    displayNumbers = '';
    hasOperator = false;  //when you hit an operator, it becomes true
    sign = null;
    x = 0;
    y = 0;
}

//Calculator Buttons to Display
numbers.addEventListener('click', function(e) {
    const isNumber = e.target.getAttribute('data-number');
    const isDecimal = e.target.hasAttribute('data-decimal');
    const isClear = e.target.hasAttribute('data-clear');
    
    if (isNumber || isDecimal)  {
        const digit = e.target.innerText;
        displayNumbers += digit;
        if (!hasOperator) {
            x += digit;
        } else {
            y+= digit;
        }
        renderDisplay(); 
   } else if (isClear) {
        clearData( );
        renderDisplay();
   }
});

//Operator Buttons
operators.addEventListener('click', function(e) {
    hasOperator = true;
    const operator = e.target.getAttribute('data-operator');
    sign = operator;
    if (!x) {
        x = displayNumbers; // firstDigits += parseInt(displayNumbers)
    } 
    // displayNumbers += ' + ';
    displayNumbers += ` ${signs[operator]}`
    renderDisplay();

});

// Equal button
equals.addEventListener('click', function() {
    x *= 1;
    y *= 1;
    let result = null;
    if (signs[sign] === '+') {
        result = x + y;
    } else if (signs[sign] === '-') {
        result = x - y;
    } else if (signs[sign] === '*') {
        result = x * y;
    } else if (signs[sign] === '/') {
        result = x / y;
    }
    display.innerText = result;
    clearData( );
})