/*
Filename: constructorArrowFunctionThis.js
This code shows arrow functions inside a constructor keeping the correct 'this' context.
*/
function Employee(id) {
    this.idNumber = id;
    this.displayId = () => {
        console.log(this.idNumber);
    };
}

const emp = new Employee("E-456");
emp.displayId();  // E-456
