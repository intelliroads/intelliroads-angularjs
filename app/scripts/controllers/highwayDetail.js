'use strict';

/**
 * @ngdoc function
 * @name intelliroadsApp.controller:HighwaydetailCtrl
 * @description
 * # HighwaydetailCtrl
 * Controller of the intelliroadsApp
 */
angular.module('intelliroadsApp')
  .controller('HighwayDetailCtrl', ['$scope', '$routeParams', 'Highways', function ($scope, $routeParams, Highways) {
    Highways.one($routeParams.id).get()
      .then(function (highway) {
        $scope.highway = highway;
      });
    Highways.one($routeParams.id).all('spots').getList()
      .then(function (spots) {
        $scope.spots = spots;
      });
  }]);
