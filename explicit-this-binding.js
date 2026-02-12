// explicit-this-binding.js
// This code shows how call, apply, and bind force 'this' to a specific object explicitly.

function introduce() {
    console.log(this.fullName);
}

const obj = { fullName: "Bob" };

introduce.call(obj);  // Bob
introduce.apply(obj); // Bob

const boundIntro = introduce.bind(obj);
boundIntro();         // Bob
