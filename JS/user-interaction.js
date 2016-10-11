"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var userName, likesPizza;
do {
    userName = prompt("What is your name?");
} while (userName == null || userName.trim() == '');

alert("Hello " + userName + "!");

likesPizza = confirm("Do you like pizza, " + userName + "?");
    if(likesPizza == true){
        alert("Awesome, I like pizza too")
    } else {
        alert("That's weird, I thought everybody liked pizza")
    }
