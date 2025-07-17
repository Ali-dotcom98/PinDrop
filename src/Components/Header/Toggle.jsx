import { Bell, Moon, User, User2 } from 'lucide-react'
import React from 'react'

const Toggle = () => {
    return (
    <div>        
        <div className="flex items-center space-x-4 border border-b-4 border-violet-600   px-2 rounded-2xl ">
            {/* Notification Bell */}
            <button className="text-xl hover:text-purple-600" title="Notifications">
                <Bell/>
            </button>

            {/* Theme Toggle */}
            <button className="text-xl hover:text-purple-600" title="Toggle Theme">
                <Moon/>
            </button>

            {/* User Dropdown */}
            <div className="relative group cursor-pointer  py-3">
                <div className="flex items-center gap-1 text-sm font-medium hover:text-purple-600">
                <User className='text-violet-600'/> Ali
                <span>▾</span>
                </div>
                <div className="absolute right-0 hidden group-hover:block mt-2 w-40 bg-white rounded-md shadow-md z-10">
                <ul className="text-sm text-gray-700 ">
                    <li className="px-4 py-2 text-sm text-gray-800 capitalize hover:bg-violet-100 cursor-pointer rounded-tl rounded-tr ">Profile</li>
                    <li className="px-4 py-2 text-sm text-gray-800 capitalize hover:bg-violet-100 cursor-pointer  ">Settings</li>
                    <li className="px-4 py-2 text-sm text-gray-800 capitalize hover:bg-violet-100 cursor-pointer rounded-bl rounded-br ">Logout</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Toggle