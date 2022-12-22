function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });


    //we want to create some markers to see where the user had been - before that we need to create some labels

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: 40.785091,
            lng: -73.968285
        },
        {
            lat: 41.084045,
            lng: -73.874245
        },
        {
            lat: 40.754932,
            lng: -73.984016
        }
    ];
    //we want to iterate through the above array and create a new marker that has the label from our string
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    //creates a marker image for our marker...
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'http://developers.google.com/maps/documentation/javascript/example/markerclusterer/m'
    });
}


initMap();