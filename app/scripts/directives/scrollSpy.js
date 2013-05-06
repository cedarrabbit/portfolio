'use strict';

joshuaApp.directive('scrollSpy', function($timeout,model) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	
    	$timeout(function(){
    	  	// record the percent of the project list that is viewable
	    	model.projectsPercentViewable = element[0].clientHeight/element[0].scrollHeight;
    	})

		$(element).scroll(function(){
			scope.test = 100 * this.scrollTop / (this.scrollHeight-this.clientHeight);
			scope.$apply();
		});
    }
  };
});
