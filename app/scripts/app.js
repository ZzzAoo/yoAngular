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
      //查看项目页面
      .when('/project', {
        templateUrl: 'views/projectIndex.html',
        controller: 'projectIndex',
        controllerAs: 'proIndex'
      })
      //查看场景数据页面
      .when('/scene', {
        templateUrl: 'views/sceneIndex.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      // 路由用户中心
      .when('/user', {
        templateUrl: 'views/userIndex.html',
        controller: 'userController'
      })
      // 路由场景管理
      .when('/scene/sceneManager/:sceneId', {
        templateUrl: 'views/template/sceneAddTemplate.html',
        controller: 'sceneManagerController'
      })
      .when('/test', {
        templateUrl: 'views/template/uploadImgTemplate.html',
        controller: 'uploadImgController'
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
