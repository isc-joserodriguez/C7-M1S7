let contactos = [
    {
        id: 1240,
        nombre: 'Mario',
        apellido: 'Ramos',
        telefono: '3111234567'
    },
    {
        id: 10,
        nombre: 'Mario',
        apellido: 'Ramos',
        telefono: '3121234567'
    },
    {
        id: 1000,
        nombre: 'Mario',
        apellido: 'Perez',
        telefono: '3121254567'
    },
];

/*
agregarContacto(nombre, apellido, telefono);
eliminarContacto(id);
*/

function agregarContacto(id, nombre, apellido, telefono) {
    // contactos.push(elemento) agrega elemento al final
    // contactos.unshift(elemento) agrega elemento al inicio
    // contactps.pop() elimina el último elemento
    // contactps.shift() elimina el primer elemento
    contactos.push({
        id,
        nombre,
        apellido: apellido,
        telefono: telefono,
    })
}

/* function eliminarContacto(id) {
    contactos.forEach(function (contacto, indice) {
        if (contacto.id === id) {
            contactos.splice(indice, 1)
        }
    });
}  */

function eliminarContacto(nombre, apellido, telefono) {
    let contador = 0;
    contactos.forEach(function (contacto, indice) {
        if (
            contador === 0
            && contacto.nombre === nombre
            && contacto.apellido === apellido
            && contacto.telefono === telefono
        ) {
            contactos.splice(indice, 1);
            contador++;
        }
    });
}

let arreglo = [1, 2, 3, 4, 5, 6];
arreglo[4] = 'NuevoValor'



function agregarValorArray(valor) {
    arreglo.push(valor);
    console.log(arreglo);
}

let objeto = { propiedad: 'valor', miFuncion: agregarValorArray };
objeto['propiedad'] = 'NuevoValor'

function agregarValor(propiedad, valor) {
    objeto[propiedad] = valor;
    console.log(objeto);
}
