import React, { useState } from 'react'
import ENVIROMENT from '../config/enviroment'

const RegisterScreen = () => {
    const formInitialState = {
        username: 'pepe',
        email: '',
        password: ''
    }
    const [formState, setFormState] = useState(formInitialState)
    const handleChangeInput = (event) => {
        const { name, value } = event.target
        setFormState(
            (prevFormState) => {
                return { ...prevFormState, [name]: value }
            }
        )
        //Esto esta mal! formState[event.target.name] = event.target.value
    }

    const handleSubmitForm = async (event) =>{
        event.preventDefault()

        //Enviar el formulario (osea el estado) al backend
        //Consulta HTTP 
        //Fetch es una funcion que nos permite hacer consultas HTTP 
        //Recibe la URL a consultar y un objeto de configuracion
        //URL : String
        //Objeto : Object {method, headers, body (solo si la consulta no es GET)}
        const response = await fetch(
            ENVIROMENT.URL_API + '/api/auth/register', 
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formState)
            }
        )
        const data = await response.json()
        if(data.ok){
            alert("Usuario registrado")
        }
        else{
            if(data.status == 400){
                alert(data.message)
            }
            else{
                alert('Error, intentalo mas tarde!')
            }
        }
    }


    return (
        <div>
            <h1>Registrate en nuestra app</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor='username'>Nombre de usuario</label>
                    <input
                        placeholder='Joe Doe'
                        type='text'
                        id='username'
                        name='username'
                        value={formState.username}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        placeholder='joedoe@mail.com'
                        type='email'
                        id='email'
                        name='email'
                        value={formState.email}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        placeholder='Example_password123'
                        type='text'
                        id='password'
                        name='password'
                        value={formState.password}
                        onChange={handleChangeInput}
                    />
                </div>
                <button type='submit' >Registrar</button>
            </form>
        </div>
    )
}

export default RegisterScreen
