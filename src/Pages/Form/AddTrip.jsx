import React, { useEffect, useState } from 'react';
import { MapPin, Send } from "lucide-react";
import availableCountries from "./index";
import { countryCoordinates } from './index';



const AddTrip = () => {
    console.log(countryCoordinates);
    const [Wishes, setWishes] = useState([])
    const [error, seterror] = useState('')
    const [Success, setSuccess] = useState("")
    const [FormData, setFormData] = useState({
        country:"",
        placeName:"",
        reason:"",
        priority:"",
        coordinates:"",
    })
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

        const coordinates = countryCoordinates[value];
        console.log(coordinates);
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value,
                coordinates: coordinates
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
            <div className='bg-zinc-50/10 h-screen font-poppins'>
                <h1 className='text-2xl font-medium pt-2'>Add New Destination</h1>
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
                    <form onSubmit={HandleFormSubmit} className='bg-light-bg-secondary space-y-3 border rounded-md shadow-md py-4'>
                        <div className='flex'>
                            <div className='w-1/2 flex flex-col px-3 py-2 rounded-md space-y-2'>
                                <label htmlFor="">Country</label>
                                <select name='country'  value={FormData.country} onChange={HandleCountry} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition">
                                    <option value=""  disabled selected>Select a country</option>
                                    {
                                        availableCountries.map((item, index) => (
                                            <option value={item}  key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='w-1/2 flex flex-col px-3 py-2 rounded-md space-y-2'>
                                <label htmlFor="">Place Name</label>
                                <input name='placeName' value={FormData.placeName} onChange={HandleChange} type="text" className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition' placeholder='e.g., Islamabad, New York' />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 px-3'>
                            <label htmlFor="">Why do you want to visit?</label>
                            <textarea name='reason' value={FormData.reason} onChange={HandleChange} className='border rounded-md p-3 h-[20vh] focus:outline-none resize-none focus:ring-2 focus:ring-cyan-500' placeholder='Share your reasons for wanting to visit this place...'></textarea>
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
                                    <span className="ml-2 text-sm tracking-wider capitalize">{priority}</span>
                                </label>
                            ))}
                        </div>
                        <div className="text-red-500 font-medium px-3 text-sm min-h-[1.25rem]">{error}</div>

                        <div className='flex w-full items-center justify-end px-3 pt-10'>
                            <button type='submit' className='flex gap-2 rounded-md text-sm bg-gradient-to-r from-cyan-800 to-teal-600 text-white px-4 py-3 items-center'>
                                <p><Send className='w-5 h-5' /></p>
                                <p>Add to Wishlist</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTrip;
