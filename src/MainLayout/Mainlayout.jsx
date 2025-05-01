import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "../pazes/shared/Navbar";
import Footer from '../pazes/shared/Footer';

export default function Mainlayout() {
  return (
    <div>
         <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
