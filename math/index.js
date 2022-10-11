//Este archivo contendra funciones crearemos 4

// function add(x, y) {
//     return x + y 
// }

// function restar(x, y) {
//     return x - y 
// }

// function multiplicar(x, y) {
//     return x * y 
// }

// function dividir(x, y) {
//     return x / y 
// }

// console.log(add(10, 20))
// console.log(restar(10, 20))
// console.log(multiplicar(10, 20))
// console.log(dividir(10, 20))

//Si queremos ejecutar esos valores simplemente llamamos al archivo. Entonce le decimos node math/index.js, pero no saldra nada por que solo le dijimos que se ejecute, a menos que le agregemos el console. 
//Ahora el asunto es que no queremos utilizar solamente las funciones aqui sino compartilas con el resto de mi codigo. Entonecs lo que podemos hacer es crear un modulo.Podemos usar esas constante module para exportarlos:

// function add(x, y) {
//     return x + y 
// }

// function restar(x, y) {
//     return x - y 
// }

// function multiplicar(x, y) {
//     return x * y 
// }

// function dividir(x, y) {
//     return x / y 
// }

// module.exports = {
//     add,
//     restar,
//     multiplicar,
//     dividir
// }

//Con esto ya podemos exportar las 4 funciones, el no sabe como la va utilizar simplemente la esta exportando. De esta forma ya podemos reutlizarla en otros archivos.
//------------------------------------------------------------
//[os]

// function add(x, y) {
//     return x + y 
// }

// function restar(x, y) {
//     return x - y 
// }

// function multiplicar(x, y) {
//     return x * y 
// }

// function dividir(x, y) {
//     return x / y 
// }

// module.exports = {
//     add,
//     restar,
//     multiplicar,
//     dividir
// }

//-------------------------------------------------------------
//[Es module]

export function add(x, y) {
    return x + y 
}

export function restar(x, y) {
    return x - y 
}

function multiplicar(x, y) {
    return x * y 
}

function dividir(x, y) {
    return x / y 
}

export default {
    add,
    restar,
    multiplicar,
    dividir
}