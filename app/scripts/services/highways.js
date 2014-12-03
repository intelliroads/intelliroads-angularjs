'use strict';

/**
 * @ngdoc service
 * @name intelliroadsApp.Highways
 * @description
 * # Highways
 * Factory in the intelliroadsApp.
 */
angular.module('intelliroadsApp')
  .factory('Highways', ['Restangular', function (Restangular) {
    return Restangular.service('highways');
  }]);
