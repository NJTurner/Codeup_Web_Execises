/**
 * Created by NicholasTurner on 10/6/16.
 */
// 1.
var gradeOne = 70;
var gradeTwo = 80;
var gradeThree = 95;
var gradeNumber = 3;

var average = (gradeOne + gradeTwo + gradeThree) / gradeNumber;

if (average > 80) {
    console.log("You're awesome!")
} else {
    console.log("You need to practice more")
}

// 2.
var hebOffer = 200;
var cameronPurchase = 180;
var ryanPurchase = 250;
var georgePurchase = 320;
var discount = .2;

var cameronTotal = cameronPurchase - (cameronPurchase * discount);
var ryanTotal = ryanPurchase - (ryanPurchase * discount);
var georgeTotal = georgePurchase - (georgePurchase * discount);

if (cameronPurchase > 200) {
    console.log("Cameron originally paid $" + cameronPurchase + ", after the discount, he paid $" + cameronTotal);
} else {
    console.log("Cameron didn't spend enough for a discount");
}

if (ryanPurchase > 200) {
    console.log("Ryan originally paid $" + ryanPurchase + ", after the discount, he paid $" + ryanTotal);
} else {
    console.log("Ryan didn't spend enough for a discount");
}

if (georgePurchase > 200) {
    console.log("George originally paid $" + georgePurchase + ", after the discount, he paid $" + georgeTotal);
} else {
    console.log("George didn't spend enough for a discount");
}


// 3.
/*var flipACoin = Math.floor(Math.random()* 2);
    console.log(flipACoin)
if (flipACoin == 0) {
    console.log("Buy a Car!")
} else {
    console.log("Buy a House!")
}*/

var flipACoin = Math.floor(Math.random()* 2);
var message = (flipACoin == 0) ? "Buy a Car!" : "Buy a House!";
    console.log(message);