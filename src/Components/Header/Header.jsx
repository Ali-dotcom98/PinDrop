import { MapPinned } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className=' mb-3   font-poppins space-y-1'>
            <div className='flex gap-2 items-center w-fit '>
                <span><MapPinned className='size-8 text-violet-600' /></span>
                
                <h1 className='text-[25px] '>PinDrop</h1>
            </div>
            <p className=' font-poppins text-xs font-medium'>Your Virtual Travel Wishlist</p>
        </div>
    </>
  )
}

export default Header