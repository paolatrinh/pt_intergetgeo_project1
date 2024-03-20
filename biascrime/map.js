var map = L.map('map').setView([38.9072,-77.0369 ], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

//Function to style the GeoJSON layer
function style(feature) {
    return {
        fillColor: '#00F0FF',
        weight: 2,
        opacity: 1,
        color: '00F0FF',
        fillOpacity: 0.5,
        radius: 1
    };
}

// URL to fetch recent earthquake data (past day) from USGS
//var earthquakesUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

L.geoJSON(crimedata, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, style(feature));
    }
   
}).addTo(map);