'use strict';

joshuaApp.directive('scrollMap', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	var el = $(element);
    	var tlHeight = el.parent().height();

    	scope.$watch('test', function(val){
	    	var perc = val/100;
    		console.log(perc)
    		// scope.test = 100 * this.scrollTop / (this.scrollHeight-this.clientHeight);

    		$(element).css('top',val*tlHeight);
    	})
    }
  };
});
