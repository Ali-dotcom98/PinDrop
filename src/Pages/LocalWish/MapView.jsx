import React, { useEffect, useRef } from 'react';
import L from "./leaflet-routing-machine";
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import RouteDrawer from './RouteDrawer';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


function MapView({ userLocation, places, selectedPlace, onPlaceSelect }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);
  const routingControlRef = useRef(null);

useEffect(() => {
  if (!mapRef.current) return;

  const map = L.map(mapRef.current).setView([userLocation.lat, userLocation.lon], 13);
  mapInstance.current = map;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  // Custom simple blue dot (like Google Maps)
  const userIcon = L.divIcon({
    className: 'custom-blue-dot',
    iconSize: [12, 12],
    iconAnchor: [6, 6], // center the dot
  });

  L.marker([userLocation.lat, userLocation.lon], { icon: userIcon }).addTo(map);

  return () => {
    map.remove();
  };
}, [userLocation]);




  useEffect(() => {
    if (!mapInstance.current) return;

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    places.forEach(place => {
      const placeIcon = L.divIcon({
        html: getPlaceIcon(place.type),
        iconSize: [24, 24],
        className: 'place-marker',
      });

      const marker = L.marker([place.lat, place.lon], { icon: placeIcon })
        .addTo(mapInstance.current)
        .bindPopup(`
            <div class=" w-64 h-40 rounded-xl shadow-lg overflow-hidden">
              <div class="w-full h-16 border-b border-gray-200 bg-gray-100 flex items-center justify-center text-4xl">
                ${place.image 
                  ? `<img src="${place.image}" class="w-full h-full object-cover" />` 
                  : getPlaceIcon(place.type)}
              </div>
              <div class="px-3 py-1 space-y-0 h-24 ">
              <div class=" space-y-1 my-2">
                  <h3 class=" text-base  font-semibold text-gray-900 line-clamp-1">${place.name}</h3>
                  <p class=" text-sm text-gray-600 capitalize ">${place.type.replace('_', ' ')}</p>
              </div>
              <div class="w-full h-8 border-t-2 border border-gray-200  px-5 mt-1 rounded-tl-xl rounded-tr-xl  text-blue-600 underline bg-gray-100 flex items-center justify-end text-4xl">
                  ${place.distance 
                  ? `<p class="text-xs  font-semibold">${place.distance < 1 
                      ? `${Math.round(place.distance * 1000)}m` 
                      : `${place.distance.toFixed(1)}km`} away</p>` 
                  : ''}
              </div>
              </div>
            </div>
          `)


        .on('click', () => onPlaceSelect(place));

      markersRef.current.push(marker);
    });
  }, [places, onPlaceSelect]);

  useEffect(() => {
    if (!mapInstance.current || !selectedPlace) return;

    import('leaflet-routing-machine').then(LRM => {
      if (routingControlRef.current) {
        mapInstance.current.removeControl(routingControlRef.current);
      }

      routingControlRef.current = LRM.routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lon),
          L.latLng(selectedPlace.lat, selectedPlace.lon),
        ],
        routeWhileDragging: false,
        addWaypoints: false,
        createMarker: () => null,
        lineOptions: {
          styles: [{ color: '#3B82F6', weight: 4, opacity: 0.7 }],
        },
      }).addTo(mapInstance.current);

      const group = new L.FeatureGroup([
        L.marker([userLocation.lat, userLocation.lon]),
        L.marker([selectedPlace.lat, selectedPlace.lon]),
      ]);
      mapInstance.current.fitBounds(group.getBounds().pad(0.1));
    });
  }, [selectedPlace, userLocation]);

  useEffect(()=>{
    const typeofPlaces = places.map((item)=> item.type)
    console.log("typeofPlaces" ,typeofPlaces);
    
  })

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


  return (
    <div className="relative h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <RouteDrawer
      mapInstance={mapInstance.current}
      userLocation={userLocation}
      selectedPlace={selectedPlace}
    />
      <style jsx>{`
        .user-location-marker {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          animation: pulse 2s infinite;
        }

        .place-marker {
          background: white;
          border: 2px solid #3B82F6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .place-marker:hover {
          transform: scale(1.1);
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default MapView;
