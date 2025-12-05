/*
  ===========================================================
  JAVASCRIPT TEST TASK 3 – LOOPS (For, While, Do/While)
  ===========================================================

  --- FULL TOPICS INCLUDED ---
  1) For Loop
  2) Looping Over Sequences (Arrays)
  3) Nested Loops
  4) Loop Control (break, continue, labels)
  5) Advanced For Loop (no conditions)
  6) Practical Loop Example (products + colors)
  7) While Loop
  8) Do / While Loop
*/

/* ==========================================================
   TASK 1 – Filtering Names From a Mixed Array  
   Idea:
   - Loop on array using "for"
   - Check element type
   - Push only strings into new array
   - Demonstrates: For Loop + Sequence Loop
   ========================================================== */

let mixed = [1, "Ali", 5, "Sahar", "Omar", 10];
let onlyStrings = [];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    onlyStrings.push(mixed[i]);
  }
}

console.log("Only Strings:", onlyStrings);

// Expected Output:
// Only Strings: ["Ali", "Sahar", "Omar"]




/* ==========================================================
   TASK 2 – Generating Full Product Variations  
   Idea:
   - Use nested loops to combine products × colors
   - Demonstrates: Nested For Loops
   ========================================================== */

let products = ["Keyboard", "Mouse", "Pen"];
let colors = ["Red", "Blue"];

for (let i = 0; i < products.length; i++) {
  console.log(`Product: ${products[i]}`);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- Color: ${colors[j]}`);
  }
}

// Expected Output:
// Product: Keyboard
// - Color: Red
// - Color: Blue
// Product: Mouse
// - Color: Red
// - Color: Blue
// Product: Pen
// - Color: Red
// - Color: Blue




/* ==========================================================
   TASK 3 – Breaking Out of Nested Loops With Labels  
   Idea:
   - Demonstrate break mainLoop
   - Stop all loops when a match happens
   ========================================================== */

let categories = ["Phones", "Laptops", "Tablets"];
let brands = ["Apple", "Samsung", "Dell"];

mainLoop: for (let i = 0; i < categories.length; i++) {
  console.log("Category:", categories[i]);

  for (let j = 0; j < brands.length; j++) {
    console.log(" - Brand:", brands[j]);

    if (brands[j] === "Samsung") {
      console.log("** Stopping all loops! **");
      break mainLoop;
    }
  }
}

// Expected Output:
// Category: Phones
//  - Brand: Apple
//  - Brand: Samsung
// ** Stopping all loops! **




/* ==========================================================
   TASK 4 – Looping Without Conditions (Advanced For)
   Idea:
   - for(;;) infinite loop style
   - manually break when done
   ========================================================== */

let items = ["A", "B", "C", "D"];
let idx = 0;

for (;;) {
  console.log(items[idx]);
  idx++;
  if (idx === items.length) break;
}

// Expected Output:
// A
// B
// C
// D




/* ==========================================================
   TASK 5 – Product Display With Nested Loops + join()
   Idea:
   - Use main loop for products
   - Nested loop for colors
   - Use join for cleaner formatting
   ========================================================== */

let shopProducts = ["Chair", "Table", "Lamp"];
let shopColors = ["Black", "White", "Gray"];
let show = 2;

console.log(`Showing ${show} Products:`);

for (let i = 0; i < show; i++) {
  console.log(`[${i + 1}] ${shopProducts[i]}`);
  console.log("Colors:", shopColors.join(" | "));
}

// Expected Output:
// Showing 2 Products:
// [1] Chair
// Colors: Black | White | Gray
// [2] Table
// Colors: Black | White | Gray




/* ==========================================================
   TASK 6 – While Loop: Print All Elements  
   Idea:
   - Use while to print array values
   ========================================================== */

let devices = ["PC", "Phone", "TV"];
let pointer = 0;

while (pointer < devices.length) {
  console.log(devices[pointer]);
  pointer++;
}

// Expected Output:
// PC
// Phone
// TV




/* ==========================================================
   TASK 7 – Do / While Example  
   Idea:
   - Run block at least once
   ========================================================== */

let counter = 0;

do {
  console.log("Running:", counter);
  counter++;
} while (counter < 0);

console.log("Final counter:", counter);

// Expected Output:
// Running: 0
// Final counter: 1

