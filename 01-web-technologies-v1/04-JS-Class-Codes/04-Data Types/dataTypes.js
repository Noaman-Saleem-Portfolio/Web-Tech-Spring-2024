// 1. primirive data types

//Number
let salary = 90000;
// console.log(typeof salary);

//string
let name = "Noaman";
// console.log(name);
// console.log(typeof name);

//boolean
let isLoggedIn = true;
// console.log(typeof isLoggedIn);

//undefined
let age;
// console.log(age);
// console.log(typeof age);

//null
let address = null;
// console.log(address);
// console.log(typeof address);

//bigInt
//Number can store 2^53
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// let x = 9999999999999999n;
// console.log(x);
// console.log(typeof x);

//Symbol
// The JavaScript ES6 introduced a new primitive data type called Symbol.
// Symbols are immutable (cannot be changed) and are unique. For example,
// two symbols with the same description

const value1 = Symbol("hello");
const value2 = Symbol("hello");

// console.log(value1 === value2); // false

//2. Non-primitive/Composite data types

//Objects

//Arrays

//Functions

// Javascript is a dynamic typing language. When you declare a variable,
// you do not need to specify what type this variable is. Javascript engine
// infers what type this variable is based on the value assigned to at run time.

// console.log(Math.random() * 15);
