'use strict';

describe('appController', function() {

    var scope, $httpBackend, createController, authRequestHandler;

    beforeEach(angular.mock.module('DSW'));

    beforeEach(inject(function($injector) {

        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', 'Nalert.php')
            .respond({
                records: [{
                    id: '489',
                    user_id: '1234',
                    latitude: 1234,
                    longtitude: 4321,
                    date: '2014-08-29',
                    error_code: 3,
                    error_read: 'f'
                }]
            });

        $httpBackend.when('POST', 'logincheck.php').respond("1234");

        scope = $injector.get('$rootScope');

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('appController', {
                $scope: scope
            });
        };

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should login', function() {

        $httpBackend.expectPOST('logincheck.php');

        var controller = createController();
        scope.user = "1234";
        scope.pass = "1234";

        scope.login();

        $httpBackend.flush();

        expect(scope.loggedIn).toBe(true);

    });
/* 
    it('should fetch the numberOfAlerts', function() {

        $httpBackend.expectGET('Nalert.php');

        var controller = createController();

        // expect(scope.numberOfAlerts).toBe(0);

        scope.getAlerts();

        $httpBackend.flush();

        expect(scope.numberOfAlerts).toBe(1);

    }); */
});