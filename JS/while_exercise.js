/**
 * Created by NicholasTurner on 10/7/16.
 */
'use strict';
//1.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5
var cones;
var conesLeft = allCones;

console.log("I have " + allCones + " cones to sell.");
do{
    cones = Math.floor(Math.random() * 5) + 1;
    if (cones > conesLeft){
        console.log("Cannot sell you " + cones + " cones, I only have " + conesLeft);
    } else {
        conesLeft = conesLeft - cones;
        console.log(cones + " cones sold...");
    }
} while (conesLeft > 0);
console.log("Yay I sold them all!");

//2.
var i = 2;

while (i <= 65536) {
    console.log(i);
    i= i * 2;
}