// const http = require('http')

//Para que sirve este modulo http?

//Hay que explicar el modelo cliente servidor[Carpeta en fisico [Http]]

//lo primero que tenemos que hacer es crar un programa que permita escuchas esas flechas(que vimos en la carpeta en fisico [http]) o mejor dicho que permiten recibir las peticiones. La fecla inicial que el navegador le esta pidiendo algo al servidor se le conoce como request o peticion en español y lo que devuelve el servidor Se le conoce como response.
//Lo que tenemos que crear en node en un programa que reciba peticiones y tambien pueda devolver respuestas, para crearlo utilzamos el modulo http:

// http.createServer((request, response) => {
//     response.write('Hello World')
//     response.end()
// }).listen(3000)

// console.log('servidor escuchando en el puerto 3000')

//CreateServer es para crear un servidor!!!! :O. La funcion create.server, algo interesante es que no tan solo la creamos y ya sino que tenemos que crear una funcion que se encarge de recibir esos datos de request y respodne.
//Cuando creamos un servidor web no sabemos en que momento van a llegar las peticiones las peitciones puede llegar en cualquier momento. Es por eso que el servidor tiene que mantenerse ejecutandose siempre.Es un programa que no acaba su ejecucion. Cuando creamos un servidor lo que creamos es una funcion que se va mantener escuchando siempre. Esta funcion tiene dos parametros: request, response, que son tan slo informacion que tiene el servidor para poder recibir datos del cliente y devolver datos al cliente.
//Algo importante con node y es que pide que despues de que escriba el contenido que voy a enviar al cliente llame a la funcion response.end para decir que ah acabado el mensaje. Como esta servidor hay que mantenerlo ejecutado lo que voy ahcer es ejecutar despeus de esta funcion, (despues de este metodo), otro metodo llamado: .listen, este metodo le podemos colocar un numero de puerto: esto de pasarle un numero a este progrma es por que justamente los programas de red que estan basados en algun protocolo como fttp (fibra optica) para enviar archivos smtp para enviar correos, cada uno esta reservado con un numero especial en donde no va interferir con otros programas. htto port en gogle para verque honda. Ver en wikipedia.

//La razon por la cual escribimos localhost:3000 es por que esto no es tan solo un programa que se ejecuta en el navegador sino que esto esta esperando que se pueda ejecutar desde otras maquinas. Entonces al decirle localhost 3000 le estoy diciendo, conectate a mi propia maquina a este computador mismo y utiliza el puerto 3000 que es el programa que esta escuchando : AHI ESTA NUESTRO PROGRAMA. En el 300 si esta un programa esuchando que es nuestro servidor.
// Bajo la idea esta entonces en el grafico podemos poner que todo nuestor servidor se esta ejecutando con nodejs en el puerto 3000 mil y es justament lo que creamos.

//Con control c se cancela el servidor.
//------------------------------------------------------------
//[Request] Ahora trabajermos con el request que nos ofrece el createserver.
// const http = require('http')

// const server = http.createServer((request, response) => {

//     console.log(request.url)

//     if (request.url === '/') {
//         response.write('Welcome to the server')
//         return response.end()
//     }

//     if (request.url === '/about') {
//         response.write('acerca de')
//         return response.end()
//     }
  
//     // response.write('Not Found')
//     response.write(`
//     <h1>Not Found</h1>
//     <p>Esta pagina no se encontró</p>
//     <a>Volver a la pagina principal</a>
//     `)
//     response.end()
// })

// server.listen(3000)

// console.log('servidor escuchando en el puerto 3000')

//Si refrescamos en el navegador, y ejecutamos nuevamente node http.js y damos enter vemos que hay una especie de salida, y ahi esta escrito todo el objeto http.
//El objeto http lo unico que es es informacion acerca del cliente, es decir el cliente me puede enviar informacion y yo puedo extraerla para poder utilizarla en el backend.
//Como request es un objeto muy grande lo que hacemos es usar el .url para hacerlo bien. Si vemos en la ejecucion de este, vemos que hay un /  y un /favicon.ico. Ruesest.url es lo que justamente el visitante esta utilizando si damos /algo vemos en ejecucion el /algo 
//Los return de la funciones hacen que si que si yo escribo un return en algun punto de la aplicacion este va salir de la funcion ya no va continuar. Es como decir si request.url es about muestra el mensaje acerca de y returna esta respuesta al cliente.
//Tambien en estos end tambien podemos devolver contenido en html es decir no solo un string tambien html. Podemos verlos en elementos de html. Pero si queres agregar mucho contenido html en vez de comillas simples '' podemos poner backtips ``
//-------------------------------------------------------------
//[Npm ] Hay modulos open source o paqutes que los crea la comunidad, si no lo tenemos en node. Esto es lo bueno de paquetes de terceros o modulos de terceros: npm.

