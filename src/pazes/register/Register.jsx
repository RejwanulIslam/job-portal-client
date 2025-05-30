import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import registerLottieData from '../.././assets/lottie/register.json'
import AuthContex from '../../contex/authcontex/AuthContex'
import SosalLogin from '../shared/SosalLogin'

export default function Register() {
     const {creactuser}=useContext(AuthContex)
    const handlesubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({email,password})
        creactuser(email,password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={registerLottieData}></Lottie>
                </div>


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold ml-7 mt-3">Register now!</h1>

                    <form onSubmit={handlesubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    
                    <SosalLogin></SosalLogin>
                </div>
            </div>
        </div>
    )
}
