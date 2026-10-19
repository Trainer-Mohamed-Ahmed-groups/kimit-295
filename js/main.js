console.log("Hello to Js world");

// Declaration
var x;

// Initialization OR Assignment
x = 5;

// Usage
console.log(x);
//// **************************************** Datatype 1 => Number
var y = 50;
console.log(y);

var t = 5,
  m = 10,
  z = m + t;
console.log(z);

// **************************************** Datatype 2 =>  String
var firstName = "Mohamed",
  lasName = "Ahmed";

//   Concatenation
console.log(firstName + " " + lasName);
console.log(`${firstName}  ${lasName}`);

// var employeeFirstName = prompt("Please enter your name"),
//   employeeLastName = prompt("Please enter your last name");
// console.log("Username is : " + employeeFirstName + "  " + employeeLastName);
// console.log(`Username is : ${employeeFirstName} ${employeeLastName}`);
// One line comment
/*
    Multi lines comment
*/

//// **************************************** Datatype  => undefined
var h;
console.log(h);

//// **************************************** Datatype  => null
console.log(document.getElementById("test"));

//// **************************************** Datatype  => boolean

console.log(5 > 40);

/*********************************************************** */
var firstNumber = Number(prompt("Please enter your first number")),
  lastNumber = +prompt("Please enter your last number");

console.log(firstNumber + lastNumber);