//Como descargamos el modulo?
//Node ya viene con un progrma especial que se llama npm. Que nos permite administrar paquetes de node. Si ponemos npm install colors vemos 3 paquetes uno es el package.json otro es el package-lock.json y otro es node-modules.
//En package .json habra un objeto con un string dependeccies que tiene justamente el modulo que acabamos de instalar: colors, y al lado vemos la version que tenemos instalado.
//El package lock.json. A menudo cuando nosotros vamos a instalar un modulo ese modulo esta creado por otros desarrolladores y esos desarrolladores probablemente deben estar creando modulos que estan basados en otros modulos. Si un modulo esta basado en otro modulo como es que ese modulo sabe los modulos exactos,que nesecita? como sabe que versiones exactas nesecita?, bueno para eso sirve el package-lock.json. Permite a los modulos que nosotros instalamos esto va tener como una espcie de lista de lo que nesecita ese modulo. La mayoria de los desarrolladores no saben para que sirve el package-lock.json 
//En node modules, descarga el codigo del proyecto: eso esta en la carpeta colors, lo interesante es que no solo tiene el codigo sino una copia del repositorio donde esta su documentacion: Readme.md y el package.json que es como esta creado ese modulo. Por lo general no se altera el paquete que instalamos. Lo que hacemos en npm install es intalar un paquete y ese modulo se garda en la carpeta node_modules. Por eso se llama asi. 
// const colors = require('colors')
// //Escribimos el modulo instalado

// console.log("Hello World".bgMagenta)
// console.log("faztweb.com".bgBlue)
// console.log("google.com".bgYellow)

//Si ejecutamos vemos los colores. Es muy comun usar modulos. Estoy ayuda a facilitar la creacion de nuevos programas es muy usar muchos modulos. Quiza nesecitamos un modulo para añadir autenticacion de usuario, quiza nesecitamos un modulo para poder guardar en una base de datos, quiza nesecitamos un modulo para poder guardar archivos. Hay otra forma de instalarlo que es con npm i colors. Todos los modulos se guardan en node_modules. En package.json vemos una lista de todos los modulos instalados. Supongamos que se eliminan las carpeteas de modulos por x razon o por que estamos en otro lugar. EN un proyecto grande podemos tener que estar instalando un monton de modulos asique en package.json podemos ver todos los modulos, enotnces en ejecucion ponemos npm install y los intala a todos. O h queremos sacar un modulo ponemos npm remove y el modulo.
//-------------------------------------------------------------
//npm init
//  Los dos archivos package-lock.json y package.json se crearon por si solo, pero tambien podemos crearlos a traves de un comando. Para mostrarlos cerramos este proyecto y creamos otro llamado first-node-project importante ponerle - Y ahi dentro ejecutamos un comando llamado npm init aparecera el package name: (first-node-project) para ponerle nombre a tu proyecto.  Y LUEGO TE APARECERA el version: (1.0.0) se le conoce como semver que nos permite poder detallar cuales son las modificaciones de nuestro softward al mismo tiempo, ej si esteamos haciendo una modificacion pequeña ponemos: 1.0.1 si añadimos un cambio importante pero que no interrumpe con la interrupcion de la biblioteca o que no altera algo importante en todo el codigo cambiamos el 1.1.0 y si hacemos un cambio importante que ya no es compatible con la version anterior cambiamos el primero numero 2.0.0, esto es importante si instalamos paquetes. Para empezar ponemos 0.0.1. Luego te aparece el entry point este es el archivo inicial, es el archivo incial cuando ejecutemos el programa, por defecto esta el index.js. Pero supognamso que se llama app.js y bueno le ponemos este. Luego aparece un comando para hacer testing, pero como no lo vamos a usar tocamos enter. Luego es si hay un repositorio de git, si trabamos en equipo vamos a tener que subir el repositorio a un repositorio central. O un sitio en donde todos los desarrolladores vana poder acceder. Luego una palabra clave, como para que se pueda encontrar bien en npm, ej first, proyect, nodejs. Author por lo general es el nombre de usuario de git, en licence damos enter. Y ya estaria. Le damos yes si nos justa toda la configuracion y leston. Esto se puede ver en package.json :o.
//Esto sirve para que sepa el nombre del proyecto,la version el autor que seria esto como informacion extra del proyecto. Si ponemos en app un console.log("heelo world") y ejecutamos con node app.js y nos ejecuta eso.

//Lo intersante si vemos esto hay una seccion que se llama scripts. Esta seccion es para poder crear mis propios comandos. Ej quiero usar un comando ejecutar. Bueno este va dentro del objeto de scripts. Cuando yo uso el comando ejecutar quiero que por ejemplo ejecute el comando "node app.js" entonces, si vamos a consola en consola podemos poner npm run ejecutar. Npm run es como decir quiero ejecutar un comando(run), un script + el comando. Dbemos entender que nuestro, codigo lo que scribimos es lo importante. El resto como los modulos, la version, etc y demas van en el package json. Entonces si tenemos codigo de un progrma todoe sto, va estar realcionado con los archivos de js. Enotnces si quermeos tener un poco de orden pondemos crear una carpeta src(source) y poner todo ahi,entonces podemos decir que ahi esta todo el codigo fuente y lo que ete afuera es para funcionamiento interno de node. Entonces si mandamos npm run ejecutar no funciona por que tenemos que cambiar la localizacion enel package json. Es importante saber que hay comandos que son basante comunes. como start, entonces dice que podemos poner npm start, pero no es lo mismo con otro nombre solo con start. IMportante no podemos crear varias start, y tampoco podemos dejarlo con una coma al final si no hay nada despues, solo la llave entonces no tiene sentido poner la coma. Hay un comando llamado dev que es para desarrollar 

