// const myWebAddress = "faztweb.com"
//Esto es algo que queremos reutilizar en otros lugares de la aplicacion. Esto almecena un domino. Supongamos que es un dato que queremos reutilizar en todas las partes de mi app. Entonces tenemos que decidir que vamos a exportar esta constante.
//Para poder exportar vamos a estar utilizando un objeto global de node js, este objeto se le conoce como module.

// console.log(module)

//En la terminal pondemos: node modules/myModule.js. Lo interesante de esto es que tiene una propiedad llamada exports. Este export nos sirve para que NOSTROS podamos decidir que podemos utilizar en otras partes de la app. Este objeto module como es un modulo global, todos los archivos lo tienen disponibles. Entonces lo que podemos hacer es llenar datos en el exports, por ejemplo una variable, constante, o algun tipo de dato de js y otro archivo TAMBIEN puede llamar a este exports y puede extraerlo.

//Por ejemplo:

// module.exports = myWebAddress /* Lo importante es entender que este module no es tan solo para exportar un solo valor  */

//Si volvemos a node modules/myModule.js. En este caso es un string, pero no nesesariamente tiene que serlo, puede ser cualquier tipo de dato.
//Ahora si vamos a main.js[1]

////----------------------------------------------------------
//Como hacemos si queremos exportar varios datos de distintas constantes?
// const myWebAddress = "faztweb.com"
// const myNumber = 30
// const myArray = [10, 20, 30]
// const user = {
//     name: 'ryan',
//     lastname: "ray"
// }

// const group = {
//     myWebAddress: myWebAddress,
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// }

// module.exports = group

// si ponemos node main.js en main.js en la terminal veremos el objeto.
//Otra cosa importante:

// const myWebAddress = "faztweb.com"
// const myNumber = 30
// const myArray = [10, 20, 30]
// const user = {
//     name: 'ryan',
//     lastname: "ray"
// }

// module.exports = {
//     myWebAddress,
//     myNumber,
//     myArray,
//     user
// }
//Si estamos exportando una constante group  y este tiene un objeto con un valor no es nesario crear la constante, se puede direactamente mandarla al module.export. [Ver la diferencia con el de arriba para ver el cambio.]
//Incluso en js nos podemos evitar escribir el nombre de nuevo, simplemente creandolo una sola vez.
//------------------------------------------------------------
//[Exports Individuales]

// console.log(module)

// const myWebAddress = "faztweb.com"
// const myNumber = 30
// const myArray = [10, 20, 30]
// const user = {
//     name: 'ryan',
//     lastname: "ray"
// }

// module.exports = {
//     myWebAddress,
//     myNumber,
//     myArray,
//     user
// }

// console.log(module)

//Si entramos en node module/myModule.js y vemos, hay dos objetos uno llamado module y otro tambien llamado module, osea son el primer y segundo console.log. Lo importante es entender la proiedad exports.
//SI VEMOS bien el primer console.log esta vacio en export esta vacio no tiene nada mientras que el segundo si tiene unos cuantos valores. Pero hay otra forma de poder asignarle valores a un objeto:

// console.log(module)

// const myWebAddress = "faztweb.com"
// const myNumber = 30
// const myArray = [10, 20, 30]
// const user = {
//     name: 'ryan',
//     lastname: "ray"
// }

// module.exports.user = user
// module.exports.myNumber = myNumber
// module.exports.myArray = myArray
// module.exports.myWebAddress = myWebAddress

// console.log(module)

//Es otra forma de exportar, es otra forma de añadir elementos a un objeto de js, asique no hay tanto cambio.

//Otro asunto mas: sii quisieramos crear algunos datos pero no queremos compartirlos simplemente no lo añadimos al module.exports: ejemplo:

// let mySecretVariable = "xyz123"
// //Si no queremos que sea compartida por otros arhicvos simplemente no lo añadimos a un modulo export [ir a main.js linea 20]
// console.log(module)

// const myWebAddress = "faztweb.com"
// const myNumber = 30
// const myArray = [10, 20, 30]
// const user = {
//     name: 'ryan',
//     lastname: "ray"
// }

// module.exports.user = user
// module.exports.myNumber = myNumber
// module.exports.myArray = myArray
// module.exports.myWebAddress = myWebAddress

// console.log(module)
//------------------------------------------------------------
//[Mi Primer modulo]
// let mySecretVariable = "xyz123"

// console.log(module)

// const myWebAddress = "faztweb.com"
// const myNumber = 30
// const myArray = [10, 20, 30]
// const user = {
//     name: 'ryan',
//     lastname: "ray"
// }

// module.exports.user = user
// module.exports.myNumber = myNumber
// module.exports.myArray = myArray
// module.exports.myWebAddress = myWebAddress

// console.log(module)
//------------------------------------------------------------
//[os]
let mySecretVariable = "xyz123"

console.log(module)

const myWebAddress = "faztweb.com"
const myNumber = 30
const myArray = [10, 20, 30]
const user = {
    name: 'ryan',
    lastname: "ray"
}

module.exports.user = user
module.exports.myNumber = myNumber
module.exports.myArray = myArray
module.exports.myWebAddress = myWebAddress

console.log(module)