

var app = angular.module('DSW', []);
app.controller('mapController', function mapController ($scope, $http) {


$scope.numberOfFence = 0;
$scope.expand = false;
$scope.fences = [];

var mapProp = {
center:new google.maps.LatLng(-27.482106, 153.042636),
zoom:12,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map=new google.maps.Map(document.getElementById("googleMap")
,mapProp);

	  $scope.showmap = function() {			
      var mapd = $.param({
        pid: $scope.patientiddd
      });

      $http({
        method: 'POST',
        url: 'showmap.php',
        data: mapd,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
          var fenceTemp = [];
          // console.log('before:' + data.records);
	
		  if (typeof cityCircle === 'undefined') {
		  } else {
		  

		  //for (var n = 0; n < $scope.nn; n++) {
		  //var delcir = $scope.circles[n];
		  //new google.maps.Circle(delcir).setMap(map);
		  //}
		  cityCircle.setMap(null);
		  }
		  
		  $scope.numberOfFence = data.fences.length;
          for (var i = 0; i < data.fences.length; i++) {
            var aa = '';
            var bb = '';
            var cc = '';
			var dd = '';
			var ee = '';

           
            aa = data.fences[i]['idgeofences'];
            bb = data.fences[i]['centerlat'];
            cc = data.fences[i]['centerlong'];
			dd = data.fences[i]['radius'];
			ee = data.fences[i]['patientid'];
			
			
		    var cir = [];
			cir[i] = {
			strokeColor: "#c3fc49",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#c3fc49",
			fillOpacity: 0.35,
			map: map,
			center: new google.maps.LatLng(bb, cc),
			radius: parseInt(dd)
			};
			cityCircle = new google.maps.Circle(cir[i])
			
			
            fenceTemp[i] = {idgeo: aa, cenlat: bb, cenlong: cc, radi: dd, patid: ee}
			};
			$scope.circles = cir;
			$scope.nn = cir.length;
			$scope.fences = fenceTemp;
			
			
			
			

			
			
			
      });
	 }
	  
	  	  google.maps.event.addDomListener(window, 'load', initialize);		
			function initialize()
			{
			mapProp;
			map;
			}
			

	
});

