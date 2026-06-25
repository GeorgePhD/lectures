

//console.log("Arrays & Methods");


//array o arreglo (los arrays comienzan desde el indice 0)

const numbers = []; //declaracion de un array vacio


const nbaPlayers = ["Michael Jordan", "Kobe Bryant", "Magic Johnson", 23]; //        declaracion de un array con elementos


//como acceder a los elementos de un array

//console.log(nbaPlayers[0]); //acceder al primer elemento del array
//console.log(nbaPlayers[1]); //acceder al segundo elemento del array
//console.log(nbaPlayers[2]); //acceder al tercero elemento del array
//console.log(nbaPlayers[3]); //acceder al cuarto elemento del array
//console.log(nbaPlayers); //acceder a todos los elementos del array


const animals = ["Dog", "Cat"];

//metodos de los arrays, los metodos son funciones que realizan acciones especificas en los arrays.

//Metodo push: agrega uno o mas elementos al final del array.
animals.push("elphant"); //agrega un elemento vacio al final del array

//console.log(animals); //muestra el array con el nuevo elemento agregado

animals.push("Lion", "Tiger", "goat"); //agrega dos elementos al final del array
//console.log(animals); //muestra el array con los nuevos elementos agregados

//console.log(animals[3])

//length: propiedad que devuelve la cantidad de elementos en un array.

//console.log(animals.length); //muestra la cantidad de elementos en el array



//Metodo pop: elimina el ultimo elemento de un array y lo devuelve.
const fruits = ["Apple", "Banana", "Orange"];

fruits.pop(); //elimina el ultimo elemento del array
//console.log(fruits); //muestra el array sin el ultimo elemento


fruits.unshift("Orange"); //agrega el primer elemento del array, puedes agregar varios elementos separados por coma.
//console.log(fruits); //muestra el array sin el primer elemento

fruits.unshift("Pineapple", "Kiwi", "Mango"); //agrega el primer elemento del array, puedes agregar varios elementos separados por coma.
//console.log(fruits)








//arrays & methods

console.log("Arrays & Methods");

//Arrays o arreglos: son estructuras de datos que permiten almacenar multiples valores en una sola variable.


const marcasDeCelulares = []; //declaracion de un array vacio

const appleProducts = ["iPhone", "iPad", "MacBook",]; //declaracion de un array con elementos

console.log(appleProducts[0]);
console.log(appleProducts[1]);
console.log(appleProducts[2]);
console.log(appleProducts[3]);//undefined, ya que no existe un cuarto elemento en el array
//console.log(appleProducts);


//metodos de los arrays

//Metodo push: agrega uno o mas elementos al final del array.
marcasDeCelulares.push("Samsung");
//console.log(marcasDeCelulares);

marcasDeCelulares.push("Xiaomi", "Huawei", "Motorola", "Nokia");
//console.log(marcasDeCelulares);

//pop: elimina el ultimo elemento de un array y lo devuelve.
marcasDeCelulares.pop();
//console.log(marcasDeCelulares);


//unshift : agrega uno o mas elementos al inicio del array.
marcasDeCelulares.unshift("Sony");
console.log(marcasDeCelulares);

//shift: elimina el primer elemento de un array y lo devuelve.
//marcasDeCelulares.shift("Sony");
//console.log(marcasDeCelulares);


//splice: agrega o elimina elementos en un array en una posicion especifica.
marcasDeCelulares.splice(0, 1); //
console.log(marcasDeCelulares);

marcasDeCelulares.splice(0, 0, "LG"); //agrega "LG" en la posicion 1 sin eliminar ningun elemento
console.log(marcasDeCelulares);

marcasDeCelulares.splice(5, 0, "Entel"); //agrega "LG" en la posicion 1 sin eliminar ningun elemento
console.log(marcasDeCelulares);







































































