
/* 1. Differentiation of let, const, and var in JavaScript
In Javascript var, let, and const are the three main ways to declare variables in JavaScript.
To produce clear and manageable code, it’s crucial to be aware of how these keywords differ 
from one another.*/

/*var:
-Function-scoped,means it's accessible throughout a fucntion and has been arroun since the early days of Java Script
-Variable are hoisted and can be redeclared and reassigned*/
 //Here’s an example of using var:
 function Var() {
    if (true) {
      var x = 20;
    }
    console.log(x);//the output is 20
  }
  
    Var();

 //In this example, x is created with var inside the if block, but you can still see it outside the block when we print it to the console.


/*let:
-let is block-scoped and  was added in ECMAScript 6 (ES6) and i\limited to the block where its defined.
-It cannot be redeclared but can be reassigned*/
//Here’s an example of using let:
function Let() {
    if (true) {
      let y = 20;
    }
    console.log(y); // Throws a ReferenceError: y is not defined
  }
  
  Let();
/*In this example, y is created with let inside the if block, and you can't access it outside that block. If you try to print y outside, you'll get a ReferenceError.*/

/*const:
Constants (const), are Also bloack-scoped but cannot be reassigned or redeclared.it must be initialized at the time of declaration */

//Here’s an example of using const:
function exampleConst() {
    const z = 30;
    z = 40; // Throws a TypeError: Assignment to constant variable
  }
  
  exampleConst();
  /* In this example, z is created with const and given the value 30 right away. If we try to change it to 40, a TypeError happens because const variables can't be changed. */

  /*References:
  Soren, J. P. (2023, September 20). Difference between var, let and const in JavaScript. Medium. 
  https://medium.com/@jackpritomsoren/difference-between-var-let-and-const-in-javascript-c6236899ca4d#:~:text=var%20is%20function%2Dscoped%20and,cannot%20be%20reassigned%20after%20initialization.*/



  //2. Concept of Falsy Values in JavaScript

  /*In JavaScript, every value can be interpreted as a boolean. This means it can either be seen as true (truthy) or false (falsy) in contexts that require a boolean. So, what exactly is a boolean context? 
  It refers to situations where a true or false value is needed, like in if statements or with logical operators. When you use a value that isn’t a boolean in these contexts, JavaScript automatically converts 
  it to its boolean equivalent.
  In JavaScript, there are only six falsy values, meaning all other values are truthy. Remembering these six can help you quickly identify truthy values. The six falsy values are:
1. **false**: The boolean value false.
2. **0**: The number zero.
3. **""**, **''**, or **``**: An empty string.
4. **null**: Represents no value.
5. **undefined**: Indicates an uninitialized value.
6. **NaN**: Stands for "Not a Number," used for invalid numeric operations.*/

//example no 1 the boolean value false
let isOnline = false

function checkStatus(status) {
  return Boolean(status) ? "ONLINE" : "OFFLINE"
}

checkStatus(isOnline) // "OFFLINE"

//example no 2 teh no 0
let unreadMessages = 0
let hasUnreadMessages = Boolean(unreadMessages)
console.log(hasUnreadMessages) // false

//example no 3 empty string
let userInput = "";
let defaultText = "No input provided";

let displayText = Boolean(userInput) || defaultText;

console.log(displayText); // No input provided

/* References: 
freeCodeCamp. (2024, January 30). What are Falsy Values in JavaScript? Explained with Examples. freeCodeCamp.org. https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript/ */