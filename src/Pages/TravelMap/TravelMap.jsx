import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Filter, Map as MapIcon, MoveRight, Plus } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const priorityColors = {
  high: 'red',
  medium: 'yellow',
  low: 'green',
  default: 'blue'
};


const createPriorityIcon = (priority = 'default') => {
  const color = priorityColors[priority] || priorityColors.default;
  

  const availableColors = ['red', 'yellow', 'green'];
  const useLocal = availableColors.includes(color);
  
  return new L.Icon({
    iconUrl: useLocal 
      ? `/map-markers/marker-icon-2x-${color}.png`
      : ``,
    shadowUrl: '/map-markers/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: `priority-marker priority-${priority}`
  });
};


const TravelMap = ({ destinations ,HandleFilter }) => {
  const center = [45, 20];
  const zoomLevel = 3;

  const handlePriortity = (priority) => {
    
    HandleFilter(priority);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center justify-between ">
        <div className='flex items-center gap-2'>
          <MapIcon className="text-cyan-600" size={20} />
          Travel Map
        </div>
      
        <div className='flex  items-center'> 
          <div className='w-fit'><Filter className='h-4 w-4'/></div>
        <select name="" id=""  className='w-fit text-sm focus:outline-none focus:ring-cyan-500 focus:border-transparent transition ' onChange={(e) => handlePriortity(e.target.value)}>
          <option value="" className='text-sm' disabled selected>
          Select Priority
          </option>
          {["high", "medium", "low" ,"Default"].map((item) => (
            <option className='capitalize px-10' key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        </div>

        
   
      </h2>
      
      <div className="bg-white rounded-lg shadow-md p-1 h-[400px]">
        <MapContainer
          center={center}
          zoom={zoomLevel}
          className="h-full w-full rounded-none"
          scrollWheelZoom={true}
          style={{ height: '100%' }}
          minZoom={3}
          worldCopyJump={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={true}
          />
          {destinations.map((destination) => (
            <Marker
              key={destination.id}
              position={destination.coordinates}
              icon={createPriorityIcon(destination.priority)}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-semibold text-gray-800">{destination.placeName}</h3>
                  <p className={`text-sm ${destination.priority==="high"?"text-red-500":destination.priority==="medium"?"text-yellow-500":"text-green-500"}`}>{destination.country}</p>
                  <p className="text-sm text-gray-700 mt-2">{destination.reason}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default TravelMap;