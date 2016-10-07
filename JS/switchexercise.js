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
        total = receipt - 60;
        break;
}
console.log(total);


var luckyNumber = Math.floor(Math.random()* 6);
var month;

switch (luckyNumber) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        total = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
}
console.log(month);