'use strict'

describe 'Controller: PortalCtrl', ->

  # load the controller's module
  beforeEach module 'webNodeApp'

  PortalCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    PortalCtrl = $controller 'PortalCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
