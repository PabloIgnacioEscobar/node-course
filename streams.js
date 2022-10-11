//Creamos un archivo grande para entenderlo

// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt', "Hello World".repeat(100000))
// }

// createBigFile()

//Si ejecutamos vemos que se creo una carpeta bigFile
//si ponemos dir data en la consola, vemos informacion de bigfile. 

//Si ejecutamos y luego ponemos dir data vemos la cantidad y el peso que ese conlleva. Entonces si queremos utilizar este archivo grande por ejemplo un usuario pide la pelicula, en lugar de enviarle 11 megas completos nosotros podemos dividirlos, de hecho ya existe el modulo streams que lo hace.

//Para poder crear un streams de este tipo hacemos:

const {createReadStream} = require("fs")

//CreatereadStream esta basado en eventos. Estonces se va ejecutar luego de que pase cierto evento. Para llamarlo ahcemos:
const stream = createReadStream("./data/bigfile.txt", "utf-8")
//Esto nos dara una especie de objeto nuevo en el cual llamaremos stream. Este objeto lo llamaremos stream, y este nos dara un evento es decir, un objeto con manejadores de eventos. es decir:

stream.on("data", (chunk) => {
    console.log(chunk)
})
//Esta funcion esperara funciones de datos que se le colca el nomobre chunk, que seria un trozo de informacion.
//Si ejecutamos vemos variaos mensajes. Lo que hace es que cuando dispara el evento El esta enviando una porcion de datos que pesan aprox 65486bytes o 65 kb esto lo que quiere decir es que si tenemos un archivo grande el lo que esta diviendo de 65 kb o en partes de esta y lo esta enviando parte a parte. Si queremos ver los datos en formato de string tenemos que ponerl el utf-8.
stream.on('end', () => {
    console.log("Ya termine de leer el archivo.")
})

stream.on('error', (error) => {
    console.log(error)
})
//-------------------------------------------------------------
//[Streams y HTTP]
//¿Como podemos leer el arhivo archivo y enviarlo en un http? (a un servidor)
