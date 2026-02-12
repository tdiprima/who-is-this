# Who is 'This'? 🤔
A tiny repo that explores one of JavaScript's most chaotic neutral features: `this`.

## 📂 Files Overview

### 1. globalScopeThis.js

Demonstrates what `this` refers to in the global scope, with and without strict mode.

* Non-strict → `this` is the global object.
* Strict mode → `this` is `undefined`.

### 2. objectMethodThis.js

Shows how `this` points to the object when a method is called directly on it — and how that context is lost when the method is detached.

Key idea:

```js
profile.showUser();   // works
const fn = profile.showUser;
fn();                 // loses context
```

### 3. objectMethodLostContext.js

A classic bug demo: assigning an object method to a variable and calling it separately.

When invoked without its object, `this` no longer refers to that object.

### 4. explicitBindingMethods.js

Shows how to fix context using:

* `call`
* `apply`
* `bind`

These let you explicitly control what `this` should be.

### 5. constructorArrowFunctionThis.js

Demonstrates how arrow functions inside a constructor preserve the lexical `this`.

Because arrow functions don't have their own `this`, they inherit it from the surrounding scope.

### 6. classMethodThis.js

Shows how `this` works in ES6 classes — and how passing a class method directly (e.g., to `setTimeout`) loses context.

Also demonstrates fixing it with `.bind()`.

### 7. eventHandlerThis.js

Compares regular vs arrow functions inside DOM event listeners.

* Regular function → `this` refers to the element.
* Arrow function → `this` comes from outer scope.

## 🚀 How to Use

Run individual files with Node:

```bash
node filename.js
```

For the event handler example, open it in a browser environment since it manipulates the DOM.

## TL;DR

If `this` feels random, it's not.  
It's just extremely specific about *how* a function is called.

Happy debugging. 🧩

<br>
