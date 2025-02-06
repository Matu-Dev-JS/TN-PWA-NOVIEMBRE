import nodemailer from 'nodemailer'
import ENVIROMENT from '../config/enviroment.config.js'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENVIROMENT.GMAIL_USERNAME,
        pass: ENVIROMENT.GMAIL_PASSWORD
    }
})


export const sendMail = async ({to, subject, html}) =>{
    const response = await transporter.sendMail({
        to,
        subject, 
        html
    })
    console.log(response)
}
