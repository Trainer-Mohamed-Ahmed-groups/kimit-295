var myName = "Mohamed",
    lastName = "Ahmed",
    job = "frontend developer and frontend instructor";

console.log(myName);
/**************************** length ************************************/
console.log(myName.length);

/**************************** charAt ************************************/

console.log(myName.charAt(0))
/**************************** charCodeAt ***************************/

console.log(lastName.charCodeAt(0))

/**************************** fromCharCode ************************************/

console.log(String.fromCharCode(65, 88, 65, 120, 67, 78))

console.log(`Your name is ${myName} ${lastName}`)
/**************************** concat ************************************/

console.log(myName.concat(lastName))

/**************************** startsWith ************************************/

console.log(job.startsWith("front"))
/**************************** endsWith ************************************/

console.log(job.endsWith("instructor"))

/**************************** includes ************************************/

console.log(job.includes("and"))

/**************************** indexOf ************************************/
console.log(job.indexOf("f"))
console.log(job.indexOf("z"))

/**************************** lastIndexOf ************************************/
console.log(job.lastIndexOf("frontend"))

/**************************** match ************************************/
console.log(job.match("Front"))
console.log(job.match(/Front/gi))

/**************************** repeat ************************************/
console.log(myName.repeat(5))

/**************************** replace ************************************/

console.log(job.replace("front", "eeeeee"))
console.log(job.replace(/frontend/g, "uuuuuuu"))

// gi
/**************************** search ************************************/
console.log(job.search("developer"))

/**************************** slice ******************VIMP******************/

console.log(job.slice(0, 9))

/**************************** split *********************VIMP***************/

console.log(job.split(" ", 3))
/**************************** substr ************************************/
console.log(myName.substr(1, 3))

/**************************** substring ************************************/
console.log(myName.substring(1, 3))

/**************************** toLowerCase ************************************/

console.log(myName.toLowerCase())

/**************************** toUpperCase ************************************/

console.log(myName.toUpperCase())
/**************************** trim ************************************/

var newJob = "             Front  end         developer             ";

console.log(newJob);
console.log(newJob.trim());


// var arr = newJob.split(" ")
// var result = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element) {
//         result.push(element)
//     }
// }
// console.log(result.join(" "))

// */


/*
JS task

Task 1
    Create an array include some names then check the names starts with letter m or not
    Then print in console   this name starts with letter m
    Use array with some capital and small example ["Mohamed" , "mahmoud" , "Ali" ] want to output mohamed and mahmoud
-------------------------------
*/


// for (let index = 65; index <= 90; index++) {
//     console.log(String.fromCharCode(index))
// }
