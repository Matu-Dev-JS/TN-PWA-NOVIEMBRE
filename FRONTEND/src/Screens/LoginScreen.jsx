import React, { useContext, useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import ENVIROMENT from '../config/enviroment'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const LoginScreen = () => {
	const {login} = useContext(AuthContext)
	const initialFormState ={
		email: '',
		password: ''
	}
	const { formState, handleChangeInput } = useForm(initialFormState)
	const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/login')

	useEffect(
		()=>{
			if(responseApiState.data) {
				login(responseApiState.data.data.authorization_token)
			}
		},
		//Cada vez que cambie mi estado de respuesta ejecutare el efecto
		[responseApiState]	
	)
	const handleSubmitForm = async (e) =>{
		e.preventDefault()
		await postRequest(formState)
	}
	return (
		<div>
			<h1>Inicia sesion en nuestra pagina</h1>
			<form onSubmit={handleSubmitForm}>
				<div>
					<label htmlFor='email'>Email</label>
					<input 
						type="email" 
						id='email' 
						name='email' 
						placeholder='joedoe@mail.com' 
						value={formState.email} 
						onChange={handleChangeInput} 
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input 
						type="text" 
						id='password' 
						name='password' 
						value={formState.password} 
						onChange={handleChangeInput}
					/>
				</div>
				{responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
				{
					responseApiState.loading
					? <span>Cargando</span>
					: <button>Iniciar sesion</button>
				}
				<Link to="/reset-password">
					Olvide mi contraseña
				</Link>
			</form>
		</div>
	)
}

export default LoginScreen

