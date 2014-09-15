describe('appController', function(){
    var scope, $httpBackend;//we'll use these in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('DSW'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        //$httpBackend.when('GET', 'Users/users.json').respond([{id: 1, name: 'Bob'}, {id:2, name: 'Jane'}]);
		$httpBackend.when('GET', 'app/Nalert.php').respond([{id: '489', user_id: '1234',latitude:1234, longtitude:4321,date:'2014-08-29',error_code:3, error_read:'f' }]);
		//$httpBackend.when('GET', 'app/Nalert.php').respond([{id: '489', user_id: '1234',latitude:1234, longtitude:4321,date:'2014-08-29',error_code:3, error_read:'f' }]);
		
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('appController', {$scope: scope});
    }));

    it('should fetch the numberOfAlerts', function(){
	if(!scope.$$phase) {
    scope.$apply();
}
        $httpBackend.flush();
        expect(scope.numberOfAlerts).toBe(2);
		//expectGet(scope.alerts.length).toBe(2);
        expect(scope.users[0].name).toBe('Bob');
    });
});