/*** Created by NicholasTurner on 10/17/16.*/
'use strict';

var one = document.getElementById("1button");
var two = document.getElementById("2button");
var three = document.getElementById("3button");
var four = document.getElementById("4button");
var five = document.getElementById("5button");
var six = document.getElementById("6button");
var seven = document.getElementById("7button");
var eight = document.getElementById("8button");
var nine = document.getElementById("9button");
var zero = document.getElementById("0button");
var plus = document.getElementById("plusbutton");
var minus = document.getElementById("minusbutton");
var timesButton = document.getElementById("timesbutton");
var byButton = document.getElementById("bybutton");
var equals = document.getElementById("equals");
var clearButton = document.getElementById("clear");
var leftInput = document.getElementById("inputOne");
var rightInput = document.getElementById("inputTwo");
var operator = document.getElementById("operant");
var result;
var number = document.getElementsByClassName("number");
var operant = document.getElementsByClassName("operant");

function numberClicked (){
    if (operator.value == "") {
        leftInput.value += parseFloat(this.innerHTML)
    } else {
        rightInput.value += parseFloat(this.innerHTML)
    }
}
for(var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', numberClicked);
}

function operatorClicked (){
    if(operator.value == "") {
        operator.value = (this.innerHTML);
    } else {
        operator.value = (this.innerHTML);
    }
}
    for(var j = 0; j < operant.length; j++){
        operant[j].addEventListener('click',operatorClicked);
    }

    function operation(){
        if(operator.value == "+"){
            result = leftInput.value + rightInput.value;
        } else if(operator.value == "-"){
            result = leftInput.value - rightInput.value;
        } else if(operator.value == "*"){
            result = leftInput.value * rightInput.value;
        } else{
            result = leftInput.value / rightInput.value;
        }
    }
    equals.addEventListener('click', function() {
        leftInput = leftInput.value;
        rightInput = rightInput.value;
        result = leftInput * rightInput;

    },false);


function toLeftInput(button) {
    var buttonClicked = button.value;
    if(toLeftInput){
        leftInput.value += buttonClicked;
        return leftInput.value
    }
}


function clearButtonClick() {
    var elements = [] ;
    elements = document.getElementsByClassName("input");

    for(var i=0; i < elements.length ; i++){
        elements[i].value = "";
    }
}
clearButton.addEventListener('click', clearButtonClick);