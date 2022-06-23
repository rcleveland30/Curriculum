const calculator = document.getElementById('calculator');
const output = document.getElementById('output');

let = outputValue = '';

calculator.addEventListener('click', function(e) {
    const clickId = e.target.getAttribute('data-clickId');
    // if clickId is a string of texts, it's NaN and this operator will be true
    const isOperator = isNaN(clickId * 1); 
    if (isOperator) {
        outputValue += ` ${clickId} `;
    } else {
        outputvalue += clickId // outputValue = outputValue + clickid
    }
    output.innerText = outputValue; 
});

