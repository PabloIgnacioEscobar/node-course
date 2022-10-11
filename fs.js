// const fs = require('fs')

//Podemos utilizar metodos que vienen de este modulo para poder crear archivos, leerlos, eliminarlos o alterarlos.

//¿Como leer un arhivo? [first.txt] si vemos hay dos arvivos cada uno con un texto adentro, si quisieramos leerlo con node lo que tendriamos que hacer es utilizar el modulo fs.

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

//Este metodo lo que hace es leer un arhivo, Sync veremos mas adelante que signicia. Leera el arhicvo si le pasamos la ruta. Lo mostraemos por consola

// console.log(first)
// console.log(second.toString())
//Si prestamos atencion en esta ejecucion veremos un <Buffer con numeros> que es el dato first.txt solo que en un formato crudo. Es decir sin conversiones con tipos de datos no esta interpretando es tal cual el dato. Si esto lo queremos convertir en un formato de string, podemos agregar en reaFileSync una propiedad extra llamada utf-8 que es como decir la codificacion de caracteres. Tambien otra forma es con toString.

//Para crear seria:

// fs.writeFileSync('./data/third.txt', 'este es un tercer arhivo')

//Lo que recibe tambien es una ruta pero no para leer sino para colocar un archivo. Lo que podemos hacer en la carpeta date, es crear un archivo nuevo, el contenido lo ponemos al lado. Si ejecutamos veremo el resultado. Tambien podemos incertarles variables:

// const title = 'Este es el contenido skere'
// fs.writeFileSync('./data/fourth.txt', title)

//¿Que pasa si yo nuevamente vuelvo a ejecutar este script y esta creando un fourth.txt pero ya existe? es decir ya esta el archivo pero va intentar crear el arhicvo. Si ya existe el archivo lo va recrear. Lo va quitar y crear uno nuevo. Pero si queremos que se añada el dato y no se modifique podemos colocar un objet y utilizar una propiedad llamada flag, donde tendra como valor 'a' que seria como añadir.

// const title = 'Este es el'
// fs.writeFileSync('./data/fourth.txt', title, {
//     flag: 'a'
// })
//------------------------------------------------------------
//[Fs Async 2] Otro metodo de poder utilizarlo. Si prestamos atencion las propiedades tienen una propiedad extra llamadaSync. Sync significa la forma en que algunas funciones de node estan funcionando syncronamente.
//El principal proposito de node es funcionar de forma asyncrona [Ver en carppeta fisica, Fs Async 2] 
//¿Por que no todo el codigo puede funcionar de forma asyncrona?
//Muchos lenguajes de programacion antes funcionaban syncronico. En el 2009 cuando introdujo node js popularizo la idea de utilizar codigo asyncrono. lA GRAN parte de js usa codigo asyncrono. Tnemos readFile que funciona de forma asyncrona que se codigo de js y readFileSync el que ya usamos.

//Vamos a itulizar codigo Asyncrono. Cuando no vemos la palabra sync ya podemos que que es codigo asyncrono.

const fs = require('fs')

// const first = fs.readFile('./data/first.txt')

//Como esto es codigo async no podemos escribirlo de esta forma, en este caso el codigo se va ejecutar luego de cierto tiempor. Entonces  la syntaxis de cierta forma tiene que estar escrita de cierta forma para indicarme que se va ejecutar despues: 

// fs.readFile('./data/first.txt', (error, data) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(data.toString())
// })

//Esta es la forma tipica en que vamos a tratar de leer datos. No nesesariamente tiene que se una funcion de ecmacript 5 puede ser una funcion flecha. El error en el parametro seria en el caso de que ocurriera un error. Si queremos hacer que aparezca nomas cuando aparezca el error podemos hacer una condocional
//Hay otra forma de poder utilizar el to string: con utf8

// fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(data)
// })

//Es ta funcion se llama callbacck (empieza en (error,data))  por que esta funcion se ejecuta  despues que termina esta tarea anterior. Esta funcion simplemente nos ayuda a poder ejecutar logica extra.
//Supongamos qeu queremos leer mas archivos como second, lo q la gente creeria es que hay que copiar y pegar y lllamar a second. Y la realidad es que funciona el asunto es que aveces nosotros vamos a querer que mientras termine la operacion primera luego, despues de que acabe continue con la otra, sin la nesecidad de escribir codigo asyncrono.

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data)

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log(error)
        }
        console.log(data)

        fs.writeFile('./data/newfile.txt', 'archivo creado desde fs', 'utf-8', (error, data) => {
            console.log(error)
            console.log(data)
        }) /*  Cuando ejecutamos un archivo no estamos recibiendo ningun dato  de esta funcion simplemente acaba la ejecucion ya esta. */
    })
})

//En cambio si seria con readFileSync no ejecuta la segunda, por que primero tiene que ejecutarse por separado la primera.
//Ahora si prestamos atencion podemos ver que el codigo se esta yengo como a la derecha, hay como una linea que se va ala derecha. Esta forma de escribir codigo no es nada facil de entender y es codigo antiguo de node por asi decirlo. Por que hay mejores maneras de poder escribir esta logica. Este problema se le conoce como callback hell.
//El asunto es que si escribieramos codigo en la vida real de esta forma seria inmantenible, seria dificl de añadir codigo nuevo. Actualmente hay muchas maneras mejores de escribir esta logica que sea mas facil de entender vienen a travez de conceptos nuevos que se conocen como promesas y Async/Await.

//Lo imporante de fs async no es entedner es logica que estamoa escribiendo una funcion dentro de otra, lo importante es entender que el primer codigo utiliza mucho mejor los recursos del computador pq no espera que una tarea termine sino que el primero se ejecuta y mientras se ejecuta el primero dentro y debajo podemos añadir mas codigo que puede ir ejecutando hacia la par.

//Esto esta basado en como el navegador funciona. Cuando estamos en el navegador y visitamos algun sitio el sitio puede ir haciendo multiples cosas a la vez , es decir el navegador no se queda bloqueado hasta que una tarea termine, sino puede ir haciendo multiples cosas al mismo tiempo. Esta es la idea de js.

//Hay un concepto mas complicado que tiene js para explicar todo esto que se conoce como el event loop que esta relacionado con la forma interna en la que funciona node y js en si o los motores de js. Como no es un curso intensivo no vamos a explicar cada detalle del interprete o del enterno de ejecucion basta con entender que es codigo que se va ejecutar despues de tiempo y que solo esta  usando mejor los recursos del computador. Con esto basta para poder crear aplicaciones.
//------------------------------------------------------------
//[Http] Este modulo sirve para poder crear uno de los principales programas que se usan en node que serian, servidores web. Primero creamos un archivo http.js