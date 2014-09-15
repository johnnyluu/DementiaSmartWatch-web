
var app = angular.module('DSW', []);
app.controller('profileController', function profileController ($scope, $http) {


$scope.numberOfPatient = 0;
$scope.expand = false;
$scope.patients = []; 

      $http.get('showpatient.php')
        .success(function(data) {
          var patientTemp = [];
          // console.log('before:' + data.records);

		  
		  $scope.numberOfPatient = data.people.length;
          for (var i = 0; i < data.people.length; i++) {
            var a = '';
            var b = '';
            var c = '';
			var d = '';
			var e = '';
			var f = '';
			var g = '';
			var h = '';
           
            a = data.people[i]['device_id'];
            b = data.people[i]['relative_username'];
            c = data.people[i]['patient_name'];
			d = data.people[i]['contact_person'];
			e = data.people[i]['contact_number'];
			f = data.people[i]['date_of_birth'];
			g = data.people[i]['gender'];
			h = data.people[i]['medicine'];
			
            patientTemp[i] = {deviceid: a, relativeusername: b, patientname: c, contactperson: d, contactnumber: e, dateofbirth: f, gender: g, medicine: h}
          };
		  
          $scope.patients = patientTemp;
		
          // change error-read to true after clicking on errors

          // console.log('after:' + $scope.alerts);
        });
		

		
	  
	  $scope.addPost = function() {
      var da = $.param({
        patientnadd: $scope.pn,
		deviceiadd: $scope.di,
		contactpadd: $scope.cp,
		contactnadd: $scope.cn,
		dateoadd: $scope.dob,
		genadd: $scope.gen,
        mediadd: $scope.me
      });

      $http({
        method: 'POST',
        url: 'addp.php',
        data: da,
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

