'use strict';

angular.module('webNodeApp')
  .controller('UserCtrl', function ($scope, $http) {
    $http.get('http://localhost:9000/api/users').success(function(data/*, status, headers, config*/) {
			$scope.users = data;
		}).error(function(data/*, status, headers, config*/) {
			console.log('impossible to get users...'+data);
		});
  });
