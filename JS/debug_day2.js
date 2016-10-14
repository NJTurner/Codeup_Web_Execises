/*** Created by NicholasTurner on 10/14/16.*/
'use strict';

/* How many times a lucky number is repeated for every 100 customers? */
var luckyNumber, totalTimesGenerated, numberCounter, count0 = 0, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0;
var i = 1;
var counters = [0, 0, 0, 0, 0, 0];
while (i <= 100) {
    luckyNumber = Math.floor(Math.random() * 6);
    counters[luckyNumber]++;
    i++;
   /* switch (luckyNumber) {//can remove switch with array.  counters[luckyNumber]++;
       case 0:
            count0++;
            //counters[0]++;
            break;
        case 1:
            count1++;
            //counters[1]++;
            break;
        case 2:
            count2++;
            //counters[2]++;
            break;
        case 3:
            count3++;
            //counters[3]++;
            break;
        case 4:
            count4++;
            //counters[4]++;
            break;
        case 5:
            count5++;
            //counters[0]++;
            break;*/
    }
    counters.forEach(function(counter, i){
        console.log(i + " appeared " + counter + " times.")
    });
/*console.log("0 appeared " + count0 + " times");
console.log("1 appeared " + count1 + " times");
console.log("2 appeared " + count2 + " times");
console.log("3 appeared " + count3 + " times");
console.log("4 appeared " + count4 + " times");
console.log("5 appeared " + count5 + " times");*/

// The output should be something like
// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

//Luis' Code


//Array Method
// The total should be 100
/*var luckyNumberArray = [];
 while (i <= 100) {
 luckyNumber = Math.floor(Math.random() * 6);
 luckyNumberArray.push(luckyNumber);
 i++;
 }
 for (var j = 0; j < 6; j++) {
 numberCounter = 0;
 luckyNumberArray.forEach(function(element, index, array) {
 if (element == j) {
 numberCounter++;
 }
 });
 console.log(j + " appeared " + numberCounter + " times");
 }*/