  let successHandler = function(position) {
    console.log(position.coords.latitude, position.coords.longitude);

    let currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let map = new google.maps.Map(document.getElementById('map'), {
      center: currentLocation,
      zoom: 10
    });

    let currentMarker = new google.maps.Marker({
      map: map,
      position: currentLocation,
      icon: 'marker.png',
      animation: google.maps.Animation.DROP
    });

    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      location: currentLocation
    }, function(geocoderResults) {
      console.log(geocoderResults);

      let infoWindow = new google.maps.InfoWindow({
        position: currentLocation,
        content: geocoderResults[0].formatted_address
      });

      // infoWindow.open(map);

      google.maps.event.addListener(currentMarker, 'click', function() {
        infoWindow.open(map);
      });

      // map.setCenter(position);
    });
  };



  let errorHandler = function(error) {};
  let options = {};
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
