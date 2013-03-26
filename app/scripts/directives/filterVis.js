'use strict';

joshuaApp.directive('filterVis', function() {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var w = 120,
			h = 120,
			pi = Math.PI,
			fields = [
				{previous: 0, value: 1}
			];

			var arc = d3.svg.arc()
				.innerRadius(30)
				.outerRadius(38)
				.startAngle(0)
				.endAngle(function(d) { return d.value * 2 * Math.PI });




			///////////////////////////////////////////////////////////
			// CREATE VIS & GROUPS ////////////////////////////////////
			///////////////////////////////////////////////////////////

			// VIS
			var vis = d3.select("svg");

			// GROUP FOR ARCS/PATHS
			var arc_group = vis.append("svg:g")
				.attr("transform", "translate(" + (w/2) + "," + (h/2) + ")");

			var circ = vis.append("circle")
				.attr("r", 30)
				.attr("class","filter_circ")
				.attr("transform", "translate(" + (w/2) + "," + (h/2) + ")")
				.attr("filter","url(#f1)");


			///////////////////////////////////////////////////////////
			// DATA ///////////////////////////////////////////////////
			///////////////////////////////////////////////////////////

			scope.$watch('filtered_total', function(o,n,e){
				fields[0].previous = fields[0].value; 
				fields[0].value = o/scope.projects.length;

				var path = arc_group.selectAll("path")
					.data(fields.filter(function(d) { return d.value; }))

				path.enter().append("path")
				.transition()
				// .ease("elastic")
				.duration(750)
				.attrTween("d", arcTween)

				path.transition()
				.attr('class','filter_arc')
				// .ease("elastic")
				.duration(750)
				.attrTween("d", arcTween);

				path.exit().transition()
				// .ease("bounce")
				.duration(750)
				.attrTween("d", arcTween)
				.remove();

			}, 1000);

			function arcTween(b) {
				var i = d3.interpolate({value: b.previous}, b);
				return function(t) {
					return arc(i(t));
				};
			}
		}
	};
});
