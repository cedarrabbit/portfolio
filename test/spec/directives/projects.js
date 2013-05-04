'use strict';

describe('Directive: projects', function() {
  beforeEach(module('portfolioApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<projects></projects>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the projects directive');
  }));
});
