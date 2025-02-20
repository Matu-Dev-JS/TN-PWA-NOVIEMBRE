import { useState } from "react"
import { ServerError } from "../utils/error.util"

export const useApiRequest = (url) =>{
    //Nos conviene guardarlo en el hook porque no es algo que vaya a variar entre componentes
    const initialResponseApiState = {
        loading: false,
        error: null,
        data: null
    }
    const [responseApiState, setResponseApiState] = useState(initialResponseApiState)

    const postRequest = async (body) => {
        try {
            setResponseApiState({ ...initialResponseApiState, loading: true })
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )
            const data = await response.json()

            if (data.ok) {
                setResponseApiState((prevState) =>{
                    return {...prevState, data: data}
                })
            }
            else {
                throw new ServerError(data.message, data.status)
            }
        }
        catch(error){
            setResponseApiState((prevState) =>{
                //if(error instanceof ServerError){} | Otra forma de hacerlo
                if(error.status){//Verificamos si es un error de servidor
                    return {...prevState, error: error.message}
                }
                return {...prevState, error: 'No se pudo enviar la informacion al servidor'}
            })
        }
        finally{
            setResponseApiState((prevState)=>{
                return {...prevState, loading: false}
            })
        }
    }

    const putRequest = async (body) => {
        try {
            setResponseApiState({ ...initialResponseApiState, loading: true })
            const response = await fetch(
                url,
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )
            const data = await response.json()

            if (data.ok) {
                setResponseApiState((prevState) =>{
                    return {...prevState, data: data}
                })
            }
            else {
                throw new ServerError(data.message, data.status)
            }
        }
        catch(error){
            setResponseApiState((prevState) =>{
                //if(error instanceof ServerError){} | Otra forma de hacerlo
                if(error.status){//Verificamos si es un error de servidor
                    return {...prevState, error: error.message}
                }
                return {...prevState, error: 'No se pudo enviar la informacion al servidor'}
            })
        }
        finally{
            setResponseApiState((prevState)=>{
                return {...prevState, loading: false}
            })
        }
    }

    return {responseApiState, postRequest, putRequest}
}