/*
 * Demonstrates explicit binding with call(), apply(), and bind() to control 'this'.
 */
function greet() {
    console.log(this.name);
}

const user = { name: "Alice" };
greet.call(user);  // Alice
greet.apply(user); // Alice
const boundGreet = greet.bind(user);
boundGreet();      // Alice
