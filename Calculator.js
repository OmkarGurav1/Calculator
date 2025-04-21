let a = "0", b = "", operator = ""
let shouldClearDisplay = true;

const buttons = document.querySelectorAll('button');
const display = document.querySelector(".display");
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear")
const decimal = document.querySelector(".decimal")
const del = document.querySelector(".delete")
const sign = document.querySelector(".sign")

function clickButton(){
window.onload = function(){
    for(let i = 0;i < buttons.length;i++)
    buttons[i]?.addEventListener('click',function(){
        console.log("Button Click");
        buttons.classList.toggle('active');
       }); 
  }
}

let displayValue = '0';
let firstNumber = null;
let secondNumber = null;
let selectedOperator = null;
let result = null;

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

function updateDisplay(value) {
    displayValue = value;
}

updateDisplay();

function clearDisplay() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    selectedOperator = null;
    result = null;
}

clearDisplay();

function operate(a, b, operator) {
    console.log(a)
    console.log(b)
    console.log(operator)
    if (operator == '+') {
        return add(a, b)
    } else if (operator == '-') {
        return subtract(a, b)
    } else if (operator == '*') {
        return multiply(a,b)
    } else if (operator == '/') {
        return divide(a, b)
    }
}

operate();