'use strict';

/**
 * @ngdoc overview
 * @name intelliroadsApp
 * @description
 * # intelliroadsApp
 *
 * Main module of the application.
 */
angular
  .module('intelliroadsApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/highways.html',
        controller: 'HighwaysCtrl'
      })
      .when('/highways', {
        templateUrl: 'views/highways.html',
        controller: 'HighwaysCtrl'
      })
      .when('/highways/:id', {
        templateUrl: 'views/highway_detail.html',
        controller: 'HighwayDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  })
  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://api.intelliroads.local:3000');
  });
