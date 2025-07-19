import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/SideBar/SideBar'
import Toggle from '../../Components/Header/Toggle'
import Header from '../../Components/Header/Header'

const Default = () => {
  return (
    <div className="flex h-screen bg-[#FAFAFA] ">
      <SideBar />
      <div className="flex-1 bg-dark-bg p-6  overflow-auto">
        <div className='flex  justify-between '>
                <Header/>
                <Toggle/>
              
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Default
