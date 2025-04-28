import React from 'react'
import high from "../../../public/map-markers/marker-icon-2x-red.png"
import medium from "../../../public/map-markers/marker-icon-2x-yellow.png"
import low from "../../../public/map-markers/marker-icon-2x-green.png"
const PriorityGuide = ({HandleFilter}) => {
    const HandleFilterChnages = (priority)=>{
        HandleFilter(priority);
    }
  return (
    <>
        <div className='w-2/5 flex flex-col space-y-6 items-center bg-gray-50 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-center text-gray-700'>Priority</h2>

            <div className='flex space-x-8'>
                {["high", "medium", "low"].map((priority) => (
                <div key={priority} onClick={()=>HandleFilterChnages(priority)} className='flex w-[6rem] flex-col items-center p-4 rounded-xl shadow-lg bg-white hover:scale-105 transform transition-all'>
                    
                 
                    <h3 className='text-xl font-semibold text-gray-600 capitalize mb-2'>{priority}</h3>
                    
                 
                    <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full border-4 ${
                        priority === "low"
                        ? "border-green-500 bg-green-100"
                        : priority === "medium"
                        ? "border-yellow-500 bg-yellow-100"
                        : "border-red-500 bg-red-100"
                    }`}
                    >
                    <img
                        className={`scale-50 rounded-full`}
                        src={ priority=="high"? high : priority=="low" ? low : medium}
                        alt={priority}
                    />
                    </div>
                </div>
                ))}
            </div>
        </div>
         
    
    </>
  )
}

export default PriorityGuide