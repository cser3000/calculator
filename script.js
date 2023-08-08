
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

const addingNumbers = (a, v) => {
    a += String(v);
    a = String(Number(a));
    elemOutput.value = a;
    return a;
}

const signChange = (a) => {
    a = String(-Number(a));
    elemOutput.value = a;
    return a;
}

function handlingClick(value) {
    if (Number(value) + 1) {
        if (!operationF) {
            num1 = addingNumbers(num1, value);
        }
        else {
            num2 = addingNumbers(num2, value);
        }
    }
    else if (value === '/' || value === '+' || value === '-' || value === '*') {
        if (!operationF) {
            operationF = true;
            operation = value;
        }
        else {
            elemOutput.value = num1 = calculation(num1, num2, operation);
            operation = value;
            num2 = '0';
            fraction2 = false;
        }
    }
    else if (value === "=" || value === 'Enter') {
        let tmp = calculation(num1, num2, operation);
        if (tmp === "Ошибка") {
            zeroing();
            elemOutput.value = "Ошибка";
        }
        else {
            elemOutput.value = num2 ? tmp : num1;
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
            num1 = signChange(num1);
        }
        else {
            num2 = signChange(num2);
        }
    }
    else if (value === '.') {
        if (!operationF && !fraction1) {
            num1 += '.';
            fraction1 = !fraction1;
        }
        else if (!fraction2) {
            num2 += '.';
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