'use strict';

angular.module('webNodeApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', '$http', '$cookies',
	function ($scope, $rootScope, $location, $http, $cookies) {
		if($rootScope.authenticated()){
			$location.url('/');
		}else{
			$scope.user = {};
			$rootScope.user = $scope.user;
			$scope.authenticate = function(user){
				if(user === undefined ){
					return;
				}
				$scope.errorMessage = undefined;
				var postData = {'user': user};
				$http.post('http://192.168.0.226:9000/api/login', postData)
					.success(function (data) {
					$cookies.user = angular.toJson(data);
					$rootScope.user = data;
					$location.url('/');
				}).error(function (data) {
					console.log(data);
					$scope.errorMessage = 'impossible to log user '+user.name;
				});
			};
		}
  }]);
