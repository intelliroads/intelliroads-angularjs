'use strict';

/**
 * @ngdoc function
 * @name intelliroadsApp.controller:HighwaysCtrl
 * @description
 * # HighwaysCtrl
 * Controller of the intelliroadsApp
 */
angular.module('intelliroadsApp')
  .controller('HighwaysCtrl', function ($scope) {
    $scope.highways = [
      { _id: "IB" }
    ];
  });
