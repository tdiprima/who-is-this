// event-handler-this.js
// This code creates a button and shows 'this' in event handlers: element for regular functions, outer scope for arrows.

document.body.innerHTML = '<button id="testBtn">Click Me</button>';
const btn = document.getElementById("testBtn");

btn.addEventListener("click", function() {
    console.log(this); // <button> element
});

btn.addEventListener("click", () => {
    console.log(this); // Window (outer scope)
});
