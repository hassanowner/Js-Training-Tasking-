/* ============================================================
   JavaScript Operators – Complete Test Tasks
   Topics Included:
   1. Arithmetic Operators
   2. Unary Operators (+ / -)
   3. Type Coercion (Implicit Casting)
   4. Assignment Operators
============================================================ */


/* ============================================================
   Test Task 1 – Arithmetic Operators
   Explanation:
   This task demonstrates all basic math operators:
   +, -, *, /, %, **, ++, --
============================================================ */

// Basic arithmetic operations
console.log(10 + 20);         // Addition
console.log(10 + "Osama");    // String + Number → String concat

console.log(10 - 20);         // Subtraction
console.log(10 - "Osama");    // Invalid subtraction → NaN
console.log(typeof NaN);      // NaN is of type "number"

console.log(10 * 20);         // Multiplication
console.log(10 * -20);        // Negative multiplication

console.log(20 / 5);          // Division (exact)
console.log(20 / 3);          // Division (decimal)

console.log(2 ** 4);          // Exponentiation
console.log(2 * 2 * 2 * 2);   // Equivalent exponentiation

console.log(10 % 2);          // Modulus → remainder zero
console.log(11 % 2);          // Modulus → remainder = 1


/* ============================================================
   Test Task 2 – Unary Plus & Unary Negation
   Explanation:
   Unary Plus (+) converts non-number → number.
   Unary Negation (-) converts and negates the result.
============================================================ */

// Unary Plus tests
console.log(+100);       // Normal number
console.log(+"100");     // String number → 100
console.log(+"-100");    // String negative → -100
console.log(+"Osama");   // Invalid → NaN
console.log(+"15.5");    // Float string → number
console.log(+0xff);      // Hexadecimal → 255
console.log(+null);      // null → 0
console.log(+false);     // false → 0
console.log(+true);      // true → 1

// Unary Negation tests
console.log(-100);
console.log(-"100");     // Converts then negates
console.log(-"-100");    // Converts then negates → 100
console.log(-"Osama");   // NaN
console.log(-"15.5");    // Converts then negates
console.log(-0xff);      // -255
console.log(-null);      // -0
console.log(-false);     // -0
console.log(-true);      // -1

// Number() comparison
console.log(Number("100")); // Same as +"100"


/* ============================================================
   Test Task 3 – Type Coercion (Type Casting)
   Explanation:
   JavaScript automatically converts types depending on operator.
   + → string concat OR number sum
   - → always forces number conversion
============================================================ */

let a = "100";  // string
let b = 20;     // number
let c = true;   // true → 1 in numeric operations

// +a → convert string to number
console.log(+a + b + c); // 100 + 20 + 1 = 121


/* ============================================================
   Test Task 4 – Assignment Operators
   Explanation:
   Shortcuts for updating variable values:
   +=, -=, /=, *=, **=, %=
============================================================ */

let x = 10;

// Full assignments
x = x + 20;
x = x + 70;

// Shortcuts
x += 100;   // x = x + 100
x -= 50;    // x = x - 50
x /= 50;    // x = x / 50

console.log("Final Value of x:", x);


/* ============================================================
   Extra Test Task (Your Practice)
   Create variables:
   - num1 = "50" (string)
   - num2 = 10 (number)
   - num3 = false (boolean)
   1. Convert num1 to number using unary plus
   2. Subtract num3 from num2
   3. Add the three values together
============================================================ */

let num1 = "50";
let num2 = 10;
let num3 = false;

let result = +num1 + (num2 - num3) + +num3;

console.log("Result = ", result);