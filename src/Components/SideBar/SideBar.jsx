import React from 'react'
import sidebarItems from './SideBarElements'
import { NavLink } from "react-router-dom"
import {MapPinned} from "lucide-react"
const SideBar = () => {
  return (
    <div className='w-[15rem] h-screen bg-gradient-to-r from-cyan-800 to-teal-600 text-white p-4'>
      <div className=' mb-6 space-y-2 py-2'>
        <div className='flex gap-2 items-center'>
          <span><MapPinned className='size-12' /></span>
          <h1 className='font-poppins text-2xl'>PinDrop</h1>
        </div>
        <p>Your Virtual Travel Wishlist</p>
      </div>
      {sidebarItems.map((item, index) => {
        return (
          <NavLink 
            to={item.route} 
            key={index}
            className={({ isActive }) =>
              `flex font-poppins tracking-wider font-semibold text-sm items-center  px-4 py-2 mb-3  gap-3 rounded hover:bg-slate-50/10 transition ${
                isActive ? 'bg-slate-50/10 ' : ''
              }`
            }
          >

            <div className='flex gap-4 items-center'>
              <div><item.icon className='w-5 h-5'/></div>
              <div className='text-[#F5F5F5]'>{item.label}</div>
            </div>
          </NavLink>
        );
      })}
      <div className='absolute bottom-10'>
        Muhammad Ali
      </div>
    </div>
  )
}

export default SideBar;
