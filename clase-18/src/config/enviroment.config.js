import dotenv from 'dotenv'

//Carga las variables de entorno en process.env
dotenv.config()

const ENVIROMENT = {
    PORT: process.env.PORT,
    MONGO_DB_URL: process.env.MONGO_DB_URL
}
for(let key in ENVIROMENT){
    if(ENVIROMENT[key] === undefined){
        console.error('OJO que la variable ' + key  +' esta indefinida')
    }
}




export default ENVIROMENT