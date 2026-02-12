// constructor-arrow-this.js
// This code shows how arrow functions inside a constructor keep 'this' from the outer scope correctly.

function Employee(fullName) {
    this.fullName = fullName;
    this.introduce = () => {
        console.log(this.fullName);
    };
}

const emp = new Employee("Bob");
emp.introduce(); // Bob
