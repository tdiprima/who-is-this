/*
Filename: classMethodThis.js
This code demonstrates 'this' in class methods and how to fix lost context with bind.
*/
class Profile {
    constructor(displayName) {
        this.displayName = displayName;
    }
    showProfile() {
        console.log(this.displayName);
    }
}

const profileInstance = new Profile("Eve");
profileInstance.showProfile();  // Eve

// Bad: loses context
setTimeout(profileInstance.showProfile, 1000);  // undefined after 1s

// Good: binds context
setTimeout(profileInstance.showProfile.bind(profileInstance), 1000);  // Eve after 1s
