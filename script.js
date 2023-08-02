
let element = document.getElementsByClassName('myButton');

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
        handlingClick(element[i].value)
    });
}

document.addEventListener("keydown", (e) => {
    handlingKeydown(e);
})

let elemOutput = document.querySelector('.output');

function calculation(n1, n2, z) {
    switch (z) {
        case '/' :
            return String( Number(n1) / Number(n2));
        case '+':
            return String( Number(n1) + Number(n2));
        case '-':
            return String( Number(n1) - Number(n2));
        case '*':
            return String( Number(n1) * Number(n2));
    }
}

function handlingClick(value) {
    if (Number(value) + 1) {
        if (!operationF) {
            num1 += (num1[0] || value !== '0') ? String(value) : '';
            elemOutput.value = num1;
        }
        else {
            num2 += (num2[0] || value !== '0') ? String(value) : '';
            elemOutput.value = num2;
        }
    }
    else if (value === '/' || value === '+' || value === '-' || value === '*') {
        if (!operationF) {
            operationF = true;
            operation = value;
        }
        else {
            num1 = calculation(num1, num2, operation);
            operation = value;
            num2 = '';
            elemOutput.value = num1;
        }
    }
    else if (value === "=") {
        num1 = num2 ? calculation(num1, num2, operation) : num1;
        elemOutput.value = num1;
        num2 = '';
        operationF = false;
    }
    else if (value === 'AC') {
        num1 = '';
        num2 = '';
        operation = '';
        operationF = false;
        elemOutput.value = '';
        fraction1 = false;
        fraction2 = false;
    }
    else if (value === '+/-') {
        if (!operationF) {
            num1 = String(-Number(num1));
            elemOutput.value = num1;
        }
        else {
            num2 = String(-Number(num2));
            elemOutput.value = num2;
        }
    }
    else if (value === '.') {
        if (!operationF && !fraction1) {
            num1 += num1 ? '.' : '0.';
            fraction1 = !fraction1;
        }
        else if (!fraction2) {
            num2 += num2 ? '.' : '0.';
            fraction2 = !fraction2;
        }
    }
}

function handlingKeydown(e) {
    let key = e.key
    if (Number(key) + 1) {
        if (!operationF) {
            num1 += (num1 || key !== '0') ? key : '';
            console.log(Boolean(num1[0]), num1[0])
            elemOutput.value = num1;
        }
        else {
            num2 += (num2 || key !== '0') ? key : '';
            elemOutput.value = num2;
        }
    }
    else if (key === '.') {
        if (!operationF && !fraction1) {
            num1 += num1 ? '.' : '0.';
            fraction1 = !fraction1;
        }
        else if (!fraction2) {
            num2 += num2 ? '.' : '0.';
            fraction2 = !fraction2;
        }
    }
    else if (key === '/' || key === '+' || key === '-' || key === '*') {
        if (!operationF) {
            operationF = true;
            operation = key;
        }
        else {
            num1 = calculation(num1, num2, operation);
            operation = key;
            num2 = '';
            elemOutput.value = num1;
        }
    }
    else if (key === "=" || key === 'Enter') {
        num1 = num2 ? calculation(num1, num2, operation) : num1;
        elemOutput.value = num1;
        num2 = '';
        operationF = false;
    }
    else if (key === 'Backspace') {
        num1 = '';
        num2 = '';
        operation = '';
        operationF = false;
        elemOutput.value = '';
        fraction1 = false;
        fraction2 = false;
    }
}

let operationF = false;
let fraction1 = false;
let fraction2 = false;

let num1 = '';
let num2 = '';
let operation = '';