function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1 = 0;
let operator = '';
let num2 = 0;
let justCalculated = false;
 
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Invalid operator';
    }   
}
console.log(operate(3, '-', 5));
const digits = document.querySelectorAll('[data-value]:not(.operbtn)');
const operators = document.querySelectorAll('.operbtn:not(#equals)');
const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');

digits.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (display.textContent === '0' || justCalculated) {
            display.textContent = value;
            justCalculated = false;
        } else {
            display.textContent += value;
        }
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (operator !== '') {
            const result = operate(num1, operator, parseFloat(display.textContent));
            display.textContent = result;
            num1 = result;
        } else {
            num1 = parseFloat(display.textContent);
        }

        operator = value;
        justCalculated = true;
    });
});
equalsBtn.addEventListener('click', () => {
    const result = operate(num1, operator, parseFloat(display.textContent));
    display.textContent = result;
    num1 = result;
    justCalculated = true;
});
clearBtn.addEventListener('click', () => {
    display.textContent = '0';
    num1 = 0;
    operator = '';
    num2 = 0;
    justCalculated = false;
});
backspaceBtn.addEventListener('click', () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
});