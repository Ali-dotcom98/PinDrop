import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Popup
} from 'react-leaflet';
import { Filter, Map as MapIcon } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const priorityColors = {
  high: '#ef4444',   // red-500
  medium: '#facc15', // yellow-400
  low: '#4ade80',    // green-400
  default: '#93c5fd' // blue-300
};

const TravelMap = ({ destinations, HandleFilter }) => {
  const center = [45, 20];
  const zoomLevel = 3;

  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
      .then(res => res.json())
      .then(data => setGeoData(data));
  }, []);

  const getFillColor = (countryName) => {
    const match = destinations.find(dest => dest.country.toLowerCase() === countryName.toLowerCase());
    if (!match) return '#e5e7eb'; // neutral gray-200 if not found
    return priorityColors[match.priority] || priorityColors.default;
  };

  

  return (
    <div className="mb-8 space-y-3 p-1 ">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <MapIcon className="text-cyan-600" size={20} />
            <span className="font-medium text-base text-[20px]">Travel Map</span>
          </div>
          
        </div>

        
      </h2>

      <div className="bg-white rounded-lg shadow-md h-[400px] space-y-4">
        <MapContainer
          center={[20, 100]}
          zoom={zoomLevel}
          className="h-full w-full rounded-none"
          scrollWheelZoom={true}
          style={{ height: '100%' }}
          minZoom={3}
          worldCopyJump={true}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={true}
          />

          {geoData && (
            <GeoJSON
              data={geoData}
              style={feature => ({
                fillColor: getFillColor(feature.properties.name),
                weight: 1,
                color: "#ccc",
                fillOpacity: 0.7,
              })}
              onEachFeature={(feature, layer) => {
                const countryName = feature.properties.name;
                const match = destinations.find(dest => dest.country.toLowerCase() === countryName.toLowerCase());

                if (match) {
                  layer.bindPopup(`
                    <div style="min-width: 200px">
                      <strong>${match.placeName}</strong><br/>
                      <span style="color: ${getFillColor(countryName)};">${match.country}</span><br/>
                      <em>${match.reason}</em>
                    </div>
                  `);
                }
              }}
            />
          )}
        </MapContainer>
        <p className="text-sm text-gray-500 text-center italic font-medium">
            View and manage all your favorite destinations on the map.
          </p>
      </div>
    </div>
  );
};

export default TravelMap;
