'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */

angular
  .module('yoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/project', {
        templateUrl: 'views/projectIndex.html',
        controller: 'projectIndex',
        controllerAs: 'proIndex'
      })
      // .when('/modalproject', {
      //   templateUrl: 'views/template/projectAddTemplate.html',
      //   controller: 'projectAddTemplate',
      //   controllerAs: ''
      // })
      .when('/scene', {
        templateUrl: 'views/sceneIndex.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// angular.module('modalApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/modalproject', {
//         templateUrl: 'views/template/projectAddTemplate.html',
//         controller: 'projectAddTemplate',
//         controllerAs: 'projectAdd'
//       }
//       )
//   })
//   .controller('template',function ($scope,$http) {
//     $scope.mName='lihaoahaoao'
//   });
// angular.bootstrap(angular.element("#yoAngularApp"),["yoAngularApp"]);
// angular.bootstrap(angular.element("#myModal"),["modalApp"]);
