const map = L.map('mapDiv').setView([38.9072, -77.0369], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let locations = crimedata.features.filter(function(antenna) {
    // Check if geometry and coordinates exist
    return antenna.geometry && antenna.geometry.coordinates;
}).map(function(antenna) {
    let location = antenna.geometry.coordinates.slice(); // Use slice to clone the array and avoid mutating the original
    if(location.length >= 2) {
        location.reverse();
        location.push(1.5); // Example: Append an intensity value or some other parameter
        console.log(location);
        return location;
    } else {
        return null;
    }
}).filter(location => location !== null); // Filter out any null locations

let heat = L.heatLayer(locations, {radius: 40}).addTo(map);