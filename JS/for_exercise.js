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

//2.
var f = Math.floor(Math.random() * 10) + 1;
for(var g = 1; g <= 10; g++) {
    var answer = f * g;
    console.log(f + "x" + g + "=" + answer);
}


//3.
for(var o = 1; o <= 10; o++) {
var k = Math.floor(Math.random() * 181) + 20;
    if (k % 2 == 0) {
        console.log(k + " is even");
    } else {
        console.log(k + " is odd")
    }
}

//4.
for(var x = 100; x >= 5; x -= 5) {
    console.log(x);
}
