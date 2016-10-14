/* Created by NicholasTurner on 10/13/16.*/
'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
//

var books = [
    {
        "title": "JavaScript the Good Parts",
        "author": {
            "firstName": "Doug",
            "lastName": "Crockford"
        }
    },
    {
        "title": "The Hobbit",
        "author": {
            "firstName": "J.R.R",
            "lastName": "Tolkien"
        }
    },
    {
        "title": "The Fellowship of the Ring",
        "author": {
            "firstName": "J.R.R",
            "lastName": "Tolkien"
        }
    },
    {
        "title": "The Two Towers",
        "author": {
            "firstName": "J.R.R",
            "lastName": "Tolkien"
        }
    },
    {
        "title": "The Return of the King",
        "author": {
            "firstName": "J.R.R",
            "lastName": "Tolkien"
        }
    }
];


var book = books[0];

function addBook() {
    var book = {};
    var author = {};
    book.title = prompt("What is the title of your Book?");
    author.firstName = prompt("What is the author's first name");
    author.lastName = prompt("What is the author's last name");
    book.author = author;
    books.push(book);
}
addBook();

books.forEach(function(book, index){
console.log("Book # is " + (index + 1));
console.log("Title: " + book.title);
console.log("Written by " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
});

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
books.forEach(function (element, index, array) {
    console.log("Book #" + (index + 1));
    console.log("Title: " + array[index].title);
    console.log("Author: " + array[index].author.firstName + " " + array[index].author.lastName);
    console.log("---");
});
// end loop here

/*
 var arrayOfPeople = [
 {
 "firstName": "Bob",
 "lastName": "Bobberson",
 "languages": ['HTML', 'CSS', 'JS'],
 "projects": {
 "current": "CRM",
 "last": "ERP",
 "first": "restaurant website"
 }
 },
 {
 "firstName": "Jane",
 "lastName": "Janeway",
 "languages": ['Java', 'Cobol'],
 "current": "EMR",
 "last": "EM App",
 "first": "Insurance Agency App"
 }
 ];
 arrayOfPeople[1].projects.current;*/