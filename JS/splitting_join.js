/*** Created by NicholasTurner on 10/13/16.*/
// 'use strict';
// //Split
// var namesString = "Joe,Bob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
//
// console.log(namesArray);
// // ['Joe', 'Bob', 'Sally']
//
//
// //Join
//
// var namesArra = ['Joe', 'Bob', 'Sally'];
//
// console.log(namesArra);
// // ['Joe', 'Bob', 'Sally']
//
// var namesStrin = namesArra.join(',');
//
// console.log(namesStrin);
// // Joe,Bob,Sally

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
        planetsString = planetsArray.join('<br>');
        console.log(planetsString);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var htmlString;
    planetsString = planetsArray.unshift("<ul>");
    planetsString = planetsArray.push("</ul>");
    planetsString = planetsArray.join("<li></li>");
    console.log(planetsString);

    var htmlContent = "<ul>";

    planetsArray.forEach(function(planet){
        htmlContent += "<li>" + planet + "</li>";
    });
    htmlContent += "</ul>";
    console.log(htmlContent);
    //
    htmlString += "<ul>";
    console.log(htmlContent);
    //join
    var htmlString = "<ul><li>";
    htmlString += planetsArray.join("</li><li>");
    htmlString
});