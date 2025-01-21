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
app.use('/api/products', productRouter)




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

GET /api/users Devuelve toda la lista de usuarios (NO devolveremos las contraseñas)
DELETE /api/users/:email Eliminar el usuario por email
PUT /api/users/:email 
    body: username 
    modificara el username de ese usuario
*/



app.listen(PORT, () =>{
    console.log(`El servidor esta ejecutandose en http://localhost:${PORT}`)
})