(function() {
  'use strict';
  describe('Controller: PortalCtrl', function() {
    var PortalCtrl, scope;
    beforeEach(module('webNodeApp'));
    PortalCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      return PortalCtrl = $controller('PortalCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
