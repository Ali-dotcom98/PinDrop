import { Camera, Cigarette, CircleAlert, Minus, MinusCircle } from 'lucide-react';
import React from 'react';
import { Circle } from 'react-leaflet';

const getPriorityStyles = (priority) => {
  const styles = {
    low: { width: '33%', color: 'bg-green-500' },
    medium: { width: '66%', color: 'bg-yellow-500' },
    high: { width: '100%', color: 'bg-red-500' },
    default: { width: '20%', color: 'bg-gray-400' },
  };
  return styles[priority?.toLowerCase()] || styles.default;
};

const FavouriteCountry = ({ destinations = [] }) => {
  return (
    <div className="relative bg-white h-[32rem]  border-violet-800 rounded-xl shadow-lg ">
      <div className='border-t border-b-4 border-violet-800  rounded-xl h-28 bg-violet-600'>
        <div className='flex items-center text-white  justify-between py-8 px-5'>
          <h2 className="text-xl font-bold ">Favourite Countries</h2>
          <Camera/>
        </div>
      </div>
      <div className=' absolute z-30 w-full  p-6 -translate-y-12'>
        <div className="space-y-4 bg-white   rounded-2xl p-3">
        {destinations.length === 0 ? (
          <p className="text-gray-500 text-sm italic">No favourite destinations added yet.</p>
        ) : (
          destinations.slice(0,4).map((data, index) => {
            const { width, color } = getPriorityStyles(data.priority);
            return (
              <div
                key={`${data.country}-${index}`}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{data.country}</span>
                  <span className="text-xs font-semibold capitalize text-gray-500">{data.priority} Priority</span>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ease-in-out ${color}`}
                    style={{ width }}
                  ></div>
                </div>
              </div>
            );
          })
        )}
      </div>
      </div>
       <div className='absolute z-10 w-full  bottom-0 border-t-4 border-violet-800  rounded-xl h-24 bg-violet-600'>
        <div className='flex items-center text-white  justify-between py-8 px-5'>
          <div className='flex px-5 py-2 rounded-lg w-full bg-gray-100/10 items-center justify-evenly'>
            <Minus />
            <svg className='size-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <Minus />

          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCountry;
