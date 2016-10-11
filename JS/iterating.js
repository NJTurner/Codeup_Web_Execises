/**
 * Created by NicholasTurner on 10/11/16.
 */
(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
var names = ['Tom','Jerry', 'Bugs', 'Daffy'];
    // TODO: Create a log statement that will log the number of elements in the names array.
console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
/*go until the end of the array*/
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);

}


//2.
var grades = [100, 80, 90, 80, 50];
function average(grades) {
    //use a for loop to iterate through the array to get the average
    var sum = 0;
    for(var i = 0; i < grades.length; i++){
        sum += grades[i];
    }
    return sum/grades.length;
}

var grade = average(grades);
console.log("You made a grade of " + grade);

})();