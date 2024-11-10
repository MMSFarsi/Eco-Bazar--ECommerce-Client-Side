import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MiddleNavbar from '../Components/Navbar/MiddleNavbar'
import BottomNavbar from '../Components/Navbar/BottomNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MiddleNavbar />
      <BottomNavbar></BottomNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout