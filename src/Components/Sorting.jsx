import { Filter, ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const priorities = ['high', 'medium', 'low', 'default'];

const Sorting = ({ handlePriorityChange }) => {
const [open, setOpen] = useState(false);
const [selected, setSelected] = useState(null);
const dropdownRef = useRef();

const toggleDropdown = () => setOpen(!open);

const handleSelect = (value) => {
    setSelected(value);
    handlePriorityChange(value);
    setOpen(false);
};

useEffect(() => {
    const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
    }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

return (
    <div
    ref={dropdownRef}
    className="relative w-52"
    >
    <div
        className="flex items-center justify-between gap-2 px-4 py-2 border border-violet-800 border-b-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-violet-50"
        onClick={toggleDropdown}
    >
        <div className="flex items-center gap-2 text-sm text-gray-800 capitalize">
        <Filter className="h-4 w-4 text-violet-800" />
        {selected || 'Select Priority'}
        </div>
        <ChevronDown className="h-4 w-4 text-violet-800" />
    </div>

    {open && (
        <div className="absolute z-50  w-full bg-white border border-gray-300 rounded-md shadow-md">
        {priorities.map((item) => (
            <div
            key={item}
            className="px-4 py-2 text-sm text-gray-800 capitalize hover:bg-violet-100 cursor-pointer"
            onClick={() => handleSelect(item)}
            >
            {item}
            </div>
        ))}
        </div>
    )}
    </div>
);
};

export default Sorting;
