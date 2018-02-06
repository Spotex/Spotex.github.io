function initMap()
  {
    var element = document.getElementById('map');
    var popupContent1 = '<p style="color: #fff" class="content">Что угодно 1</p>';
    var popupContent2 = '<p style="color: #fff" class="content">Что угодно 2</p>';
    var popupContent3 = '<p style="color: #fff" class="content">Что угодно 3</p>';
    var style = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "weight": 2
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
          {
            "weight": 2
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#393939"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "weight": 2.5
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#393939"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2e2e2e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2e2e2e"
          },
          {
            "weight": 8
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2e2e2e"
          },
          {
            "weight": 8
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2e2e2e"
          },
          {
            "weight": 5
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2e2e2e"
          },
          {
            "weight": 2
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#3e3e3e"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#3e3e3e"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2b2b2b"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ];
    var options = {
      zoom: 14,
      styles: style,
      center: {lat: 49.555887, lng: 25.580942},
    };

    var myMap = new google.maps.Map(element, options);
    var infowindow1 = new google.maps.InfoWindow({
            content: popupContent1
        });
    var infowindow2 = new google.maps.InfoWindow({
            content: popupContent2
        });
    var infowindow3 = new google.maps.InfoWindow({
            content: popupContent3
        });


    var marker1 = new google.maps.Marker({
      position: {lat: 49.556385, lng: 25.595522}, 
      map: myMap,
      icon: "img/mark.png",
      animation: google.maps.Animation.DROP
    });
    marker1.addListener('click', function() {
      infowindow1.open(myMap, marker1);
    });


    var marker2 = new google.maps.Marker({
      position: {lat: 49.550401, lng: 25.610581}, 
      map: myMap,
      icon: "img/mark.png",
      animation: google.maps.Animation.DROP
    });
    marker2.addListener('click', function() {
      infowindow2.open(myMap, marker2);
    });


    var marker3 = new google.maps.Marker({
      position: {lat: 49.549633, lng: 25.566006}, 
      map: myMap,
      icon: "img/mark.png",
      animation: google.maps.Animation.DROP
    });
    marker3.addListener('click', function() {
      infowindow3.open(myMap, marker3);
    });
  }  