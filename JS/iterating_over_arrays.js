/*** Created by NicholasTurner on 10/12/16.*/
'use strict';
function isEven(number) {
    return number % 2 == 0;
}
var newArray, arrayOfEvens, sum, total, newArra, list, uppercaseArray;
var arrayOfNumbers = [1, 2, 3, 4, 5];
for (var i = 0; i < arrayOfNumbers.length; i++) {
    console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
}

arrayOfNumbers.forEach(function (element, index, array) {
    console.log("The element at index " + index + " is " + element);
});

//Mapping: How we use forEach to map the same function to every single element in an array
newArray = [];
[1, 2, 3, 4, 5].forEach(function (element, index, array) {
    newArray.push(element + 1);
});
console.log(newArray);
//Filtering: to filter desired elements from an array, or operate only conditionally on specific elements
arrayOfEvens = [];
[1, 2, 3, 4, 5].forEach(function (element, index, array) {
    if (isEven(element)) {
        arrayOfEvens.push(element);
    }
});
console.log(arrayOfEvens);

//Reduce: to reduce the values in an array to a single value or expression.  Think of summing all the numbers in an array to a single number
sum = 0;
[1, 2, 3, 4, 5].forEach(function (element, array) {
    sum += element;
});
console.log("The sum is " + sum);


//Use a forEach in each function you build
//Exercise 1
//Write a function that returns a new array of strings with the first letter uppercased.  Take an array of strings containing
// names in lower case and uppercase only the first character.  Is this operation a type of map, filter or reduce usage of a forEach
//newArray should be ['John', 'Paul', 'Ringo', 'George', 'Yoko'];
var names = ['john', 'paul', 'ringo', 'george', 'yoko'];
// function findFirstLetter(string) {
//     return string.substring(0, 1)
// }
// uppercaseArray = [];
// function uppercaseFirstLetterInEachString(array) {
//     array.forEach(function (element, index, array) {
//         var capitalizedLetter = element.replace(findFirstLetter(element), findFirstLetter(element).toUpperCase());
//         return uppercaseArray.push(capitalizedLetter);
//     });
// }
// // uppercaseArray = [];
// // ['john', 'paul', 'ringo', 'george', 'yoko'].forEach(function(element, index, array){
// //     var capitalizedLetter = element.replace(findFirstLetter(element), findFirstLetter(element).toUpperCase());
// //     uppercaseArray.push(capitalizedLetter);
// // });
// console.log(uppercaseArray + " and this is a mapping usage of a forEach");
// console.log(uppercaseArray);
// console.log(uppercaseFirstLetterInEachString(names));

//Ryan Code
function capitalizeFirstLetterOfEachString(arrayOfStrings) {
    arrayOfStrings.forEach(function (string, index) {
        var firstLetterCapitalized = string[0].toUpperCase();
        var restOfString = string.substring(1, string.length);
        var fullString = firstLetterCapitalized + restOfString;
        arrayOfStrings[index] = fullString;
    });
    return arrayOfStrings;
}
names = capitalizeFirstLetterOfEachString(names);
console.log(names);


//Exercise 2
//Write a function that takes an array of number 1-10 and returns the product of all the number.  Is this a map, filter or reduce
//usage of the forEach.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

total = 0;
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (element, array) {
    total += element;
});
console.log("The total is " + total + ", and this is a Reduce usage of a forEach");


//Exercise 3
//Write a function that returns a string containing the HTML necessary for an unordered list with an <li> for each
//person on your names array is this a type of map, filter, or reduce usage of the forEach.

// function createUnorderedList(items){
//     var list = '<ul>';
//
//     for(i = 0; i < items.length; i++){
//         list += '<li>' + items[i] + '</li>'
//     }
//     list +='</ul>';
//
//     return list;
// }
// newArra=[];
// names.forEach(createUnorderedList(elements, index, array){
//     newArra.push(element);
// }
// console.log(newArra + " and this is a Mapping usage of a forEach");