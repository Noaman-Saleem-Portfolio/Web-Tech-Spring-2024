// function greet()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// addTwoNumbers();

// function addTwoNumbers(number1, number2) {
//   // let result = number1 + number2;
//   // return result;
//   return number1 + number2;
// }

// const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

// ============================================================================================================================

//Truthy and Falsy
// let var1 = "0";
// if (var1) {
//   console.log("I am Truthy");
// } else {
//   console.log("I am falsy");
// }

//Default Value as well
// function loginUserMessage(username) {
//   if (!username) {
//     console.log("PLease enter a username");
//     return;
//   }
//   if (typeof username === "number") {
//     console.log("Please pass string value");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("Noaman"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage(123));

// function loginUserMessage(username = "Anonymous User") {
//   return `${username} just logged in`;
// }
// console.log(loginUserMessage());

// ============================================================================================================================

//passing indefinite numbers of parameters
// function calculateCartPrice(...num1) {
//   console.log(num1);
// }
// function calculateCartPrice(val1, val2, ...num1) {
//   console.log(val1);
//   console.log(val2);
//   console.log(num1);
// }

// calculateCartPrice(200, 400, 500, 2000);

// ============================================================================================================================

//passing objects as parameters
// const user = {
//   username: "noaman",
//   prices: 199,
// };

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price}`
//   );
// }

// handleObject(user);

// handleObject({
//   username: "ali",
//   price: 399,
// });

// ============================================================================================================================

//passing Arrays as parameters

// const myNewArray = [200, 400, 100, 600];

// function returnSecondValue(getArray) {
//   return getArray[1];
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
