/****************************************************
*                 Creating an Array                 *
****************************************************/
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

/****************************************************
*           Using the JavaScript Keyword new        *
****************************************************/
var cars1 = new Array("Saab", "Volvo", "BMW");
document.getElementById("new-Array").innerHTML = cars1;

document.getElementById("new-Array1").innerHTML = Array;

/****************************************************
*           Access the Elements of an Array         *
****************************************************/
document.getElementById("cars-0").innerHTML = cars[0];

/****************************************************
*               Access the Full Array               *
****************************************************/
document.getElementById("full-array").innerHTML = cars;

/****************************************************
*                 Arrays are Objects                *
****************************************************/
var person = ["John", "Doe", 46];
document.getElementById("array-object").innerHTML = person[0];

var person1 = {
  firstName:"John",
  lastName: "Doe",
  age: 46
};
document.getElementById("object").innerHTML = person1["firstName"];
document.getElementById("object1").innerHTML = person1.firstName;