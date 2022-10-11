// const path = require("path")

//Si no vamos a estar modificando lso valores que me proporciona este modulo no tiene mucho sentido una una variable, es decir si no vamos a modificar path por que utlizar una variable.

// console.log(path)

//Si ejecutamos node path.js si ejecutamos vemos que nos dan una serie de propiedades y funciones que podemos importar, pero comoo es un modulo grande no quermeos toda la data. Solo hay que entender algunas ideas basicas:
// Cuando estamos trabajando con node tenemos que entender que estamos encima de un programa que es multiplataforma es decir que funciona encima de windows linux y mac, pero esto no es que funciones por que si sino que, cuando ejecutamos logica de node, node decide que codigo ejecutar a partir del sitema del que esta. Entonces Si recordamos con el modul os el, podia detectar si estaba en windows linux o mac, bueno con el modudlo path podemos ejecutar determinada logica a partir del sitema en que estemos.
//Esto es importante por que cuando estamos trabajando con linux o windows no siepre vamos a tener acceso a las mismas configuraciones. Ej:
//Si quermeos importar un archivo y tenemos que colocar la direccion de donde esta ese archivo en nuestro sistema o nuestro disco duro (por ejemplo) nosotros tenemos que dar una direccion coomo esta: supongamos que si estuvieramos en windows la direcionseria:

// c:\\Users\\pablo\\Desktop

//Esta es la forma en la tipicamente en windows se importan archivos o se coloca la ruta de onde esta el archivo o carpeta. Si quermeos hacer eso linux no funciona por que no se usa esos mismos caracteres por ejemplo de las contrabarras. En linux seria:

// home/pablo/Desktop

//Esta es la forma de linux y mac por que estan basadas en sistema unix.
//IMPORTANTE: Si crees que por que utilizas windows en desarrollo esto no importa, en realidad debes tener en cuenta que cuando se despliega tu aplicacion se van a estar ejecutando en servidores linux :OOOOO.

//Entonces node lo soluciona bastante facil entonces con un cierto modulo para llegar a un consenso entre ambos:

const path = require("path")

// console.log(path.sep)

//El modulo path es entonces, solcuona bastante rapido este problema, este modulo hace ese trabajo por nosotros. La propiedad sep es una propiedad de separeitor(separa). Entonces si ejecutamos node path.js vemos que aparece un /.
//Igual lo que vmaos a utilizar de path son sus metodos: por ejemplo ay uno muy util que llama join

// console.log(path.join)

//Este metodo permite unir directorios o rutas de directorios o rutas de carpteas:

const filePath = path.join('/public', 'dist', '/styles', 'main.js')

//Son rutas, carpeta, rutas, arhivo. Entonces si tuvieramos que unir este directorio o estas rutas nosotros tendriamos que considerar que si estamos en windows deberiamos usar las contrabrras. O si estavuieramos en linux el /. Entonces para olvidarnos de eso simplemente se los damos almodulo join, y modulo join va a comvertir esta ruta en una ruya valida para el sistema en que estmos,. De hecho si vemos en node path.js ya lo hizo :O 

//Hay otros metodos:

console.log(path.basename(filePath))

//Este metodo permite extraer una url. Lo que le decimos a basename que tome tal ruta (lo que hay en filePath). Entonces si vamos node path.js nos devuelve el archivo base de toda la url.

//Hay otro metodo llamado:

console.log(path.dirname(filePath))
//Este es para darnos la ruta de los directorios o carpetas SIN el archivo. Ver node path.js para ver

//Hay otro metodo tambien llamado parse:

console.log(path.parse(filePath))

//Lo que hace es dar la informacion de la ruta de un archivo pero nos los da en un formato de objeto:

console.log(path.resolve('dist'))

//Vendria a ser una alternativa a join, si le pasamos una ruta esta va tratar de completarlo a partir de la ruta inicial del sistema operativo. Ej carpeta dist, CON este resolve lo que hace es que completa toda la ruya inicial y luego la carpeta dist.
//------------------------------------------------------------
//[FS (SYNC)] ¿Como trabajar con los archivos en node?. Para eso nesecitamos el modulo FS que es una abreviado de file system. Creamos un archivo fs.js