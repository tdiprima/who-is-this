/*
 * Demonstrates 'this' binding to the object when called as a method,
 * but losing context when extracted.
 */
const user = {
    name: "Alice",
    greet() {
        console.log(this.name);
    }
};

user.greet(); // Alice

const greetFn = user.greet;
greetFn(); // undefined
