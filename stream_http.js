// const http = require('http')
// const {createReadStream} = require('fs')

// const serve = http.createServer((req, res) => {
//     const fileStream = createReadStream('./data/bigfile.txt', {
//         encoding: 'utf-8'
//     })
//     fileStream.on('data', (chunk) => {
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', error => {
//         console.log(error)
    // })/* Los parentesis son opcionales en los de error, esto no viene con node es asunto de js. */
// })

//La propiedad pipe de fileStream que es como decir que va enviar un dato o pasarle el dato a otra funcion y justamente se lo pasara al objeto res.

// serve.listen(3000)
// console.log(`serve on port ${3000}`)
//-------------------------------------------------------------
//[ES Modules]
//Hay una forma estandar de poder importar modulos.
//¿Es posible utilizar export e import en node? Si pero hay que configurar algunas cosas.
// npm init -y [Esta y es simplemente poner la configuracion por defecto pakacge json y luego yo lo modifico.]
//Lo importante es coonocer que cuando vamos a estar trabajando con modulos nosotros podemos añadir una propiedad que se llama "type": "module" , esto permite poder utilizar la sintaxis import y export en los arhivos de js. Entonces creamos un arhicvo esmodule.js.
