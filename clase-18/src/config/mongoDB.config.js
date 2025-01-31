import mongoose from "mongoose";
import ENVIROMENT from "./enviroment.config.js";

const connectToMongoDB = async () =>{
    try{
        const response = await mongoose.connect(ENVIROMENT.MONGO_DB_URL)
        console.log('Conexion exitosa con MongoDB')
    }
    catch(error){
        console.log('Ocurrio un error al conectarse con MongoDB', error)
    }
} 

connectToMongoDB()

export default mongoose