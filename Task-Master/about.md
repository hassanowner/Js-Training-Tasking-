# 🏷️JavaScript Fundamentals 

### Data Types & typeof
- Primitive types: string, number, boolean, undefined, null, symbol, bigint  
- typeof operator for detecting data type  
- Special cases like typeof null and typeof arrays  

### Variables Introduction
- Declaring variables  
- Variable naming basics  
- Storing and updating values  

### Identifiers Naming Rules
- Valid vs invalid variable names  
- Rules: no starting with numbers, no spaces, no special characters except _ and $  
- Case sensitivity  

### Var / Let / Const Differences
- var: function-scoped, hoisting behavior  
- let: block-scoped, no redeclaration  
- const: block-scoped, must be assigned at declaration, immutable binding (not immutable value)  

### String Syntax & Escape Sequences
- Using single, double, and backtick quotes  
- Escape sequences: \n, \t, \", \'  
- Multiline strings with template literals  

### Concatenation
- Combining strings using +  
- Implicit type coercion when mixing string + number  

### Template Literals
- Using backticks ``  
- Embedding variables with ${}  
- Multiline strings and expressions inside templates
---

# 🏷️Numbers & Math

### Number Formatting & Precision
- Handling floating point precision issues
- Formatting numbers using toFixed and toPrecision
- Converting strings to numbers using Number(), parseInt(), parseFloat()

### Number Methods
- toString()
- toFixed()
- toPrecision()
- Number.isInteger()
- Number.isNaN()

### Math Object Methods
- Math.round(), Math.floor(), Math.ceil()
- Math.max(), Math.min()
- Math.random()
- Math.pow(), Math.sqrt(), Math.trunc()

### Number Challenge
- Applying number methods together
- Solving formatting, rounding, and conversion tasks

### String Methods (Basics)
- length property
- Accessing characters by index
- toUpperCase(), toLowerCase()
- trim(), trimStart(), trimEnd()

### String Methods (slice, repeat, split)
- slice(start, end)
- repeat(times)
- split(separator, limit)

### String Advanced Methods
- substring(), substr()
- includes(), startsWith(), endsWith()
- indexOf(), lastIndexOf()
- chaining multiple string methods together

---

# 🏷️If Condition/ Else Control Flow

### Comparison Operators
- == Equal (checks value only)
- != Not Equal (checks value only)
- === Identical (checks value + type)
- !== Not Identical (checks value + type)
- >, >=, <, <= (Relational operators for comparing numbers)

### Logical Operators
- ! (Not) → reverses boolean value
- && (And) → true if all conditions are true
- || (Or) → true if any condition is true

### Control Flow (if)
- if / else if / else → executes blocks based on conditions
- Nested if → condition inside another condition

### Conditional (Ternary) Operator
- Syntax: condition ? ifTrue : ifFalse
- Can be nested for multiple conditions
- Useful for short conditional assignments or prints

### Logical OR || and Nullish Coalescing ??
- || returns first truthy value (considers falsy: 0, "", null, undefined, false)
- ?? returns first defined value (only checks null or undefined)

### Switch Statement
- switch(expression) with case and default
- Default ordering matters
- Multiple cases can match the same block
- Comparison uses === (strict equality)

---
# 🏷️Arrays

### Creating Arrays
- Creating arrays using `new Array()` and `[]`  
- Accessing elements by index  
- Working with nested arrays  
- Updating/changing array elements  
- Checking if a value is an array using `Array.isArray()`  

### Array Length
- Getting the length of an array  
- Modifying the length property to truncate or expand the array  

### Adding and Removing Elements
- `unshift()` → Add item to the start  
- `push()` → Add item to the end  
- `shift()` → Remove the first element  
- `pop()` → Remove the last element  

### Searching in Arrays
- `indexOf(value, fromIndex)`  
- `lastIndexOf(value, fromIndex)`  
- `includes(value, fromIndex)`  

### Sorting Arrays
- `sort()` for sorting elements  
- `reverse()` for reversing array order  

### Slicing and Splicing
- `slice(start, end)` for copying a portion without changing the original  
- `splice(start, deleteCount, items…)` for removing/replacing/adding elements in the original array  

### Joining Arrays
- `concat()` for merging arrays  
- `join(separator)` for converting array elements into a string

---
# 🏷️For Loop  
### Looping Over Sequences (Arrays)
- Looping through array elements using index-based loops  
- Accessing each value during iteration  

### Nested Loops
- Loop inside another loop  
- Useful for working with multi-dimensional arrays or combinations  

### Loop Control (break, continue, labels)
- `break` → stops the loop entirely  
- `continue` → skips the current iteration  
- Labels → controlling nested loops by naming them  

### Advanced For Loop (No Conditions)
- Using `for(;;)` as an infinite loop  
- Manual breaking from inside the loop  

### Practical Loop Example (Products + Colors)
- Looping over product list  
- Nested loop to show available colors for each product  
- Demonstrating real usage of loops together  

### While Loop
- Loop that continues as long as a condition is true  
- Good for unknown iteration counts  

### Do / While Loop
- Executes at least once before checking the condition  
- Useful when you need the loop to run once regardless of the condition


========================================
📌 Functions (Basics)
========================================
• What Is a Function?  
• User-Defined vs Built-In  
• Function Syntax  
• Real-Life Examples  
• Parameters & Arguments  
• Practical Examples  
• Advanced Examples  
• return Keyword  
• ASI  
• Interrupting Execution  
• Default Parameters (Old + ES6)  
• Rest Parameters (...args)  


========================================
📌 Functions (Advanced)
========================================
• Conditions Inside Functions  
• Loops Inside Functions  
• Anonymous Functions  
• Callbacks  
• setTimeout + Callback  
• Nested Functions  
• Returning Functions  
• Arrow Functions  
• Global / Local Scope  
• Block Scope  
• Lexical Scope  


========================================
📌 Function Practice Files
========================================
• 14_Function-mapPractice.js  
• 15_Function-FilterPractice.js  
• 16_Function-ReducePractice.js  
• 17_FunctionforEachandPractice.js  
• 18_Function-map-filter-reduce-forEach.js
