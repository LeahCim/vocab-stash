'use strict';

/**
 * @ngdoc overview
 * @name vocabStashApp
 * @description
 * # vocabStashApp
 *
 * Main module of the application.
 */
angular
  .module('vocabStashApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
