// lost-this-context.js
// This code shows what happens when you pull a method out of an object - 'this' gets lost and prints undefined.

const person = {
    fullName: "Bob",
    sayHello: function() {
        console.log(`Greetings, ${this.fullName}!`);
    }
};

const helloFn = person.sayHello;
helloFn(); // Greetings, undefined!
