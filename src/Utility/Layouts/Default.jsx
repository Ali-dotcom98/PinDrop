import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/SideBar/SideBar'

const Default = () => {
  return (
    <div className="flex h-screen bg-[#FAFAFA] ">
      <SideBar />
      <div className="flex-1 bg-dark-bg p-6  overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Default
