// allow reading of input from console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Discussion of language syntax, expressions, etc.

a = 21;
b = a * 2;
console.log( b );

rl.question( "What is your age? ", (age) => {
  console.log(age);
  rl.close();
});

// Data type conversion. E.g., number to string.
// In JS, this is referred to as coercion

var a = "42";
var b = Number(a);      // explicit coercion
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

// Implicit coercion; "99.99" = 99.99; 
// JS will convert "99.99" to a number prior to making the comparison

var c = /* who makes a comment like this */ 3;
console.log(c);

// variables
// dynamic typing in JS

var amount = 99.99;
amount = amount * 2;
console.log(amount);
amount = "$" + String(amount);
console.log(amount);

// constants
// typical convention is caps, underscores between words

var TAX_RATE = 0.07
var amount = 99.99;
amount = amount * 2;
amount = amount + (amount * TAX_RATE);
console.log(amount);
console.log(amount.toFixed(2));

// constants in es6

const TAX_RATE = 0.07;
// ...

// blocks

// general block
var amount = 99.99;
{
  amount = amount * 2;
  console.log(amount);
}

// block statements do not need a semicolon

// conditionals

// ifs, if elses...

// loops
// while, do while
// while: condition is tested before first iteration
// do while: condition is tested after first iteration
// for loops... 
// exit a loop with breaks

// functions
// reusable code snippets, essentially...
// built into the language or user defined
// quickly browsed this section.. 

// scope
// technically called 'lexical scope'
// each function gets its own scope
// scopes can be nested
// lexical scope rules say code in one scope
// can access variables of its scope and any scope outside of it

// practice


