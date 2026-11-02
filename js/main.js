"use strict";
console.log(8 % 3);

console.log({} && [] && function () {} && 0);

// AND return first false and last true
// OR  return first true and last false

console.log(5 * 8);
console.log(8 / 0);
console.log(-8 / 0);
console.log(8 * "A");
console.log(typeof (8 * "A"));

try {
  console.log(first);
} catch (error) {
  console.warn(error.message);
} finally {
  console.log("I am finally");
}

var dayNum = 1;

switch (dayNum) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
  case 3:
    console.log("Sunday OR Monday");
    break;
  default:
    console.log("Not valid number");
}

console.log(isNaN(4));

function getRectArea(x, y) {
  if (isNaN(x) || isNaN(y)) {
    throw "Error input";
  } else {
    console.log(x * y);
  }
}

try {
  getRectArea(5, "E");
} catch (e) {
  console.error(e);
}

p = 6;

console.log(p);
