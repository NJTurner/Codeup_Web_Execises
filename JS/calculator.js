/*** Created by NicholasTurner on 10/17/16.*/
'use strict';

var equals = document.getElementById("equals");
var clearButton = document.getElementById("clear");
var leftInput = document.getElementById("inputOne");
var rightInput = document.getElementById("inputTwo");
var operator = document.getElementById("operand");
var result = document.getElementById("answer");
var number = document.getElementsByClassName("number");
var operand = document.getElementsByClassName("operand");
var decimalButton = document.getElementById("decimalButton");
var plusMinus = document.getElementById("negative");
var squareRoot = document.getElementById("squareroot");

//input 1 and 2 with number buttons
function numberClicked() {
    if (operator.value == "") {
        leftInput.value += parseFloat(this.innerHTML)
    } else {
        rightInput.value += parseFloat(this.innerHTML)
    }
}
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', numberClicked);
}
//Operator Input
function operatorClicked() {
    if (operator.value == "") {
        operator.value = (this.innerHTML);
    } else {
        operator.value = (this.innerHTML);
    }
}
for (var j = 0; j < operand.length; j++) {
    operand[j].addEventListener('click', operatorClicked);
}
//math operation -> equals
function doMath() {
    if (operator.value == "+") {
        result.value = (parseFloat(leftInput.value) + parseFloat(rightInput.value));
    } else if (operator.value == "-") {
        result.value = (parseFloat(leftInput.value) - parseFloat(rightInput.value));
    } else if (operator.value == "*") {
        result.value = (parseFloat(leftInput.value) * parseFloat(rightInput.value));
    } else if (operator.value == "/") {
        // Return Error when dividing by zero
        if (rightInput.value == 0) {
            result.value = "Error";
        } else {
            result.value = (parseFloat(leftInput.value) / parseFloat(rightInput.value));
        }
    }
}
equals.addEventListener('click', doMath);

//Clear button
function clearButtonClick() {
    var elements = [];
    elements = document.getElementsByClassName("input");

    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}
clearButton.addEventListener('click', clearButtonClick);

//decimal point bonus
function insertDecimal() {
    var selection = this.getAttribute('value');
    console.log(selection);
    var activeScreen;
    if (operator.value == "") {
        activeScreen = leftInput;
    } else {
        activeScreen = rightInput;
    }
    if (!activeScreen.value.includes(".")) {
        if (activeScreen.value == "") {
            activeScreen.value = 0 + selection;
        } else {
            activeScreen.value += selection;
        }
    }
}
decimalButton.addEventListener('click', insertDecimal);

//positive/negative
function posiNegativeButtonClick() {
    var selection = this.getAttribute('value');
    var activeScreen;
    if (operator.value == "") {
        activeScreen = leftInput;
    } else {
        activeScreen = rightInput;
    }
    if (activeScreen.value > 0) {
        activeScreen.value = "-" + activeScreen.value;
    }
    else if (activeScreen < 0) {
        activeScreen.value = selection * (-1);
    }
    else if (activeScreen == 0) {
        activeScreen.value = activeScreen.value;
    }
}
plusMinus.addEventListener('click', posiNegativeButtonClick);

//Square root
function sqroot() {
    var activeScreen;
    var squared;
    if (operator.value == "") {
        activeScreen = leftInput;
    } else {
        activeScreen = rightInput;
    }
    var number = activeScreen.value;

    if (number < 0) {
        squared = "Error";
    } else {
        squared = Math.sqrt(number);
    }
    activeScreen.value = squared
}
squareRoot.addEventListener('click', sqroot);

//Percent Button
