//Le colocamos esmodule por que la sintaxis import  y export viene de un standar que tiene js o mejor dicho unas espcies de reglas que tiene js que se llama ecmascript, que es una serie de reglas que sigue para que todos los interpretes : navagores o node en este caso se basen en las mismas reglas del lenguaje. Digamos que todos tienen como un standar para programar.
//Node no cumple con el estandar completamente pero a medida que va avanzando se va adaptando.

//Ahora simplemente para exportar podemos simplemente poder export default. Por ejemplo, un objeto de index.

// import math from './math/index.js'
//Esto es casi iual a const math = require('./math/index')

// console.log(math.restar(10, 20))

//Podemos exportarlo desde el import a las funciones y exportando las funciones de ahi mismas:
// import {add,restar} from './math/index.js'

// console.log(add(10, 20))
// console.log(restar(10, 20))
//Coomo estamos exportando por defecto y tambien estamos exportando individualmente, al de importar tambien podemos tan solo exportar partes individuales.
//-------------------------------------------------------------
//[Fetch]

//Esta api ai se llama fetch y en el navegador lo que nos permite es poder traer alguna direcion. Ej si queremos traer datos simplemente traemos alguna direccion o alguna url.
fetch('facebook.com')

//Creamos un archivo que se llame fetch.