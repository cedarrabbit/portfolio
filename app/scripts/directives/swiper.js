'use strict';

joshuaApp.directive('swiper', function($timeout) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	$timeout(function(){
	    	var mySwipe = Swipe(document.getElementById('slider'));
    	})
    }
  };
});
