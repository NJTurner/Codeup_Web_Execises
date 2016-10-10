/*** Created by NicholasTurner on 10/10/16.*/
'use strict';

var randomNumber = Math.floor((Math.random()*50)+1);
if(randomNumber % 2 == 0) {
    randomNumber++;
}
console.log("Random odd number to skip: " + randomNumber);
for(var i = 1; i <= 50; i++) {
    if (randomNumber == i){
        console.log("Skipping this number!: " + i);
        continue;
   }
    if (i % 2 == 0) {
        //filter out even numbers
        continue;
    }
        console.log("Here is an odd number: " + i);

}
// //Ryan Code after review
// //generate a random number betweeb 1 and 50.  save as your favorit number to skip
// do{
//     var rand = Math.floor((Math.random()*50)+1);
// } while (rand % 2 == 0);
// //use a loop, output if a number is odd, skip if it's your favorite
// //use break when the loop hits 50
// //use continue to "skip"
// for (var k = 1; k <= 50; k++) {
//     if(k == rand) {
//         console.log("skipping" + k + "because it's my favorite number");
//         continue;
//     }
//
//     if(k % 2 != 0) {
//         console.log("Here is an odd number: " + k);
//     }
//    // if (k >=50) {
//      //  break;  this break would be added if the condition was true instead of k <= 50
//     }
// }
