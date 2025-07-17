import { MapPinHouse } from 'lucide-react'
import React from 'react'

const AddDestinationBTN = ({handleNav}) => {
  return (
    <>
        <div
                className="text-sm flex items-center w-fit gap-2 px-8 py-2 border border-violet-800 border-b-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-violet-50"
                onClick={handleNav}
              >
                <p className="text-gray-800  font-medium group-hover:text-violet-800 transition-colors duration-300">
                  Add Destination
                </p>
                <MapPinHouse className=" h-4 w-4 text-gray-500 group-hover:text-violet-800 transition-colors duration-300" />
              </div>
    </>
  )
}

export default AddDestinationBTN