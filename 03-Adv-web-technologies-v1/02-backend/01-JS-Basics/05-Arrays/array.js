const student = ["Noaman", 22, 3.45, "lahore"];
const students = [
  ["Noaman", 22, 3.45, "lahore"],
  ["Ali", 21, 3.21, "Faisalabad"],
  ["Talha", 19, 2.45, "Karachi"],
  ["Hamza", 24, 3.9, "Chiniot"],
];

//Slice vs Splice --------------------------------------------

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const newArray1 = numbers.slice(1, 3);

// console.log("newArray1 = " + newArray1);
// console.log("numbers = " + numbers);

const newArray2 = numbers.splice(1, 3);

// console.log("newArray2 = " + newArray2);
// console.log("numbers = " + numbers);

const team = ["Fakhar", "Babar", "Rizwan"];
const bowlers = ["Shaheen", "Haris", "Naseem"];

// team.push(bowlers);

// console.log(team);

// const newTeam = team.concat(bowlers);
// console.log(newTeam);

//Spread operator ------------------------------------------
const newTeam2 = [...team, ...bowlers];
// console.log(newTeam2);

//Destructring elements from array --------------------------
const vehicles = ["mustang", "f-150", "fortuner"];

// const [car, truck, suv] = vehicles;
// const [car, suv] = vehicles;

// console.log(suv);

// When destructuring arrays, the order that variables are declared is important.

// If we only want the car and suv we can simply leave out the truck but keep the comma:

// const [car, , suv] = vehicles;
// console.log(suv);

// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

// console.table([add, subtract, multiply, divide]);

//Array.of()    .......    Array.from()

//Why use const instead of let while declaring arrays
//Primitive store in Stack Memory
//Non-Primitive store in Heap Memory

const arr1 = [1, 2, 3];
const arr2 = arr1;
