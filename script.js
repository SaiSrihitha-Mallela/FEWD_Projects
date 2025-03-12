
let heading = document.getElementById("message");

heading.textContent = "Hello World";

let button = document.createElement("button");

button.textContent = "Click me ";

button.addEventListener("click", ()=>{
    alert("button clicked")
})
document.body.appendChild(button);