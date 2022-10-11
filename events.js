//Vamos a crear algo que se conoce como un event emider. Node provee un modulo para crear propios eventos.

const EventEmitter = require('events')

//Es bastante comun colocarle este EventEmitter. Con este modulo creamos un nuevo evento.

const customEmitter = new EventEmitter()
//Lo que hacemos con new es devolver un nuevo objeto, este objeto permite escuchar determinados eventos.

customEmitter.on('responder', (data,data2) => {
    console.log("recibido")
    console.log(data)
    console.log(data2)
})
//Las mas importantes de las propieades de customEmitter son: emit y on. Emmit es para emitir un evento como si estuvieramos dando un click por asi decir y on que es como que escucha determinado evento, es decir cuando pase determinada cosa escucha ese evento.

customEmitter.emit("responder", "Hello world", "Soy un tercer dato eskere")
customEmitter.emit("responder", 30)
customEmitter.emit("responder", {name: "ryan"})
customEmitter.emit("responder", [1, 2, 3])

//Podemos enviarles diferentes cosa weon. Si ejecutamos vemos todos los datos que se estan eejecutando. Es important primero crear el evento y despues ejcutar los emit.
//-------------------------------------------------------------
//[Streams]
// Nos ayuda a poder enviar un archivo grande o poder dividir una archivo grande en multiples parte para que puedan ser transmitidos facilmente. Pienselos a los streams como ver una pelicula online. Cuando veas una pelicula no es que al momento de ver ya tengas toda la pelicula disponible en tu dispositivo sino que a medida que vas viendo el dispositivo va descargando las porciones del archivo, de esta manera puedes ir descargando las partes que nesecitas y con esto el servidor se ahorra trabajo al no enviarte el archivo completo sino te va enviando parte a parte.
//Para entenderlo creamos una carpeta llamada streams.js
