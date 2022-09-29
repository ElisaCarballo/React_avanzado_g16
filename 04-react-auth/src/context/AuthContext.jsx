import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export funtion AuthProvider (props)
    const [isAuth, setIsAuth] = useState (false)
    const [user, setUser] = useState (null)
    
    const loginUser = (token) {
        window.localStorage.setItem('token', token)
        
        const decoded = jwt_decode(token)
        setUser (decoded) 
        setIsAuth (true)
    }

    const logout = () => {

    }
    
    return (
        <></>
    )

