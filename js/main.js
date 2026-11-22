let x = [8, 3, 12]
console.log(x)
console.log(...x)


console.log(Math.min(...x))


var y = 0
function increment() {
    console.log(++y)
}

// console.log(increment(5))


// var myFirstInterval = setInterval(increment, 1000)
// setInterval(() => increment(), 1000)


function stopInterval() {
    clearInterval(myFirstInterval)
}

function sayHello() {
    console.log("Hello")
}


var myFirstTimeout = setTimeout(sayHello, 5000)

function stopTime() {
    clearTimeout(myFirstTimeout)
}



// Math
var employees = ["Ali", "Hamza", "Khaled", "Abdulrahman", "Nasser"]

console.log(Math.min(18, 52, 546, 47, 12, 807, 87, 510, 12))
console.log(Math.max(18, 52, 546, 47, 12, 807, 87, 510, 12))
console.log(Math.round(3.7))
console.log(Math.ceil(3.00001))
console.log(Math.floor(3.99999))
console.log(Math.random())
console.log(employees[Math.floor(Math.random() * employees.length)])
console.log(Math.PI)

console.log(Math.abs(-5))
console.log(Math.abs(5))

console.log(Math.exp(5))

console.log(Math.pow(5, 2))
console.log(Math.sqrt(25))

// Number

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)


console.log(isNaN(12 * "dsf"))
console.log(Number.isInteger(45155))


var t = 15.229345

console.log(t.toExponential(2))
console.log(t.toFixed(2))
console.log(t.toPrecision(4))



const d = new Date();


d.setDate(2)
console.log(d)


for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
    console.log(element)
}
console.log("***************")

for (const employee of employees) {
    console.log(employee)
}
console.log("***************")

employees.forEach(function (employee) { console.log(employee) })


// MAP & FOREACH
