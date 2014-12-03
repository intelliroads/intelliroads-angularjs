'use strict';

/**
 * @ngdoc function
 * @name intelliroadsApp.controller:HighwaysCtrl
 * @description
 * # HighwaysCtrl
 * Controller of the intelliroadsApp
 */
angular.module('intelliroadsApp')
  .controller('HighwaysCtrl', ['$scope', 'Highways', function ($scope, Highways) {
    Highways.getList()
      .then(function (highways) {
        $scope.highways = highways;
      });
  }]);
