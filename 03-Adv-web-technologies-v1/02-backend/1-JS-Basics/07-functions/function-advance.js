//Passing functions to other functions as parameters
//called Higher Order Functions

// function laught() {
//   console.log("Ha ha ha");
// }

// function myFunction(value) {
//   value();
//   value();
// }

// myFunction(laught);

// ====================================================================================================================

//Function Expression

// let greet = function () {
//   console.log("Good Morning!");
// };

// greet();

// ====================================================================================================================

// A function that returns another function
//called Higher Order Functions

// function createMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// // Call the createMultiplier function and assign the returned function to a variable
// let double = createMultiplier(2);

// // Use the returned function to perform a calculation
// console.log(double(6)); // Output: 12

// ====================================================================================================================

//Arrow Functions ES6
// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwoNumbers(5, 4));

// ====================================================================================================================

//Arrow Functions ES6
//Implicit return

// const addTwoNumbers = (num1, num2) => num1 + num2;

// console.log(addTwoNumbers(5, 4));

// ====================================================================================================================

//Arrow Functions ES6
//One parameter Syntex

// const makeTwice = num => num;
// const makeTwice = (num) => num * num;

// console.log(makeTwice(6));
