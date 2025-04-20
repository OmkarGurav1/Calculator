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
    if (b === 0) {
        return "Division by zero is not allowed";
    }
    return a / b;
}

console.log("Add 5 and 3:", add(5, 3)); // 8
console.log("Subtract 10 from 20:", subtract(20, 10)); // 10
console.log("Multiply 4 by 6:", multiply(4, 6)); // 24
console.log("Divide 20 by 5:", divide(20, 5)); // 4
console.log("Divide 10 by 0:", divide(10, 0)); // Division by zero is not allowed

const display = document.getElementById('display');

let displayValue = '';
let firstNumber = null;
let secondNumber = null;
let selectedOperator = null;

function updateDisplay(value) {
    display.value = value;
    displayValue = value;
}
