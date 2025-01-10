const filesystem = require('fs')


/* const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
    try{
        filesystem.writeFileSync(`${nombre_archivo}.json`, JSON.stringify(JSON_data), {encoding: 'utf8'})
        console.log('archivo creado')
    }
    catch(error){
        console.error(`Error al crear el archivo ${nombre_archivo}.json`)
        console.log(error)

    }
} */

/* const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
    filesystem.writeFile(
        `${nombre_archivo}.json`,
        JSON.stringify(JSON_data), 
        {encoding: 'utf8'},
        ( error ) =>{ //El error es un objeto con el posible error de la funcion
            if(error){
                console.error('Error al escribir el archivo')
            }
            else{
                console.log('Archivo creado', nombre_archivo)
            }
        }
    )
} */


    const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
        filesystem.writeFile(
            `${nombre_archivo}.json`,
            JSON.stringify(JSON_data), 
            {encoding: 'utf8'},
            ( error ) =>{ //El error es un objeto con el posible error de la funcion
                if(error){
                    console.error('Error al escribir el archivo')
                }
                else{
                    console.log('Archivo creado', nombre_archivo)
                    filesystem.readFile(
                        `${nombre_archivo}.json`,
                        {encoding: 'utf8'},
                        (error, resultado) =>{
                            if(error){
                                console.log(error)
                                console.error("error al leer archivo")
                            }
                            else{
                                console.log('Resultado:', resultado)
                      
                            }
                        }
                    )
                }
            }
        )
    }

/* console.log('Instruccion 1')

console.log('Instruccion 3')
 */
module.exports = {
    escribirArchivoJSON
}

/* 
Crear un archivo llamado numero_1.txt e ingresar dentro de ese archivo un numero
Crear un archivo llamado numero_2.txt e ingresar dentro de ese archivo un numero

Programa
Leer el archivo con Node.js numero_1.txt
Leer el archivo con Node.js numero_2.txt
Sumar ambos numeros
Escribir el resultado dentro de un archivo llamado resultado.txt
*/


/* filesystem.readFile('archivo-1', (error, nro_1) =>{
    filesystem.readFile('archivo-2', (error, nro_2 ) =>{
        let resultado = nro_1 + nro_2
        filesystem.writeFile('resultado.txt', resultado)
    })
})
 */

/* filesystem.readFile(
    `numero_1.txt`,
    {encoding: 'utf8'},
    (error, numero_1) =>{
        if(error){
            console.log("No se pudo leer el número del archivo")
        }
        else{

            filesystem.readFile(
                `numero_2.txt`,
                {encoding: 'utf8'},
                (error, numero_2) =>{
                    if(error){
                        console.log("No se pudo leer el número del archivo")
                    }
                    else{
                        let resultadoTxt = Number(numero_1) + Number(numero_2)
                        filesystem.writeFile(
                            `resultado.txt`,
                            String(resultadoTxt),
                            {encoding : 'utf8'},
                            (error) => {
                                if (error){
                                    console.log("Ocurrió un terrible error:(")
                                }
                            }
                        )
                    }
                }
            )
        }
    }
) */



const leerArchivo = async (nombre_archivo) =>{
    try{
        const resultado = await filesystem.promises.readFile(
            nombre_archivo, 
            {encoding: 'utf-8'}
        )
        return resultado
    }
    catch(error){

    }
}

const calcularSumatoriaDeArchivos =async () =>{
    const numero_1 = await leerArchivo('numero_1.txt')
    const numero_2 = await leerArchivo('numero_2.txt')
    const resultado =  Number(numero_1) + Number(numero_2)
    filesystem.promises.writeFile('resultado.txt', String(resultado), {encoding: 'utf-8'})
} 

calcularSumatoriaDeArchivos()

