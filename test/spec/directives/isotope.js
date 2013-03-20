'use strict';

describe('Directive: isotope', function() {
  beforeEach(module('joshuaApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<isotope></isotope>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the isotope directive');
  }));
});
