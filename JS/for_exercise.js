/** Created by NicholasTurner on 10/7/16.*/
'use strict';
//for(var i = 1; i <= 10; i+++)  the (i <= 10)condition makes the loop reiterate 10 times
for(var i = 1; i <= 10; i++) {
    var j = i.toString();
    if(i < 10) {
        console.log(j.repeat(i))
    } else {
        console.log("0".repeat(i));
    }
}

// //Ryan Code
// //how to convert a number into a string with javascript - google
// for(var i = 1; i <= 10; i++) {
//     var string = i.toString();
//     //how to get the last character of a string using javascript
//     var lastCharacter = string.substring(string.length - 1);
// //both valid    var lastCharacter = string[string.length-1];
//    // how to repeat a string n number of times in javascript
//     console.log(lastCharacter.repeat(i));
// }

//2.
var f = Math.floor(Math.random() * 10) + 1;
for(var g = 1; g <= 10; g++) {
    var answer = f * g;
    console.log(f + "x" + g + "=" + answer);
}

// //Ryan Code
// var rand = Math.floor(Math.random() * 10) + 1;
// for(var i = 1; i <=10; i++) {
//     console.log(rand + "x" + i + "=" + (rand * i));
// }


//3.
for(var o = 1; o <= 10; o++) {
var k = Math.floor(Math.random() * 181) + 20;
    if (k % 2 == 0) {
        console.log(k + " is even.");
    } else {
        console.log(k + " is odd.")
    }
}

// //Ryan Code
// for(var i = 1; i <= 10; i++) {
//     //Math.ceil(Math.random() * (ending-starting) + starting; Math.ceil rounds up.
//     var rand = Math.ceil(Math.random() *200) + 20;
//     //whatever  %  2 == 0 means no remainder which means even
//     if(rand % 2 == 0) {
//         console.log(rand + " is even.");
//     } else {
//         console.log(rand + " is odd.");
//     }
// }

//4.
for(var x = 100; x >= 5; x -= 5) {
    console.log(x);
}

// //Ryan Code
// for(var i = 100; i >= 5; i -=5) {
//     console.log(i)
// }