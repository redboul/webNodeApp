'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('webNodeApp'));

  var LoginCtrl, scope, rootScope, cookies, http, httpBackend;

  beforeEach(inject(function (_$http_, _$httpBackend_) {
    http = _$http_;
    httpBackend = _$httpBackend_;
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $cookies, $controller) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    cookies = $cookies;
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $http: http,
      $cookies : cookies,
      $rootScope : rootScope
    });
  }));

  it('ask a login', inject(function () {
    expect(rootScope.authenticated()).toBe(false);
  }));
  it('should log the user in', function () {
    var access = {name:'ju', password: 'poutpoutpapillon'};
    var postData = {'user': access};
    httpBackend
      .whenPOST('http://192.168.0.226:9000/api/login', postData)
      .respond({});
    scope.authenticate(access);
    //simulate response
    httpBackend.flush();

    expect(rootScope.authenticated()).toBe(true);
  });
});
