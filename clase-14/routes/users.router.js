import express from 'express'
import { deleteUserByEmailController, getAllUsersController, updateUsernameByEmailController } from '../controllers/users.controller.js'

const userRouter = express.Router()

userRouter.get('/', getAllUsersController)

userRouter.delete('/:email', deleteUserByEmailController)

userRouter.put('/:email', updateUsernameByEmailController)


export default userRouter