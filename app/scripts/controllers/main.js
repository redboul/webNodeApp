'use strict';

angular.module('webNodeApp')
  .controller('MainCtrl', [ '$scope', '$http', '$location', '$rootScope',
		function ($scope, $http, $location, $rootScope) {
			if(!$rootScope.authenticated()){
				$location.url('/login');
			}else{
        $scope.tasks = [
          { 'id': 0, 'name': 'Andy Hiring', 'process':{id:1, name:'Have Fun'}, 'dueDate': '11/07/2014', priority:'high'},
          { 'id': 1, 'name': 'Make Cake', 'process':{id:1, name:'Have Fun'}, 'dueDate': '01/07/2014', priority:'low'},
          { 'id': 2, 'name': 'play ukulele', 'process':{id:1, name:'Have Fun'}, 'dueDate': '12/08/2014', priority:'medium'},
          { 'id': 3, 'name': 'Watch movie', 'process':{id:1, name:'Have Fun'}, 'dueDate': '10/07/2014', priority:'very high'}
        ];
        $scope.processes = [
          {
            'id': 1000,
            'name': 'Leave Process',
            'process':{id:1, name:'Process Test'},
            'dueDate': '11/07/2014',
             priority:'high',
             description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
              'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
              'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
              'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'+
              'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'+
              'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ];
        $scope.currentTask = {};
        $scope.currentTask.id = $scope.tasks[0].id;
        $scope.selectTask = function(taskId){
          $scope.currentTask.id = taskId;
        };
        $scope.visible = true;
        $scope.show = function(){
          $scope.visible = true;
        };
        $scope.hide = function(){
          $scope.visible = false;
        };
        $scope.isVisible = function(){
          return $scope.visible;
        };
        $scope.thirdPaneHidden = false;
        $scope.toggleDetailPane = function(){
          $scope.thirdPaneHidden = !$scope.thirdPaneHidden;
        }
			}
		}
]).controller('TasksDetailsController', ['$scope', function($scope){
  $scope.task = {
    name: 'Manager Validation',
    dueDate : '10/07/2014',
    priority : 'high',
    actors : ['Mandy', 'Andy','Sandy', 'Candy'],
    'process' : {
      name : 'Recrutment Process',
      milestones : [
        {id : 1, type : 'success', 'value':33, title: 'Information'},
        {id : 2, type : 'success', 'value':33, title: 'HR Validation'},
        {id : 3, type : 'danger', 'value':33, title: 'Manager Validation'}
      ],
      startedBy : 'Andy Tellyes',
      startDate: '08/07/2014',
      manager : {
        firstname : 'Mandy',
        lastname : 'Sayno'
      },
      dueDate : '10/07/2014'
    },
    isCollapsed : false

  };
  $scope.case = {isCollapsed : false};
  $scope.previousTask = {isCollapsed : false};

}]).controller('TaskListController', ['$scope', function($scope){
  $scope.filters = false;
  $scope.isFilterEnable= function(){
    return $scope.filters;
  };
  $scope.isSearchEnable= function(){
    return !$scope.filters;
  };
  $scope.showFilters = function(){
    $scope.filters = true;
  };
  $scope.showSearch = function(){
    $scope.filters = false;
  };
}]).controller('LeftPanelController', ['$scope', function($scope){

}]);;
