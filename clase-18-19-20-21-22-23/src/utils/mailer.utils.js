import nodemailer from 'nodemailer'
import ENVIROMENT from '../config/enviroment.config.js'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENVIROMENT.GMAIL_USERNAME,
        pass: ENVIROMENT.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})


export const sendMail = async ({to, subject, html}) =>{
    try {
        const response = await transporter.sendMail({
            to,
            subject, 
            html
        })
        console.log(response)
    }
    catch (error) {
        console.log('Error al enviar mail:',error)
    }
}
