import filesystem from 'fs'
import { ServerError } from '../utils/error.util';
import { deleteUserByEmail, updateUserByEmail } from '../repository/user.repository';
export const getAllUsersController = async (req, res) => {
    try {
        const data = await filesystem.promises.readFile("./database/users.json");
        const users = JSON.parse(data);

        //Usuarios sin contraseña
        const usersWithoutPassword = users.map(({username, email}) => {
            return {username, email}
        });


        res.send({
            ok: true,
            status: 200,
            message: "Usuarios obtenidos",
            payload: {
                users: usersWithoutPassword
            }
            
        });
    } catch (error) {
        
        console.error("Error al obtener los usuarios", error);
        res.send({
            ok: false,
            message: "Internal server error",
            status: 500,
        });
    }
};
export const deleteUserByEmailController = async (req, res) =>{
    try{
        const {email} = req.params

        if (!email) {
            throw new ServerError('Email is required', 400)
        }
        await deleteUserByEmail(email)
        return res.send({
            status: 200,
            message: `User ${email} deleted successfully`,
            ok: true,
            payload: null
        })
    }
    catch(error){

        console.log(`Something went wrong => ${error}`)
        if (error.status) {
            return res.send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }
        return res.send({
            status: 500,
            message: "Internal server error",
            ok: false
        })
    }
}
export const updateUsernameByEmailController = async (req, res) =>{
    try {
        const { email } = req.params
        if (!email) {
            throw new ServerError('Email is required', 400)
        }
        const { username } = req.body
        if (!username) {
            throw new ServerError('Username is required', 400)
        }
        await updateUserByEmail(email, username)
        return res.send({
            status: 200,
            message: `The username with email: ${email} now is: ${username}`,
            ok: true
        })
    } catch (error) {
        console.log(`Something went wrong => ${error}`)
        if (error.status) {
            return res.send({
                message: error.message,
                status: error.status
            })
        }
        return res.send({
            status: 500,
            message: "Internal server error",
        })
    }
}