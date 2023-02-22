/*
    Assignment #4
    {Abu Enayet Siddique}
*/
var content = document.getElementById('content');
$(function () {
    var locationHere = document.getElementById("locationhere");
	// created new div element to show current location
	var newDiv = document.createElement('div');
	var newlocation = content.appendChild(newDiv);

// check the browser if competible with geolocation
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
      locationHere.innerHTML = "This browser doesn't support Geolocation.";
    }
  }

//get the location
  function displayPosition(position) {
    locationHere.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;

    checkLocation(position);
  }

  function checkLocation(position) {
    var lat = localStorage.getItem("latitude");
    var long = localStorage.getItem("longitude");
	
    // created new h2 element to show welcome back message
    var h2 = document.createElement('h2');
    var welcome = content.appendChild(h2);
	
    // created new div element to show new distance if travelled
    var DistanceDiv = document.createElement('div');
    var distance =content.appendChild(DistanceDiv);

		if (lat) {
		  var distanceTraveled = calcDistanceBetweenPoints( lat, long,
			position.coords.latitude,
			position.coords.longitude
		  );
		  newlocation.innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;
		  welcome.innerHTML = "Welcome back to your location map";
		  distance.innerHTML = "Since last time you travelled " + distanceTraveled;
		} else {
		  welcome.innerHTML = "Welcome to your location map";
		  localStorage.setItem("latitude", position.coords.latitude);
		  localStorage.setItem("longitude", position.coords.longitude);
		}
  }
getLocation();


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


