let a = "0", b = "", operator = ""
let shouldClearDisplay = true;


const buttons = document.querySelectorAll('button');
console.log("Buttons:", buttons);
const display = document.querySelector(".display");
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
//const decimal = document.querySelector(".decimal");
const del = document.querySelector(".delete");
//const sign = document.querySelector(".sign");

function clickButton() {
    window.onload = function () {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i]?.addEventListener('click', function () {
                const buttonValue = this.value;
                console.log("Button Clicked:", buttonValue); // Debugging the button click

                if (this.classList.contains('operand')) {
                    if (shouldClearDisplay) {
                        display.value = buttonValue;
                        shouldClearDisplay = false;
                    } else {
                        display.value += buttonValue;
                    }
                    displayValue = display.value;
                } else if (this.classList.contains('operator') && buttonValue !== "=") {
                    firstNumber = parseFloat(display.value);
                    selectedOperator = buttonValue;
                    console.log("First Number:", firstNumber);
                    shouldClearDisplay = true;
                } else if (buttonValue === "=") {
                    secondNumber = parseFloat(display.value);
                    console.log("Second Number:", secondNumber);
                    shouldClearDisplay = false;
                    if (selectedOperator === "+") {
                        result = add(firstNumber, secondNumber);
                    } else if (selectedOperator === "-") {
                        result = subtract(firstNumber, secondNumber);
                    } else if (selectedOperator === "*") {
                        result = multiply(firstNumber, secondNumber);
                    } else if (selectedOperator === "/") {
                        result = divide(firstNumber, secondNumber);
                    }
                    else if (selectedOperator === "+/-"){
                        result = -firstNumber;
                    }
                    else if(selectedOperator === "%"){
                        result = firstNumber / 100;
                    }
                    else if(selectedOperator === "."){
                        result = firstNumber + "." + secondNumber;  
                    }
                    display.value = result;
                    console.log("Result:", result);
                } else {
                    console.log("Clear button clicked, resetting display...");
                    clearDisplay();
                    console.log("Display Cleared");
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

function sign(a){
    return -a;
}

function percent(a){
    return a / 100;
}

function decimal(a){
    return a + "." + b;
}

function updateDisplay(value) {
    displayValue = value;
}

updateDisplay();

function clearDisplay() {
    console.log("clearDisplay() called"); // Debugging the function call
    display.value = '0'; // Reset the display to 0
    displayValue = '0'; // Reset the global displayValue
    firstNumber = null; 
    secondNumber = null; 
    selectedOperator = null; 
    result = null; 
    shouldClearDisplay = true; 
    console.log("Calculator Reset");
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
    else if(operator == '+/-'){
        return sign(a)
    }
    else if(operator == '%'){
        return percent(a)
    }
    else if(operator == '.'){
        return decimal(a)
    }
    else {
        return "Invalid operator"
    }   
}