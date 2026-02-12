document.body.innerHTML = '<button id="myButton">Click It!</button>';
const btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
    console.log(this); // <button> element
});

btn.addEventListener("click", () => {
    console.log(this); // Window (outer scope)
});
