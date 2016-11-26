'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  //控制器：获取场景
  .controller('sceneQueryController',function($scope,$http){
    $http({
      method:'get',
      url:'http://192.168.8.9/renwu/index.php/Home/Index/sceneAll',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).success(function (data,status) {
      $scope.dataList=data;
    })
  })
  //项目控制器
  .controller('projectIndex',function($scope,$http){
    $http({
      method:'get',
      url:'http://192.168.8.9/renwu/index.php/Home/Index/project',
    }).success(function(data,status){
      $scope.project=data;
    });
  })
  //弹出层modal控制器
  .controller('modal',function ($scope,$http) {
      $scope.modalName='lihao'
  });

$('.nav li').on('click',function () {
  if($(this).siblings().hasClass('active')){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  }
  $(this).addClass('active');
});

