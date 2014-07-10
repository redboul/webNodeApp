'use strict';

describe('Controller: UserCtrl', function () {

	// load the controller's module
	beforeEach(module('webNodeApp'));

	var UserCtrl,
		scope, http, httpBackend;

	beforeEach(inject(function (_$http_, _$httpBackend_) {
		http = _$http_;
		httpBackend = _$httpBackend_;
	}));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
	}));

	it('should call the api to retrieve user list', inject(function ($controller) {
		httpBackend
		.whenGET('http://localhost:9000/api/users').
		respond([{name: 'laurent'}, {name: 'ju'}]);
		
		UserCtrl = $controller('UserCtrl', {
			$scope: scope,
			$http: http
		});
		//simulate response
		httpBackend.flush();
		//verify results,
		expect(scope.users.length).toEqual(2);

	}));
});
