console.log('first')

function addition(num1, num2) {

    return num1 + num2
}
console.log(addition(10, 20));
function subtraction(num1, num2) {

    return num1 - num2
}
console.log(subtraction(10, 20));
function multiplication(num1, num2) {

    return num1 * num2
}
console.log(multiplication(10, 20));
function division(num1, num2) {

    return num1 / num2
}
console.log(division(10, 20));



function isAllowed() {

    let user = prompt('enter your age');

    if (user >= 18) {

        console.log('you are allowed to enter the cinema');
    } else {

        console.log('you are underage so you are not allowed to enter the cinema');
    }
}
isAllowed();








