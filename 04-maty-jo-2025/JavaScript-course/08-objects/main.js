

console.log("Welcome to the JavaScript Objects Course!");

// Example of creating an object
const heroe1 = {

    nombre: "Saitama",
    poder: "mata de un golpe",
    edad: 25,
    ciudad: "Japón",
};

/* console.log(heroe1.nombre);
console.log(heroe1.poder); */







const heroe2 = {
    nombre: "Goku",
    poder: "Puede volar y tirar kamehameha y genkidama",
    ciudad: "Japan",
    edad: 24,
};
/* console.log(heroe2.nombre);
console.log(heroe2.poder);
console.log(heroe2.ciudad);
console.log(heroe2.edad); */



//modificar propiedades de un objeto
heroe2.poder = "Puede volar y tirar kamehameha y genkidama y teletransportarse";
heroe2.edad = 30;
heroe2.ciudad = "Planeta Vegeta";
console.log(heroe2.nombre);
console.log(heroe2.poder);
console.log(heroe2.edad);
console.log(heroe2.ciudad);

//agregar nuevas propiedades a un objeto

heroe2.rango = "Saiyajin";
heroe2.nivelDePoder = 9001;
heroe2.wife = "Milk";
console.log(heroe2);


// create an object with the name "dog"
// create an object with the name "car"
// create an object with the name "videoGame"




const chunga = {

    nombre: "agustina",
    edad: 10,
    altura: "20cm",
    ciudad: "santiago",


};

console.log(chunga)
console.log(chunga.edad)
console.log(chunga.nombre)
console.log(chunga.altura)
console.log(chunga.ciudad)




const perro = {
    nombre: "Molly",
    peso: "7 kg",
    ciudad: "Curico",
    raza: "Poodle",
    alimetacion: "Comidas de perro y alimentos vegetales",
    como__es: "es juguetona y le gusta jugar con las pelotas de futbol"

};
console.log(perro)




const people = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 22, city: "Chicago" },
    { id: 4, name: "Diana", age: 28, city: "Houston" },
    { id: 5, name: "Ethan", age: 35, city: "Miami" },
    { id: 6, name: "Fiona", age: 27, city: "Seattle" },
    { id: 7, name: "George", age: 40, city: "Denver" },
    { id: 8, name: "Hannah", age: 23, city: "Boston" },
    { id: 9, name: "Ian", age: 31, city: "San Francisco" },
    { id: 10, name: "Jasmine", age: 29, city: "Atlanta" }
];



console.log(people[0]);

peopleMap = people.map(person => person.name);
console.log(peopleMap);
peopleMap2 = people.map(person => {
    return (
        {
            fullName: person.name,
            age: person.age
        });
})
console.log(peopleMap2);








