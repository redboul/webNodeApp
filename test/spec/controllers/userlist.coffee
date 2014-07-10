'use strict'

describe 'Controller: UserlistCtrl', ->

  # load the controller's module
  beforeEach module 'webNodeAppApp'

  UserlistCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    UserlistCtrl = $controller 'UserlistCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
