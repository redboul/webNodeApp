'use strict';

describe('Service: Mainservice', function () {

  // load the service's module
  beforeEach(module('serverApp'));

  // instantiate service
  var Mainservice;
  beforeEach(inject(function (_Mainservice_) {
    Mainservice = _Mainservice_;
  }));

  it('should do something', function () {
    expect(!!Mainservice).toBe(true);
  });

});
