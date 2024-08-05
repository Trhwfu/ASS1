import React from 'react'
import Header from './user/header'
import Footer from './user/footer'
import { Outlet } from 'react-router-dom'


const LayoutUser = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutUser
