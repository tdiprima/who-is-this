/*
Filename: globalScopeThis.js
Demonstrates the behavior of 'this' in global scope under both non-strict and strict modes.
*/
console.log("Non-strict mode:", this);  // Window/global object in most environments

"use strict";
console.log("Strict mode:", this);  // undefined (usually?)
