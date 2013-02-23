'use strict';

joshuaApp.directive('menu', function() {

	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			// console.log(attrs);
			// var ar = [2012,2010,2012,2008];
			// scope.test = _.select(ar, function(val){ return val == 2012}).length;
			// var el = $(element);

			// el.on('click', function(){
			// 	// close any other opened menus
			// 	$('.dropdown li').css('display','none');

			// 	// if the menu is closed by the user clicking outside an open menu
			// 	// the opened state here is out of context
			// 	if(!scope.filtering && opened != false)
			// 		opened = false;

			// 	opened = opened == el ? false : el;

			// 	scope.filtering = opened == false ? false : true;
			// 	scope.$apply();

			// 	el.siblings().each(function(index,el){
			// 		if(!opened)
			// 		{
			// 			$(el).css('display','none');
			// 		} else {
			// 			$(el).delay(index*10).fadeIn(100);
			// 		}
			// 	})
			// })
		}
	};
});
