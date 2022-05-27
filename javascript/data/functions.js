// declare the function, name the function parentheses, curly braces, insert function information
function whoAreYou(name, location, subject) {
  //    console.log(`My name is ${name}, I am from ${location}, and my favorite subject is ${subject}.`)
}

// declare the variables
const myName = "Ronnie";
const location = "Detroit";
const subject = "History";

whoAreYou(myName, location, subject); // invoke the function, pass through parameter(s) - function name-make the parentheses touch

// Return function
function addNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addNumbers (1,4)) // space in between function name and parameters

// 3 functions
// 1. Write a function that takes 2 functions and find their difference
// 2. Write a function that multiplies 2 numbers
// 3. Write a function that divides 2nd number by the 1st

function subNum(num1, num2) {
  return num1 - num2;
}

console.log(subNum (10,5))

function multNum(num1, num2) {
  return num1 * num2;
}
console.log(multNum(20, 6));

function divNum(num1, num2) {
  return num2 / num1;
}
console.log(divNum (3,30))

// equality operators

console.log (1=='1') //true, issa number; '==' less strict
console.log (1==='1') //false, issa string;'===' is more strict