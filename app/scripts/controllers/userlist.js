(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name webNodeAppApp.controller:UserlistCtrl
    * @description
    * # UserlistCtrl
    * Controller of the webNodeAppApp
   */
  angular.module('webNodeAppApp').controller('UserlistCtrl', function($scope) {
    return $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  });

}).call(this);
