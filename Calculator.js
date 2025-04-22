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

function clickButton() {
    window.onload = function () {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i]?.addEventListener('click', function () {
                const buttonValue = this.value;
                console.log("Button Clicked:", buttonValue);

                if (this.classList.contains('operand')) {
                if (shouldClearDisplay) {
                    display.value = buttonValue;
                    shouldClearDisplay = false;
                } else {
                    display.value += buttonValue; 
                }
                displayValue = display.value;
                }
                else if (this.classList.contains('operator') && buttonValue !== "=") {
                    firstNumber = parseFloat(display.value);//Get first number from display
                    selectedOperator = buttonValue;//Get operator from button
                    console.log("First Number:", firstNumber);
                    shouldClearDisplay = true;//clear display screen for next number
                }
                else if(this.classList.contains('operator') && buttonValue === "="){
                    secondNumber = parseFloat(display.value);//Get second number from display
                    console.log("SecondNumber:", secondNumber);
                    shouldClearDisplay = false;//display screen for next number
                    if (selectedOperator === "+") {
                        result = add(firstNumber, secondNumber);
                    } else if (selectedOperator === "-") {
                        result = subtract(firstNumber, secondNumber);
                    } else if (selectedOperator === "*") {
                        result = multiply(firstNumber, secondNumber);
                    } else if (selectedOperator === "/") {
                        result = divide(firstNumber, secondNumber);
                    }
                    /*else if(selectedOperator === "C" && result === null){
                        clearDisplay();
                        display.value = '0';
                        console.log("Display Cleared");
                    }*/
                    display.value = result;
                    console.log("Result:", result);
                }
            });
        }
    }
}

clickButton();

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

function updateDisplay(value) {
    displayValue = value;
}

updateDisplay();

function clearDisplay() {
    display.value = '0';
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