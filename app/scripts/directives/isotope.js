'use strict';

joshuaApp.directive('isotope', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {

      // // update isotope whenever the filters are changed
      // scope.$watch('filters',function(){
      //   $('#isotope_container').isotope({filter:scope.filters.join()},function() {
      //     // update filtered total after isotope has finished
      //     scope.filtered_total = $('.project').not('.isotope-hidden').length;

      //     // avoid angular digest in progress error
      //     if(!scope.$$phase)
      //       scope.$apply();
      //   });
      // },true);
    }
  };
});
