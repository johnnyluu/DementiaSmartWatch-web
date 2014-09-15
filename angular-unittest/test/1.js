// describe('appController', function() {
  
//   beforeEach(module('DSW'));

//   var ctrl, scope;
  
//   beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {

//     $httpBackend = _$httpBackend_;

//     scope = $rootScope.$new();

//     // $httpBackend.when('POST', 'logincheck.php').respond("1234");

//     // $httpBackend.when('GET', 'Nalert.php').respond({
//     //   records: [{
//     //     id: '489',
//     //     user_id: '1234',
//     //     latitude: 1234,
//     //     longtitude: 4321,
//     //     date: '2014-08-29',
//     //     error_code: 3,
//     //     error_read: 'f'
//     //   }]
//     // });


//     ctrl = $controller('appController', {
//       $scope: scope
//     });

//   }));

//   it('should login in with the right username and password', function() {

//     scope.user = '1234';
//     scope.pass = '1234';

//     scope.login();

//     expect(scope.loggedIn).toBe(true);

//   });


// })