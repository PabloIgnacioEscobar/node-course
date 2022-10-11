//Empezamos leyendo algun archivo.

// const {readFile} = require('fs')

// readFile('./data/first.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// })

//Este es codigo asyncrono y puede ser bastante dificil de leer en un proyecto real entonces la forma mas chill es usar esa funcion readfile en una promesa. Para convertilo js nos da un objeto especial llamado promises  que tenemso que instanciar: ya esta incluido en los entornos de js.

// const { readFile } = require("fs");

// new Promise(function (resolve, reject) {
//   readFile("./data/first.txt", "utf-8", (err, data) => {
//     if (err) {
//       reject(err);
//     }
//     resolve(data);
//   });/* ESTO de cierta forma es como esperar que la respues de la funcion readfile lo espera otra funcion. Es decir readfile va leer el archivo, va leerlo en formato string va ejecutarlo con un callback pero luego cuando se ejecute en un callback puede dar un error si da un error le va pasar ese error a reject(la promesa) y si todo fue bien le va pasar los datos a resolve que es una funcion.*/
// });
//Lo que va esperar es justamente que se ejecute un codigo despues de cierto tiempo. Entonces cuando escuchamos por ahi que se ejecuta despues de cierto tiempo nosotros no sabemos si va terminar bien o va terminal mal, es decir si nos va devolver un error despues de cierto tiempo o nos va devolver los datos que queriamos. Este promes espera una funcion como parametro, que se va ejecutar despues de qie termine. Esta funcion justamente espera 2 posibilidades un dato exitoso(sucess) o un dato de error. Pero no los llama asi por lo general y el no sabe lo que vadevolver por lo general se le coloca resolve como diciendo que ya se revolvio y en lugar de error podriamos colocar reject como si nos repondieron mal o ocurrio un error.

// const { readFile } = require("fs");

// function getText(pathFile) {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, "utf-8", (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(data);
//         });
//       });
// }

//Ahora con esto ya esta convertido la primesa el asusnto es que por lo general se quiere cambiar el texto este que estamos leyendo es decir no siempre vamos a querer leer el mismo texto. Entonces lo que vamos ahcer es pasarselo a travez de un parametro de una funcion.
//Ell parametro que va esperar la funcion va ser el archivo que querramos leer: pathFile. Y lo que va leer readFile es justamente la ruta del archivo  que le pase a esta funcion.
//getText es una fucion que esta ejecutando codigo asyncrono. Tambien puede hacerse con una funcion flecha

