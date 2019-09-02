//Set necessary variables
let a;  //first inputted number
let b; //second inputted number
let screen = ""; //stores numbers that have been entered, and outputs to screen
let htmlScreen = document.getElementById("screen");
//Adds all event listeners to buttons
window.onload = function () {
    let numbers = document.getElementsByClassName("number");
    let clear = document.getElementById("C")
    clear.addEventListener("click", clearScreen);
}

//Adds button value to calculator display
function displayAdd(value) {
    screen += value;
    document.getElementById("screen").innerHTML = screen;
}

//Clears calculator screen
function clearScreen() {
    document.getElementById("screen").innerHTML = "0";
    screen = "";
}

//Adds two numbers
function add(a, b) {
    return a + b;
}

//Subtracts one number from another
function subtract(a, b) {
    return a - b;
}

//Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

//Divides one number by another
function divide(a, b) {
    return a / b;
}

//Calls add, subtract, multiply, or divide functions based on input
//function operate(htmlScreen) {
   //let arr = Array.from(htmlScreen);
    //let num1 = Number(arr[0]);
    
    //console.log(arr);
    // if (op == "+") {
    //     return add(a, b);
    // } else if (op == "-") {
    //     return subtract(a, b);
    // } else if (op == "x") {
    //     return multiply(a, b);
    // } else if (op == "/") {
    //     return divide(a, b);
    // } else {
    //     document.getElementById("screen").innerHTML = "Invalid operator";
    // }
//}