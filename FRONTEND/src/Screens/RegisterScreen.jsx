import React from 'react'

const RegisterScreen = () => {
  return (
    <div>
        <h1>Registrate en nuestra app</h1>
        <form>
            <div>
                <label htmlFor='username'>Nombre de usuario</label>
                <input placeholder='Joe Doe' type='text' id='username' name='username'/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input placeholder='joedoe@mail.com' type='email' id='email' name='email'/>
            </div>
            <div>
                <label htmlFor='password'>Contraseña</label>
                <input placeholder='Example_password123' type='text' id='password' name='password'/>
            </div>
            <button type='submit' >Registrar</button>
        </form>
    </div>
  )
}

export default RegisterScreen