//Hy un modulo que reinicia el codigo cada vez que hay un cambio: nodemon. Simplemente si installa con npm install nodemon.

//Hy un comando extra, cuando trabajamos con node, tenemos dependecias, ya sabemos que son modulos que nuestro proyecto depende, para tambien cuando trabajamos con node tambien podemos installar modulos que tambien nos va servir en desarrollo:
//¿Como podemos diferenciar modulos que son para comodidad de modulos que son de desarrollo?: Node tiene una propiedad que se llamada dev dependencies qie ahi colocara los modulos de desarrollo y los que si neesecita para funcionar, los escenciales. PARA ESTO USAMOS npm i nodemon -D Igual el nodemon, no va ahi pero esta bueno para saber diferenciarlos. Entonces este codigo "dev": "nodemon src/app.js" para que sirve entonces?:Si lo ejecutamos vemos que hay unos mensajes extras que dice:
// [nodemon] 2.0.20 [La versionde nodemon]
// [nodemon] to restart at any time, enter `rs` [Puedes reinicar en cualquier momento dice]
// [nodemon] watching path(s): *.*[Estoy vigilando todos los archivos dice. Vigila todos los archivos que tenemos en nuestro proyecto, modificacmos un archivo cambia la configuracion por si sola.]
// [nodemon] watching extensions: js,mjs,json
//-------------------------------------------------------------
//[Global modules]
//Hay otra forma de instalar modulos esta es una manera global.Se puede isntalar en el cotexto real de todo nuestro ecosistema, es decir no tan solo podemos instalar modulos para este proyecto, sino instalar modulos que estan en nuestro computador. Por ejemllo con nodemon seria npm i nodemon -g que nos permite poder instalar nodemon en todo nuestro comoputador. nodemon index.js para ver. npm remove nodemon -g para removerlo. Si ejecutamos de nuevo no lo encontrara. Cuando nosotros ejecutamos un programa debemos asegurarnos que este instalado si, un modulo esta en nuestras dependencias node va tratar de buscarlo en package.json sino en los modules nativos de node (los que ya tiene instalado ) sino lo encuentra lo buscara en los modulos globales(los que tienen -g)y si no lo encuentra se mostrata el comando que no se encontro.
//-------------------------------------------------------------
//Npx
//Sirve para ejecutar algunas aplicaciones de consola que pueden instalarse con node. Si instalamos npm i nodemon y vamos a node modules y en carpetas veras una llamada .bin QUE ESTA carpeta contiene los ejecutables que podemos utilizar en nuestro proyecto. Por ehemplo: nodemon src/index.js el nodemon no se importa desde codigo sino que se llama desde consola entonces de donde viene est? o en donde esta ubicado este comando? Bueno justamente ahi dentro de .bin  Entonces podemos ejecutar de lasiguiente manera: .\node_modules\.bin\nodemon index.js por ejemplo. Y bueno lo ejecuta igual. Esto se conoce como cli o programas de consola. Herramientas que funcionan desde consola.

//Hay otro modulo llamado cowsay que tiene una figura de una vaca. Si lo intalamos npm i cowsay estaar la caprta esta en node modules llamada cowsay en en .bin estara el comando de ejecucion. .\node_modules\.bin/cowsay Hello world podriamos poner. Este comando no esta instaldo en todo el navegador solo en ese proyecto. Seria ideal llamarlo de una mejor forma sin la nesecidad de estar navegando en toda esta RUTA par poder ejecutarlo. Podemos haerlo con una secion en scripts dentro que seria el comando "vacamuu": "cowsay Hola Mundo! Soy una vaca!" entonces ponemos npm run vacamuu.

//Supongamso qeu queremos usar este comando pero no lo quiero instalar en mi proyecto por que es solo momentaneo, no lo vamos a estar utilizando siempr, hay otra forma de utilizarlo: npx que seria que si nosotros le pasamos un modulo que no existe en nuestro computador lo va descargar y lo va ejecutar inmeditamente entonces podemos llamar ese modulo y de esta forma nos evitamos instalarla en nuestro proyecto. npx cowsay curso!. 

//Hay uno para un server: empezamos con npm serve y luego ejecutamos el comando + la carpeta que va servir entonces seria: npx serve public. Damos el y en el comando y leston.
//-------------------------------------------------------------
//[Event loop] 

// ¿Por que js utiliza una funcion dentro de otra funcion? hay entender un concepto basico que se conce como event loop. Creamos primero la carpeta event_loop y vemos ahi