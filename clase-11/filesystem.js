const filesystem = require('fs')


const crearArchivo = (nombre, contenido) =>{
    try{
        filesystem.writeFileSync(
            nombre, 
            contenido, 
            {
                encoding: 'utf8'
            }
        )
    }
    catch(error){
        console.error('ERROR: El archivo no se pudo crear')
        console.log(error)
        
    }
}


const leerArchivo = (nombre) =>{
    try{
        const result = filesystem.readFileSync(nombre, {encoding: 'utf8'})
        return result
    }
    catch(error){
        console.error("ERROR al leer el archivo", error)
        throw {message: 'ERROR: El archivo no se pudo leer'}
    }
    
}

module.exports = {crearArchivo, leerArchivo}

