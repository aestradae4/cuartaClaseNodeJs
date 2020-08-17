/* Serie Fibonacci 
    1 1 2 3 5 8 13 21 34
*/

// Se hace el llamado del archivo 
const serie = require('./serie');


// cmd node app --serie=10
// nodemon app.js para que el codigo se actualize automaticamente
// console.log(argv); devuelve un arreglo 
let argv = process.argv;
console.log(argv)
// Separar --serie = 10 en 2 arreglos conforme al igual
// [serie, 10] 
//y el 1 toma el valor de 10
let valor = argv[2].split('=')[1];
let cantidad = valor;

// Se le asigna una cantidad para la muestra de datos
// let cantidad = 10;



// Se hace el llamado del modulo exportado y se colocan 
/* .then
    .catch para mostrar los mensajes
*/
serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje))