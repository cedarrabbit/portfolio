'use strict';

describe('Directive: donutFilter', function() {
  beforeEach(module('joshuaApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<donut-filter></donut-filter>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the donutFilter directive');
  }));
});
