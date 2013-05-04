'use strict';

joshuaApp.directive('scrollSpy', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
		$(element).scroll(function(){
			scope.test = 100 * this.scrollTop / (this.scrollHeight-this.clientHeight);
			scope.$apply();
		});
    }
  };
});
