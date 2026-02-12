/*
Filename: objectMethodLostContext.js
This code shows a bug where 'this' loses its object context when a method is called alone.
*/
const person = {
    fullName: "Charlie",
    sayHello: function() {
        console.log(`Greetings from ${this.fullName}`);
    }
};

const helloFunc = person.sayHello;
helloFunc();  // Logs: Greetings from undefined (or error in strict mode)
