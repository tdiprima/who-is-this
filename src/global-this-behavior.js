/*
 * Demonstrates 'this' in global scope: Window (non-strict) vs undefined (strict mode).
 */
console.log(this); // In browser: Window object (non-strict)
"use strict";
console.log(this); // should be undefined

// setTimeout(() => {
//     "use strict";
//     console.log(this);
// }, 2000);
