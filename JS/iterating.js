/*** Created by NicholasTurner on 10/11/16.*/
    "use strict";
//
//     // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
// var names = ['Tom','Jerry', 'Bugs', 'Daffy'];
//     // TODO: Create a log statement that will log the number of elements in the names array.
// console.log(names.length);
//     // TODO: Create log statements that will print each of the names array elements individually.
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// /*go until the end of the array*/
// for(var i = 0; i < names.length; i++) {
//     console.log(names[i]);
//
// }
//
//
// //2.
// var grades = [100, 80, 90, 80, 50];
// function average(grades) {
//     //use a for loop to iterate through the array to get the average
//     var sum = 0;
//     for(var i = 0; i < grades.length; i++){
//         sum += grades[i];
//     }
//     return sum/grades.length;
// }
//
// var grade = average(grades);
// console.log("You made a grade of " + grade);
//

//Iterating Arrays Notes/For-Each
// declare and initialize array
var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

// loop through the array and log the values  SAME CODE AS FOR LOOP ABOVE
shapes.forEach(function (element, index, array) {

    // element is the shape name
    // index is the iterator
    // array is the shapes array itself

    console.log('The shape at index ' + index + ' is: ' + element);
});
// var logShape = function(shape, index, array);
// shapes.forEach(logShape);

//
//
// //definition
// function anyFunction(argument1, argument2){
//     console.log(argument1);
//     console.log(argument2);
// }
//
// //execution or function call
// anyFunction(3);
var names, j;
names = ['Barry', 'Jessica', 'Clark'];
//
// names.forEach(function(name, j, names){
//     console.log(names);
//     console.log('The name at index ' + j + ' is: ' + name)
// });

//cannot call forEach for anything that isnt an array

"username".indexOf("name"); // -1
//Filtering
"n"

var logName = function(name, index, array){
    console.log('The name is ' + name);
};
names.forEach(logName);

for(var k = 0; k < names.length;k++) {
    console.log("The name at index " + k + " is " + names[k]);
}


