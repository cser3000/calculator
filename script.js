
let element = document.getElementsByClassName('myButton');

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
        handlingClick(element[i].value)
    });
}

document.addEventListener("keydown", (e) => {
    handlingClick(e.key);
})

let elemOutput = document.querySelector('.output');

function calculation(n1, n2, z) {
    switch (z) {
        case '/' :
            if (Number(n2) === 0) {
                return "Ошибка";
            }
            else {
                return String(Number(n1) / Number(n2));
            }
        case '+':
            return String(Number(n1) + Number(n2));
        case '-':
            return String(Number(n1) - Number(n2));
        case '*':
            return String(Number(n1) * Number(n2));
    }
}

const zeroing = () => {
    num1 = '0';
    num2 = '0';
    operation = '';
    operationF = false;
    elemOutput.value = '0';
    fraction1 = false;
    fraction2 = false;
}

function handlingClick(value) {
    if (Number(value) + 1) {
        if (!operationF) {
            num1 += String(value);
            num1 = String(Number(num1));
            elemOutput.value = num1;
        }
        else {
            num2 += String(value);
            num2 = String(Number(num2));
            elemOutput.value = num2;
        }
    }
    else if (value === '/' || value === '+' || value === '-' || value === '*') {
        if (!operationF) {
            operationF = true;
            operation = value;
        }
        else {
            elemOutput.value = calculation(num1, num2, operation);
            operation = value;
            num2 = '0';
            fraction2 = false;
        }
    }
    else if (value === "=" || value === 'Enter') {
        if (calculation(num1, num2, operation) === "Ошибка") {
            zeroing();
            elemOutput.value = "Ошибка";
        }
        else {
            elemOutput.value = num2 ? calculation(num1, num2, operation) : num1;
            num2 = '0';
            fraction2 = false;
            operationF = false;
        }
    }
    else if (value === 'AC' || value === 'Backspace') {
        zeroing();
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

let operationF = false;
let fraction1 = false;
let fraction2 = false;

let num1 = '0';
let num2 = '0';
let operation = '';