import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Country = () => {
  const trip = { place: "Islamabad", country: "Pakistan" };
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function getImage() {
      try {
        const res = await axios.get(`http://localhost:3000/api/image?place=${encodeURIComponent(trip.place + " " + trip.country)}`);
        if (res.data.imageUrl) {
          setImageUrl(res.data.imageUrl);
        }
      } catch (err) {
        console.error("Image fetch failed", err);
      }
    }
    getImage();
  }, []); 

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{trip.place}, {trip.country}</h2>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${trip.place}`}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default Country;
