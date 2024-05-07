///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++  Sync Code    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const prepareFood = () => {
//   console.log("Food is ready.");
// };

// prepareFood();

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++  Async Code    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const prepareFood = () => {
//   setTimeout(() => {
//     console.log("Food is ready.");
//   }, 3000);
// };

// prepareFood();

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = () => {
//   setTimeout(() => {
//     console.log("Pizza is ready.");
//   }, 5000);
// };

// preparePizza();

// const prepareFrenchToast = () => {
//   setTimeout(() => {
//     console.log("French Toast is ready.");
//   }, 3000);
// };

// prepareFrenchToast();

// const prepareCoffee = () => {
//   setTimeout(() => {
//     console.log("Coffee is ready.");
//   }, 2000);
// };

// prepareCoffee();

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      Call backs   ++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = (callback) => {
//   setTimeout(() => {
//     console.log("Pizza is ready.");
//     callback();
//   }, 5000);
// };

// const prepareFrenchToast = (callback) => {
//   setTimeout(() => {
//     console.log("French Toast is ready.");
//     callback();
//   }, 3000);
// };

// const prepareCoffee = (callback) => {
//   setTimeout(() => {
//     console.log("Coffee is ready.");
//     callback();
//   }, 2000);
// };

// preparePizza(() => {
//   prepareFrenchToast(() => {
//     prepareCoffee(() => {});
//   });
// });

// preparePizza(() => {
//   console.log("Pizza Callback");
//   prepareFrenchToast(() => {
//     console.log("French Toast Callback");
//     prepareCoffee(() => {
//       console.log("Coffee Callback");
//     });
//   });
// });

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      Promises   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      .then()   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Pizza is ready.");
//     }, 5000);
//   });

//   return promise;
// };

// const prepareFrenchToast = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("French Toast is ready.");
//     }, 3000);
//   });

//   return promise;
// };

// const prepareCoffee = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Coffee is ready.");
//     }, 2000);
//   });

//   return promise;
// };

// let promiseTask = preparePizza();
// console.log(promiseTask);
// console.log("Hello");

// promiseTask.then((value) => {
//   console.log(value);
// });

// preparePizza().then((value) => {
//   console.log(value);
// });

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      Promises   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      .then()   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      .catch()   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = () => {
//   let promise = new Promise((resolve, reject) => {
//     let isGassLoadShedding = false;

//     setTimeout(() => {
//       if (isGassLoadShedding) {
//         reject("Sorry Pizza can't be prapared. Gass is gone.");
//       } else {
//         resolve("Pizza is ready.");
//       }
//     }, 5000);
//   });

//   return promise;
// };

// const prepareFrenchToast = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("French Toast is ready.");
//     }, 3000);
//   });

//   return promise;
// };

// const prepareCoffee = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Coffee is ready.");
//     }, 2000);
//   });

//   return promise;
// };

// let promise = preparePizza();
// // console.log(promise);

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log("Error = " + err);
//   });

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      Promises   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      .then().then().then().then()   +++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++      .catch()   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = () => {
//   let promise = new Promise((resolve, reject) => {
//     let isGassLoadShedding = false;

//     setTimeout(() => {
//       if (isGassLoadShedding) {
//         reject("Sorry Pizza can't be prapared. Gass is gone.");
//       } else {
//         resolve("Pizza is ready.");
//       }
//     }, 5000);
//   });

//   return promise;
// };

// const prepareFrenchToast = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("French Toast is ready.");
//     }, 3000);
//   });

//   return promise;
// };

// const prepareCoffee = () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Coffee is ready.");
//     }, 2000);
//   });

//   return promise;
// };

// let promise = preparePizza();
// // console.log(promise);

// promise
//   .then((value) => {
//     console.log(value);
//     return prepareFrenchToast();
//   })
//   .then((frenchToastValue) => {
//     console.log(frenchToastValue);
//     return prepareCoffee();
//   })
//   .then((coffeeValue) => {
//     console.log(coffeeValue);
//   })
//   .catch((err) => {
//     console.log("Error = " + err);
//   });

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++   Handling Promises with   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++   Async await   +++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = () => {
//   let promise = new Promise((resolve, reject) => {
//     let isGassLoadShedding = false;

//     setTimeout(() => {
//       if (isGassLoadShedding) {
//         reject("Sorry Pizza can't be prapared. Gass is gone.");
//       } else {
//         resolve("Pizza is ready.");
//       }
//     }, 5000);
//   });

//   return promise;
// };

// const prepareFrenchToast = (callback) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("French Toast is ready.");
//     }, 3000);
//   });

//   return promise;
// };

// const prepareCoffee = (callback) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Coffee is ready.");
//     }, 2000);
//   });

//   return promise;
// };

// const startProcess = async () => {
//   const pizzaValue = await preparePizza();
//   console.log(pizzaValue);

//   const frenchToastValue = await prepareFrenchToast();
//   console.log(frenchToastValue);

//   const coffeeValue = await prepareCoffee();
//   console.log(coffeeValue);
// };

// startProcess();

// console.log("Program Completed");

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++   Handling Promises with   +++++++++++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++   Async await   +++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++   Handling Errors with   +++++++++++++++++++++++++++++++++++++++++++++++
///+++++++++++++++++++++++++++   try { } and catch(){ }   +++++++++++++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Program Started");

// const preparePizza = () => {
//   let promise = new Promise((resolve, reject) => {
//     let isGassLoadShedding = false;

//     setTimeout(() => {
//       if (isGassLoadShedding) {
//         reject("Sorry Pizza can't be prapared. Gass is gone.");
//       } else {
//         resolve("Pizza is ready.");
//       }
//     }, 5000);
//   });

//   return promise;
// };

// const prepareFrenchToast = (callback) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("French Toast is ready.");
//     }, 3000);
//   });

//   return promise;
// };

// const prepareCoffee = (callback) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Coffee is ready.");
//     }, 2000);
//   });

//   return promise;
// };

// const startProcess = async () => {
//   try {
//     const pizzaValue = await preparePizza();
//     console.log(pizzaValue);

//     const frenchToastValue = await prepareFrenchToast();
//     console.log(frenchToastValue);

//     const coffeeValue = await prepareCoffee();
//     console.log(coffeeValue);
//   } catch (error) {
//     console.log("Error is = " + error);
//   }
// };

// startProcess();

// console.log("Program Completed");

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////fetch API////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// const githubAPI = async () => {
//   const res = await fetch(
//     "https://api.github.com/users/Noaman-Saleem-Portfolio"
//   );
//   //   console.log(res);

//   const data = await res.json();
//   console.log(data);
// };

// githubAPI();

// fetch("https://api.github.com/users/Noaman-Saleem-Portfolio")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// console.log("Program Completed");

//////////////////////////////////////////////////
// Quiz
//////////////////////////////////////////////////
//Home assignment
//Fetch data from below mentioned API
//1- Using .then().catch()
//2- Using async await ---> try{}catch(err){}
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

////////////And Also //////////////////////////
// const student = ["Noaman", 22, 3.45, "lahore"];

// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

//Home task write the above same loop using while loop
