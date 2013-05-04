'use strict';

describe('Directive: scrollSpy', function() {
  beforeEach(module('portfolioApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<scroll-spy></scroll-spy>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the scrollSpy directive');
  }));
});
