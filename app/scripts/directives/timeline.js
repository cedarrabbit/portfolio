'use strict';

joshuaApp.directive('timeline', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	scope.timeline = _.groupBy(scope.projects, 'date');
    	scope.timeline_keys = Object.keys(scope.timeline);
        console.log(scope.timeline_keys)
    	scope.timeline_labels = _.map(scope.timeline_keys, function(key) {
    		return key.substring(2,4);
    	});

        if(scope.isMobile)
            scope.timeline_labels.reverse();
    }
  };
});
