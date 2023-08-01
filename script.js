
let element = document.getElementsByClassName('myButton');

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
        obrabotkaEptb(element[i].value)
    });
}

let elemOutput = document.querySelector('.output')

function calculation(n1, n2, z) {
    if (z === '/') {
        return String( Number(n1) / Number(n2));
    }
    else if (z === '+') {
        return String( Number(n1) + Number(n2));
    }
    else if (z === '-') {
        return String( Number(n1) - Number(n2));
    }
    else if (z === '*') {
        return String( Number(n1) * Number(n2));
    }
}
function obrabotkaEptb(value) {
    if (Number(value) < 10 && !operationF && (num1[0] || value !== '0')) {
        num1 = num1 + String(value);
        elemOutput.innerHTML = num1;
    }
    else if (Number(value) < 10 && (num2[0] || value !== '0')) {
        num2 = num2 + String(value);
        elemOutput.innerHTML = num2;
    }
    else if ((value === '/' || value === '+' || value === '-' || value === '*') && !operationF) {
        operationF = true;
        operation = value;
    }
    else if ((value === '/' || value === '+' || value === '-' || value === '*') && operationF) {
        num1 = calculation(num1, num2, operation);
        operation = value;
        num2 = '';
        elemOutput.innerHTML = num1;
    }
    else if (value === "=") {
        num1 = num2 ? calculation(num1, num2, operation) : num1;
        elemOutput.innerHTML = num1;
        num2 = '';
        operationF = false;
    }
    else if (value === 'AC') {
        num1 = '';
        num2 = '';
        operation = '';
        operationF = false;
        elemOutput.innerHTML = '0';
    }
}

let operationF = false;

let num1 = '';
let num2 = '';
let operation = '';