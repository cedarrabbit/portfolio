'use strict';

joshuaApp.directive('projects', function($timeout) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	$timeout(function(){
	    	$(element).isotope({
	    		layoutMode: 'masonry'
	    	});
    	})

    	scope.$watch('filtering',function(filtering){

    		if(filtering)
    		{
		    	$timeout(function(){
			    	$(element).isotope({
			    		layoutMode: 'masonry'
			    	});
		    	})
    		}
    	})

    }
  };
});
