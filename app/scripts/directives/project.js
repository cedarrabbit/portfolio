'use strict';

joshuaApp.directive('project', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	// add date, platform, format and client classes to the project so isotope can target it for filtering
    	$(element).addClass(scope.project.date).addClass(scope.project.platform).addClass(String(scope.project.format).replace(/ /g,'')).addClass(scope.project.client).addClass(String(scope.project.name).replace(/ /g,''));
    }
  };
});
