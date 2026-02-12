/*
 * Demonstrates how 'this' loses its object context when a method is extracted
 * and called standalone, leading to undefined.
 */
const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const greetFn = obj.greet;
greetFn(); // Hello, undefined
