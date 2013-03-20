'use strict';

var joshuaApp = angular.module('joshuaApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])

  .directive('ngTap', function() {
    return function(scope, element, attrs) {
      var tapping;
      tapping = false;
      element.bind('click', function(e){
        if(!tapping)
          scope.$apply(attrs['ngTap']);
      });
      element.bind('touchstart', function(e) {
        tapping = true;
      });
      element.bind('touchmove', function(e) {
        tapping = false;
      });
      element.bind('touchend', function(e) {
        if (tapping) {
          scope.$apply(attrs['ngTap'], element);
        }
      });
    };
  });