import React, { useState } from 'react'
import ENVIROMENT from '../config/enviroment'
import { ServerError } from '../utils/error.util'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'

const RegisterScreen = () => {
    const formInitialState = {
        username: 'pepe',
        email: '',
        password: ''
    }
    const { formState, handleChangeInput } = useForm(formInitialState)
   
    const {responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/register')


    const handleSubmitForm = async (event) => {
        event.preventDefault()
        await postRequest(formState)
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
                {
                    responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>
                }
                {
                    responseApiState.loading
                        ? <span>Cargando</span>
                        : <button type='submit' >Registrar</button>
                }


            </form>
        </div>
    )
}

export default RegisterScreen
