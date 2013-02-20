'use strict';

joshuaApp.directive('project', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	$(element).addClass(scope.project.date).addClass(scope.project.platform).addClass(String(scope.project.format).replace(/ /g,'')).addClass(scope.project.client);
    }
  };
});
