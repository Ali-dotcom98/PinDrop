import React, { useEffect, useState } from 'react';
import {MapPin , Clock, Delete, Trash} from "lucide-react"
import { data } from 'react-router-dom';
const ListDisplay = () => {
  const [WishesList, setWishesList] = useState([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('Wishes'));

      if (data) {
        setWishesList(data);
      } else {
        console.log('Empty Array');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const HandleDeleteRequest = (indexA)=>{
    
    const UpdateList = WishesList.filter((_,index)=>index!=indexA);
    setWishesList(UpdateList)
    localStorage.setItem("Wishes", JSON.stringify(WishesList))
    
  }



  return (
   <>
      <div className='bg-zinc-50/10 h-screen font-poppins space-y-5 '>
        <h1 className='text-2xl font-medium pt-2'>My Travel Wishlist</h1>
        <div className='flex items-center justify-between '>
          <div className='flex gap-2 items-center'>
              <h1 className='text-emerald-300'><MapPin /></h1>
              <p className='font-medium tracking-wider'>Add New Destination</p>
          </div>
          <button>Sorting</button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pb-5'>
          {
            WishesList.map((item , index)=>(
              <div className='border px-3 py-5 rounded-md hover:scale-105 transition-all ease-in duration-200'>
                <div className='flex items-center lg:justify-between justify-evenly'>
                  <div className='flex space-x-5'>
                    <h1 className='uppercase border size-10 flex items-center justify-center rounded-full'><span>{item.country.slice(0,2)}</span></h1>
                    <div>
                      <h1>{item.placeName}</h1>
                      <p className='text-sm text-zinc-500'>{item.country}</p>
                    </div>
                  </div>
                  <div className={`text-sm capitalize  font-sans px-5 rounded-xl  ${item.priority==="high" ?" bg-red-100 text-red-600  "  : item.priority ==="medium" ? "bg-yellow-100 text-yellow-600" :"bg-green-100 text-green-600 "}`}>
                      {item.priority}
                  </div>
                </div>
                <div className='line-clamp-2 min-h-[3rem] pt-3'>
                  {item.reason}
                </div>
                <hr class="border-t-1 border-zinc-50/2  mx-auto my-4"/>

                <div className='flex items-center justify-between text-sm'>
                  <div className='flex items-center gap-2 text-zinc-500'>
                    <span><Clock className='h-4 w-4'/></span>
                    <p>Added Apr 22, 2025</p>
                  </div>
                  <div className='cursor-pointer' onClick={()=>HandleDeleteRequest(index)}>
                    <Trash className='h-4 w-4 text-red-500'/>
                  </div>
                </div>

                
              </div>
            ))
          }
        </div>

      </div>
   
   </>
  );
};

export default ListDisplay;
