import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Send } from "lucide-react";
import availableCountries from "./index";
import { countryCoordinates , availableCountriesFlag } from './index';
import { map } from 'leaflet';



const AddTrip = () => {
    console.log("lsdkls", availableCountriesFlag);

    const [Wishes, setWishes] = useState([])
    const [error, seterror] = useState('')
    const [Success, setSuccess] = useState("")
    const [FormData, setFormData] = useState({
        country:"",
        placeName:"",
        reason:"",
        priority:"",
        coordinates:"",
        flag:"",
    })
    const flagRefs = useRef({});

    console.log(FormData);
    console.log(Wishes);
    
    useEffect(()=>{
        setTimeout(()=>{
            seterror("")
            setSuccess("")
        }, 3000)
    },[error , Success])

    useEffect(()=>{
        const Wishes = JSON.parse(localStorage.getItem("Wishes"))
        if(Wishes)
        {
            setWishes(Wishes)
            console.log("Data Fetched");
        }
        console.log("Data Not existed yet");
        
        
        
    },[]);

    const handleCountryFlags = (country , flag)=>{
        const name = "flag"
        const country1 = "country"
        const isexist = Wishes.find((item)=>item.country == country)
        if(isexist)
        {
            return seterror(`${country} already exists in Wish list.`);
        }
        setFormData(

            (prev)=>(
                {
                    ...prev,
                    [name]: flag,
                    [country1]: country
                }
            )
        )


    }
   
    const HandleFormSubmit = (e) => {
        e.preventDefault();

        const isValid = [FormData.country, FormData.placeName, FormData.priority, FormData.reason]
            .every((item) => item && item.trim() !== '');
    
        if (!isValid) {
            seterror('Please fill out all fields.')
            return;
        }
        

        const updatedWishes = [...Wishes, FormData];
        setWishes(updatedWishes);

        localStorage.setItem('Wishes', JSON.stringify(updatedWishes));
        
        setSuccess("Wish Added SuccessFully")

        setFormData({
            country: '',
            placeName: '',
            priority: '',
            reason: ''
        });
    

        console.log("Form submitted!");
    };

    const HandleCountry = (e)=>{
        const { name, value } = e.target;
        const isexist = Wishes.find((item)=> item.country == value)
        console.log("isexist",isexist);
        
        if(isexist)
                return seterror(`${value} already exists in the Wish list.`);

        const FlagofCountry = availableCountriesFlag.find((item)=>item.country === value).flag
        if (flagRefs.current[value]) {
        flagRefs.current[value].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }


        const coordinates = countryCoordinates[value];
        console.log(coordinates);
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value,
                coordinates: coordinates,
                flag: FlagofCountry
            }
        ))
    }
    

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
    };
    

    return (
        <>

            <div className='flex w-full bg-[#FAFAFA] gap-2'>
                <div className='w-[70%] rounded-2xl  border-2 border-b-4 border-violet-600 font-poppins p-3'>
                <div className='space-y-3 pt-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-emerald-300'><MapPin /></h1>
                            <p className='font-medium tracking-wider'>Add New Destination</p>
                        </div>
                        <div className='text-green-500 font-medium'>
                            {Success}
                        </div>
                    </div>
                    <form onSubmit={HandleFormSubmit} className='bg-light-bg-secondary space-y-3  rounded-md shadow-md py-4'>
                        <div className='flex'>
                            <div className='w-1/2 flex flex-col px-3 py-2 rounded-md space-y-2'>
                                <label htmlFor="" className='font-medium'>Country</label>
                                <select name='country'  value={FormData.country} onChange={HandleCountry} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition">
                                    <option value=""  disabled selected>Select a country</option>
                                    {
                                        availableCountries.map((item, index) => (
                                            <option value={item}  key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='w-1/2 flex flex-col px-3 py-2 rounded-md space-y-2'>
                                <label htmlFor=""  className='font-medium'>Place Name</label>
                                <input name='placeName' value={FormData.placeName} onChange={HandleChange} type="text" className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition' placeholder='e.g., Islamabad, New York' />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 px-3'>
                            <label htmlFor=""  className='font-medium'>Why do you want to visit?</label>
                            <textarea name='reason' value={FormData.reason} onChange={HandleChange} className='border rounded-md p-3 h-[20vh] focus:outline-none resize-none focus:ring-2 focus:ring-violet-500' placeholder='Share your reasons for wanting to visit this place...'></textarea>
                        </div>
                        <div className='space-y-2 px-3 space-x-4'>
                            {['low', 'medium', 'high'].map((priority) => (
                                <label key={priority} htmlFor={`priority-${priority}`} className="inline-flex items-center">
                                    <input
                                        id={`priority-${priority}`}
                                        type="radio"
                                        name="priority"
                                        value={priority}
                                        checked={FormData.priority === priority}
                                        onChange={HandleChange}
                                        className="focus:outline-none h-4 w-4 text-cyan-600 transition duration-150 ease-in-out"
                                    />
                                    <span className="ml-2 text-sm tracking-wider capitalize font-medium">{priority}</span>
                                </label>
                            ))}
                        </div>
                        <div className="text-red-500 font-medium px-3 text-sm min-h-[1.25rem]">{error}</div>

                        <div className='flex w-full items-center justify-end px-3 pt-10'>
                            <button type='submit' className="text-sm flex items-center w-fit gap-2 px-8 py-2 border border-violet-800 border-b-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-violet-50"
>
                                <p><Send className='h-4 w-4' /></p>
                                <p>Add to Wishlist</p>
                            </button>
                        </div>
                    </form>
                </div>
                </div>
                <div className='w-[30%] '>
                    <div className="h-[34rem] overflow-y-scroll px-2 space-y-3">
                        {availableCountriesFlag.map((item) => (
                            <div className={`h-48 flex items-center gap-4 cursor-pointer ${
                                    FormData.country === item.country ? 'border-2 p-2 border-violet-600 rounded-lg' : ''
                                }`
                                }  
                                onClick={()=>(handleCountryFlags(item.country , item.flag))} key={item.country}
                                ref={(el) => (flagRefs.current[item.country] = el)}
                                >
                                <img
                                    src={item.flag}
                                    alt={`${item.country} flag`}
                                    className="h-full w-full object-cover rounded shadow"
                                />
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default AddTrip;
