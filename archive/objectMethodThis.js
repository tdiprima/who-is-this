/*
Filename: objectMethodThis.js
This code shows how 'this' points to the object when calling a method on it.
*/
const profile = {
    username: "Dana",
    showUser() {
        console.log(this.username);
    }
};

profile.showUser();  // Dana

const showFunc = profile.showUser;
showFunc();  // undefined (or global/undefined in strict)
