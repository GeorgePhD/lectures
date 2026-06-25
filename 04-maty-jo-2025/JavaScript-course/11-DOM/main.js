

console.log('DOM Tutorial');

// seleccionar titulo
let title2 = document.getElementById("title"); //forma antigua
const title = document.querySelector("#title"); //forma moderna


//estudiar eventos en dom y javascript


title.addEventListener("click", () => {

    console.log("click en el titulo");

    title.innerHTML = "Manipulacion del DOM, Modelo del documento";
    //title.style.color = "grey";
    //title.style.fontSize = "5rem";

    //title.classList.add("big__title");
    title.classList.toggle("big__title");



});


const addText = document.querySelector("#agregarTexto");
const textContainer = document.querySelector("#container");
addText.addEventListener("click", () => {

    textContainer.innerHTML = "<h2>Nuevo parrafo agregado usando JS</h2>";

});















