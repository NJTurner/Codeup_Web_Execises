/* Created by NicholasTurner on 10/13/16.*/
'use strict';
//OBJECTS
// declaring and setting properties and methods
var car = {};
car.make = "Toyota";
car.model = "Tundra";
car.honk = function () {
    console.log("HONK HONK");
};

//declare and set properties and methods
var myCar = {
    "make": "Toyota",
    "model": {
        "modelName": "Tundra",
        "trimPackage": "nothing special",
        "suspension": "sport"
    },
    "getName": function () {
        return this.model.modelName;
    },
    "honk": function () {
        console.log("HONK");
    },
    "miles": 55000,
    "getMiles": function () {
        return this.miles;
    },
    "setMiles": function (miles) {
        this.miles += parseFloat(miles);
    }
};
console.log(myCar);
//OBJECTS EXERCISE


(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();
    var person = {
        "firstName": "Nick",
        "lastName": "Turner",
        "sayHello": function () {
            alert('Hello, my name is ' + this.firstName + ' ' + this.lastName);
        }
    };
    person.sayHello()
}());