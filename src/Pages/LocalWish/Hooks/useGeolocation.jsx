import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
      return;
    }

    const handleSuccess = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        accuracy: position.coords.accuracy,
      });
      setLoading(false);
    };

    const handleError = (error) => {
      let message = 'An error occurred while retrieving your location.';

      switch (error.code) {
        case error.PERMISSION_DENIED:
          message = 'Location access denied. Please enable location services.';
          break;
        case error.POSITION_UNAVAILABLE:
          message = 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          message = 'Location request timed out.';
          break;
      }

      setError(message);
      setLoading(false);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000, // 5 minutes
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, []);

  return { location, loading, error };
};


