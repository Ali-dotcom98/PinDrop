import React from 'react'
import sidebarItems from './SideBarElements'
import { NavLink } from "react-router-dom"
import {MapPinned} from "lucide-react"
const SideBar = () => {
  return (
    <div className='w-20 h-screen bg-violet-600 text-white p-4'>
     
     <div className=' space-y-6'>
       {sidebarItems.map((item, index) => {
        return (
         <NavLink 
          to={item.route} 
          key={index}
          className={({ isActive }) =>
            `relative group flex font-poppins tracking-wider font-semibold text-sm items-center justify-center py-2 hover:bg-slate-50/10 rounded-2xl transition ${
              isActive ? 'bg-slate-50/10 border border-b-4 rounded-2xl shadow-sm shadow-white' : ''
            }`
          }
        >
          <div>
            <item.icon className='size-6' />
          </div>

          {/* Tooltip Label */}
          <span className="absolute left-full  ml-3 whitespace-nowrap bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            {item.label}
          </span>
        </NavLink>

        );
      })}
     </div>
      {/* <div className='absolute bottom-10'>
        Muhammad Ali
      </div> */}
    </div>
  )
}

export default SideBar;
