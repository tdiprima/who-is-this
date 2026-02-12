/*
Filename: explicitBindingMethods.js
Demonstrate usage of call, apply, and bind methods to set 'this'.
*/
function introduce() {
    console.log(this.personName);
}

const info = { personName: "Frank" };

introduce.call(info);   // Frank
introduce.apply(info);  // Frank
const lockedIntro = introduce.bind(info);
lockedIntro();          // Frank
