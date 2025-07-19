import React, { useState, useEffect } from 'react';
import { MapPin, Heart, RefreshCw, AlertCircle } from 'lucide-react';
import { useGeolocation } from './Hooks/useGeolocation';
import { fetchNearbyPlaces } from './Services/placeservices';
import MapView from './MapView';
import PlaceCard from './PlaceCard';
import Wishlist from './Wishlist';
import LoadingSpinner from './LoadingSpinner';

function LocalWish() {
  
  const { location, loading: locationLoading, error: locationError } = useGeolocation();
  const [places, setPlaces] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [placesLoading, setPlacesLoading] = useState(false);
  const [placesError, setPlacesError] = useState(null);

console.log("places",places);
console.log("location",location);
console.log("selectedPlace",selectedPlace);



  useEffect(() => {
    const savedWishlist = localStorage.getItem('tourismWishlist');
    if (savedWishlist) {
      try {
        const parsed = JSON.parse(savedWishlist);
        setWishlist(parsed.map(item => ({ ...item, addedAt: new Date(item.addedAt) })));
      } catch (error) {
        console.error('Error parsing wishlist:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tourismWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (location) {
      fetchPlaces();
    }
  }, []);

  const fetchPlaces = async () => {
    if (!location) return;

    setPlacesLoading(true);
    setPlacesError(null);

    try {
      const nearbyPlaces = await fetchNearbyPlaces(location.lat, location.lon, 4000);
      setPlaces(nearbyPlaces);
    } catch (error) {
      setPlacesError(error.message || 'Failed to fetch places');
    } finally {
      setPlacesLoading(false);
    }
  };

  const handleAddToWishlist = (place) => {
    const isAlreadyInWishlist = wishlist.some(item => item.id === place.id);

    if (isAlreadyInWishlist) {
      setWishlist(prev => prev.filter(item => item.id !== place.id));
    } else {
      const wishlistItem = {
        ...place,
        addedAt: new Date(),
      };
      setWishlist(prev => [...prev, wishlistItem]);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const handleShowRoute = (place) => {
    setSelectedPlace(place);
  };

  const isInWishlist = (placeId) => {
    return wishlist.some(item => item.id === placeId);
  };

  if (locationLoading) {
    return <LoadingSpinner message="Getting your location..." />;
  }

  if (locationError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Access Required</h2>
            <p className="text-gray-600 mb-6">{locationError}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!location) {
    return <LoadingSpinner message="Initializing..." />;
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-600" size={24} />
            <h1 className="text-xl font-bold text-gray-900">Local Explorer</h1>
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

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Nearby Places</h2>
            <p className="text-sm text-gray-600">Within 4km of your location</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {placesLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading places...</p>
                </div>
              </div>
            ) : placesError ? (
              <div className="text-center py-12">
                <AlertCircle className="mx-auto text-red-500 mb-4" size={32} />
                <p className="text-red-600 mb-4">{placesError}</p>
                <button
                  onClick={fetchPlaces}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : places.length === 0 ? (
              <div className="text-center py-12">
                <MapPin className="mx-auto text-gray-300 mb-4" size={32} />
                <p className="text-gray-600">No places found nearby</p>
                <p className="text-gray-400 text-sm mt-1">Try refreshing or moving to a different location</p>
              </div>
            ) : (
              <div className="space-y-3">
                {places.map(place => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    isInWishlist={isInWishlist(place.id)}
                    onAddToWishlist={handleAddToWishlist}
                    onShowRoute={handleShowRoute}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 p-4">
          <MapView
            userLocation={location}
            places={places}
            selectedPlace={selectedPlace}
            onPlaceSelect={setSelectedPlace}
          />
        </div>
      </div>

      {/* Wishlist Modal */}
      
    </div>
  );
}

export default LocalWish;
