// Arithmetic Operators
let sum = 5 + 3; // Addition: 8
let difference = 10 - 2; // Subtraction: 8
let product = 4 * 2; // Multiplication: 8
let quotient = 16 / 2; // Division: 8
let remainder = 17 % 3; // Modulus (Remainder): 2
let power = 2 ** 3; // Exponentiation: 8

// Comparison Operators
console.log(5 == "5"); // Equal (==): true, because value is the same, type doesn't matter
console.log(5 === "5"); // Strict Equal (===): false, because types are different
console.log(5 != "5"); // Not Equal (!=): false, because value is the same
console.log(5 !== "5"); // Strict Not Equal (!==): true, because types are different

console.log(10 > 5); // Greater Than: true
console.log(10 < 5); // Less Than: false
console.log(5 >= 5); // Greater Than or Equal: true
console.log(5 <= 10); // Less Than or Equal: true

// Logical Operators
console.log(true && false); // Logical AND (&&): false
console.log(true && true); // Logical AND (&&): true
console.log(true || false); // Logical OR (||): true
console.log(!true); // Logical NOT (!): false

// Assignment Operators
let x = 5; // Assignment (=): x is 5
x += 3; // Addition Assignment (+=): x is now 8
x -= 2; // Subtraction Assignment (-=): x is now 6
x *= 2; // Multiplication Assignment (*=): x is now 12
x /= 2; // Division Assignment (/=): x is now 6

// Why `==` vs `===` Matters
console.log(5 == "5"); // Equal (==): true, because JavaScript converts '5' to 5 before comparing
console.log(5 === "5"); // Strict Equal (===): false, because one is a number and the other is a string
// see this chart for more places where strict vs loose equality matters
// https://stackoverflow.com/a/7615236
