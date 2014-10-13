'use strict';
/*global google:false */
/*global $:false */
var map;
// var cordx = 0.00;
// var cordy = 0.00;
var setFence = false;


function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		$('#map-canvas').innerHTML = 'Geolocation is not supported by your browser';
	}
}

function showPosition(position) {
	// cordx = position.coords.latitude;
	// cordy = position.coords.longitude;
	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	map.setCenter(pos);
}

//create a reset/clear function

function initialize() {
	// console.log('initialize running');
	getLocation();

	var mapOptions = {
		center: new google.maps.LatLng(47.60894, -122.34014100000002),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		disableDefaultUI: true
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	google.maps.event.addListener(map, 'click', newFence);

	// var marker = new google.maps.Marker({
	// 	map: map,
	// 	position: new google.maps.LatLng(47.60894, -122.34014100000002)
	// });
	// showMarkers();
	
	//*****************************************************************************************
	//if (selectedpatient) or already login****(need Jquery for $http)*************************************************
	
	//numberOfFence = 0;
	//expand = false;
	//fences = [];		
      //var mapd = $.param({
        //pid: patientid
      //});

      //$http({
        //method: 'POST',
        //url: 'getfence.php',
        //data: mapd,
        //headers: {
          //'Content-Type': 'application/x-www-form-urlencoded'
        //}
      //}).success(function(data) {
          var fenceTemp = [];
          // console.log('before:' + data.records);
	
		  //if (typeof cityCircle === 'undefined') {
		  //} else {
		  

		  //for (var n = 0; n < $scope.nn; n++) {
		  //var delcir = $scope.circles[n];
		  //new google.maps.Circle(delcir).setMap(map);
		  //}
		  //cityCircle.setMap(null);
		  //}
		  
		  //numberOfFence = data.fences.length;
          //for (var i = 0; i < data.fences.length; i++) {
            //var aa = '';
            //var bb = '';
            //var cc = '';
			//var dd = '';
			//var ee = '';

           
            //aa = data.fences[i]['idgeofences'];
            //bb = data.fences[i]['centerlat'];
            //cc = data.fences[i]['centerlong'];
			//dd = data.fences[i]['radius'];
			//ee = data.fences[i]['patientid'];
			
			
		    //var cir = [];
			//cir[i] = {
			//strokeColor: "#c3fc49",
			//strokeOpacity: 0.8,
			//strokeWeight: 2,
			//fillColor: "#c3fc49",
			//fillOpacity: 0.35,
			//map: map,
			//center: new google.maps.LatLng(bb, cc),
			//radius: parseInt(dd)
			//};
			//cityCircle = new google.maps.Circle(cir[i])
			
			
           // fenceTemp[i] = {idgeo: aa, cenlat: bb, cenlong: cc, radi: dd, patid: ee}
			
			//};
			//circles = cir;
			//$scope.nn = cir.length;
			//fences = fenceTemp;		
      //});
	 //*****************************************************************************************
}

var infoWindow = new google.maps.InfoWindow();
var marker;

function showMarkers() {
	// initialize();
	// Change this depending on the name of your PHP file
	$.get('location_fetch.php', function(data) {
		// console.log(data);

		var x = $(data);
		var m = $(x).find('marker');
		m.each(function(i) {

			// console.log(Number($(m[i]).attr("lat")), Number($(m[i]).attr("lng")));

			var name = $(m[i]).attr('name');
			var address = $(m[i]).attr('address');
			var type = $(m[i]).attr('type');
			var point = new google.maps.LatLng(
				Number($(m[i]).attr('lat')),
				Number($(m[i]).attr('lng')));
			console.log(point);
			var html = '<b>' + name + '</b> <br/>' + address;
			// var icon = customIcons[type] || {};
			marker = new google.maps.Marker({
				map: map,
				position: point,
				// icon: icon.icon,
				// shadow: icon.shadow
			});
			map.setCenter(point);

			// google.maps.event.addListener(marker, 'click', function() {
			// 	infoWindow.setContent(html);
			// 	infoWindow.open(map, marker);
			// });
		});

		// var xml = data.responseXML;
		// var markers = xml.getElementsByTagName("marker");
		// for (var i = 0; i < markers.length; i++) {
		// 	var name = markers[i].getAttribute("name");
		// 	var address = markers[i].getAttribute("address");
		// 	var type = markers[i].getAttribute("type");
		// 	var point = new google.maps.LatLng(
		// 		parseFloat(markers[i].getAttribute("lat")),
		// 		parseFloat(markers[i].getAttribute("lng")));
		// 	var html = "<b>" + name + "</b> <br/>" + address;
		// 	var icon = customIcons[type] || {};
		// 	var marker = new google.maps.Marker({
		// 		map: map,
		// 		position: point,
		// 		icon: icon.icon,
		// 		shadow: icon.shadow
		// 	});
		// 	bindInfoWindow(marker, map, infoWindow, html);
		// }
	});
}



// function bindInfoWindow(marker, map, infoWindow, html) {
// 	google.maps.event.addListener(marker, 'click', function() {
// 		infoWindow.setContent(html);
// 		infoWindow.open(map, marker);
// 	});
// }

// function downloadUrl(url, callback) {
// 	var request = window.ActiveXObject ?
// 		new ActiveXObject('Microsoft.XMLHTTP') :
// 		new XMLHttpRequest;

// 	request.onreadystatechange = function() {
// 		if (request.readyState == 4) {
// 			request.onreadystatechange = doNothing;
// 			callback(request, request.status);
// 		}
// 	};

// 	request.open('GET', url, true);
// 	request.send(null);
// }

// function doNothing() {};


function addFence() {
	setFence = true;
	$('#createHint').show();
	console.log('setFence On');
}

$('#CreateNew').click(addFence);

google.maps.event.addDomListener(window, 'load', initialize);

function newFence(a) {
	if (setFence === true) {
		console.log(a);
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
		$('#createHint').hide();
	}

}