//Calculator object keeps track of all the properties of the calculator
const calculator = {
    displayValue: '0',  //What is being shown to the user
    firstOperand: null,  //The first operand that is entered
    waitingForSecondOperand: false,  //True/false check that is true if the first operand has been entered.
    operator: null,
};

//The maximum amount of characters that can fit on the calculator screen
const maxNumberLength = 14;

//Rounds numbers
function round(num) {
    return Math.round(num * 100) / 100;
}

//Inputs a number into the calculator's display
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;  //Same as setting the variables displayValue and waitingForSecondOperand,
    //but it takes those variables from the calculator object, and uses those values.

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else if (calculator.displayValue.length < maxNumberLength) {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;  //Same as saying "if calculator.displayValue is equal to zero, 
        //make the value of it the digit.  Otherwise, display the current displayValue and the digit concatenated".
    } else {
        return;
    }
}

//Inputs a decimal into the display.
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;

    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
}

//Uses an entered operator as the function argument and decides what to do with it
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator //Takes these variable properties from the calculator object
    const inputValue = parseFloat(displayValue); //The input value is equal to the display value parsed into a floating point number, 
    //since it was a string before

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null) {
        calculator.firstOperand = inputValue; //If there is no previously entered value, set the first operand equal to inputValue
    } else if (operator) { //If there is already an operator
        const currentValue = firstOperand || 0;
        const result = round(performCalculation[operator](currentValue, inputValue)); //Runs performCalculation using the current value and the input value

        calculator.displayValue = String(result); //The calculator displays the result
        calculator.firstOperand = result;  //VERY IMPORTANT: The first operand is set to the result, so that if the user wants to chain operations,
        //they are able to do that.
    }

    calculator.waitingForSecondOperand = true;  //After calculating/showing the result, in order to prepare for chaining operations,
    //the calculator is now waiting for a second operand
    calculator.operator = nextOperator; //and another operator
}

//Deletes previously entered digit from the display
function deleteDigit() {
    let displayValue = calculator.displayValue;

    let displayValueArr = displayValue.split("");
    displayValueArr.pop();   //Removes most recently added digit
    calculator.displayValue =  displayValueArr.join("");

    if (calculator.displayValue.length == 0) {  //If all digits have been removed, display zero
        calculator.displayValue = "0";
    }
}

//Performs calculations based on what the operator is
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand
};

//Sets all calculator values to default
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

//Updates display of calculator
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue; //Value of the calculator-screen HTML element is equal to the value of the 
    //calculator object's displayValue
}

updateDisplay();

//Adds event listeners to all calculator keys
const keys = document.querySelector('.calculator-keys'); //Sets a variable to use in this function
keys.addEventListener('click', (event) => {  //Uses a function to add an event listener to every member of the .calculator-keys class
    const { target } = event;  //Same as saying "const target = event.target".  This goes into the event listener OBJECT, and takes the "target"
    //property, which is just the HTML element that set off the event listener
    if (!target.matches('button')) { //If the target is not a button, do nothing
        return;
    }

    if (target.classList.contains('operator')) { //If the target has "operator" in its class, run the handleOperator function on the target value
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    if (target.classList.contains("backspace")) {
        deleteDigit();
        updateDisplay();
        return;
    }

    //Very important that the calculator keys are all divided into categories, and each category has a specific function that runs when the even listener
    //is set off.  This is good for readability, simplicity, and organization (and sanity).

    inputDigit(target.value); //This is basically adding an "else" statement.  If the target is not an operator, decimal, or all-clear, 
    //run inputDigit on the value.
    updateDisplay();
});

//Adds event listener to all keys to listen for keyboard input

keys.addEventListener("keydown", (event) => {
    let value = "";
    //Operator keyboard input currently BROKEN
    if (event.keyCode == 42) {
        value = "*";
        handleOperator(value);
        updateDisplay();
    } else if (event.keycode == 43) {
        handleOperator(event.keyCode);
        updateDisplay();
        return;
    } else if (event.keyCode == 45) {
        handleOperator(event.keyCode);
        updateDisplay();
        return;
    } else if (event.keyCode == 46) {
        inputDecimal(dot);
        updateDisplay();
        return;
    } else if (event.keyCode == 47) {
        handleOperator(event.keyCode);
        updateDisplay();
        return;
        //Digit keyboard input works, however CSS for it does not
    } else if (event.keyCode == 48) {
        document.getElementById("0").click();
    } else if (event.keyCode == 49) {
        document.getElementById("1").click();
    } else if (event.keyCode == 50) {
        document.getElementById("2").click();
    } else if (event.keyCode == 51) {
        document.getElementById("3").click();
    } else if (event.keyCode == 52) {
        document.getElementById("4").click();
    } else if (event.keyCode == 53) {
        document.getElementById("5").click();
    } else if (event.keyCode == 54) {
        document.getElementById("6").click();
    } else if (event.keyCode == 55) {
        document.getElementById("7").click();
    } else if (event.keyCode == 56) {
        document.getElementById("8").click();
    } else if (event.keyCode == 57) {
        document.getElementById("9").click();
    }
})

