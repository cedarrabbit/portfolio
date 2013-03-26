'use strict';

describe('Directive: menu', function() {
  beforeEach(module('joshuaApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<menu></menu>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the menu directive');
  }));
});
