
import React from 'react'
import Error404 from "../assets/image.png"
const NotFound = () => {
  return (
    <div className="flex items-center justify-center font-poppins">

      <div className="sm:hidden text-2xl font-semibold text-gray-700 pt-5">
        Page does not exist
      </div>


      <img className="hidden sm:block pt-2" src={Error404} alt="404 Error" />

    </div>
  )
}

export default NotFound
