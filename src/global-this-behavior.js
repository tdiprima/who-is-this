// global-this-behavior.js
// This code demonstrates 'this' in global scope: window in browser non-strict, undefined in strict mode.

console.log(this); // Window object in browser (non-strict)

"use strict";
console.log(this); // undefined (usually? now it's 'window')
