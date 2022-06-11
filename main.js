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



let arreglo = [1, 2, 3, 4, 5, 6];

console.log(arreglo[4]);

let auto = {
    año: 1990,
    color: 'Rojo',
    dueños: ['Mario', 'Mauricio', 'Paty', 'María'],
    marca: 'Ford',
    pago: false,
    accesorios: {
        bocinas: 'Marca cara',
        llantas: 'Micheline',
        canciones: ['Pollito', 'Vaca lola']
    },
    "que tiene espacios": 'hola',
    propiedadEspacios: 'HEYYYY'
}

console.log(auto.marca);
let propiedad = 'accesorios'
let propiedad2 = 'canciones'
console.log(auto[propiedad][propiedad2]);
console.log(auto.accesorios.canciones);
let propiedadEspacios = "que tiene espacios";
console.log(auto[propiedadEspacios]);
console.log(auto.propiedadEspacios);


auto["que tiene espacios"] = 110;
auto.marca = "Nissan"

auto.nuevaPropiedad = 'Un Valor'

delete auto.propiedadEspacios;

console.log(auto);


function mostrarObjeto(objetoParam) {
    console.log(objetoParam);
}