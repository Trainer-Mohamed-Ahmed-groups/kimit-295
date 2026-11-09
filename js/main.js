"use strict";
var x = 1


// debugger
while (x <= 10) {
  // if (x == 4) { continue; }
  console.log(x)
  x++
}
console.log("*******************")
console.log(x)
console.log("********DO WHILE ***********")


var y = 1;

do {
  console.log(y)
  y++
} while (y <= 10);

console.log("*************** FOR *****************")


for (var i = 1; i <= 10; i++) {
  console.log(i)
}

var employees = ["John", "Doe", "Jane", "Doe"]

for (let index = 0; index < employees.length; index++) {
  const element = employees[index];
  console.log(element)
}


console.log(5 ** 3)


console.log("*".repeat(20))

var myVariable = 50;
console.log(myVariable)


var myVariable = 100
console.log(myVariable)



var testFn = function () {
  console.log("first")
}

testFn()


console.log(5 * "5")
console.log(5 + "5")


console.log(parseInt("66.9"))
console.log(parseFloat("66.9"))
