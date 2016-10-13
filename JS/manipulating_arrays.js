/**
 * Created by NicholasTurner on 10/13/16.
 */
'use strict';

var daysOfTheWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday'
];

// //add elements
// daysOfTheWeek.push("Friday"); //add to the end
// daysOfTheWeek.unshift("Sunday"); //add to the beginning
//
// //Remove
// var removed = daysOfTheWeek.pop(); // remove from the end
// daysOfTheWeek.shift(); //remove from the beginning
//
// console.log(daysOfTheWeek.indexOf("Wednesday"));

var removed = daysOfTheWeek.splice(1, 2); //.splice(starting index#, number of spaces being removed)

daysOfTheWeek.splice(2, 0, "Friday", "Saturday"); //add
daysOfTheWeek.splice(0, 1, "Sunday", "Sunday"); //replacing

daysOfTheWeek.reverse(); //Reverse
daysOfTheWeek.sort(); //Sorting

console.log(removed);
console.log(daysOfTheWeek);