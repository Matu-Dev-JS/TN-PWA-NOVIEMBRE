import express from 'express'
import { registerController } from '../controllers/auth.controller.js'

const authRouter = express.Router()




// /api/auth/register
authRouter.post('/register', registerController )

authRouter.post('/login', (req, res) =>{
    res.send( {
        message: 'Logged successfully!'
    })
})



export default authRouter