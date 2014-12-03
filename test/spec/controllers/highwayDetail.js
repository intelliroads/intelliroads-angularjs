'use strict';

describe('Controller: HighwaydetailCtrl', function () {

  // load the controller's module
  beforeEach(module('intelliroadsApp'));

  var HighwaydetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HighwaydetailCtrl = $controller('HighwaydetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
