/**
 * let declara las variables
 * y las destruye saliendo del
 * bloque.
 */
var numero = 10;

if (true) {
    var numero = 20;
    console.log(numero)
} else {
    console.log(numero)
}
console.log(numero);


let cadena = 'Cadena1';

if (false) {
    let cadena = 'Cadena2';
    console.log(cadena)
} else {
    let cadena = 'Cadena3';
    console.log(cadena)
}
console.log(cadena);

//string templates
let numero1 = 5;
let numero2 = 10;
console.log("Si sumo " + numero1 + " + " + numero2 + " mi valor es:\n" + (numero1 + numero2));

console.log(`cadenas ${numero1}`); //Backtic

console.log(`Si sumo ${numero1} + ${numero2} mi valor es:
${(numero1 + numero2)}`);