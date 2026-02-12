/*
Filename: globalScopeThis.js
This code shows what 'this' is in global scope, with and without strict mode.
*/
console.log("Non-strict mode:", this);  // Window/global object in most environments

"use strict";
console.log("Strict mode:", this);  // undefined
