/**
 * let declara las variables
 * y las destruye saliendo del
 * bloque.
 */
var numero = 10;

if(true){
    var numero = 20;
    console.log(numero)
}else{
    console.log(numero)
}
console.log(numero);


let cadena = 'Cadena1';

if(false){
    let cadena = 'Cadena2';
    console.log(cadena)
}else{
    let cadena = 'Cadena3';
    console.log(cadena)
}
console.log(cadena);