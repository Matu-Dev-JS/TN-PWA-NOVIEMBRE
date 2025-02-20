import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'



const RewritePasswordScreen = () => {
    const navigate = useNavigate()
    /* Forma con react router dom */
    const [searchParams] = useSearchParams(window.location.search)
    const reset_token = searchParams.get('reset_token')
    useEffect(
        ()=>{
            
            if(!reset_token) {
                navigate('/login')
            }
        
        },
        []
    )
    

    /* 
	Forma nativa
    useEffect(
        ()=>{
            const searchParams = new URLSearchParams(window.location.search)
            const reset_token = searchParams.get('reset_token')
            if(!reset_token) {
                navigate('/login')
            }
        },
        []
    ) */
    
	const initialFormState ={
		password: ''
	}

	const { formState, handleChangeInput } = useForm(initialFormState)
	const { responseApiState, putRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/rewrite-password')

    useEffect(
        ()=>{
            if(responseApiState.data) {
                navigate('/login')
            }
        }, 
        [responseApiState]
    )

	const handleSubmitForm = async (e) =>{
		e.preventDefault()
        //                 Nueva pass                    Reset_token
		await putRequest({password: formState.password, reset_token})
	}


    /* 
    Tarea:

    PUT /api/auth/reset-password
    body: {
        password: '',
        reset_token
    }
    Validara que el token sea correcto, el token tendra dentro el _id del usuario.
    Ustedes deberan buscar a ese usuario y modificar la contraseña por la nueva contraseña (que previamente encriptaran)
    */

	return (
		<div className='content'>
			<h1 className='recuperar'>Establecer nueva contraseña</h1>
			<form onSubmit={handleSubmitForm}>
				<div className='mail'>
					<label htmlFor='password'>Nueva contraseña</label>
					<input 
						type="text" 
						id='password' 
						name='password' 
						placeholder='NuevaContraseña' 
						value={formState.password} 
						onChange={handleChangeInput} 
					/>
				</div>

				{responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
				{
					responseApiState.loading
					? <span>Cargando</span>
					: (
                        responseApiState.data 
                        ? <span>Enviado</span>
                        : <button>Establecer nueva contraseña</button>
                    )
				}
			</form>
		</div>
	)
}

export default RewritePasswordScreen