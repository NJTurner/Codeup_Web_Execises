/**
 * Created by NicholasTurner on 10/7/16.
 */
 'use strict';
//While Loops
// Counter
// Accumulator
//Loops block of code
// if condition remains true, loop continues, as soon as false, loop stops.

var i = 1; //counter
// are we don yet? condition question
while (/*condition, returns true*/i < 21) { //start of a block
    console.log(i);
    i++; // increment // no
} // end of block of code

console.log("We're done!");

var targetAmount = 100;
var amountSaved = 0; //accumulator
var j = 0;

while (amountSaved < targetAmount) {
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j++;
}

console.log("I saved $" + amountSaved + ", there were " + j + " repetitions.");

//Do While

var targetAmount1 = 100;
var amountSaved1 = 0; //accumulator
var k = 0;

do{
    amountSaved1 += Math.floor(Math.random() * 10) + 1;
    k++;

} while (amountSaved1 < targetAmount1);

console.log("I saved $" + amountSaved1 + ", there were " + k + " repetitions.");