
//forma 1
function saludar() {
    console.log("Hello Jo, Hello Maty")
}

//siempre llamar a la funcion para que se ejecute. 
saludar();





function sumar(num1, num2) {

    console.log("El resultado de la suma es: ", num1 + num2);

}

sumar(1, 9);


function restar(num1, num2) {

    console.log(num1 - num2);
}

restar(20, 3);


function multiplicacion(num3, num4) {
    console.log("el reusltado de la multi es", num3 * num4)
}
multiplicacion(2, 4)


function division(num3, num4) {
    console.log("el reusltado de la division es", num3 / num4)
}
division(4, 2)



//forma 2 de crear funciones (funcion de flecha) esta forma es mas moderna.
//const saludar2 = () => {}
const saludar2 = () => {

    console.log("Hola desde la funcion anonima")

}


const sumar2 = (number1, number2) => {

    console.log("El resultado de la suma es: ", number1 + number2);

}


sumar2(5, 50);


const restar2 = (number1, number2) => {
    console.log("el resultado de la resta es:", number1 - number2)
}

restar2(25, 5);


const multi2 = (num1, num2) => {
    console.log("el resultado de la multi es: ", num1 * num2);

}
multi2(5, 50)


const division2 = (num1, num2) => {
    console.log("el resultado de la division es: ", num1 / num2);

}
division2(50, 5)












