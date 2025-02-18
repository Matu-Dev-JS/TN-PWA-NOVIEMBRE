import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ResetPasswordScreen from './Screens/ResetPasswordScreen'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/reset-password' element={<ResetPasswordScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
