/**
 * Created by NicholasTurner on 10/6/16.
 */
'use strict';

var luckyNumber = Math.floor(Math.random()* 6);
var receipt= 60;
var total;

switch (luckyNumber) {
    case 0:
        total = receipt;
        break;
    case 1:
        total = receipt * .9;
        break;
    case 2:
        total = receipt * .75;
        break;
    case 3:
        total = receipt * .6;
        break;
    case 4:
        total = receipt * .5;
        break;
    case 5:
        total = 0;
        break;
}
console.log("You got number " + luckyNumber + ", your receipt was for $" + receipt + ".  You'll only pay $" + total);


var monthNumber = Math.floor(Math.random()* 12) + 1;
var month;

switch (monthNumber) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
}
console.log("The month number is " + monthNumber + ", so the month is " + month);