import React from 'react'

const FavouriteCountry = ({destinations}) => {
  return (
    <>
        <div className='w-3/5 bg-white rounded-lg shadow-md p-4'>
            <h2 className='text-xl font-bold mb-4'>Favourite Countries</h2>
            <div className='space-y-2'>
            {destinations.map((data) => (
                <div
                key={data.country}
                className='bg-gray-100 p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>
                {data.country}
                </div>
            ))}
            </div>
        </div>
    
    </>
  )
}

export default FavouriteCountry