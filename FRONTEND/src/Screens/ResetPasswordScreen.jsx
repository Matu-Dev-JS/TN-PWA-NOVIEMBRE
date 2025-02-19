import React from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'



const ResetPasswordScreen = () => {
	
	const initialFormState ={
		email: ''
	}

	const { formState, handleChangeInput } = useForm(initialFormState)
	const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/reset-password')

	const handleSubmitForm = async (e) =>{
		e.preventDefault()
		await postRequest(formState)
	}
	return (
		<div className='content'>
			<h1 className='recuperar'>Recupera tu contraseña</h1>
			<form onSubmit={handleSubmitForm}>
				<div className='mail'>
					<label htmlFor='email'>Email con el que te registraste</label>
					<input 
						type="email" 
						id='email' 
						name='email' 
						placeholder='email' 
						value={formState.email} 
						onChange={handleChangeInput} 
					/>
				</div>

				{responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
				{
					responseApiState.loading
					? <span>Cargando</span>
					: (
                        responseApiState.data 
                        ? <span>Se te envio un mail con los pasos a seguir</span>
                        : <button>Restablecer contraseña</button>
                    )
				}
                <Link to={'/login'}>
                    Ya tengo cuenta
                </Link>
                <Link to={'/register'}>
                    Aun no tengo cuenta
                </Link>
			</form>
		</div>
	)
}

export default ResetPasswordScreen