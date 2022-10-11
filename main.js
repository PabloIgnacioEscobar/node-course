// const web = require('./module/myModule')
//Aca vamos a utilizar la funcion llamada require. Esta funcion tambien era un objeto global de node y esto nos permite poder extraer el valor de exports. Vamos a estar utilzando lo que se conoce como ruta relativa, esta ruta nos permite poder especificar que archivos nosotros podemos importar ahi dentro --> ().  Cuando trabajamos con esta sintaxys de traer modulos no es nesesario cololar el .js.

// console.log(web)

//------------------------------------------------------------
//Como module esta exportando un nuevo objeto, hay una sintaxis que nos permite poder extraer valores de este objeto.Si ponemos unas llaves y dentro ponemos control mas espacio podemos ver que podes extraer de este objeto.

// const { myArray, myNumber, myWebAddress, user } = require("./module/myModule");

// console.log(myArray);
// console.log(myNumber);
// console.log(myWebAddress);
// console.log(user);

//Esto no esta relacionado con node sino viene del propio estandar de js que ahora nos permite de un objeto extraer valoress o extraer algunos valores simplemente para evitar traer todo el objeto completo.
//------------------------------------------------------------
//[Exports Individuales]

// const myModule = require("./module/myModule");

// console.log(myModule)

//Si vemos en node main.js podemos ver que estan todos los datos menos el mySecretVariable por que no la exportamos.
//------------------------------------------------------------
//[Mi Primer modulo]
//Haremos un modulo con todo lo que vimos hasta el momento. Crearemos un modulo de matematicas supongamos que creamos un app y esta app nesecita poder reutilizar funciones como sumar restar y no queremos reescribirlas una y otra vez sino que quiero escribir una sola vez la logica y quiero reutilizarla cuantas veces yo nesecite. Para empezar cramos una carptea math con un arhivo index.js [1 index.js]

// const math = require('./math/index')

// console.log(math)

//Si ponemos node main.js vemos vemos que hay un objeto con 4 propieades. De hecho estos valores son justamente los valores o las propiedades que esta exportando este modulo.
//Entonces teniendo esto en cuenta podemos ejecutar solamente funciones individuales.entonces podemos decirle:

// console.log(math.add(1, 66))
// console.log(math.restar(12, 34))
// console.log(math.multiplicar(12, 66))
// console.log(math.dividir(12312, 99))
//De esta forma entendemos que podemos reutilizar las funciones.
//------------------------------------------------------------
//[os] Ya hemos aprendido a crear nuestros propios modulos estos modulos nos sirven para que podamos reutilizarlos.
//Ahora si bien hemos creado nuestra propia logica si vmaos a crear proyectos un poco mas grandes  problemente este pensando: ya se dividir logica voy a tener que crearlo todo desde cero. Pero hay muchas aplicaciones al dia de hoy qe tiene funcionalidades bastantes comunes, por ej: la mayoria de aplicaciones de node trabajan con archivos nos permite crear servidores nos permiten encriptar datos. Entonces en lugar de crearlas node ya nos dan funcioens creadas que estas funciones nos la entregan a traves de modulos.
//De hecho la vamos requerir de fomra muy cimilar a como lo hemos con main.js utilizando el require("./math/index")estos modulos se les conoce como la API AI DE NODE ES DECIR, node nos provee  de funciones podamos reutilizar.
//Para conocer estos modulos nesecitamos entrar a la documentancion: por que nos va listar todos los moudlos que nos provee: https://nodejs.org/api/modules.html.
//Si nosotros en algun momento nesecitaramos algun modulo bastante complicado no tenemos que crearlo desde cero node ya nos provee de estos modulos.
//En este caso usaremos el modulo llamdo os. Creamos un archio os.js
const math = require('./math/index')

console.log(math)

console.log(math.add(1, 66))
console.log(math.restar(12, 34))
console.log(math.multiplicar(12, 66))
console.log(math.dividir(12312, 99))