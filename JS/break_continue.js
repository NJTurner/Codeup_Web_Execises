/**
 * Created by NicholasTurner on 10/10/16.
 */
'use strict';

var luckyNumber;
var customerCount = 0;

while (true) {
    luckyNumber = Math.floor(Math.random() * 5) + 1;
    //Number 5, your payment will be zero
    //searching
    if(luckyNumber == 5) {
        break;
    }
    customerCount++;
}
console.log(customerCount);

// filter, filters out things we don't want to show the user
var i, receipt;
for (i = 0; i < 10; i++) {
    receipt = Math.floor(Math.random() * 300);
    if (receipt < 200) {
        continue;
    }
    console.log(receipt); // Only shows amounts that will get a discount
}

//LuisCode previous While exercise
var allCones = Math.floor(Math.random() * 50) + 50;
var cones;
var conesLeft = allCones;

do {
    if (conesLeft <= 0) {
        break; //stops the loop
    }
    cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= conesLeft) {  //if i have enough cones available
        conesLeft -= cones; //sell the cones
        console.log(cones + " cones sold...");
        continue;// skip rest of the loop

    } /*try again*/
        console.log("I cannot sell you " + cones + " cones, I only have " + conesLeft + "...")
    } while (true);
console.log("Yay! I sold them all!");
