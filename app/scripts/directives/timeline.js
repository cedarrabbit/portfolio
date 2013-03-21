'use strict';

joshuaApp.directive('timeline', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	scope.timeline = _.groupBy(scope.projects, 'date');
    	scope.timeline_keys = Object.keys(scope.timeline);
    	scope.timeline_labels = _.map(scope.timeline_keys, function(key) {
    		return key.substring(2,4);
    	});
    }
  };
});
