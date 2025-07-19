import React, { useEffect, useState } from 'react'
import Card from './Card';
import Wishlist from '../LocalWish/Wishlist';
import NoFound from './NoFound';

const DisplayList = () => {
    const [WishesList, setWishesList] = useState([]);
    console.log(WishesList);
    

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
    localStorage.setItem("Wishes", JSON.stringify(UpdateList))
    
    }
  return (
    <>
        <div >
            {
                !WishesList.length == 0?(
                    <div className='grid grid-cols-5 gap-5 mt-5'>
                        { WishesList.map((item , index)=>(
                            <Card
                                country = {item.country}
                                flag={item.flag}
                                placeName={item.placeName}
                                priority={item.priority}
                                reason={item.reason}    
                                HandleDeleteRequest={HandleDeleteRequest}     
                                index ={index}           
                            />
                        ))}
                    </div>
                    
                )
                :
                (
                    <div className='w-full '>
                        <NoFound/>
                    </div>
                )
                
               
            }
        </div>
    </>
  )
}

export default DisplayList