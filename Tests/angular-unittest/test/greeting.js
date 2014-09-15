describe('appController', function() {
  // Load the module with MainController
  beforeEach(module('DSW'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('appController', {
      $scope: scope
    });
  }));

  //it('should create $scope.greeting when calling sayHello', 
  //  function() {
  //    expect(scope.greeting).toBeUndefined();
  //    scope.sayHello();
  //    expect(scope.greeting).toEqual("Hello Ari");
  //});
  it('should login in with the right username and password', function(){
	scope.user = '1234566';
	scope.pass = '1234657'; 
	scope.login();
	//expect(scope.loggedin == true);
	expect(scope.loggedIn).toBe(true);
	
  });
})