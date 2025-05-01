import React, { useContext } from 'react'
import AuthContex from '../contex/authcontex/AuthContex'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivectRoute({ children }) {
    const { user,loding} = useContext(AuthContex)
    const location = useLocation()

    if(loding) {
        return <p>loding........</p>
    }
    if (user) {
        return children
    }
   if (!user ){
     return <Navigate state={location.pathname} to="/login"></Navigate>
   }
}
