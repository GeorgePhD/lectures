//1. Operadores Aritméticos

/* 
+   suma
-   resta
*   multiplicación
/   división
%   módulo (residuo)
**  potencia 
*/
//1. + suma
let num1 = 7;
let num2 = 5;
//console.log("Resultado de suma es:", num1 + num2);
//console.log("Resultado de resta es:", num1 - num2);
//console.log("Resultado de multiplicacion es:", num1 * num2);
//console.log("Resultado de division es:", num1 / num2);
//console.log("Resultado de modulo es:", num1 % num2);
//console.log("Resultado de la potencia es:", num1 ** num2);





//2. Operadores de Asignación 
/*
=    asignación

+=   suma y asigna
-=   resta y asigna
*=   multiplica y asigna
/=   divide y asigna
%=   módulo y asigna
**=  potencia y asigna
*/
// 1. = asignación
let matias = "";
//console.log(matias);
let goles = 5;
goles += 50;
goles -= 50;
goles += 10;
goles /= 3;
//console.log(goles);

//3. Operadores de Comparación
/*
==   igual (valor)
===  igual estricto (valor + tipo)
!=   diferente
!==  diferente estricto
>    mayor que
<    menor que
>=   mayor o igual
<=   menor o igual
*/

//1. igual 
let var1 = 1;
let var2 = "1";
let resultadoVars = var1 == var2;
//console.log(resultadoVars)
// ===
let resultadoVars2 = var1 === var2;
//console.log(resultadoVars2)


//!= (no es igual a)
let var3 = 1;
let var4 = "1";
//console.log(var3 != var4);
//console.log(var3 !== var4);

//>    mayor que
let var5 = 70;
let var6 = 70;
//console.log(var5 > var6);
//console.log(var5 < var6);
//console.log(var5 >= var6);
//console.log(var5 <= var6);




//4. Operadores Lógicos
/*
&&   AND (y)
||   OR (o)
!    NOT (negación)
*/

let edadMatias = 17;
let edadMia = 42;
    //condicionales && ambas deben dar true
    if (edadMatias && edadMia){
        //console.log("ambos existen")
    } else {
        //console.log("no hay existencias")
    }


    //condicionales || una de las condiones debe dar true
    let perro = "perro";
    let gato = "gato";

    if (perro || gato) {
        //console.log("unos de los dos existe")
    } else {
        //console.log("no hay existencias")
    }

    //condicionales ! (negación)
    let mayorEdad = 18;

    if (!mayorEdad) {
        //console.log("no puedes comprar")
    } else {
        //console.log("si puedes comprar")
    }

    let mayorDeEdad = 18;

    if (mayorDeEdad >= 18) {
        //console.log("Puedes comprar los tickets")
    } else {
        //console.log("Eres menos de edad, un adulto puede comprar los tickets por ti")
    }


//5. Operador Ternario
// condición ? valor_si_true : valor_si_false

mayorDeEdad >= 18 ? console.log("eres mayor de edad") : console.log("erí chico");

/*
let edad = 18;
let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log(mensaje);
 */



//6. Operador de Concatenación / Template
/* 
let name = "George";
console.log("Hola " + name);
more modern = `Hola ${name}`
 */

let text1 = "hola,"
let text2 = "soy goku."
console.log(text1 + " " + text2)








