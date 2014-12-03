'use strict';

describe('Service: Highways', function () {

  // load the service's module
  beforeEach(module('intelliroadsApp'));

  // instantiate service
  var Highways;
  beforeEach(inject(function (_Highways_) {
    Highways = _Highways_;
  }));

  it('should do something', function () {
    expect(!!Highways).toBe(true);
  });

});
