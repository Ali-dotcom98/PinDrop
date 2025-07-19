import { Delete, Facebook, Instagram, LandPlot, Slice, Trash, Twitter } from 'lucide-react';
import React from 'react';

const Card = ({country, flag,placeName,priority,reason , HandleDeleteRequest , index}) => {
  return (
    <div className=" relative group border-2 border-b-4 border-violet-600  w-[190px] h-[260px] bg-white shadow-[7px_5px_10px_rgba(0,0,0,0.333)] rounded-2xl">
        {/* Top Header Section */}
        <div className="h-[70px] bg-[#ff5858] relative rounded-t-2xl"><img src={flag} className='object-cover h-[70px] w-full rounded-t-xl' alt="" /><div/>
        
            <div className="w-[50px]   h-[50px] bg-gray-100 rounded-[10px]   absolute top-[10px] left-[10px]" >
              <span className='font-bold text-xl  text-gray-700 flex items-center justify-center mt-2.5'>{country.slice(0,2)}</span>
            </div>


            <div>
                <p
                    className={`w-[60px] bg-gray-50  text-[13px] text-center font-bold rounded-[5px] absolute top-[13px] left-[70px] ${
                      priority === "high"
                        ? "bg-red-100 text-red-600"
                        : priority === "medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {priority}
                  </p>

                <p className="w-[100px]  bg-gray-50 text-[#262626] text-[15px] text-center  font-bold rounded-[5px] absolute top-[40px] left-[70px]"> 
                  {country}
                </p>
            </div>
        </div>

        {/* Description Placeholder */}
        <div className="font-poppins w-[180px] h-[130px] bg-gray-50 rounded-[5px] mt-[6px] ml-[5px] p-1 space-y-2" >
          <div className='text-sm text-gray-500 font-medium flex items-center gap-3'><LandPlot  className={`${priority === "high"
                        ? " text-red-600"
                        : priority === "medium"
                        ? " text-yellow-600"
                        : " text-green-600"}`}/><span> {placeName}</span></div>
          <div className='text-xs text-gray-950'>
            {
              reason
            }
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-[10px]   mx-[5px] border-t-[2px] border-violet-600 pt-[10px] flex items-center justify-center">
            <a href="#" className="mr-[15px] text-violet-600">
              <Twitter />
            </a>
            <a href="#" className="mr-[15px] text-violet-600">
              <Instagram />
            </a>
            <a href="#" className="text-violet-600">
              <Facebook />
            </a>
        </div>
        <div onClick={()=>HandleDeleteRequest(index)} className='absolute cursor-pointer flex items-center justify-center transition-all ease-in duration-200  opacity-0 group-hover:opacity-100 w-[50px] top-4 -translate-y-1.5  h-[50px] bg-gray-100 rounded-[10px]   translate-x-2.5 '>
            <Trash  className='text-red-500 size-5'/>
           

        </div>
    </div>
  );
};

export default Card;
