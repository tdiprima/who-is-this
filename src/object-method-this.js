// object-method-this.js
// This code shows 'this' points to the object when calling a method on it, but loses context when extracted.

const person = {
    fullName: "Bob",
    hello() {
        console.log(this.fullName);
    }
};

person.hello(); // Bob

const helloFn = person.hello;
helloFn(); // undefined
