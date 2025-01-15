import express from 'express'
import filesystem from 'fs'

const PORT = 3000

const app = express()

/* 
Antes de configurar las consultas, este middleware observara el Content-Type Header
Cuando Content-Type sea 'application/json' ahi hara la transformacion del contenido a JSON y lo guardara en el body
*/
app.use(express.json())



app.get('/', (request, response)=>{
    response.send('<h1>Hola desde express</h1>')
})


app.get('/date', (request, response) =>{
    response.send({
        fecha_actual: new Date() 
    })
})

const productos = []

app.post('/products', (consulta, respuesta) =>{
    console.log(consulta.body)
    const {name, precio, color, marca, es_usado} = consulta.body
    const new_product = {
        name,
        precio,
        color,
        marca,
        es_usado
    }
    productos.push(new_product)
    respuesta.send({
        message: 'Producto creado satisfactoriamente',
        productos: productos
    })
})


/* 
1)
Los productos creados se deben guardar en /database/productos.json

2)
Crear una nueva consulta con metodo GET hacia /products que devolvera la lista de productos guardada en el JSON
*/

app.post('/register', async (request, response) =>{
    const {email, password} = request.body
    const new_user = {email, password}
    const usuarios = await guardarUsuario(new_user)
    console.log(usuarios)
    response.send(
        {
            message: 'Usuario registrado',
            usuarios: usuarios
        }
    )
})

const guardarUsuario = async (nuevo_usuario) =>{

    const usuarios = JSON.parse(await filesystem.promises.readFile('./database/usuarios.json'), {encoding: 'utf-8'})
    usuarios.push(nuevo_usuario)
    await filesystem.promises.writeFile('./database/usuarios.json', JSON.stringify(usuarios), {encoding: 'utf-8'})
    return usuarios
}



/* 
HTTP Methods
GET -> Obtener un recurso del servidor (No tiene body)
POST -> Crear un recurso en el servidor
PUT -> Actualizar un recurso ya existente en el servidor
DELETE -> Eliminar un recurso del servidor
*/


app.listen(PORT, ()=>{
    console.log(`La aplicacion se esta escuchando en el puerto ${PORT}`)
})

