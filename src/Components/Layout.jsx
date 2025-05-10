import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
        <Navbar/>
        <div className="layout-container ">
            <Outlet/>
            
        </div>
        <Footer />
    </>
  )
}

export default Layout