
var app = angular.module('DSW', []);
app.controller('profileController', function profileController ($scope, $http) {

		
	  
	  $scope.deletePatient = function() {
      var deletedata = $.param({
        patientid: $scope.patientid,
      });

      $http({
        method: 'POST',
        url: 'delete.php',
        data: deletedata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        console.log(data);
        if (data == "S") {
          alert("success");        
        } else {
          alert("fail");
        }
      });
	}

	
	 $scope.updatePatient = function() {
      var updatedata = $.param({
	    patientid: $scope.patientid,
        patientnup: $scope.pn,
		deviceidup: $scope.di,
		contactpup: $scope.cp,
		contactnup: $scope.cn,
		dateoup: $scope.dob,
		genup: $scope.gen,
        mediup: $scope.me
      });

      $http({
        method: 'POST',
        url: 'edit.php',
        data: updatedata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        console.log(data);
        if (data == "S") {
          alert("success");        
        } else {
          alert("fail");
        }
      });
	}
	
	
	
});

