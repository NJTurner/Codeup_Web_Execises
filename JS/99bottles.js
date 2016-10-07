/**
 * Created by NicholasTurner on 10/7/16.
 */
'use strict';

var numberofBottles = 99;
var bottlesLeft = numberofBottles;

console.log(numberofBottles + " bottles of beer on the wall, " + numberofBottles + " bottle of beer.  Take one down pass it around");
do{
    bottlesLeft = bottlesLeft - 1;
    console.log(bottlesLeft + " bottles of beer on the wall, " + bottlesLeft + " bottle of beer.  Take one down pass it around")
} while (bottlesLeft >= 2);
console.log("no more bottles of beer on the wall.  Go buy some.");