/*
 * Demonstrates 'this' in ES6 classes pointing to the instance,
 * and need for .bind() in callbacks like setTimeout.
 */
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
}

const user = new User("Alice");
user.greet(); // Alice

setTimeout(user.greet, 1000); // undefined
setTimeout(user.greet.bind(user), 1000); // Alice
