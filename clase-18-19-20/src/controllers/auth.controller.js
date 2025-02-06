import { ServerError } from "../utils/errors.utils.js";
import UserRepository from "../repositories/user.repository.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import ENVIROMENT from "../config/enviroment.config.js";
import { sendMail } from "../utils/mailer.utils.js";
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


        const passwordHash = await bcrypt.hash(password, 10)



        const verification_token = jwt.sign(
            { email }, //Lo que queremos guardar en el token
            ENVIROMENT.SECRET_KEY_JWT, //Clave con la que vamos a firmar
            { expiresIn: '24h' } //Fecha de expiracion del token
        )

        await UserRepository.create({ username, email, password: passwordHash, verification_token })
        //Le vamos a enviar un mail a el usuario
        //El mail va a tener un link
        //<a href='http://localhost:3000/api/auth/verifyEmail?verification_token=dsadssadosakdsaodsadsadijiodsad$'>Click para verificar</a>
        await sendMail({
            to: email,
            subject: 'Valida tu mail!',
            html: `
            <h1>Valida tu mail para entrar en nuestra pagina</h1>
            <p>
            Esta validacion es para asegurarnos que tu mail es realmente tuyo, si no te has registrado en (nombre de la empresa) entonces ignora este mail!
            </p>
            <a href='${ENVIROMENT.URL_BACKEND}/api/auth/verify-email?verification_token=${verification_token}'>
                Verificar cuenta
            </a>
            `
        })
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


export const verifyEmailController = async (req, res) => {
    try {
        const {verification_token} = req.query
        const payload = jwt.verify(verification_token, ENVIROMENT.SECRET_KEY_JWT)
        const {email} = payload
        const user_found = await UserRepository.verifyUserByEmail(email)
        res.redirect(ENVIROMENT.URL_FRONTEND + '/login')
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
}