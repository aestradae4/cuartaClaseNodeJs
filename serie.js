//file sistem 
// Modulo require

const fs = require('fs');

// se crea una nueva variable para poder exportarla 
let crearSerie = (cantidad) =>{ 
    // Creacion de la promesa
    return new Promise((resolve, reject) =>{
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';

        // console.log(`${fibo1}`)
        // para guardar el dato de fibo1 con la variable serie
        serie += `${fibo1}\t`;

        for (let i=2; i<= cantidad; i++){ 
            // console.log(`${fibo2}`);
            serie += `${fibo2}\t`; 
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;

        }

        // File sistem 
        //https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
        // fs.writeFile(file, data[, options], callback)
        // Mostrar los mensajes conforme a la promesa 
        fs.writeFile('fibonacci.txt', serie, (err) => {
            if (err) 
                reject('Error al crear el archivo');
            else
                resolve('Archivo guardado con exito');
        });
    })
}

// Para exportar algun modulo
module.exports = { 
    crearSerie
}