/*
Filename: objectMethodLostContext.js
Demonstrates a bug where 'this' loses context in a method call.
*/
const person = {
    fullName: "Charlie",
    sayHello: function() {
        console.log(`Greetings from ${this.fullName}`);
    }
};

const helloFunc = person.sayHello;
helloFunc();  // Logs: Greetings from undefined (or error in strict mode)
