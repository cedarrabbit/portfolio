'use strict';

describe('Directive: scrollMap', function() {
  beforeEach(module('portfolioApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<scroll-map></scroll-map>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the scrollMap directive');
  }));
});
