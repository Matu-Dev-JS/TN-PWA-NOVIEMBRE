/* Que ya no existe en NodeJS */

//document //DOM = Document Object Model
//window //BOM = Browser Object Model
//localStorage
//navigator


/* node --watch main.js */


let numero_1 = 4
let numero_2 = 10

const {sumar, restar} = require('./matematicas.js')



/* 
Crear un archivo dentro de una carpeta llamada utils que se llame impuestos

Dentro de impuestos.js crear una funcion llamada calcularIva que reciba un precio y devuelva el 21% de ese precio

Para finalizar invocar dentro de main.js a la funcion calcularIva y mostrar el resultado por consola
*/


function funcionProblematica(){
    const numero_aleatorio = Math.random()
    if(numero_aleatorio > 0.5){
        console.log('La accion es correcta')
        const numero_aleatorio = Math.random()
        if(numero_aleatorio > 0.8){
            console.log('La accion es correcta')
        }else{
            throw {message: 'Casi..'}
        }
    }else{
        throw {message: 'No has tenido suerte'}
        
    }

}

console.log('Ejecutando el archivo main.js')


try{
    funcionProblematica()
    funcionProblematica()
}
catch(error){
    console.log('Ocurrio un error en la funcionProblematica')
    console.log(error)
}

console.log('Accion super importante')


/* 
Estamos en una fintech y trabajamos sobre el proceso de validacion de credenciales

Vamos a llamar a la funcion validarCredenciales que internamente generara un numero random y si el numero es mayor a 0.5 devolvera un true en caso contrario emitira un error con un mensaje de 'credenciales invalidas'

Si todo esta bien enviaremos un mensaje por consola que diga 'operacion realizada'

Si ocurre el error por consola deberan mostrar el mensaje de error

*/

/* function validarCredenciales(){
    const numero_aleatorio = Math.random()
    if(numero_aleatorio > 0.5){
        return true
    }else{
        throw {message:'credenciales invalidas'}
    }
}
try{
    const resultado = validarCredenciales()

    console.log('operacion exitosa')
}
catch(error){
    console.log('Ocurrio un error en la generacion de credenciales')
    console.log(error)
} */

const {crearArchivo, leerArchivo} = require('./filesystem.js')
/* crearArchivo('./prueba/test.txt', 'hola mundo desde node.js' )

try{
    console.log(leerArchivo('./test.txt'))
    if(Math.random() >0.5){
        throw {message: 'No tenes suerte!'}
    }
}
catch(error){
    console.error(error)
} */

/* const configuracion = {
    nivel_seguridad: 3,
    user_root: 'admin',
    password_root: 'admin2025'
}


crearArchivo('./config.json', JSON.stringify(configuracion)) */

const modificarNivelDeSeguridad = (nro_nivel) =>{
    try{
        const configuracion = JSON.parse(leerArchivo('./config.json'))
        configuracion.nivel_seguridad = nro_nivel
        crearArchivo('./config.json', JSON.stringify(configuracion))
    }
    catch(error){
        console.error('Error al modificar nivel de seguridad')
        console.log(error)
    }
}

modificarNivelDeSeguridad(10)