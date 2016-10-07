/**
 * Created by NicholasTurner on 10/7/16.
 */
'use strict';

var numberofBottles = 99;
var bottlesLeft = numberofBottles;

console.log(numberofBottles + " bottles of beer on the wall, " + numberofBottles + " bottles of beer.  Take one down pass it around");
do{
    bottlesLeft = bottlesLeft - 1;
    console.log(bottlesLeft + " bottles of beer on the wall, " + bottlesLeft + " bottles of beer.  Take one down pass it around");
} while (bottlesLeft >= 2);
console.log("no more bottles of beer on the wall.  Go buy some.");
// 1 bottles of beer smh

// //Ryans Code
// var bottlesOfBeer = 99;
//
// while(bottlesOfBeer > 0) {
//     //if bottlesOfBeer is 1, then use "bottle" instead of bottles;
//     if(bottlesOfBeer == 2) {
//         console.log(bottlesOfBeer + " bottles of beer on the wall.");
//         console.log(bottlesOfBeer + " bottles of beer!");
//         console.log("Take one down and pass it around...");
//         console.log((bottlesOfBeer - 1) + " bottles of beer on the wall.");
//     } else if (bottlesOfBeer == 1) {
//         console.log(bottlesOfBeer + " bottle of beer on the wall.");
//         console.log(bottlesOfBeer + " bottle of beer!");
//         console.log("Take one down and pass it around...");
//         console.log("no more bottles of beer on the wall.");
//     } else {
//         console.log(bottlesOfBeer + " bottles of beer on the wall.");
//         console.log(bottlesOfBeer + " bottles of beer!");
//         console.log("Take one down and pass it around...");
//         console.log((bottlesOfBeer - 1) + " bottles of beer on the wall.");
//     }
//     bottlesOfBeer--;
// }
//
// console.log("somebody go to the store!");