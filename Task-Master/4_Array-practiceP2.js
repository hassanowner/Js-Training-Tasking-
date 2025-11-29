/*
  ===========================================================
  JAVASCRIPT TEST TASK 2 – ARRAYS (Combined Topics)
  ===========================================================

  This test task demonstrates multiple array topics combined in practical examples:
  - Creating arrays, nested arrays
  - Changing elements
  - Array length
  - Adding / removing elements
  - Searching
  - Sorting
  - Slicing / Splicing
  - Joining / Concat
*/

/* ================================
   TASK 1: Friends List Management
   ================================

  Scenario:
  - You have an array of friends with nested groups
  - Add new friends to start and end
  - Remove first and last friends
  - Search for a specific friend
  - Sort all names alphabetically
  - Slice to get first 5 friends
  - Join into a single string for display
*/

let friends = ["Ahmed", "Mohamed", ["Sayed", "Ali"], "Alaa"];
console.log("Original Array:", friends);

// Add new friends
friends.unshift("Osama");          // Add to start
friends.push("Samah");             // Add to end

// Remove first and last
let firstFriend = friends.shift();
let lastFriend = friends.pop();

console.log("Updated Array:", friends);
console.log(`Removed First: ${firstFriend}, Removed Last: ${lastFriend}`);

// Flatten nested arrays for sorting and searching
let flatFriends = friends.flat();

// Search for "Ali"
let hasAli = flatFriends.includes("Ali");

// Sort alphabetically
flatFriends.sort();

// Slice first 5 friends
let top5 = flatFriends.slice(0, 5);

// Join into display string
let display = top5.join(", ");

console.log("Top 5 Friends:", display);
console.log("Is Ali included?", hasAli);

// Expected Result:
// Original Array: ["Ahmed","Mohamed",["Sayed","Ali"],"Alaa"]
// Updated Array: ["Ahmed","Mohamed",["Sayed","Ali"],"Alaa"]
// Removed First: Osama, Removed Last: Samah
// Top 5 Friends: "Ahmed,Alaa,Ali,Mohamed,Sayed"
// Is Ali included? true



/* ================================
   TASK 2: Numbers and Scores Processing
   ================================

  Scenario:
  - You have an array of scores (numbers)
  - Remove lowest and highest score using splice
  - Add bonus points at the end
  - Search for a specific score
  - Sort descending
  - Slice top 3 scores
  - Join top scores into string for report
*/

let scores = [45, 90, 75, 60, 88, 100, 30];
console.log("Original Scores:", scores);

// Remove lowest and highest using slice+splice
let minIndex = scores.indexOf(Math.min(...scores));
let maxIndex = scores.indexOf(Math.max(...scores));
scores.splice(maxIndex, 1); // Remove max
scores.splice(minIndex, 1); // Remove min

// Add bonus points
scores.push(95, 85);

// Search for score 88
let has88 = scores.includes(88);

// Sort descending
scores.sort((a, b) => b - a);

// Slice top 3 scores
let top3 = scores.slice(0, 3);

// Join for report
let report = top3.join(" | ");

console.log("Processed Scores:", scores);
console.log("Top 3 Scores:", report);
console.log("Contains 88?", has88);

// Expected Result:
// Original Scores: [45,90,75,60,88,100,30]
// Processed Scores: [90,75,60,88,95,85]
// Top 3 Scores: 95 | 90 | 88
// Contains 88? true

