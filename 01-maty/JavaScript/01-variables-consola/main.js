console.log("works");


// Variables syntax
// 1. let = variable que puede cambiar
    // 1.1 nombre de la variable, el nombre tiene que ser 100% descriptivo
    // 1.2 signo = que representa el valor de la variable.

// ejemplo de variable con let:

let nombre = "Juan";
let apellido = "Perez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);



// 2. const = variable que no puede cambiar, si intentas cambiarla, te arroja un error.

const direccion = "av. siempre viva";
const ciudad = "Curicó";
const pais = "Chile";

let nombre2 = "maty";
let edadMaty = 14;
let nombre3 = "diego";
let edadDiego = 6;

console.log("mi nombre es " + nombre2 + " y tengo " + edadMaty + " años.");
console.log("el nombre de mi hermano es " + nombre3 + " y tiene " + edadDiego + " años.");

console.log("la diferencia en nuestras edades es : ", edadMaty - edadDiego + " años");

//DOM = Document Object Model
const contenido = document.querySelector("#contenido");

//forma 1
/* contenido.innerHTML = "<h1>mi nombre es " + nombre2 + " y tengo " +                     edadMaty + " años.</h1>"; */

//forma 2 
const url = "https://picsum.photos/id/237/200/300";

contenido.innerHTML = `<h1>mi nombre es ${nombre2} y tengo ${edadMaty} años.</h1><h2>mi hermano es ${nombre3} y tiene ${edadDiego} años.</h2><h3>la diferencia en nuestras edades es : ${edadMaty - edadDiego} años</h3><img src=${url}>`;

const body = document.querySelector("body");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    
    body.classList.toggle("dark-mode");
})

