'use strict';
/*global angular:false */
var app = angular.module('DSW', ['ngRoute']);
app.controller('appController', ['$scope', '$http',
  function($scope, $http) {

    //alert control
    $scope.numberOfAlerts = 0;
    $scope.alertsExpand = false;
    $scope.alerts = [];

    $scope.toggle = function() {

      $scope.alertsExpand = !$scope.alertsExpand;
      $scope.patientsExpand = false;

      $scope.getAlerts();
    };

    $scope.getAlerts = function() {

      $http.get("Nalert.php")
        .success(function(data) {
          var alertsTemp = [];
          // console.log('before:' + data.records);
          $scope.numberOfAlerts = data.records.length;
          for (var i = 0; i < data.records.length; i++) {
            var msg = '';
            var id = '';
            var date = '';
            if (data.records[i][5] === '1') {
              data.records[i][5] = 'Patient is out of boundaries';
            } else if (data.records[i][5] === '2') {
              data.records[i][5] = "patient's watch's battery low";
            } else if (data.records[i][5] === '3') {
              data.records[i][5] = "Patient pressed the panic button";
            } else if (data.records[i][5] === '4') {
              data.records[i][5] = "Patient turned the watch on";
            } else if (data.records[i][5] === '5') {
              data.records[i][5] = "Patient turned the watch off";
            };
            msg = data.records[i][5];
            id = data.records[i][0];
            date = data.records[i][4];
            alertsTemp[i] = [id, msg, date]
          };
          $scope.alerts = alertsTemp;

          // change error-read to true after clicking on errors

          // console.log('after:' + $scope.alerts);
        });

    };
    //login control
    $scope.loggedIn = false;
    $scope.user = '';
    $scope.pass = '';

    $scope.login = function() {

      var d = $.param({
        username: $scope.user,
        password: $scope.pass
      });
      console.log(d);

      $http({
        method: 'POST',
        url: 'logincheck.php',
        data: d,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        console.log(data);
        if (data == $scope.user) {
          $scope.loggedIn = true;
          showMarkers();
        } else {
          alert("Wrong details, try again.")
        }
      });

      // $scope.tab=2;

      // $scope.reloadMap = function(){
      //   console.log('blah');
      //   application.tab = 2;
      //   checkResize();
      // };

      $scope.getAlerts();
      $scope.showPatients();

    }

    //patient control
    $scope.patientCount = 0;
    $scope.alertsExpand = false;
    $scope.patients = [];
    $scope.selectedPatient = undefined;
    $scope.patientsExpand = false;
    $scope.addingPatient = false;
    $scope.editingPatient = false;

    $scope.pToggle = function() {

      $scope.patientsExpand = !$scope.patientsExpand;
      $scope.alertsExpand = false;

      $scope.showPatients();
    };

    $scope.showPatients = function() {
      $http.get('showpatient.php')
        .success(function(data) {
          var patientTemp = [];
          // console.log('before:' + data.records);


          $scope.patientCount = data.people.length;
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

            patientTemp[i] = {
              deviceid: a,
              relativeusername: b,
              patientname: c,
              contactperson: d,
              contactnumber: e,
              dateofbirth: f,
              gender: g,
              medicine: h
            }
          };

          $scope.patients = patientTemp;
          if (!$scope.selectedPatient) {
            $scope.initialisePatient();
          }
          // console.log("patients:" + $scope.patients);
          // console.log("first" + $scope.patients[0]);

          // change error-read to true after clicking on errors

          // console.log('after:' + $scope.alerts);
        });
    }


    $scope.initialisePatient = function() {
      $scope.selectedPatient = $scope.patients[0];
      // console.log("selected" + $scope.selectedPatient);
    }

    function updateMarker(patient) {
      var id = patient.deviceid;
      var da = $.param({
        patientid: id
      });
      console.log('da' + da);
      $http({
        method: 'POST',
        url: 'update_location.php',
        data: da,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        console.log(data.location);
        marker.setPosition(new google.maps.LatLng(data.location[0].lat, data.location[0].lng));
        map.panTo(new google.maps.LatLng(data.location[0].lat, data.location[0].lng));
      });

    }

    $scope.selectPatient = function(patient) {
      $scope.selectedPatient = patient;
      updateMarker($scope.selectedPatient);
    }

    $scope.selectPatientAndToggle = function(patient) {
      $scope.selectedPatient = patient;
      updateMarker($scope.selectedPatient);
      $scope.pToggle();
    }

    $scope.editPatient = function(patient) {
      $scope.pn = patient.patientname;
      $scope.di = patient.deviceid;
      $scope.cp = patient.contactperson;
      $scope.cn = patient.contactnumber;
      $scope.dob = new Date(patient.dateofbirth);
      $scope.gen = patient.gender;
      $scope.addingPatient = true;
      $scope.editingPatient= true;
    }

    $scope.addPatient = function() {
      $scope.pn = undefined;
      $scope.di = undefined;
      $scope.cp = undefined;
      $scope.cn = undefined;
      $scope.dob = undefined;
      $scope.gen = undefined;
      $scope.addingPatient = true;
      $scope.editingPatient = false;
    }

    $scope.addPost = function() {
      var da = $.param({
        patientnadd: $scope.pn,
        deviceiadd: $scope.di,
        contactpadd: $scope.cp,
        contactnadd: $scope.cn,
        dateoadd: $scope.dob,
        genadd: $scope.gen
        // mediadd: $scope.me
      });
      console.log($scope.dob);
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
          $scope.addingPatient = false;
        } else {
          alert("fail");
        }
      });
      $scope.showPatients();
    }
  }
]);

app.controller('settingsCtrl', ['$scope',
  function($scope) {

    initialize();

  }
]);

app.controller('homeCtrl', ['$scope',
  function($scope) {
    initialize();
    $scope.$watch('loggedIn', function() {
      if ($scope.loggedIn) showMarkers();
    });
  }
]);


app.config(function($routeProvider, $locationProvider) {

  $routeProvider.
  when("/", {
    templateUrl: 'views/tracking.html',
    controller: 'homeCtrl'
  }).
  when("/settings", {
    templateUrl: 'views/settings.html',
    controller: 'settingsCtrl'
  });

  // $locationProvider.html5Mode(true);


});


// app.directive('tracking', function(){
//   return {
//     restrict: 'E',
//     templateUrl: 'views/tracking.html'
//   };
// });
// app.directive('settings', function(){
//   return {
//     restrict: 'E',
//     templateUrl: 'views/settings.html'
//   };
// });

app.directive('alerts', function() {
  return {
    restrict: 'A',
    templateUrl: 'views/alerts.html'
  };
});

app.directive('patients', function() {
  return {
    restrict: 'A',
    templateUrl: 'views/patients.html'
  };
});

app.directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/login.html'
  };
});