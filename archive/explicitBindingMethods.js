/*
Filename: explicitBindingMethods.js
This code shows call, apply, and bind to force 'this' to a specific object.
*/
function introduce() {
    console.log(this.personName);
}

const info = { personName: "Frank" };

introduce.call(info);   // Frank
introduce.apply(info);  // Frank
const lockedIntro = introduce.bind(info);
lockedIntro();          // Frank
