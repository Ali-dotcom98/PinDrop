import { MapPin, RefreshCw } from 'lucide-react'
import React from 'react'

const Header = ({fetchPlaces , placesLoading}) => {
return (
<div>
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <h1 className='text-emerald-300'><MapPin /></h1>
                    <p className='font-medium tracking-wider'>Local</p>
                </div>
                
            </div>

            <div className="flex items-center space-x-2">
            <button
                onClick={fetchPlaces}
                disabled={placesLoading}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
                <RefreshCw size={16} className={placesLoading ? 'animate-spin' : ''} />


                <span>Refresh</span>
            </button>

            
            </div>
        </div>
    </header>
</div>
)
}

export default Header