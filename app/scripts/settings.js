'use strict';
/*global google:false */
/*global $:false */
var map;
var cordx = 0.00;
var cordy = 0.00;
var setFence = false;

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	} else{
		$('#map-canvas').innerHTML = 'Geolocation is not supported by your browser';
	}
}

function showPosition(position){
	// cordx = position.coords.latitude;
	// cordy = position.coords.longitude;
	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	map.setCenter(pos);
}

function initialize() {
	console.log('running');
	getLocation();

	var mapOptions = {
	  center: new google.maps.LatLng(cordx, cordy),
	  zoom: 14
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	google.maps.event.addListener(map, 'click', newFence);
}

function addFence(){
	setFence = true;
	console.log('setFence On');
}

$('#CreateNew').click(addFence);
google.maps.event.addDomListener(window, 'load', initialize);

function newFence(a){
	if(setFence===true){console.log(a);
	var centerlat = a.latLng.k;
	var centerlong = a.latLng.B;
	$.post('save.php', {
		centerlat: centerlat,
		centerlong: centerlong
	}, function(data) {
		console.log(data);
	});
	console.log(centerlat, centerlong);
	setFence = false;
    
   
    var geofence = {
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      map: map,
      center: a.latLng,
      radius: 50
    };
    // Add the circle for this city to the map.
    var newGeoFence = new google.maps.Circle(geofence);
    newGeoFence.setMap(map);
}
	
}