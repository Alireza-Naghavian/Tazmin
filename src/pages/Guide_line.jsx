import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'
import GuideLine_content from './GuideLine_content'

function Guide_line() {
  return (
    <div>
          <div>
      <Header>
        <Outlet />
      </Header>
    </div>
   <GuideLine_content/>
    <div className="border-t border-t-gray_base w-full mt-8  ">
      <Footer />
    </div>
    </div>
  )
}

export default Guide_line