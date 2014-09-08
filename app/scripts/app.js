'use strict';
/*global angular:false */
var app = angular.module('DSW', ['ngRoute']);
app.controller('appController', ['$scope', '$http',
  function($scope, $http) {

    //alert control
    $scope.numberOfAlerts = 0;
    $scope.expand = false;
    $scope.alerts = [];

    //login control
    $scope.loggedIn = false;
    $scope.user = '';
    $scope.pass = '';

    $scope.toggle = function() {

      console.log('toggled');

      $scope.expand = !$scope.expand;

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

    $scope.login = function() {

      var d = $.param({
        username: $scope.user,
        password: $scope.pass
      });

      $http({
        method: 'POST',
        url: 'logincheck.php',
        data: d,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        console.log(data);
        if (data == "S") {
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
    $scope.$watch('loggedIn', function(){
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

app.directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/login.html'
  };
});