/*
Filename: constructorArrowFunctionThis.js
This code demonstrates using arrow functions in a constructor to maintain the correct 'this' context.
*/
function Employee(id) {
    this.idNumber = id;
    this.displayId = () => {
        console.log(this.idNumber);
    };
}

const emp = new Employee("E-456");
emp.displayId();  // E-456
