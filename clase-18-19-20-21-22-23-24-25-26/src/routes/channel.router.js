import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createChannelController, getMessagesListFromChannelController, sendMessageToChannelController } from "../controllers/channel.controller.js";

const channelRouter = Router()

//crear canal
//Body: {name: 'general'}
//Headers: 'Authorization' : 'Bearer {authorization_token}' 
//Checkear que el usuario que quiera crear un canal este incluido como miembro en el workspace
channelRouter.post('/:workspace_id', authMiddleware, createChannelController)

//enviar mensajes

channelRouter.post('/:channel_id/messages', authMiddleware, sendMessageToChannelController)

channelRouter.get('/:channel_id/messages', authMiddleware, getMessagesListFromChannelController)

export default channelRouter