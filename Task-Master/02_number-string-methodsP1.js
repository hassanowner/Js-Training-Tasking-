/* ============================================================
   JavaScript Numbers, Math, and Strings – Full Test Suite
   Topics Included:
   1. Number Formatting & Precision
   2. Number Methods
   3. Math Object Methods
   4. Number Challenge
   5. String Methods (Basics)
   6. String Methods (slice, repeat, split)
   7. String Advanced Methods 
============================================================ */


/* ============================================================
   Test Task 1 – Number Formatting & Precision
   Explanation:
   Demonstrates different ways to represent large numbers and
   explore JavaScript number limits.
============================================================ */

console.log(1_000_000);             // Underscore separator
console.log(1e6);                    // Scientific notation
console.log(10 ** 6);                // Exponent
console.log(1000000.0);              // Float representation

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 12345); // Overflow towards Infinity




/* ============================================================
   Test Task 2 – Number Methods
   Explanation:
   Shows useful number utilities like toString, toFixed, parseInt,
   parseFloat, isInteger, and isNaN.
============================================================ */

// toString()
console.log((150).toString());
console.log((99.99).toString());

// toFixed()
console.log(55.6789.toFixed(1));     // "55.7"

// Parsing
console.log(Number("200 JS"));       // NaN
console.log(parseInt("200 JS"));     // 200
console.log(parseFloat("45.77 Text")); // 45.77

// isInteger()
console.log(Number.isInteger(55));          // true
console.log(Number.isInteger(55.4));        // false
console.log(Number.isInteger("55"));        // false

// isNaN()
console.log(Number.isNaN("Ahmed" / 2));     // true






/* ============================================================
   Test Task 3 – Math Object
   Explanation:
   Useful mathematical operations like rounding, min/max, random,
   power, and truncation.
============================================================ */

console.log(Math.round(4.49));      // 4
console.log(Math.round(4.5));       // 5

console.log(Math.ceil(7.1));        // 8
console.log(Math.floor(7.9));       // 7

console.log(Math.min(5, -10, 200)); // -10
console.log(Math.max(5, -10, 200)); // 200

console.log(Math.pow(3, 3));        // 27
console.log(Math.trunc(12.78));     // 12

console.log(Math.random());         // Random value 0 → 1




/* ============================================================
   Test Task 4 – Number Challenge
============================================================ */

let A = 100;
let B = 200.5;
let C = 1e2;
let D = 2.4;

// 1. Find Smallest Number (integer)
console.log(Math.trunc(Math.min(A, B, C, D))); // 2

// 2. Use a + d one time to print 10000
console.log((A ** Math.trunc(D))); // 10000

// 3. Get Integer "2" from d using 4 methods
console.log(parseInt(D));
console.log(Math.floor(D));
console.log(Math.trunc(D));
console.log(Number(D.toFixed(0)));

// 4. From b + d get:
//    "66.67" as string AND 67 as number
console.log(( (B / D).toFixed(2) ));  // "66.67"
console.log(Math.round(B / D));       // 67




/* ============================================================
   Test Task 5 – String Methods (Basics)
============================================================ */

let name1 = "  Karim   ";

console.log(name1);                   // raw
console.log(name1[3]);                // access by index
console.log(name1.charAt(3));         // same as index

console.log(name1.length);            // string length
console.log(name1.trim());            // remove spaces

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

// chain methods
console.log(name1.trim().charAt(1).toUpperCase()); // "A"





/* ============================================================
   Test Task 6 – String Methods (slice, repeat, split)
============================================================ */

let text = "Elzero Web School";

console.log(text.indexOf("Web"));          // 7
console.log(text.indexOf("Web", 10));      // -1

console.log(text.lastIndexOf("o"));        // 15

console.log(text.slice(3, 8));             // ero W
console.log(text.slice(-6, -2));           // choo

console.log(text.repeat(3));               // repeated string

console.log(text.split(" ", 2));           // ["Elzero", "Web"]





/* ============================================================
   Test Task 7 – String Advanced Methods
============================================================ */

let str = "Elzero Web School";

console.log(str.length);

// substring()
console.log(str.substring(2, 6));      // zero
console.log(str.substring(6, 2));      // zero (swap)
console.log(str.substring(-10, 6));    // Elzero
console.log(str.substring(str.length - 4)); // hool

// substr()
console.log(str.substr(0, 6));         // Elzero
console.log(str.substr(10));           // School
console.log(str.substr(-4));           // hool
console.log(str.substr(-6, 3));        // Sch

// includes()
console.log(str.includes("Web"));      // true
console.log(str.includes("Web", 10));  // false

// startsWith()
console.log(str.startsWith("El"));     // true
console.log(str.startsWith("zero", 2));// true

// endsWith()
console.log(str.endsWith("l"));        // true
console.log(str.endsWith("Web", 10));  // true

/* ============================================================
   Extra Practice Task (You Do)
   - Create a string variable containing your name.
   - Print:
     1. The first letter uppercase.
     2. The last 3 letters lowercase.
     3. The string reversed (using split, reverse, join).
============================================================ */
