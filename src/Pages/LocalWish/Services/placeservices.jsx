const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

export const fetchNearbyPlaces = async (lat, lon, radius = 4000) => {
  const query = `
    [out:json][timeout:25];
    (
      node["tourism"~"attraction|museum|gallery|viewpoint|zoo|aquarium|theme_park"](around:${radius},${lat},${lon});
      node["leisure"~"park|garden|nature_reserve|beach_resort|water_park"](around:${radius},${lat},${lon});
      node["amenity"~"cafe|restaurant|bar|pub|fast_food|library|theatre|cinema|place_of_worship"](around:${radius},${lat},${lon});
      node["historic"~"monument|memorial|castle|ruins|archaeological_site"](around:${radius},${lat},${lon});
      node["natural"~"peak|beach|waterfall|hot_spring|cave_entrance"](around:${radius},${lat},${lon});
    );
    out geom;
  `;

  try {
    const response = await fetch(OVERPASS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `data=${encodeURIComponent(query)}`,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data", data);
    
    return data.elements
      .map((element) => ({
        id: element.id.toString(),
        name:
          element.tags.name ||
          element.tags.tourism ||
          element.tags.leisure ||
          element.tags.amenity ||
          element.tags.historic ||
          element.tags.natural ||
          'Unknown Place',
        type:
          element.tags.tourism ||
          element.tags.leisure ||
          element.tags.amenity ||
          element.tags.historic ||
          element.tags.natural ||
          'place',
        lat: element.lat,
        lon: element.lon,
        tags: element.tags,
        distance: calculateDistance(lat, lon, element.lat, element.lon),
      }))
      .filter((place) => place.name !== 'Unknown Place');
  } catch (error) {
    console.error('Error fetching places:', error);
    throw new Error('Failed to fetch nearby places. Please try again.');
  }
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
