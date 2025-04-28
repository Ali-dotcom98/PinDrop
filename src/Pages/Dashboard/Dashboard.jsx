import React, { useEffect, useState } from 'react'
import TravelMap from '../TravelMap/TravelMap'

import FavouriteCountry from './FavouriteCountry';
import PriorityGuide from './PriorityGuide';

const Dashboard = () => {
  const [destinations, setdestinations] = useState([]);
  const [filter, setfilter] = useState('')



  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Wishes"));
    console.log("Fetched Data:", data);

    if (data) {
      setdestinations(data);
    } else {
      console.log("No data found in localStorage.");
    }
  }, []); 

  const HandleFilter=(filter)=>{
    const data = JSON.parse(localStorage.getItem("Wishes"));
    setfilter(filter);
    if(filter=="Default")
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
  
  return (
    <>
      <div className='relative space-y-5'>
          <h1 className='text-2xl font-medium pt-2 '>Dashboard</h1>
          <TravelMap destinations={destinations} HandleFilter={HandleFilter}/>


          <div className='flex space-x-8 py-4'>

            <FavouriteCountry destinations={destinations} />
            <PriorityGuide HandleFilter={HandleFilter}/>

          </div>

            
    </div>
      
    </>
  );
};

export default Dashboard;
