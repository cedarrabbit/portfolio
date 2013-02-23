'use strict';

joshuaApp.directive('filter', function() {

	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var filter = attrs.filter;
			scope.count = _.select(scope.projects, function(project){ return project[filter] == scope[filter]}).length;
		}
	};
});
