import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContex from '../../contex/authcontex/AuthContex'
import logo from '../../../public/icons8-job-application-100.png'

export default function Navbar() {

    const { logout, user } = useContext(AuthContex)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/myapplication">My Application</NavLink></li>
        <li><NavLink to="/addjob">Add Job</NavLink></li>
        <li><NavLink to="/mypostedjobs">My Posted Job</NavLink></li>



    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-12' src={logo}></img>
                <p className='text-3xl font-bold'>Job Portal</p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className='btn' onClick={() => logout()}>Log Out</button> : <>
                        <NavLink to="/register"><button className='btn'>Register</button></NavLink>
                        <NavLink to="/login"><button className='btn'>LogIn</button></NavLink>
                       

                    </>
                }

            </div>
        </div>
    )
}
