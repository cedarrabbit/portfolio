'use strict';

describe('Directive: filter', function() {
  beforeEach(module('joshuaApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<filter></filter>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the filter directive');
  }));
});
