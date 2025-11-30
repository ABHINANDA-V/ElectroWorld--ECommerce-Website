import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='page-layout'>
        <NavBar/>
        <div className='page-content'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout