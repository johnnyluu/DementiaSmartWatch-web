
var app = angular.module('DSW', []);
app.controller('', function profileController ($scope, $http) {


$scope.numberOfFence = 0;
$scope.expand = false;
$scope.fences = [];

      $http.get('showfence.php')
        .success(function(data) {
          var fenceTemp = [];
          // console.log('before:' + data.records);

		  
		  $scope.numberOfFence = data.fences.length;
          for (var i = 0; i < data.fences.length; i++) {
            var aa = '';
            var bb = '';
            var cc = '';
			var dd = '';
			var ee = '';

           
            aa = data.people[i]['idgeofences'];
            bb = data.people[i]['centerlat'];
            cc = data.people[i]['centerlong'];
			dd = data.people[i]['radius'];
			ee = data.people[i]['patientid'];

			
            patientTemp[i] = {idgeo: aa, cenlat: bb, cenlong: cc, radi: dd, patid: ee}
			};
		  
			$scope.fences = fenceTemp;
		
        });
		

	
});

