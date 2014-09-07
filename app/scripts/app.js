'use strict';
/*global angular:false */
var app = angular.module('DSW', ['ngRoute']);
app.controller('appController', ['$scope','$http',
  function($scope, $http) {
    $scope.tracked = true;
    $scope.number = '3';
    $scope.notifications = ['1', '2', '3'];

    //alert control
    $scope.numberOfAlerts = 2;
    $scope.expand = false;
    $scope.alerts = [];

    $scope.toggle = function() {

      console.log('toggled');

      $scope.expand = !$scope.expand;

      $scope.getAlerts();
    };

    $scope.getAlerts = function() {

      $http.get("Nalert.php")
        .success(function(data) {

          console.log('before:' + data.records[0]);
          for (var i=0; i<data.records.length; i++){
            var msg = '';
            if (data.records[i][5]==='1'){
              data.records[i][5] = 'Patient is out of boundaries';
            }else{
              data.records[i][5] = 'Patient is dead';
            };
            msg = data.records[i][4] + ' ' + data.records[i][5];
            $scope.alerts[i] = msg;
          };

          // change error-read to true after clicking on errors
          
          console.log('after:' + $scope.alerts);
        });

    };

    // $scope.tab=2;

    // $scope.reloadMap = function(){
    //   console.log('blah');
    //   application.tab = 2;
    //   checkResize();
    // };

  }
]);

// app.controller('alertController', ['$scope', '$http',

// ]);

app.controller('settingsCtrl', ['$scope',
  function($scope) {

    initialize();

  }
]);

app.controller('homeCtrl', ['$scope',
  function($scope) {

    // some map stuff here

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