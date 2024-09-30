import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>            {/* it keeps the component same above and below it, only this can be changed */}
     <Footer/>
    </>
  )
}

export default Layout