/*
 * Demonstrates arrow functions inheriting 'this' lexically from surrounding scope
 * (e.g., constructor), preserving context.
 */
function Person(name) {
    this.name = name;
    this.sayName = () => {
        console.log(this.name);
    };
}

const p = new Person("Alice");
p.sayName(); // Alice
