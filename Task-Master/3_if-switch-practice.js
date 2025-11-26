/*
===============================================
JS TOPICS COVERED IN THIS GUIDE:
1. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
2. Logical Operators: && (AND), || (OR), ! (NOT)
3. If Condition: if, else if, else
4. Nested If Condition: if statements inside other if statements
5. Conditional Ternary Operator: condition ? exprIfTrue : exprIfFalse
6. Nullish Coalescing Operator: ?? (use default if null or undefined)
7. Switch Statement: switch-case-default
8. Combined use for challenges
===============================================
*/

/*
================================================
PART 1 – USER ACCESS LEVEL
Description: Determine user access level based on role and active status
Requirements:
- Variables: role ("admin", "editor", "viewer"), isActive (true/false)
- Outpt messages according to role and active status
- Use both if-else and ternary operator
================================================
*/

let role = "editor";  // "admin", "editor", "viewer"
let isActive = true;

// Using if-else + logical operators
if (!isActive) {
  console.log("Inactive Account");
} else if (role === "admin") {
  console.log("Full Access");
} else if (role === "editor") {
  console.log("Edit Access");
} else if (role === "viewer") {
  console.log("View Only");
} else {
  console.log("Unknown Role");
}

// Using ternary operator
let accessMessage = !isActive
  ? "Inactive Account"
  : role === "admin"
    ? "Full Access"
    : role === "editor"
      ? "Edit Access"
      : role === "viewer"
        ? "View Only"
        : "Unknown Role";

console.log(accessMessage);




/*
================================================
PART 2 – GRADE EVALUATOR
Description: Assign a grade based on the student's score
Requirements:
- Variable: score (number)
- Use nested if-else to assign A, B, C, D, F
- Optional: Use switch(true) for the same logic
================================================
*/

let score = 85;

// Nested if-else
if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score < 90) {
  console.log("Grade: B");
} else if (score >= 70 && score < 80) {
  console.log("Grade: C");
} else if (score >= 60 && score < 70) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// switch(true) alternative
switch (true) {
  case score >= 90 && score <= 100:
    console.log("Grade: A");
    break;
  case score >= 80 && score < 90:
    console.log("Grade: B");
    break;
  case score >= 70 && score < 80:
    console.log("Grade: C");
    break;
  case score >= 60 && score < 70:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}




/*
================================================
PART 3 – SHOPPING DISCOUNT
Description: Assign discount based on membership type and cart value
Requirements:
- Variables: membership ("gold", "silver", null), cartValue (number)
- Use nullish coalescing operator to assign default value
- Apply ternary inside else for cartValue > 100
================================================
*/

let membership = null; // "gold", "silver", null
let cartValue = 120;

// Use nullish coalescing to set default membership if null
membership = membership ?? "none";

let discount;
if (membership === "gold") {
  discount = 20; // Gold members get 20% discount
} else if (membership === "silver") {
  discount = 10; // Silver members get 10% discount
} else {
  // For non-members, discount depends on cart value
  discount = cartValue > 100 ? 5 : 0;
}

console.log(`Discount: ${discount}%`);




/*
================================================
PART 4 – WEEKEND ACTIVITY PLANNER
Description: Decide activity based on day and weather
Requirements:
- Variables: day ("Saturday"/"Sunday"), weather ("sunny","rainy","snowy")
- Use switch statement and if-logical alternative
================================================
*/

let day = "Saturday"; 
let weather = "sunny";

// Using switch statement
switch(day) {
  case "Saturday":
    switch(weather) {
      case "sunny": console.log("Go Hiking"); break;
      case "rainy": console.log("Watch Movie"); break;
      case "snowy": console.log("Skiing"); break;
      default: console.log("Unknown Weather");
    }
    break;
  case "Sunday":
    switch(weather) {
      case "sunny": console.log("Picnic"); break;
      case "rainy": console.log("Read Book"); break;
      case "snowy": console.log("Build Snowman"); break;
      default: console.log("Unknown Weather");
    }
    break;
  default:
    console.log("Unknown Day");
}

// Using if + logical operators alternative
if (day === "Saturday") {
  if (weather === "sunny") console.log("Go Hiking");
  else if (weather === "rainy") console.log("Watch Movie");
  else if (weather === "snowy") console.log("Skiing");
} else if (day === "Sunday") {
  if (weather === "sunny") console.log("Picnic");
  else if (weather === "rainy") console.log("Read Book");
  else if (weather === "snowy") console.log("Build Snowman");
}




/*
================================================
PART 5 – LOGIN MESSAGE CHALLENGE
Description: Show login messages based on username and last login days
Requirements:
- Variables: username (string|null), lastLogin (number)
- Use nullish coalescing + ternary operator for concise solution
================================================
*/

let username = null; // "Hassan" or null
let lastLogin = 10; // days since last login

let user = username ?? "Guest User"; // default to "Guest User" if null
let loginMessage = username
  ? lastLogin < 7
    ? `Welcome Back ${username}!`
    : `It's been a while ${username}, check our updates!`
  : "Guest User, please sign up.";

console.log(loginMessage);
