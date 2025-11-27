// =========================
// ADVANCED TEST TASKS COLLECTION
// Nested forEach with map, filter, and reduce examples
// Includes: Uppercase product names, Bulk items extraction, Total revenue calculation
// Each task contains concept, objective, step-by-step explanation, and expected output
// =========================


// =========================
// Test Task 1 – Uppercase Product Names
// Concept: Iterate through each order and convert product names to uppercase
// Objective: Get a single array of all product names in uppercase
// =========================
let orders1 = [
  { customer: "Hassan", items: [{ name: "Keyboard" }, { name: "Mouse" }] },
  { customer: "Ali", items: [{ name: "USB Cable" }, { name: "Charger" }] }
];

let allProductNames = [];

orders1.forEach(function(order) {
  // Use map to iterate through each product and convert name to uppercase
  let names = order.items.map(function(item) {
    return item.name.toUpperCase();
  });

  // Use spread operator to push all names into the result array
  allProductNames.push(...names);
});

console.log("All Product Names:", allProductNames);
// Expected Output: ["KEYBOARD", "MOUSE", "USB CABLE", "CHARGER"]









// =========================
// Test Task 2 – Extract Bulk Items (Quantity > 1)
// Concept: Filter items with quantity greater than 1 and collect their names
// Objective: Get an array of product names ordered in bulk
// =========================
let orders2 = [
  { customer: "Hassan", items: [{ name: "Keyboard", qty: 1 }, { name: "Mouse", qty: 2 }] },
  { customer: "Ali", items: [{ name: "USB Cable", qty: 3 }, { name: "Charger", qty: 1 }] }
];

let bulkItems = [];

orders2.forEach(function(order) {
  // Filter items where qty > 1 and iterate through them
  order.items
    .filter(function(item) {
      return item.qty > 1;
    })
    .forEach(function(item) {
      bulkItems.push(item.name);
    });
});

console.log("Bulk Items:", bulkItems);
// Expected Output: ["Mouse", "USB Cable"]








// =========================
// Test Task 3 – Total Revenue Calculation
// Concept: Combine filter, map, and reduce to calculate total revenue
// Objective: Calculate total revenue from orders with price >= 10
// =========================
let orders3 = [
  { customer: "Hassan", items: [{ name: "Keyboard", price: 25, qty: 1 }, { name: "Mouse", price: 5, qty: 2 }] },
  { customer: "Ali", items: [{ name: "USB Cable", price: 10, qty: 3 }, { name: "Charger", price: 8, qty: 1 }] }
];

let totalRevenue = 0;

orders3.forEach(function(order) {
  // Filter items with price >= 10
  // Map each item to price * quantity
  // Reduce to sum the total for this order
  let orderTotal = order.items
    .filter(function(item) {
      return item.price >= 10;
    })
    .map(function(item) {
      return item.price * item.qty;
    })
    .reduce(function(sum, value) {
      return sum + value;
    }, 0);

  // Add this order's total to totalRevenue
  totalRevenue += orderTotal;
});

console.log("Total Revenue =", totalRevenue);
// Expected Output: Total Revenue = 55
