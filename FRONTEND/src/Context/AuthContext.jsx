import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    /* Aca manejen todas las funcionalidades relacionadas al usuario y auth */
    let isAuthenticatedInitialState = sessionStorage.getItem('authorization_token')
    const [isAuthenticatedState, setIsAutheticatedState] = useState(isAuthenticatedInitialState)
    useEffect(
        () =>{
            const token = sessionStorage.getItem('authorization_token')
            if(token){
                setIsAutheticatedState(true)
            }
        },
        []
    )
    const logout = () =>{
        sessionStorage.removeItem('authorization_token')
        setIsAutheticatedState(false)
    }

    const login = (authorization_token) => {
        sessionStorage.setItem('authorization_token', authorization_token)
        setIsAutheticatedState(true)
    }
    return (
        <AuthContext.Provider value={{isAuthenticatedState, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider