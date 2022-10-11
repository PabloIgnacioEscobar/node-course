//Una forma de enterdelo es creando un codigo sencillo:

console.log("Primero")

setTimeout(() => {
    console.log("segundo")
}, 0)

console.log("Tercero")

//Si lo ejecutamos en console, lo vemos. Todo correcto ahora aqui viene lo interesante sobre js y su codigo asyncrono: Ej: quiero ejecutar el console.log "segundo" despues de un tiempo bueno creamos un setTimeout. Set time out despues de un tiempo ejecuta tal logica entonces como segundo parametro le decimos el tiempo. Si ejecutamos podemos ver como el ultimo es second. La razon por lo cual ocurre esto es por que al momento en q se ejecuta el codigo viene de primero: console.log("Primero") luego, el settimeout pero como este es una funcion que se va ejecutar despes de un tiempo digamos que node lo coloca para despues, lo coloca como una TAREA PENDIENTE y que mientras se ejecuta continua con la siguiente: console.log("Tercero"). Por eso en consola aparece primero tercero y segundo.

//Lo interesante es que si ponemos en ves de 3000, un cero entonces eso se va ejecutar rapido y podria ser el segundo, por que no hay un delay, no hay un tiempo de espera.Pero si ejecutamos vemos que es lo mismo, ¿Por que esto es asi? Lo que hace node para poder manejar distintas tareas al mismo tiempo es que cuando una tarea se va haciendo lo que hace node es delegando o mejor dicho pasarselo al sistema, mejor dichoque la tarea se este ejecutando y mientras se va haciendo esa tarea salta al tercero. Node sabe que si el timepo es 0 igual es una tarea pendiente es por eso que lo manda a ejecutarse a otro lado. Y ejecuta el tercero. Por que al poner un cero (un tiempo) ya lo toma como tarea pendiente.

//Ej:
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end()
    }
    //Otra forma de escribirlo seria pero para el about seria:
    //task
    if (req.url === '/about') {
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i)
        }
        return res.end("About page")
    }
    res.end('not found')
})

server.listen(3000)
console.log('Server on port 3000')

//Ahora para entendelo supongamos que se visita el /about yo voy a estar ejecutando una logica basante pesada supongamos que es una tarea que puede llevar bastante tiempo, o una consulta a una base de datos, o una consulta a un servidor o la ejecucion de una tarea que puede llevar bastante tiempo. Math es una funcion de js  que es como selecionar.

//Entonces si ejecutamos esto podriamos pensar que la pagina esta tiltada, por que esta cargando. Entonces en teoria si nosotros en ese preciso momento vamos a la ruta incial nos deberia dejar entrar, pero no, la razona  esto se debe por que el hilo principal de node esta bloqueado es decir, el codigo del bloque no deja continuar con otras peticiones por que hace que se siga manteniendo esa tarea y mientras no acabe no deja a otras tareas realizarse. Por eso mismo cuando se hace otra peitcion, el servidor esta bloqueado. Esto se le conoce como bloking code, codigo bloqueante, que significa que bloquea el hilo de ejecucion de node. Entonces lo que se hace para evitar este tipode cosas es utilizar codigo asyncrono el codigo asyncrono se va ejecutando en un segundo plano mientras el codigo al final puede seguir ejecutandose o recibiendo mas peticiones.

//En el siguiente seccion vamos a estar utilizando esta idea no escribir codigo bloqueante en node y vamos a estar manjeando funciones que se ejecutan despues de cierto tiempo.
//-------------------------------------------------------------
//[Promises]
//Esta caracterizticas del lenguaje nos permite escribr un poco mejor codigo asyncrono y que sea mas facil de entender que los call back (Lo que se iba hacia el costado)
//Primero creamos una carpeta promise.js.CREAMOS UN ARCHIVO stream_http.js
