'use strict';

var routingConfig;

(function(exports){

	var userRoles = {
			public: 1,
			user:   2,
			admin:  4
		};

	exports.userRoles = userRoles;
	exports.accessLevels = {
			public: userRoles.public || userRoles.user || userRoles.admin,
			anon:   userRoles.public,
			user: userRoles.user || userRoles.admin,
			admin:  userRoles.admin
		};

})(typeof exports === 'undefined'? routingConfig={}: exports);

angular.module('webNodeApp', [
	'ngCookies',
	'ngResource',
	'ui.router',
  'ui.bootstrap'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('','/dashboard/list');
    $urlRouterProvider.when('/','/dashboard/list');
    $urlRouterProvider.when('/dashboard','/dashboard/list');
    $stateProvider
      .state('home', {
        url: '/dashboard',
        views: {
          'main': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      }).state('home.list', {
        url: '/list',
        views : {
          'left-panel' : {
            templateUrl: 'views/left-panel.html',
            controller : 'LeftPanelController'
          },
          'list' : {
            templateUrl: 'views/tasks/list.html',
            controller : 'TaskListController'
          },
          'detail-tabs' : {
            templateUrl : 'views/tasks/details.html',
            controller : 'TasksDetailsController'
          }
        }
      }).state('login', {
        url: "/login",
        views : {
          'main' : {
            templateUrl:    'views/login.html',
            controller:     'LoginCtrl'
          }
        }
      });;
  }])
	// .config(function ($routeProvider) {
	// 	var access = routingConfig.accessLevels;
	// 	$routeProvider.when('/', {
	// 			templateUrl: 'views/main.html',
	// 			controller: 'MainCtrl'
	// 		}).when('/login',{
	// 			templateUrl:    'views/login.html',
	// 			controller:     'LoginCtrl',
	// 			access:         access.anon
	// 		}).when('/portal',{
	// 			templateUrl:    'views/portal/dashboard.html',
	// 			controller:     'PrivateCtrl',
	// 			access:         access.user
	// 		}).when('/admin',{
	// 			templateUrl:    'views/views/user.html',
	// 			controller:     'UserCtrl',
	// 			access:         access.admin
	// 		}).otherwise({
	// 			redirectTo: '/login'
	// 		});
	// })
  .run([ '$rootScope', '$cookies', function($rootScope, $cookies){
		$rootScope.authenticated = function(){
			return $cookies.user !== undefined;
		};
		if($rootScope.authenticated()){
			$rootScope.user = angular.fromJson($cookies.user);
		}
	}
	]);
