mapboxgl.accessToken = 'pk.eyJ1IjoiMTk0ODk3bCIsImEiOiJjanl5OG5jN3ExNXFlM2dtaTdsZGs2NXd2In0.VQ6svExqo8UDPJi0ZTvhWQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/194897l/cjz6gf9dt1tjj1cnvdtyxf7pd', // stylesheet location
    center: [103.806413, 1.437925], // starting position [lng, lat]
    zoom: 16 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {

    map.loadImage("https://img.icons8.com/offices/16/000000/marker.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);

        map.addLayer({
            "id": "places",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties": {
                            "description": "<a href=\"https://goo.gl/maps/5bc5MviTP8fd6fYd8\" target=\"_blank\" title=\"Opens in a new window\">Target Location</a>",
                            "icon": "custom-marker"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.806413, 1.437925]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "{icon}",
                "icon-allow-overlap": true
            }
        })
    
    })

})

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = '';
});