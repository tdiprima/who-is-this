// class-this-methods.js
// This code demonstrates 'this' in class methods points to the instance, but setTimeout loses it unless bound.

class Person {
    constructor(fullName) {
        this.fullName = fullName;
    }
    hello() {
        console.log(this.fullName);
    }
}

const person = new Person("Bob");
person.hello(); // Bob

setTimeout(person.hello, 1000); // undefined (after 1 second)

setTimeout(person.hello.bind(person), 2000); // Bob (after 2 seconds)
