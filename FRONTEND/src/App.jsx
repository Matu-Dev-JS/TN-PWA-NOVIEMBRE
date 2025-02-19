import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ResetPasswordScreen from './Screens/ResetPasswordScreen'
import RewritePasswordScreen from './Screens/RewritePasswordScreen'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/reset-password' element={<ResetPasswordScreen/>}/>
        <Route path='/rewrite-password' element={<RewritePasswordScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
