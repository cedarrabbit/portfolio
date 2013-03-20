'use strict';

describe('Directive: projectList', function() {
  beforeEach(module('joshuaApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<project-list></project-list>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the projectList directive');
  }));
});
