const PORT = 3000;
import express from 'express'
import {engine} from 'express-handlebars'

const app = express()


//Sin esto no podemos recibir formularios en nuestro servidor
app.use(express.urlencoded({extended: true}))

/* Configuracion para que funcione handlebars */
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')



app.get('/test', (req, res) =>{
    res.render('home-view', {
        name: 'pepe', 
        has_banner: false,
        banner: '<h3>Compra acciones de nvidia <a href="#">Click aqui</a></h3>',
        layout: 'main'
    })
})


/* 
Crear en /home una vista que muestre en el header un span con "notificaciones nuevas: 10"
Las props que le pasaran a esta vista seran:
{
    notifications: 10,
    has_notifications: true
}
Si has_notifications es false se debe mostrar en el span
"No hay notificaciones nuevas"

*/

const users = [
    {
        id: 1,
        name: 'Anne',
        is_connected: true
    },
    {
        id: 2,
        name: 'Pepe',
        is_connected: false
    },
    {
        id: 3,
        name: 'Maria',
        is_connected: true
    },
]

const posts = [
    {
        id: 1,
        title: 'Porque no aprender HTML',
        text: 'Enserio seguis leyendo esto?',
        likes: 52,
        retweets: 4,
        comments: [
            {
                id: 1,
                name: "pepe.dev",
                text: "esto no es gracioso, reportado!",
                likes: 3
            },
            {
                id: 2,
                name: "maria.dev",
                text: "No es mi lenguaje de programacion favorito",
                likes: 5
            }
        ]
    },
    {
        id: 2,
        title: 'Team frio o calor?',
        text: 'Seguramente gana el frio por goleada pero quiero oir su opinion',
        likes: 0,
        retweets: 0,
        comments: [
            {
                id: 3,
                name: "pepe.dev",
                text: "Me gusta ir a la playa",
                likes: 0
            }
        ]
    }
]

/* 
Mostrar en la vista de home que acaban de crear un div por cada posteo, donde se pueda ver la informacion de quien posteo, lo que posteo y los likes y retweets.
*/

app.get('/home', (req, res) => {
    res.render('main-view', {
        notifications: 0,
        has_notifications: false,
        friends: users,
        posts
    })
})


app.post('/posts', (req, res) =>{
    console.log(req.body)
    posts.push({
        id: posts.length, 
        title: req.body.title,
        text: req.body.text,
        likes: 0,
        retweets: 0,
        comments: []
    })
    res.render('main-view', {
        notifications: 0,
        has_notifications: false,
        friends: users,
        posts
    })
})


app.get('/posts/:post_id', (req, res) =>{
    const {post_id} = req.params
    const post_found = posts.find(post=> post.id == post_id)
    if(!post_found){
        res.render(
            'error-view', 
            {
                message: 'Posteo no encontrado', 
                status: 404
            }
        )
    }
    res.render('post-detail-view', {post_found: post_found})
})

app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})

