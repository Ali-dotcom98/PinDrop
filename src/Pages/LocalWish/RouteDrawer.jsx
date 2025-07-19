import { useEffect, useRef } from 'react';
import openrouteservice from 'openrouteservice-js';
import L from 'leaflet';

const RouteDrawer = ({ mapInstance, userLocation, selectedPlace }) => {
  const previousRouteRef = useRef(null); // ⬅️ Stores the previous route layer

  useEffect(() => {
    if (!mapInstance || !userLocation || !selectedPlace) return;

    const Directions = new openrouteservice.Directions({
      api_key: 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjI2ODFiZjkzMDcxYjQzYjlhZmE1Y2FkNjQ1ZWY0MGViIiwiaCI6Im11cm11cjY0In0=', // ⬅️ Use your real API key here
    });

    Directions.calculate({
      coordinates: [
        [userLocation.lon, userLocation.lat], 
        [selectedPlace.lon, selectedPlace.lat],
      ],
      profile: 'driving-car',
      format: 'geojson',
    })
      .then((geojson) => {
  
        if (previousRouteRef.current) {
          mapInstance.removeLayer(previousRouteRef.current);
        }

        const routeLayer = L.geoJSON(geojson, {
          style: {
            color: '#3B82F6',
            weight: 4,
          },
        }).addTo(mapInstance);

        // 🗺️ Fit map to route
        mapInstance.fitBounds(routeLayer.getBounds());

        // 💾 Save this layer so we can remove it next time
        previousRouteRef.current = routeLayer;
      })
      .catch((err) => {
        console.error('Routing error:', err);
      });

    // 🧽 Clean up on component unmount
    return () => {
      if (previousRouteRef.current) {
        mapInstance.removeLayer(previousRouteRef.current);
        previousRouteRef.current = null;
      }
    };
  }, [mapInstance, userLocation, selectedPlace]);

  return null;
};

export default RouteDrawer;
