// Country to region mapping based on continents
const countryToRegion = {
    // Africa
    'Egypt': 'Africa',
    'South Africa': 'Africa',
    'Morocco': 'Africa',
    'Kenya': 'Africa',
    'Tanzania': 'Africa',
    'Nigeria': 'Africa',
    'Ghana': 'Africa',
    'Ethiopia': 'Africa',
    'Algeria': 'Africa',
    'Tunisia': 'Africa',
    "Republic of Dagestan": "Africa",

    // Americas
    'United States': 'Americas',
    'Canada': 'Americas',
    'Mexico': 'Americas',
    'Brazil': 'Americas',
    'Argentina': 'Americas',
    'Peru': 'Americas',
    'Colombia': 'Americas',
    'Chile': 'Americas',
    'Cuba': 'Americas',
    'Costa Rica': 'Americas',

    // Asia
    'Japan': 'Asia',
    'China': 'Asia',
    'India': 'Asia',
    'Thailand': 'Asia',
    'Vietnam': 'Asia',
    'South Korea': 'Asia',
    'Indonesia': 'Asia',
    'Malaysia': 'Asia',
    'Singapore': 'Asia',
    'Turkey': 'Asia',

    // Europe
    'France': 'Europe',
    'Italy': 'Europe',
    'Spain': 'Europe',
    'Germany': 'Europe',
    'United Kingdom': 'Europe',
    'Greece': 'Europe',
    'Portugal': 'Europe',
    'Netherlands': 'Europe',
    'Switzerland': 'Europe',
    'Sweden': 'Europe',

    // Oceania
    'Australia': 'Oceania',
    'New Zealand': 'Oceania',
    'Fiji': 'Oceania',
    'Samoa': 'Oceania',
    'Vanuatu': 'Oceania',
    'Papua New Guinea': 'Oceania',
    'Solomon Islands': 'Oceania',
    'Tonga': 'Oceania',
    'Palau': 'Oceania',
    'Marshall Islands': 'Oceania',
};

export const countryCoordinates = {
    'Egypt': [26.8206, 30.8025],
    'South Africa': [-30.5595, 22.9375],
    'Morocco': [31.7917, -7.0926],
    'Kenya': [-0.0236, 37.9062],
    'Tanzania': [-6.369, 34.8888],
    'Nigeria': [9.0820, 8.6753],
    'Ghana': [7.9465, -1.0232],
    'Ethiopia': [9.1450, 40.4897],
    'Algeria': [28.0339, 1.6596],
    'Tunisia': [33.8869, 9.5375],
    'United States': [37.0902, -95.7129],
    'Canada': [56.1304, -106.3468],
    'Mexico': [23.6345, -102.5528],
    'Brazil': [-14.2350, -51.9253],
    'Argentina': [-38.4161, -63.6167],
    'Peru': [-9.1900, -75.0152],
    'Colombia': [4.5709, -74.2973],
    'Chile': [-35.6751, -71.5430],
    'Cuba': [21.5218, -77.7812],
    'Costa Rica': [9.7489, -83.7534],
    'Japan': [36.2048, 138.2529],
    'China': [35.8617, 104.1954],
    'India': [20.5937, 78.9629],
    'Thailand': [15.8700, 100.9925],
    'Vietnam': [14.0583, 108.2772],
    'South Korea': [35.9078, 127.7669],
    'Indonesia': [-0.7893, 113.9213],
    'Malaysia': [4.2105, 101.9758],
    'Singapore': [1.3521, 103.8198],
    'Turkey': [38.9637, 35.2433],
    'France': [46.2276, 2.2137],
    'Italy': [41.8719, 12.5674],
    'Spain': [40.4637, -3.7492],
    'Germany': [51.1657, 10.4515],
    'United Kingdom': [55.3781, -3.4360],
    'Greece': [39.0742, 21.8243],
    'Portugal': [39.3999, -8.2245],
    'Netherlands': [52.1326, 5.2913],
    'Switzerland': [46.8182, 8.2275],
    'Sweden': [60.1282, 18.6435],
    'Australia': [-25.2744, 133.7751],
    'New Zealand': [-40.9006, 174.8860],
    'Fiji': [-17.7134, 178.0650],
    'Samoa': [-13.7590, -172.1046],
    'Vanuatu': [-15.3767, 166.9592],
    'Papua New Guinea': [-6.3149, 143.9555],
    'Solomon Islands': [-9.6457, 160.1562],
    'Tonga': [-21.1789, -175.1982],
    'Palau': [7.5150, 134.5825],
    'Marshall Islands': [7.1315, 171.1845],
    "Republic of Dagestan": [42.1432, 47.0950]
};

