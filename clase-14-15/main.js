import express from 'express';
import authRouter from './routes/auth.router.js';
import userRouter from './routes/users.router.js';
import productRouter from './routes/product.router.js';

const PORT = 3000
const app = express()


//Middleware que permite que nuestra API reciba JSON
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)

/* 
Route: /api/products

GET /api/products
Devolver todos los productos
Response: {
    message: "Productos obtenidos",
    ok: true,
    status: 200,
    payload: {
        products: [{productos}]
    }
}

GET /api/products/:product_id
Buscar un producto por id
Response: 
Si se encontro:
{
    message: "Producto con id {id_buscado} encontrado",
    ok: true,
    status:200,
    payload: {
        product: {producto_encontrado}
    }
}

Si no se encontro:
{
    message: "Producto con id {id_buscado} no encontrado",
    ok: true,
    status:404
}

POST /api/products
Crear un nuevo producto (el id se debe autogenerar y debe ser autoincremental)
Body: {
    title: string,
    description: string,
    price: number,
    stock: number
} 
Response: {
    message: "Producto creado",
    ok: true,
    status: 201,
    payload: {
        product: {producto_creado}
    }
}

DELETE /api/products/:product_id
Eliminar un producto por id
Response: {
    message: "Producto con id {id_buscado} eliminado",
    ok: true,
    status: 200
}
*/





app.get('/test/:limit', (req, res) =>{
    console.log(req.params)
    res.send({ok: true})
})

/* 
app.delete
app.put 
*/

/* 
Crear una nueva route
/api/users

GET /api/users 
    Devuelve toda la lista de usuarios (NO devolveremos las contraseñas)
    Response: {
        "message": "Users list",
        "ok": true,
        "status": 200,
        "data": {
            "users": [array de usuarios]
        }
    }

DELETE /api/users/:email Eliminar el usuario por email
PUT /api/users/:email 
    body: username 
    modificara el username de ese usuario


*/

/* 

Ejemplo de solicitud del profe
Method url
explicacion
ejemplo de body
ejemplo de response

Ejemplo

PUT http://localhost:{port}/api/products
Actualizar datos del producto (solamente se puede actualizar el titulo, el precio, stock y es_visible)
Body: 
    {
        "title": "Pc escritorio", 
        "price": 200
    } (Esto solo actualizara el titulo y el precio)
Response: (en caso de que este todo bien)
    {
        "message": "Product updated",
        "status": 200,
        "ok": true,
        "data": {
            "updated_product": {
                "title": "Pc escritorio", 
                "price": 200,
                "stock": 20,
                "id": 1
            }
        }
    }

*/



app.listen(PORT, () =>{
    console.log(`El servidor esta ejecutandose en http://localhost:${PORT}`)
})