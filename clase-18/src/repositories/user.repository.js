import User, { USER_PROPS } from "../models/User.model.js";
import { ServerError } from "../utils/errors.utils.js";

class UserRepository {
    async create({
        username, 
        email, 
        password, 
        verification_token
    }){
        try{
            await User.create({
                [USER_PROPS.USERNAME]: username, 
                [USER_PROPS.EMAIL]: email, 
                [USER_PROPS.PASSWORD]: password, 
                [USER_PROPS.VERIFICATION_TOKEN]:verification_token
            })
        }
        catch(error){
            console.log(error)
            if(error.code === 11000){
                if(error.keyPattern.username){
                    throw new ServerError("Username already registered", 400)
                }
                if(error.keyPattern.email){
                    
                    throw new ServerError("Email already registered", 400)
                }
            }
            throw error
        }
    }
}


export default new UserRepository()