// Get country flag emoji
function getCountryFlag(countryCode) {
    const countryCodes = {
        'Egypt': 'EG',
        'South Africa': 'ZA',
        'Morocco': 'MA',
        'Kenya': 'KE',
        'Tanzania': 'TZ',
        'Nigeria': 'NG',
        'Ghana': 'GH',
        'Ethiopia': 'ET',
        'Algeria': 'DZ',
        'Tunisia': 'TN',
        'United States': 'US',
        'Canada': 'CA',
        'Mexico': 'MX',
        'Brazil': 'BR',
        'Argentina': 'AR',
        'Peru': 'PE',
        'Colombia': 'CO',
        'Chile': 'CL',
        'Cuba': 'CU',
        'Costa Rica': 'CR',
        'Japan': 'JP',
        'China': 'CN',
        'India': 'IN',
        'Thailand': 'TH',
        'Vietnam': 'VN',
        'South Korea': 'KR',
        'Indonesia': 'ID',
        'Malaysia': 'MY',
        'Singapore': 'SG',
        'Turkey': 'TR',
        'France': 'FR',
        'Italy': 'IT',
        'Spain': 'ES',
        'Germany': 'DE',
        'United Kingdom': 'GB',
        'Greece': 'GR',
        'Portugal': 'PT',
        'Netherlands': 'NL',
        'Switzerland': 'CH',
        'Sweden': 'SE',
        'Australia': 'AU',
        'New Zealand': 'NZ',
        'Fiji': 'FJ',
        'Samoa': 'WS',
        'Vanuatu': 'VU',
        'Papua New Guinea': 'PG',
        'Solomon Islands': 'SB',
        'Tonga': 'TO',
        'Palau': 'PW',
        'Marshall Islands': 'MH',
    };

    const code = countryCodes[countryCode] || 'UN'; // UN as fallback

    // Generate flag emoji from country code
    return code
        .split('')
        .map(char => String.fromCodePoint(char.charCodeAt(0) + 127397))
        .join('');
}

// Generate region summaries from destinations
function generateRegionSummaries(destinations) {
    const regions = {
        'Africa': 0,
        'Americas': 0,
        'Asia': 0,
        'Europe': 0,
        'Oceania': 0,
    };

    destinations.forEach(destination => {
        const region = countryToRegion[destination.country] || 'Uncategorized';
        regions[region] = (regions[region] || 0) + 1;
    });

    return Object.entries(regions)
        .filter(([_, count]) => count > 0)
        .map(([region, count]) => ({ region, count }));
}





// Generate unique ID
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}


const sampleDestinations = [
    {
        id: 'dest1',
        country: 'Japan',
        place: 'Kyoto',
        reason: 'Experience traditional Japanese culture and visit ancient temples',
        priority: 'high',
        createdAt: Date.now() - 1000000,
        coordinates: countryCoordinates['Japan'],
    },
    {
        id: 'dest2',
        country: 'Italy',
        place: 'Venice',
        reason: 'See the famous canals and experience Italian cuisine',
        priority: 'medium',
        createdAt: Date.now() - 2000000,
        coordinates: countryCoordinates['Italy'],
    },
    {
        id: 'dest3',
        country: 'New Zealand',
        place: 'Queenstown',
        reason: 'Adventure activities and beautiful landscapes',
        priority: 'high',
        createdAt: Date.now() - 3000000,
        coordinates: countryCoordinates['New Zealand'],
    },
];


const availableCountries = Object.keys(countryToRegion).sort();



export default availableCountries;

