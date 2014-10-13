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
        $httpBackend.when('GET', 'showpatient.php').respond('{"people":[{"id":"2","device_id":"1234","relative_username":"1234","patient_name":"jonny","contact_person":"bobb","contact_number":"123456783","date_of_birth":"Thu Feb 04 1988 00:00:00 GMT+1000 (\u4e1c\u90e8\u6fb3\u5927\u5229\u4e9a\u6807\u51c6\u65f6\u95f4)","gender":"f","medicine":"panad","medicine_time":"Thu Jan 01 1970 16:40:00 GMT+1000 (E. Austral"}]}');

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

    it('should login with the right username password combination', function() {

        $httpBackend.expectPOST('logincheck.php');

        var controller = createController();
        scope.user = "1234";
        scope.pass = "1234";

        scope.login();

        $httpBackend.flush();

        expect(scope.loggedIn).toBe(true);

    });


    // it('should not login with the wrong username password combination', function() {

    //     $httpBackend.expectPOST('logincheck.php');

    //     var controller = createController();
    //     scope.user = "1234";
    //     scope.pass = "0000";

    //     scope.login();

    //     $httpBackend.flush();

    //     expect(scope.loggedIn).toBe(false);

    // });

    it('should fetch the numberOfAlerts', function() {

        $httpBackend.expectGET('Nalert.php');

        var controller = createController();

        // expect(scope.numberOfAlerts).toBe(0);

        scope.getAlerts();

        $httpBackend.flush();

        expect(scope.numberOfAlerts).toBe(1);

    });
});