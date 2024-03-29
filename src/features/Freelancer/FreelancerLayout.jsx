import React from 'react'
import Header from '../../pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../ui/Footer'

function FreelancerLayout() {
  return (
    <div>
    {/* owner create project */}
    <div>
      <Header>
        <Outlet />
      </Header>
    </div>
    <Outlet/>
    <div className="border-t border-t-gray_base w-full mt-16 ">
      <Footer />
    </div>
  </div>
  )
}

export default FreelancerLayout