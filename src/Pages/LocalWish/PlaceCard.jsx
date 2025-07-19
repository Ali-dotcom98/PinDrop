import React from 'react';
import { MapPin, Star, Plus, Check, MapPinCheck } from 'lucide-react';

function PlaceCard({ place, isInWishlist, onAddToWishlist, onShowRoute }) {
  const getPlaceIcon = (type) => {
    switch (type) {
      case 'tourism':
    case 'attraction':
      return '🎯';

    case 'museum':
    case 'gallery':
      return '🏛️';

    case 'park':
    case 'garden':
      return '🌳';

    case 'cafe':
      return '☕';

    case 'restaurant':
    case 'fast_food':
      return '🍽️';

    case 'place_of_worship':
      return '⛪';

    case 'library':
      return '📚';

    case 'historic':
    case 'monument':
    case 'memorial':
      return '🏛️';

    case 'natural':
    case 'peak':
      return '🏔️';

    default:
    console.warn(`No icon mapped for type: ${type}`);
    return '📍';
    }
  };

  const formatDistance = (distance) => {
    if (!distance) return '';
    return distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="p-3  ">
        <div className=''>
            <div className="flex   items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{getPlaceIcon(place.type)}</span>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">{place.name}</h3>
            </div>
            <button
              onClick={() => onAddToWishlist(place)}
              className={`p-1.5 rounded-full transition-all duration-200 ${
                isInWishlist
                  ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`}
              title={isInWishlist ? 'Added to wishlist' : 'Add to wishlist'}
            >
              {isInWishlist ? <Check size={14} /> : <Plus size={14} />}
            </button>
            </div>

           <div className='  flex items-center justify-between px-1 py-2 mb-2 border-l-4   rounded-md border-violet-600'>
             <div className="flex  items-center justify-between text-xs text-gray-500 ">
              <span className="capitalize bg-gray-100 px-2 py-1 rounded-full">
                {place.type.replace('_', ' ')}
              </span>
              {place.distance && (
                <div className="flex items-center space-x-1">
                  <MapPinCheck size={12} />
                  <span>{formatDistance(place.distance)}</span>
                </div>
              )}
            </div>
           </div>
        </div>

        <button
          onClick={() => onShowRoute(place)}
          className="w-full border border-b-4 border-violet-600   px-2 rounded-2xl  text-sm py-2 font-medium hover:bg-violet-100 transition-all duration-200 "
        >
          Show Route
        </button>
      </div>
    </div>
  );
}

export default PlaceCard;
