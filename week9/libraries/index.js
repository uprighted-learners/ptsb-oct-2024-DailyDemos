// setup the map
const map = L.map("map");

// set the lat/long
// and zoom
map.setView([51.505, -0.09], 13);

// Setting the tile

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", 
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }
).addTo(map);
