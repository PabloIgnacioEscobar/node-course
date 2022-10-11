//Para requerir un modulo de node simplemente escribimos:

const os = require("os")

//En la secciona nterior dijimos que puede ir un ./ esto significa quue nosotros estamos trabajando con archivos o modulos  que estan ahi mismo pero sino colomaos el punto y el / y simplemente colocamos el nombre de un modulo lo que hara node va intentar buscarlos en nuestro proyecto y si lo encuentra el va buscarlos en los modulos  que el ya trae preinstalado.

console.log(os.userInfo())
//userInfo nos devuelve un objeto con informacion de mi sistems.
//Podemos traer otro tipo de informacion de este modulo por ejemplo:
console.log(os.uptime())
//Que me da el tiempo que ah transcurrido desde que yo encendi esta maquina y que esta siendo utilizada el sistems.
console.log(os.platform())
//Nos permite ver el sistema operativo en que estoy ejecutando node.
console.log(os.totalmem())
//Para ver la memoria total
console.log(os.freemem())
//Para ver la memoria disponible o la memoria libre.

//No solo podemos usar console.log:

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})
//Nos sirve para mostrar una tabla y adentro colocar datos. Si vemos bien hay una consola y esta consola me muesta informacion del: sistema oeprativo, la version de mi sistema operativo y la memoria total. Esto tambien esta permitido en el navegador. Pero es para tener una idea.
//------------------------------------------------------------
//[Modulo path] 
// Este modulo permite trabajar con carpetas y archivos y poder concoer sus direcciones, es decir saber donde estan esas carpetas y arhivos. Creamos un arhivo path.js