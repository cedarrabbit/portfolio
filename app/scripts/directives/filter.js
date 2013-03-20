'use strict';

joshuaApp.directive('filter', function() {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var filter = attrs.filter;
			var filterClass = '.' + String(scope[filter]).replace(/ /g,'');

			// add total number of projects that this filter will affect
			scope.count = _.select(scope.projects, function(project){ return project[filter] == scope[filter]}).length;    

			// when a filter is clicked, update the model's 'filters' array
			var tapping = false;
			element.bind('click', function(e){
				if(!tapping)
					applyFilter();
			});
			element.bind('touchstart', function(e) {
				tapping = true;
				applyFilter();
			});

			function applyFilter() {
				scope.selected = $(element).hasClass('selected');

				$('.selected').removeClass('selected');
				scope.filters.splice(0,scope.filters.length);

				if(!scope.selected)
				{
					$(element).addClass('selected');	// should be handled by ng-class
					scope.filters.push(filterClass);
				}

				// // toggle selection
				// scope.selected = !scope.selected;

				// // toggle filter
				// if(scope.selected) {
				// 	$(element).addClass('selected');	// should be handled by ng-class
				// 	scope.filters.push(filterClass);
				// } else {
				// 	$(element).removeClass('selected');	// should be handled by ng-class
				// 	scope.filters.splice(scope.filters.indexOf(filterClass),1);
				// }

				scope.$apply();
			}

			// clear filters
			scope.$watch('filters',function(newVal,oldVal){
				if(newVal.length == 0)
					$(element).removeClass('selected');	// should be handled by ng-class
			},true);
		}
	};
});
