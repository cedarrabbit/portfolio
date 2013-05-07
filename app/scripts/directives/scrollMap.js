'use strict';

joshuaApp.directive('scrollMap', function($timeout, model) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
    	var el = $(element),
            timelineHeight = el.parent().height(),
            projectListHeight = $('.project_list')[0].clientHeight,
            percentFromTop = 0;

        $timeout(function(){
            scope.$watch('model.projectsPercentViewable', function(){
                console.log('y')
                el.css('height',model.projectsPercentViewable*timelineHeight);
            })
        })

        window.onresize = function() {
            timelineHeight = el.parent().height();
            el.css('top',percentFromTop*timelineHeight);
        }

    	scope.$watch('test', function(val){
	    	percentFromTop = val/100;
    		el.css('top',percentFromTop*timelineHeight);
    	})
    }
  };
});
