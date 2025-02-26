import ENVIROMENT from "../config/enviroment.config.js";
import { ServerError } from "../utils/errors.utils.js";
import jwt from 'jsonwebtoken'
export const authMiddleware = (request, response, next) =>{
    try{
        const authorization_header = request.headers['authorization']

        //Opcional
        if(!authorization_header){
            throw new ServerError('No has proporcionado un header de authorizacion', 401)
        }
        //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.0KYOpFcycEjDLAkV_cG9M5xXaWiDVhp6H1wP6D5ZSZw' 
        //['Bearer', 'token']

        //'1-2-3'.split('-') => ['1', '2', '3']
        const authorization_token = authorization_header.split(' ')[1]
        if(!authorization_token){
            throw new ServerError('No has proporcionado un token de authorizacion', 401)
        }
        try{
            const user_info = jwt.verify(authorization_token, ENVIROMENT.SECRET_KEY_JWT)
            request.user = user_info
            next()
        }
        catch(error){
            throw new ServerError('Token invalido o vencido', 400)
        }
    }
    catch(error){
        console.log("error al autentificar", error.message);

        if (error.status) {
            return response.json({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        response.json({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}

