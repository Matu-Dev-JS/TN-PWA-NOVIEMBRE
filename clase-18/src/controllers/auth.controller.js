import { ServerError } from "../utils/errors.utils.js";
import UserRepository from "../repositories/user.repository.js";
export const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;


        if (!username) {
            throw new ServerError("username is required", 400);
        }
        if (!email) {
            throw new ServerError("email is required", 400);
        }
        if (!password) {
            throw new ServerError("password is required", 400);
        }



        await UserRepository.create({username, email, password, verification_token: 'test'})

        
        return res.send(
            {
                message: "user created",
                status: 201,
                ok: true
            }
        );
    } catch (error) {
        console.log("error al registrar", error);

        if (error.status) {
            return res.send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        res.send({ 
            status: 500,
            ok: false, 
            message: "internal server error"
        });
    }
};