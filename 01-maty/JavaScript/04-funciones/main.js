

// funciones declarativas
//1. funcion suma

function suma(){
    console.log(10 + 15)
}
suma();

// funciones con parametros
function suma2(num1, num2) {
    console.log(`El resultado de la suma es: ${num1 + num2}`);
}

suma2(7, 5);

function suma3(num1, num2) {
    console.log(`El resultado de ${num1} + ${num2} es: ${num1 + num2}`);
}
suma3(70, 55);



function resta(num1, num2) {
    console.log(`El resultado de la resta es: ${num1 - num2}`);
}
resta(100, 50);

// arrow functions / funcion de flecha
const resta2 = (num1, num2) => {
    console.log(`Usando funcion de flecha, El resultado de la suma es: ${num1 - num2}`);
}
resta2(1500, 350);

function multi(num1, num2){
    console.log(`El resultado de la multi es: ${num1 * num2}`);
}
multi(2,5);

const multi2 = (num1, num2) => {
    console.log(`Usando funcion de flecha, El resultado de la multi es: ${num1 * num2}`);
}
multi2(3, 60);

function div(num1, num2){
    console.log(`El resultado de la div es: ${num1 / num2}`);
}
div(10,5);

const div2 = (num1, num2) => {
    console.log(`Usando funcion de flecha, El resultado de la div es: ${num1 / num2}`);
}
div2(60, 2);








