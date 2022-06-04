// // if statement

// // if  (condition) {}

// // if condition is true, execute code in curly braces

// const myAge = 17;

// if (myAge < 100) {
//     console.log('You are still young!');
// }

// if (myAge < 21) {
//     console.log('You are a baby!');
// }

// const dayOfWeek = ' Friday';

// if (dayOfWeek == 'Friday') {
//     console.log('Today is Friday');
// } else {
//     console.log('Today is NOT Friday :(');
// }

// function tipAmount (billAmount, tipPerc){
//     if (billAmount < 0 ) {
//         return "ERROR! You must use positive bill for this function!"
// } else {
//     return (billAmount * tipPerc) / 100;
// }
// }

// //console.log(tipAmount(-50,25))

//"Length of in Array" Rappers

// const rappers = ['Big KRIT', 'Kendrick', 'Big Sean', 'Wale']

// function arrayLength (array){
//     return array.length
// }

// console.log(arrayLength(rappers))

// function isNumberEvenorOdd(num1){
//     if (num1 % 2 == 0) {
//         return "EVEN!"
//     } else {
//         return "ODD!"
//     }
// }

// console.log(isNumberEvenorOdd (15))

// Write a function that checks users age.

// function legalAge (num2){
//     if (num2 < 18){
//         return "You are not allowed to see this page!";
//     } else if (num2 < 21){  //if user is over 18, this condition is checked. If under 21, code block is checked.
//         return "You can view some of this page.";
//     } else {
//         return "Access gratned";
//     }
// }

// console.log(legalAge(12))
// console.log(legalAge(20))
// console.log(legalAge(37))

// const myPassword = "password123"

// function checkPassword(password) {
//     if (password.length == 0) {
//         return "Please enter a password"
//     } else if (password === myPassword) {
//         return "Welcome, your password was correct.";
//     } else {
//         return "You may not enter. That password is incorrect."
//     }
// }

// console.log(checkPassword('password123'))

// ## FOR LOOPS exectues blocks of code a number of times

// for (statement1; statement2; statement3) {
//     //block of code to execute
// }

//statement1 - declaration that is executed once
//statement2 - condition for executing the block of code
//statement3 - runs after every loop

// for (let i = 0 ; i < 10; i++) {
//     //this will print numbers 0-9
//     console.log(i);
// }

// for (let i = 10 ; i < 20; i++) {
//     //this will print numbers 10-20
//     console.log(i);
// }


// for (let i = 100; i >= 50; i--){
//     console.log(i);
// }

// //this for loop prints even numbers between 1 and 20
// for (i = 1; i < 21; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }


// //Print into an "array" of sorts
// let emptyArray = []

// for (let i = 0; i < 10; i++) {
//     emptyArray.push(i);
// }

// console.log(emptyArray)

// const arrayOfFriends = ["Karen", "George", "Sam", "Bob", "Susan"];

// for (let i = 0; i < arrayOfFriends.length; i++) {
//     console.log(arrayOfFriends[i]); //square brackets
// }

//only print first 2 people in array

// for(let i = 0; i < 2; i++) {
//     console.log(arrayOfFriends[i]);
// }

//PRACTICE PROBLEMS

// // **Even numbers in an array**
// for (i=1 ; i < 33; i++) {
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }


// ** write a for loop that prints the odd numbers between 105 and 125**
//Loop that prints odd numbers between 105 and 125
// for (i = 105; i < 125; i++) {
//     if (i % 2 -! 1){
//         console.log(i)
//     }
// }


// **write a tip calculator function that takes in a billAmount, and a service rating**
// function tipPerc (billAmount, svcRating){
//     if (svcRating == 'good') {
//         return '20'
// } else if (svcRating == 'fair') {
//     return '15' 
// } else if (svcRating == 'bad') { 
//     return '10'
//     }
//     }

// console.log(tipPerc(100, 'fair'))

// write a function that takes in an array of numbers and returns an array of only positive numbers
// function moreThanZero (arr) {
//     let response = []
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] > 0){
//             response.push(arr[i])
//         }
//     }
//     return response
// }
// console.log(moreThanZero([-4, -80, 5, 16]))

// write a function that takes in an array of numbers and returns an array of only even numbers
// function onlyEvens (array){
//     let response = []
//     for (i=0 ; i < array.length; i++) {
//         if (array[i] % 2 == 0){
//             response.push(array[i])
//         }
//     }
//     return response
// }

// console.log(onlyEvens([1, 3, 6, 8, 10]))


// // write a function that takes in an array of numbers and multiplies each number in the array by 5 --UNDEFINED
// function multFive (array) {
//     let response = [] ;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] * 5) {
//             response.push(array[i])
//         }
//     }
// }

// console.log(multFive([3, 7, 10]))

// //Attempt #2 - WINNER
// const multFive = [3, 7, 10, 12]
// for (let i = 0; i < multFive.length; i++) {
//     multFive[i] = multFive[i] * 5;
// }
// console.log(multFive)

// Write a function that prints the mileage of each of the cars in this array of objects -- WINNER
// const myCars = [
//     { make: 'Chevy', model: 'Camaro', year: 2014, mileage: 75000 },
//     { make: 'Ford', model: 'Mustang', year: 2021, mileage: 8000 },
//     { make: 'Dodge', model: 'Challenger', year: 2008, mileage: 125000 },
//     { make: 'Mercedes', model: 'G Wagon', year: 2022, mileage: 500 },
//     ];

// for (let i = 0; i < myCars.length; i++) {
//     console.log(myCars[i].mileage);
// }


