import React, { useContext } from 'react'
import AuthContex from '../../contex/authcontex/AuthContex'

export default function SosalLogin() {
    const { handleGoogleLogin } = useContext(AuthContex)
    const googleLogin = () => {
        handleGoogleLogin()
    }
    return (
        <div className='m-4'>
            <div className="divider">OR</div>
            <button onClick={() => googleLogin()} className='btn'>Google</button>
        </div>
    )
}
