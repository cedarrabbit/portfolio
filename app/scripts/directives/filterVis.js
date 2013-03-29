'use strict';

joshuaApp.directive('filterVis', function() {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var pi = Math.PI;
			var w = 140;
			var h = 140;
			var vals = _.countBy(scope.projects,function(project){ return project[attrs.type]});
			var val = vals[scope[attrs.type]]/scope.projects.length;

			scope.perc = Math.round(val*100);
			scope.title = scope[attrs.type];

			var vis = d3.select(element[0]).append("svg");

			var group_track = vis.append("svg:g")
			    .attr("transform","translate("+ (w/2) + "," + (h/2) + ")");

			var group_val = vis.append("svg:g")
			    .attr("transform","translate("+ (w/2) + "," + (h/2) + ")");

			var arc_track = d3.svg.arc()
			    .innerRadius(50)
			    .outerRadius(65)
			    .startAngle(0)
			    .endAngle(270*(pi/180)); 

			var arc_val = d3.svg.arc()
			    .innerRadius(50)
			    .outerRadius(65)
			    .startAngle(0)
			    .endAngle((270*val)*(pi/180)); 

			group_track.append("path")
			    .attr("d", arc_track)
			    .attr("class","chart_track");

			group_val.append("path")
			    .attr("d", arc_val)
			    .attr("class","chart_val");
		}
	};
});
