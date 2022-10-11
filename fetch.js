// fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => console.log(data))

//Si vamos a https://jsonplaceholder.typicode.com/ es una pagina donde nos dan datos falsos. Datos que por lo general un back end puede consumir. Vasmos a la parte que dice post: https://jsonplaceholder.typicode.com/posts que justamente son datos que son 100 publicaciones, con titulos id y algun cuerpo que seria un string largo de prueba.
//Si ejecutamos vemos los datos. Vienen de la misma api ai.
//Si queremos escrbir esta sintaxis en formato async await tambien podriamos:

// async function loadData() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await res.json()
//         console.log(data)        
//     }catch (error) {
//         console.log("Esto es un:", (error))
//     }
// }

// loadData()
       
//  En la version 18.7 Tiene algunas consideraciones de ecmacript 2022 es decir, tiene caracteristicas nuevas del lenguaje, una de estas es que las ultimas versiones YA NO ES nesesario colocar el nombre async en funtcion:
//qeudaria asi:


    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data)        
    } catch (error) {
        console.log("Esto es un:", (error))
    }

//Esto funciona asi por que estamos utilizando en package jason la funcionalidad "type": "module".
//-------------------------------------------------------------
//[Express]
//Cuando estabamos elaborando el http.js estabamos escribiendo logica con request.url === "/" y SI (if) era igual a algo respondiamos con una funcion de node. Esto funciona pero el asuntno es que si tuvieramos que crear una aplicacion real una aplicacion con muchas mas rutas y tuvieramos que responder distintos tipos de arhivos el escribirlo de cero seria un largo trabajo. Es decir tendramos que hacer esa tarea una y otra vez por cad proyecto.

//No se utiliza codigo de esta forma:

if (request.url === '/') {
    response.write('Welcome to the server')
    return response.end()
}
//No escribimos codigo de cero sino que tenemos a disposicion gracias a la comunidad son frameworks que nos permiten poder resumir esta logica. Nos permite crear la logica del if de una mejor forma.

//Para el ejemplo creamos un nuevo proyecto: la carpeta es node-website. Creamos un npm init -y para crear un package json que vamos a modificar.

//los freamework mas populares estan Express.js, koa, meteor.
//EXPRESS permite escribir codigo de backend similiar a lo que hicimos en http request(createserver mas las condicionales y todo eso). Bueno aca nos usamos condicionales, este modulo lo hace por nosotros. Lo instalamos con npm i express. Luego creamos un archivo index.js
