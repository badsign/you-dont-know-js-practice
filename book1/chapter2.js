// VALUES & TYPES
// in js, we have typed values, not typed variables

// BUILD-IN JS TYPES:
// string
// number
// boolean
// null or undefined
// object
// symbol (new to ES6)

// use `typeof` to determine the type of a value
// typeof null returns "object" instead of null. This is a long standing bug, unlikely to be fixed
// a value can be `undefined` if no value has been set, `undefined` in explicitly set, and other ways

// OBJECTS
// "The object type refers to a compound value where you can set properties
// " (named locations) that each hold their own values of any type"

// Accessible via dot notation (a.id, a.name) or bracket notation (a["id"], a["name"])
// dot notation is preferred. It's shorter and easier to read
// Bracket notation is useful when a proprty has a special character in it, such as a["hello world!"]
// Such properties are often referred to as keys when accessed via bracket notation

// SPECIALIZED TYPES
// Based on object type, array and function.

// ARRAYS
// An object that holds values of any type not particularly in named properties/keys, but rather 
// in numerically indexed positions.
var arr = [
  "hello world",
  69,
  true
];

// Use arrays for numerically positioned values and use objects for named properties.

// FUNCTIONS
// Object subtype.
function fu() {
  return 69;
}

fu.bar = "hello world";   // adding a property to a function in this way will likely show up in limited cases

typeof fu;      // "function"
typeof fu();    // "number"
typeof fu.bar;  // "string"

// BUILT-IN TYPE METHODS
var a = "hello world";
var b = 3.14159;

a.length();       // 11
a.toUpperCase();  // "HELLO WORLD"
b.toFixed(4);     // 3.1416

// more to come on object wrappers like String for string primitive values.

// COMPARING VALUES
// main two types of value comparisons: equality & inequality
// 
// Coercion 
// explicit
var a = "69";
var b = Number(a);
a;      // "69"
b;      // 69
// implicit
var a = "69";
var b = a * 1;  // "69" implicitly coerced to 69 here
a;      // "69"
b;      // 69

// Truthy & Falsy
// The following items are falsy. Anything not in this list is truthy
// 
// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false

// Equality
// There are four equality operators
// ==
// ===
// !=
// !==
// The ! forms are the symmetric "not equal" versions of their counterparts. 
// Non-equality should not be confused with inequality
// == checks for value equality with coercion allowed, 
// and === checks for value equality without allowing coercion
// === is often called "strict equality" for this reason.
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
// read section 11.9.3 of the ES5 specification (http://www.ecma-international.org/ecma-262/5.1/) to see the exact rules
// in == and === conparisons, if they are compairing two non-primitive values like objects (includes functions and arrays)
// the comparison is by reference, not by value. this means it only checks if the references match without any concern of the underlying values

// Inequality
// 

