// const { readFile } = require("fs");

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, "utf-8", (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(data);
//         });
//       });
// }

//Hacemos todo esto por que utilizando el getText AHORA, podemos escribirlos de otra forma: ej: si quiero leeer un archivo ya no utilizo readfile por que ya lo coloque dentro de una promesa. Entonces le digo:

// getText('./data/fourth.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log (error))

//Y luego agregamos la funcion then que es como decir que cuando todo eso termine bien voy a estar recibiendolo o tambien tiene una funcion llamada catch que es para recibir cuando todo vaya mal. Esta funcion dentro del then va esperar los datos, la llamaremos result. Acordarse que la fuyncion flecha no nesecita de las llaves y del nombre function.

//La sintaxis promise permite escribir esta sintaxis que es mas paqeña y facil de entender, y no precuparse por la logica del [45.54] por que no siempre van a tener que escibir esta logica de ahi por lo general esa logica ya nos la dan hecha. Pero si es iumportante entenderla. Si en algunos de los then falla algo van a ser capturamos por el cath por un solo cath.
//-------------------------------------------------------------
//[Async / await]
//Este es una forma mas facil y corta de entender y de hacer que de los .then y cath de las promesas:

//Async sirve para que nostros podamos especificar que una funcion adentro de su contenido esta manejando codigo asyncrono y await es cuando estamos utilizando una funcion asyncrona para indicar que ESE codigo va tomar algo de tiempo.

// const { readFile } = require("fs");

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, "utf-8", (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(data);
//         });
//       });
// }

// const result = await getText('./data/first.txt')
//Como es asyncrono vamos a marcarlo como await. Gracias al await lo que yo le estoy diciendo es que una vez termine la funcion de este codigo este await retornara un resultado y lo podamos guardar en una constante que se llame result. getText('./data/first.txt') es como codigo sincrono pero gracias al await le estamos diciendo NO, esto es asyncrono.

// async function read() {
//     const result = await getText('./data/first.txt')
//     const result2 = await getText('./data/second.txt')
//     console.log(result)
//     console.log(result2)
// }
//Para qe funcione este await es escencial que todo esto este dentro de una funcion mucho mas grande es decir crear una funcion llamada read. La funcion debe tener una palabra clave Async como marcando que todo este contenido es asyncrono. lISTO Entonces este codigo de arriba vendria ser el equivalente hay codigo de la linea [58] lo ejecutamos simplemente con read

// read()

//Ahora si queremos ejecutar el siguiente archivo, notenemos que ejecutarlo con un then, sino que debajo hacemos lo mismo pero con difeente archivo.
//¿Que pasa si ocurre un error? Por que nosotros teniamos un cath para manejar errores?
//Si ocurre un error en cualquier de estos codigos asyncronos que tenemos aqui nosotros podemos englobarlo dentro de un try cath:

// async function read() {
//   try {
//     const result = await getText("./data/first.txt");
//     const result2 = await getText("./data/second.txt");
//     console.log(result);
//     console.log(result2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// read();
//Hay una sintaxis que se llama try y luego encadenado va un cath ¿Por que escribimos esto? En try es todo el codigo que quiero que se ejcute bien que si o si funcione, PERO si ocurre un error en cualquiera de estas porciones de codigo va saltar inmediatamente el cath. Si ejecutamos esto.
//NOTA el erro se espera como un parametro. Throw acaba con la ejecucion del programa, lanza un error y no se ejecuta inmediatamente salta al cath, por eso vemos el console.log error. Si lo ponemos arriba de todo empieza el error ahi, si lo ponemos en el medio el codigo funciona hasta el errro. El codigo para ver es: throw new Error("Esto es un error que no se esperaba")
//La idea es colocar erroes en cualquier momento.
//-------------------------------------------------------------
//[promisify]
//Una parte importante es convertir nuestro callback a promesas

// const { readFile } = require("fs");
// const {promisify} = require('util')
//Util es basicament un modulo de utilizades es decir, funciones adicionales que provee node para poder convertir codigo o tener codigo mas comodo. Con promisify un callback podemos convertilo en una promesa sin la nesecidad de escribr todo este return new promise:

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, "utf-8", (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(data);
//         });
//       });
// }
//Para no hacer esta conversion manualmente es decir escribir nuestro propio codigo node tiene un modulo que nos permite hacerlo de una forma mas sencilla este modulo se llama promisify para utilizarlo tenemos que traerlo de otra biblioteca de node.

//Entonces lo que podemos hacer seria
// const { readFile } = require("fs");
// const { promisify } = require("util");

// const readFilePromise = promisify(readFile);
//Ahora podemos usarla como funcion el readFilePromise para poder leeer un archivo basdao en promesas. Entonces ya no tenemos que utilzia todo esto:

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, "utf-8", (err, data) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(data);
//         });
//       });
// }
//Ahora en este async podemos remplazarlos con readFilePromise
// async function read() {
//   try {
//     const result = await readFilePromise("./data/first.txt", "utf-8");
//     const result2 = await readFilePromise("./data/second.txt","utf-8");
//     console.log(result);
//     console.log(result2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// read();

//Leston!
//-------------------------------------------------------------
//[fs/promise]
//Antes vimos como a traves del modulo util hemos podido convertir una funcion que espera un callback a una promesa esto es asi pq muchas funciones en sus inicios funcionaban con callbacks enotnces a parir que node fue evolucionando fue actualizando elcodigo nosotros obtuvimos este codigo para ir modificando el codigo viejo con nuevos patrones como lo serian las promesas. En las ultimas versiones de node lo colocaaron mucho mas facil y ya no tenemso que convertirlo nosotros mismos,es deir desde fs colamos una opcione llamada promises

// const { readFile  } = require("fs/promises");
// const { promisify } = require("util");

// const readFilePromise = promisify(readFile);

// async function read() {
//   try {
//     const result = await readFile("./data/first.txt", "utf-8");
//     const result2 = await readFile("./data/second.txt","utf-8");
//     console.log(result);
//     console.log(result2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// read();

//Esta carpeta promises da algunas funciones. Lo que esta queriendo decir es que tenemos las mismas funciones pero ya pasadas a promesas! Ahora ya no nesecitamos el util y el promisify que convertia la funcion. Lo quita por que ya estas funciones ya vienen convertidas! Entonces est readFile me va permitir leer un archivo de manera asyncrona. Entonces simplemente pasamos la funcion readFile y ya seria promesas.
//-------------------------------------------------------------
//[Events]

//¿Como usar eventos en node?

//Queriendo estender los eventos en index.html la etiqueta button sera para entender el codigo.
//Como podemos manejar el evento click de button?[14 index.html]
//Podemos crear eventos para una conexion cuado te contectes determinado lugar, cuando recibas un dato, cuando respondas algo. En ese caso trataremos de eventos que tratan con datos.
//Para tenr una idea creamos una carpeeta events.js
