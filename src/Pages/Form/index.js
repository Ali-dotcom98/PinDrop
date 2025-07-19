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
    'Egypt': { coordinates: [26.8206, 30.8025], flag: 'https://flagcdn.com/eg.svg' },
    'South Africa': { coordinates: [-30.5595, 22.9375], flag: 'https://flagcdn.com/za.svg' },
    'Morocco': { coordinates: [31.7917, -7.0926], flag: 'https://flagcdn.com/ma.svg' },
    'Kenya': { coordinates: [-0.0236, 37.9062], flag: 'https://flagcdn.com/ke.svg' },
    'Tanzania': { coordinates: [-6.369, 34.8888], flag: 'https://flagcdn.com/tz.svg' },
    'Nigeria': { coordinates: [9.0820, 8.6753], flag: 'https://flagcdn.com/ng.svg' },
    'Ghana': { coordinates: [7.9465, -1.0232], flag: 'https://flagcdn.com/gh.svg' },
    'Ethiopia': { coordinates: [9.1450, 40.4897], flag: 'https://flagcdn.com/et.svg' },
    'Algeria': { coordinates: [28.0339, 1.6596], flag: 'https://flagcdn.com/dz.svg' },
    'Tunisia': { coordinates: [33.8869, 9.5375], flag: 'https://flagcdn.com/tn.svg' },
    'United States': { coordinates: [37.0902, -95.7129], flag: 'https://flagcdn.com/us.svg' },
    'Canada': { coordinates: [56.1304, -106.3468], flag: 'https://flagcdn.com/ca.svg' },
    'Mexico': { coordinates: [23.6345, -102.5528], flag: 'https://flagcdn.com/mx.svg' },
    'Brazil': { coordinates: [-14.2350, -51.9253], flag: 'https://flagcdn.com/br.svg' },
    'Argentina': { coordinates: [-38.4161, -63.6167], flag: 'https://flagcdn.com/ar.svg' },
    'Peru': { coordinates: [-9.1900, -75.0152], flag: 'https://flagcdn.com/pe.svg' },
    'Colombia': { coordinates: [4.5709, -74.2973], flag: 'https://flagcdn.com/co.svg' },
    'Chile': { coordinates: [-35.6751, -71.5430], flag: 'https://flagcdn.com/cl.svg' },
    'Cuba': { coordinates: [21.5218, -77.7812], flag: 'https://flagcdn.com/cu.svg' },
    'Costa Rica': { coordinates: [9.7489, -83.7534], flag: 'https://flagcdn.com/cr.svg' },
    'Japan': { coordinates: [36.2048, 138.2529], flag: 'https://flagcdn.com/jp.svg' },
    'China': { coordinates: [35.8617, 104.1954], flag: 'https://flagcdn.com/cn.svg' },
    'India': { coordinates: [20.5937, 78.9629], flag: 'https://flagcdn.com/in.svg' },
    'Thailand': { coordinates: [15.8700, 100.9925], flag: 'https://flagcdn.com/th.svg' },
    'Vietnam': { coordinates: [14.0583, 108.2772], flag: 'https://flagcdn.com/vn.svg' },
    'South Korea': { coordinates: [35.9078, 127.7669], flag: 'https://flagcdn.com/kr.svg' },
    'Indonesia': { coordinates: [-0.7893, 113.9213], flag: 'https://flagcdn.com/id.svg' },
    'Malaysia': { coordinates: [4.2105, 101.9758], flag: 'https://flagcdn.com/my.svg' },
    'Singapore': { coordinates: [1.3521, 103.8198], flag: 'https://flagcdn.com/sg.svg' },
    'Turkey': { coordinates: [38.9637, 35.2433], flag: 'https://flagcdn.com/tr.svg' },
    'France': { coordinates: [46.2276, 2.2137], flag: 'https://flagcdn.com/fr.svg' },
    'Italy': { coordinates: [41.8719, 12.5674], flag: 'https://flagcdn.com/it.svg' },
    'Spain': { coordinates: [40.4637, -3.7492], flag: 'https://flagcdn.com/es.svg' },
    'Germany': { coordinates: [51.1657, 10.4515], flag: 'https://flagcdn.com/de.svg' },
    'United Kingdom': { coordinates: [55.3781, -3.4360], flag: 'https://flagcdn.com/gb.svg' },
    'Greece': { coordinates: [39.0742, 21.8243], flag: 'https://flagcdn.com/gr.svg' },
    'Portugal': { coordinates: [39.3999, -8.2245], flag: 'https://flagcdn.com/pt.svg' },
    'Netherlands': { coordinates: [52.1326, 5.2913], flag: 'https://flagcdn.com/nl.svg' },
    'Switzerland': { coordinates: [46.8182, 8.2275], flag: 'https://flagcdn.com/ch.svg' },
    'Sweden': { coordinates: [60.1282, 18.6435], flag: 'https://flagcdn.com/se.svg' },
    'Australia': { coordinates: [-25.2744, 133.7751], flag: 'https://flagcdn.com/au.svg' },
    'New Zealand': { coordinates: [-40.9006, 174.8860], flag: 'https://flagcdn.com/nz.svg' },
    'Fiji': { coordinates: [-17.7134, 178.0650], flag: 'https://flagcdn.com/fj.svg' },
    'Samoa': { coordinates: [-13.7590, -172.1046], flag: 'https://flagcdn.com/ws.svg' },
    'Vanuatu': { coordinates: [-15.3767, 166.9592], flag: 'https://flagcdn.com/vu.svg' },
    'Papua New Guinea': { coordinates: [-6.3149, 143.9555], flag: 'https://flagcdn.com/pg.svg' },
    'Solomon Islands': { coordinates: [-9.6457, 160.1562], flag: 'https://flagcdn.com/sb.svg' },
    'Tonga': { coordinates: [-21.1789, -175.1982], flag: 'https://flagcdn.com/to.svg' },
    'Palau': { coordinates: [7.5150, 134.5825], flag: 'https://flagcdn.com/pw.svg' },
    'Marshall Islands': { coordinates: [7.1315, 171.1845], flag: 'https://flagcdn.com/mh.svg' },
    'Republic of Dagestan': { coordinates: [42.1432, 47.0950], flag: '' } // not a country, no flag
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
export const availableCountriesFlag = Object.entries(countryCoordinates).map(
    ([country, data]) => ({
        country,
        flag: data.flag,
    })
);




export default availableCountries;

