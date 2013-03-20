'use strict';

joshuaApp.directive('projectList', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	scope.$watch('filters',function(){
    		if($('.project.'+String(scope.project.name).replace(/ /g,'')).not('.isotope-hidden').length > 0)
    			$(element).addClass('filtered_project');
    		else
    			$(element).removeClass('filtered_project');

    	},true)
    }
  };
});
