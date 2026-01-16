console.log("Hello, World!");

// IDE = VS CODE (extension: code runner, prettier, bracket pair colorizer , live server, live preview,...)

// # variables
/** */
// var message;

// message = "Welcome to our portal";
// console.log(message);
// message = "Let's Explore";

// let text; //declaration
// text = "exam portal";
// console.log(text);

// const pi = 3.14; //declare and initialize at one place
// // // pi = 3.14; // not allowed for const
// console.log(pi); //something is const that can't be changed
/** */

// // difference b/w var,let & const
// now-a-day's var is not used
// const if the value won't changes then use const
// if variable changes then use let

// Generally in Codebases, most of the time spent in Modifing & rewriting code.
// allowed to start with _ or $ (not start with number)
// variable names can be camelCase
// variable name should be meaningful, it should be relavent to the data it is storing

// # data types
/**
 * 1. Primitive data types
 *    a. string
 *    b. number
 *    c. boolean
 *    d. null
 *    e. undefined
 *    f. symbol
 */

let name = "John Doe";
console.log(typeof name); // string

let age = 30;
console.log(typeof age); // number

let userName;
console.log(typeof userName); // undefined

let isLoggedIn = false;
console.log(typeof isLoggedIn); // boolean

let address = null;
console.log(typeof address); // object (this is a known quirk in JavaScript)

let uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol

// (typeof always returns a string)


/**
 * 2. Non-primitive data types
 *    a. object
 *      i. array
 *     ii. function
 *    iii. date
 */

let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
};
console.log(typeof person); // object
console.log(person.firstName); // Accessing object property

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object
console.log(numbers[0]); // Accessing array element 

function greet() {
    return "Hello!";
}
console.log(typeof greet); // function
console.log(greet()); // Calling function
let currentDate = new Date();
console.log(typeof currentDate); // object
console.log(currentDate.toDateString()); // Formatting date

// # concatenation & interpolation(template literals)(string interpolation)
let firstName = "Alice";
let lastName = "Smith";

// Concatenation
let fullNameConcat = firstName + " " + lastName;
console.log("Full Name (Concatenation): " + fullNameConcat);
// Interpolation (Template Literals) = using backticks `` and ${} for variables, benefits: multiline strings, embedded expressions, readability
let fullNameInterp = `${firstName} ${lastName}`;
console.log(`Full Name (Interpolation): ${fullNameInterp}`);

console.log(`story of tortoise and rabbit:
                        Once upon a time, in a forest, there lived a speedy rabbit and a slow-moving tortoise.
One day, they decided`)

// readability is better in interpolation

// # operators
/**
 * 1. Arithmetic operators
 *    +, -, *, /, %, ++, --
 * 2. Assignment operators
 *   =, +=, -=, *=, /=
 * 3. Comparison operators
 *   ==, ===, !=, !==, >, <, >=, <=
 * 4. Logical operators
 *  &&, ||, !
 * 5. String operators
 *  +, +=
 * 6. Type operators
 * typeof, instanceof
 * 7. Bitwise operators
 * &, |, ^, ~, <<, >>, >>>
 * 8. Conditional (ternary) operator
 * condition ? expr1 : expr2
 * 9. Comma operator
 * expr1, expr2
 * 10. Exponentiation operator
 * **
 * 11. Nullish coalescing operator
 * ??
 * 12. Optional chaining operator
 * ?.
 * 13. Spread operator
 * ...
 * 14. Destructuring assignment
 * { a, b } = object
 */

// exponent can also be done by Math.pow(base, exponent)

console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8

const a = "2";
const b = "3";
const c = "mango";

console.log(a + b); // "23" (string concatenation)
console.log( a - b); // -1 (numeric subtraction)
console.log( a * b); // 6 (numeric multiplication)

console.log( a / b); // 0.666... (numeric division)
console.log( a % b); // 2 (modulus)
console.log( c + b); // "mango3" (string concatenation)
console.log( c - b); // NaN (not a number)
console.log( c * b); // NaN (not a number)
console.log( c / b); // NaN (not a number)
console.log( c % b); // NaN (not a number)

// type coercion happens in + operator but not in others
console.log(typeof NaN); // number
// type conversion
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(NaN)); // false

// getting data from user
// let userInput = prompt("Enter a number:"); // works in browser environment
// in node js you can use readline module to get input from user
// npm i readline-sync
const readline = require('readline-sync'); //importing readline-sync module

let userInput = readline.question("Enter a number: "); // getting input from user
let numberInput = Number(userInput);
console.log(`You entered: ${numberInput}`);

const aa = 5;
let bb;
console.log( aa + (bb || 0)); // 5 (using || to provide a default value of 0 if bb is undefined
console.log( aa + (bb ?? 0)); // 5 (using ?? to provide a default value of 0 if bb is null or undefined)

// let firstName1 = "Bob";
let firstName1;
console.log(firstName1 ?? "Guest"); // "Guest" (using ?? to provide a default value if firstName1 is undefined
// console.log(firstName1?.length); // undefined (using ?. to safely access length property of firstName1)



// # expressions & statements
// expression = produces a value
// statement = performs an action

// control flow
// ## conditional statements
// ## loops

// # functions
