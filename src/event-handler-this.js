/*
 * Demonstrates 'this' in DOM event handlers: element for regular functions,
 * lexical outer scope for arrow functions.
 */
const button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log(this); // button element
});
button.addEventListener("click", () => {
    console.log(this); // window or outer scope
});
