      var map;
      //43.640355, -79.386816
            // 43.6468724,-79.4008253 = 1
      // 43.763454,-79.363286 = 1
      // 43.6523121,-79.3746394 = 1
      // 43.6550557,-79.3715427 = 2
      // 43.6554013,-79.3764192 = 2
      //  43.659956,-79.3764592 = 15
      var locations = [

        {lat:  43.6468724, lng: -79.4008253},
        {lat:  43.763454, lng: -79.363286},
        {lat:  43.6523121, lng: -79.3746394},

        {lat:  43.6550557, lng: -79.3715427},
        {lat:  43.6550557, lng: -79.3715427},

        {lat:  43.6554013, lng: -79.3764192},

        {lat: -43.6916737, lng: -79.2639858},
        {lat: -43.6916737, lng: -79.2639858},

        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},
        {lat: 43.659956, lng: -79.3764592},

        {lat: 43.6719373, lng: -79.3762482},
        {lat: 43.6719373, lng: -79.3762482},

        {lat: 43.65882, lng: -79.4061961},
        {lat: 43.65882, lng: -79.4061961},

        {lat: 43.6518818, lng: -79.4058885},
        {lat: 43.6518818, lng: -79.4058885},
        {lat: 43.6518818, lng: -79.4058885},
      ]

              // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.


      // 43.638963, -79.388820
      // 43.641870, -79.414814
      // 43.641962, -79.412131
      // 43.641622, -79.437841
      function initMap() {
        var myLatLng = {lat: 43.641622, lng: -79.437841};
        map = new google.maps.Map(document.getElementById('map'), {
           zoom: 12,
           center: myLatLng,
           
           styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            },
            {
                "weight": "0.38"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#707070"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#be2026"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff000a"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-52"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
        });

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      



      }