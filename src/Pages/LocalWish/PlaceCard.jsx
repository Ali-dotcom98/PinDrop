import React from 'react';
import { MapPin, Star, Plus, Check } from 'lucide-react';

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
      case 'restaurant':
        return '🍽️';
      case 'historic':
      case 'monument':
        return '🏛️';
      case 'natural':
      case 'peak':
        return '🏔️';
      default:
        return '📍';
    }
  };

  const formatDistance = (distance) => {
    if (!distance) return '';
    return distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
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

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="capitalize bg-gray-100 px-2 py-1 rounded-full">
            {place.type.replace('_', ' ')}
          </span>
          {place.distance && (
            <div className="flex items-center space-x-1">
              <MapPin size={12} />
              <span>{formatDistance(place.distance)}</span>
            </div>
          )}
        </div>

        <button
          onClick={() => onShowRoute(place)}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 text-sm"
        >
          Show Route
        </button>
      </div>
    </div>
  );
}

export default PlaceCard;
