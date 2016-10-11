/**
 * Created by NicholasTurner on 10/11/16.
 */

(function () {
"use strict";

var myNameIs = 'Nick'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

//1.
function sayHello(name) {
    return "Hello, my name is " + name;
}
console.log(sayHello(myNameIs)); //add console log to read out

//2.
var message;
function isOdd(number) {
    var result = number % 2;
    (result !== 0) ? message = number + " is an odd number": message = number + " is not an odd number";
    return message;
    // if (result !== 0) {
    //     message = number + " is an odd number";
    //     return message;
    // } else {
    //     message = number + " is not an odd number";
    //     return message;
    // }
}

function isNumeric(input) {
    return !isNaN(input)
}


function add(a, b) {
    if (isNumeric(a) && (isNumeric(b))) {
        return a + b;
    } else {
        return "parameters must both be numeric";
    }
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Using these functions and only these functions
// write square(number)
//
// write sumOfSquares(a, b)
// squares a, squares b
// returns the sum of those numbers

function square(number) {
    return multiply(number, number);
}

function sumOfSquares(a, b){
    return add(square(a), square(b));
}

})();