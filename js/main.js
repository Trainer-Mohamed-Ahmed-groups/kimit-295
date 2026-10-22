// Reminder to && ||

var car = {
  model: 2025,
  color: "Black",
  isSold: true,
  owner: undefined,
  country: {
    name: "German",
    code: "du",
  },
};
console.log(car.country.name);
console.log(car);
console.log(typeof car);

// Bracket notation

console.log(car["model"]);
console.log(typeof 5);
console.log(typeof "5");
// Dot notation
console.log(car.color);

var person = {
  name: "Ali",
  age: 20,
};

console.log(`Hello ${person.name} your age is ${person.age}`);

// Functions

// VOID function
var showName = function () {
  console.log("Hello I am inside function");
};

// returning value function
var sum = function () {
  return 50 * 80;
};

console.log(sum() * 3);

function sum2(x = 0, y = 0) {
  return x + y;
}

function multi(x = 0, y = 0) {
  return x / y;
}
function sub(x = 0, y = 0) {
  return x - y;
}
function division(x = 0, y = 0) {
  return x * y;
}

console.log(sum2(5, 12));
console.log(sum2(5, 5));
console.log(sum2());
console.log(sum2(5));

console.log(undefined + undefined); // NAN => Not a number
console.log("*********************");
// var input1 = +prompt("Please enter number one"),
//   input2 = +prompt("Please enter number 2");

// console.log(sum2(input1, input2));
// console.log(multi(input1, input2));
// console.log(sub(input1, input2));
// console.log(division(input1, input2));
console.log("*********************");
///////////////////////////////////////////////////////////////////////////
var items = [
  "Mongo",
  10,
  { name: "Mohamed" },
  true,
  [11, 52],
  "Apple",
  "Orange",
  "Banana",
];

console.log(items);
console.log(typeof items);
console.log(items[1]);
console.log(items[3]);
console.log(items[5]);
console.log(items.length);
console.log(items.at(-1));
console.log(items[4][1]);

var item2 = new Array(1, 5, 9);
console.log(item2);
/////////////////////////////////////////////////
if (5 > 4) {
  console.log("Ok");
} else {
  console.log("No");
}
console.log("*******************");
var x = 5;
if (x === 5) {
  console.log("OK");
} else {
  console.log("NO");
}

console.log("*******************");
// MOD
console.log(9 % 3);
console.log(14 % 2);

var y = 10;

// y = y + 1;
// y++;

console.log(y++);
console.log(++y);

var z = 100;

// z = z + 20;
z += 20;
console.log(z);

console.log(!true);

if (5 > 4 || 5 > 40) {
  console.log("Hello");
}

// Reminder to && ||
