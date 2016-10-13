/*** Created by NicholasTurner on 10/13/16.*/
'use strict';

//Homework
//1.
//Take an array of strings containing all the states
//return only states that start with the letter T
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
//Luis code
//loops: when we don't know the exact number of iterations
// while, do while
//we know how many times we'll repeat a group of operations
//for, for each
//filter
function startsWithT(element){//make a separate function to simplify problem.  can be simplified further
    return element[0] == 'T';
}
function statesThatStartWithT(elements) { //if you don't want to use states, change states to elements
    var i, statesWithALetterTAtTheBeginning = [];
    for (i = 0; i < elements.length; i++) {
        if (startsWithT(elements[i])) {//Does this one start with a T?
            // if (elements[i][0] == 'T'){ DOes this one Start with a T?
            statesWithALetterTAtTheBeginning.push(elements[i]);
        }
    }
    return statesWithALetterTAtTheBeginning;
}
console.log(statesThatStartWithT(states));
//make another function that returns a new array of all the states >= two "s" characters
function statesWith2OrMoreS(states) { //input of a function
    var i, statesWithMoreThan2LetterS = [];
    for (i = 0; i < states.length; i++) {
        if (states[i].indexOf("s") < states[i].lastIndexOf("s")) {//does this contain more than one letter s
            statesWithMoreThan2LetterS.push(states[i]);
        }
    }
    return statesWithMoreThan2LetterS; //output of a function
}
console.log(statesWith2OrMoreS(states));

//2. make a function that squares each number on an array.  take an array of numbers and make a forEach that multiplies each number by itself
//function should return the arrayOfSquares
var originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function squareNumbers(array) {
//     var arrayOfSquares = [];
//     array.foreach(function (number) {
//         var len = array.length;
//         if (i < len) {
//             arrayOfSquares.push(array[i] * array[i]);
//         }
//         return arrayOfSquares;
//     });
//      arrayOfSquares = squareNumbers(originalNumbers);
//     console.log(arrayOfSquares);
// }

//Luis Code: Mapping
function squares(numbers){
    var squared = [];
    numbers.forEach(function (number){
    squared.push(number * number);
    });
    return squared;
}
console.log(squares(originalNumbers));

//3.
//Make a function that takes an array of lowercase names.  Uppercase the first letter of each name
//and returns only the names that start with "Y".

//Luis Code: mapping/filter
var beatlesNames = ['ringo', 'john', 'paul', 'george', 'yoko'];
var namesWithY = [];
function lowercaseNamesWithY(names){
    names.forEach(function(name){
        if(name[0].toUpperCase() == 'Y'){
            namesWithY.push(name.substring(0,1).toUpperCase() + name.substring(1));
        // namesWithY.push(name.replace(name[0], name[0].toUpperCase()));
        }
    });
    return namesWithY
}
console.log(lowercaseNamesWithY(beatlesNames));

//4.
//Write a function that takes an array of number 1-10 and returns the sum of only the numbers divisible by 3
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0, threes;

function loveTheThrees(array) {
    return array.filter(function (a) {
        return !(a % 3);
    });
}

threes = loveTheThrees(numbers);
console.log(threes);
sum = 0;
threes.forEach(function (element, array) {
    sum += element;

});
console.log("The sum is " + sum);

//Luis Code
function onlyDivisibleByThree(numbers){
    var sum = 0;
    numbers.forEach(function(number){
        if (number % 3 == 0){
            sum += number;
        }
    });
    return sum;
}
console.log(onlyDivisibleByThree(numbers));