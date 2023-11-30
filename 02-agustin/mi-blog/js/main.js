

console.log("Hello World!");
const body = document.querySelector("body");
const icon = document.querySelector("#icon");
function changeMode() {
    document.body.classList.toggle("dark-mode");
}

icon.addEventListener("click", changeMode);









