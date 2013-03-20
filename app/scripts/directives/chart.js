'use strict';

joshuaApp.directive('chart', function() {
  return {
    template: "<div id='chart'></div>",
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
    	var chart = d3.select('#chart').append('svg');
      // element.text(scope.projects.length);
    }
  };
});
