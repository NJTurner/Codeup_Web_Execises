/*** Created by NicholasTurner on 10/11/16.*/
'use strict';

// function average3Grades() {
//     var gradeNumber = 3, sum = 0, average, grade;
//     for(var i = 1; i <= 3; i++) {
//         grade = prompt("What is the student's grade?");
//         sum = parseInt(grade) + sum;
//
//     }
//     average = sum / gradeNumber;
//     console.log(average);
//     if (average >= 80) {
//         alert("You're awesome!");
//     } else {
//         alert("You need to practice more");
//     }
// }

//Ryan Code

function getNumericGrade() {
    var grade = parseInt(prompt("Please input your grade"));
    while(isNaN(grade) || (grade < 0 || grade > 100)){
        grade = parseInt(prompt("Please input your grade as a number"));
        console.log(grade);
        console.log(typeof grade);
    }
    return grade;
}
// function average3Grades() {
//     // If you're gonna do math on a variable, declare and initialize it to a number
//     var total= 0;
//     var grade=0;
//     for(var i = 0; i < 3; i ++) {
//         // get the integer value of the prompt
//         total = total + getNumericGrade()
//         }
//     return total / 3;
// }
// console.log(average3Grades());

//2.

function genericGradesAverage() {
    var total = 0;
    var counter= 0;
    var userWantsToAddAnotherGrade;
    var average;
    do{
        total += getNumericGrade();
        userWantsToAddAnotherGrade = confirm("Do you want to add another grade?");
        counter++;
    } while (userWantsToAddAnotherGrade);

    average = total / counter;
    return average;
}
var finalGrade = genericGradesAverage();
    if(finalGrade >= 80) {
        alert("you're awesome!");
    } else {
        alert("you need some more practice");
    }
//input --> process or sequence of steps-->output
//calling sequence of steps to produce the output prescribed by it's process