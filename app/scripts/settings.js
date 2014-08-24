"use strict";
var map;

function initialize() {
	var mapOptions = {
	  center: new google.maps.LatLng(-34.397, 150.644),
	  zoom: 8
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	google.maps.event.addListener(map, 'click', newFence);
}
google.maps.event.addDomListener(window, 'load', initialize);

function newFence(a){
	console.log(a);
	var centerlat = a.latLng.B;
	var centerlong = a.latLng.k;
	$.post('http://localhost/save.php', {
		centerlat: centerlat,
		centerlong: centerlong
	}, function(data) {
		console.log(data);
	});
	console.log(centerlat, centerlong);
}