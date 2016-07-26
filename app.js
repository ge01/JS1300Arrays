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

/****************************************************
*                The length Property                *
****************************************************/
var fruits = ["Banana", "Orange", "Apple", "Mango" ];
document.getElementById("fruits").innerHTML = fruits.length;

/****************************************************
*               Adding Array Elements               *
****************************************************/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("add-array").innerHTML = fruits;

function addArray() {
  fruits.push("Lemon");
  document.getElementById("add-array").innerHTML = fruits;
}

var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("add-with-length").innerHTML = fruits1;

function addWithLength() {
  fruits1[fruits1.length] = "Lemon";
  document.getElementById("add-with-length").innerHTML = fruits1;
}

/****************************************************
*              Looping Array Elements               *
****************************************************/
var fruits2, text, fLen, i;

fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits2[i] + "</li>";
}
text += "</ul>";
document.getElementById("loop-array").innerHTML = text;

/****************************************************
*                Associative Arrays                 *
****************************************************/
var person2 = [];
person2[0] = "John";
person2[1] = "Doe";
person2[2] = 46;
document.getElementById("assoc-array").innerHTML = person2;

/****************************************************
*              How to Recognize an Array            *
****************************************************/
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("typeof-array").innerHTML = typeof fruits3;

// Solution 1:
document.getElementById("is-array").innerHTML = Array.isArray(fruits3);

// Solution 2:
function isArray(x) {
    return x.constructor.toString().indexOf("is-array2") > -1;
}

// Solution 3:
document.getElementById("inst-array").innerHTML = fruits3 instanceof Array;
