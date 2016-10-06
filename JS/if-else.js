/**
 * Created by NicholasTurner on 10/6/16.
 */
// Program
// * Input
// * Process (solution)
// * Output

// 1.


/* if (condition) {
   consequence
 } else {
    alternative
}*/
//Input
var gradeOne = 70; // Assignment
var gradeTwo = 80;
var gradeThree = 95;
var gradeNumber = 3;
//Output
var message; // declaration

// Calculate the average
var average = (gradeOne + gradeTwo + gradeThree) / gradeNumber;

if (average > 80) {
    message = "You're awesome!";
} else {
    message = "You need to practice more";
}
console.log(message);

// 2.
//Inputs
var hebOffer = 200;
var cameronPurchase = 180;
var ryanPurchase = 250;
var georgePurchase = 320;
var discount = .2; // var percent = .8 would work to eliminate the subtraction in calculating the discount
// Calculate the Discount
var cameronTotal = cameronPurchase - (cameronPurchase * discount);
var ryanTotal = ryanPurchase - (ryanPurchase * discount);
var georgeTotal = georgePurchase - (georgePurchase * discount);
//Check if the discount can be applied


if (cameronPurchase > hebOffer) {
    //calculate the discount, can be done inline, cameronTotal = cameronPurchase * percent;
    console.log("Cameron originally paid $" + cameronPurchase + ", after the discount, he paid $" + cameronTotal);
} else {
    //there's no discount, inline again,
    console.log("Cameron didn't spend enough for a discount, he paid $" + cameronPurchase);
}
//calculate the discount

if (ryanPurchase > hebOffer) {
    console.log("Ryan originally paid $" + ryanPurchase + ", after the discount, he paid $" + ryanTotal);
} else {
    console.log("Ryan didn't spend enough for a discount, he paid $" + ryanPurchase);
}

if (georgePurchase > hebOffer) {
    console.log("George originally paid $" + georgePurchase + ", after the discount, he paid $" + georgeTotal);
} else {
    console.log("George didn't spend enough for a discount, he paid $" + georgePurchase);
}
/*output would be console.log(message) if using var message instead of console.log between the function
cameronMessage = "Cameron originally paid $" + cameronPurchase + ", after the discount, he paid $" + cameronTotal
ryanMessage = "Ryan originally paid $" + ryanPurchase + ", after the discount, he paid $" + ryanTotal)
georgeMessage = "George originally paid $" + georgePurchase + ", after the discount, he paid $" + georgeTotal

// Output would be console.log(message) if using var message instead of console.log between the function
console.log(cameronMessage)
console.log(ryanMessage)
console.log(georgeMessage)
There would be NO else in this case, no message saying that they didn't get the discount, output would be Cameron originally paid 180, cameron's total would be 180*/

// 3.
/*var message;

var flipACoin = Math.floor(Math.random()* 2);
    console.log(flipACoin)
if (flipACoin == 0) /* boolean*//* {
    message = "Buy a Car!";
} else {
    message = "Buy a House!";
}
console.log(message);*/

var flipACoin = Math.floor(Math.random()* 2);
var message = (flipACoin == 0) ? "Buy a Car!" : "Buy a House!";
    console.log(message);

/*Luis' Version
 var flipACoin = Math.floor(Math.random()* 2);
 var message = "Buy a House";

 if (flipACoin == 1)  {
    message = "Buy a Car";
 }

 //Output
 console.log(message);
 */