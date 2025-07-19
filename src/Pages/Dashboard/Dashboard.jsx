import React, { useEffect, useState } from 'react'
import TravelMap from '../TravelMap/TravelMap'

import FavouriteCountry from './FavouriteCountry';
import PriorityGuide from './PriorityGuide';
import { Filter, MapPinHouse, MapPinned } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddDestinationBTN from '../../Components/AddDestinationBTN';
import Sorting from '../../Components/Sorting';
import Header from '../../Components/Header/Header';
import HeaderCenter from '../../Components/HeaderCenter';
import Toggle from '../../Components/Header/Toggle';

const Dashboard = () => {
  const [destinations, setdestinations] = useState([]);
  const [filter, setfilter] = useState('')

  const naviation = useNavigate();




  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Wishes"));
    console.log("Fetched Data:", data);

    if (data) {
      setdestinations(data);
    } else {
      console.log("No data found in localStorage.");
    }
  }, []); 
  const handlePriorityChange = (priority) => {
    console.log("I am in here");
    
    HandleFilter(priority);
  };

  const HandleFilter=(filter)=>{
    const data = JSON.parse(localStorage.getItem("Wishes"));
    console.log(filter , 'aldk;flsa;gdfj');
    
    setfilter(filter);
    if(filter=="default")
    {
      setdestinations(data)
    }
    else
    {
      const filterData = data.filter((item)=> item.priority == filter)
      setdestinations(filterData)
    }
    
  }
  console.log(filter);

  const handleNav = ()=>{
    naviation("/add-trip")
  }

  
  return (
    <>
      <div className='relative space-y-5'>
           <div className=''>
              
              <div>
                  <div className=' items-center justify-between flex bg-violet-600 border border-violet-600 rounded-2xl'>
                  
                    <div className='bg-[#FAFAFA] p-6 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl w-[30%] flex items-center justify-center'><Sorting handlePriorityChange={handlePriorityChange} /></div>
                    <div className='bg-[#FAFAFA] w-[70%] border-none  translate-y-1.5 mt-0.5 text-white'>
                        <div className='bg-violet-600 border-none p-6 rounded-b-2xl text-center text-white'>
                          <HeaderCenter/>
                        </div>
                    </div>
                    <div className='bg-[#FAFAFA] p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-2xl w-[30%] flex items-center justify-center '><AddDestinationBTN handleNav={handleNav}/></div>

                  </div>      
              </div>
           </div>
            <div className='w-full  flex gap-2'>
              <div className='w-3/4 z-10 border-b-4 border rounded-xl p-3 border-violet-600' >
                <TravelMap destinations={destinations} HandleFilter={HandleFilter}/>

              </div>
              <div className='w-1/4  overflow-hidden'>
                <div className='flex flex-col '>

                  <FavouriteCountry destinations={destinations} />
                  {/* <PriorityGuide HandleFilter={HandleFilter}/> */}

                </div>

              </div>

            </div>


          

            
    </div>
      
    </>
  );
};

export default Dashboard;
