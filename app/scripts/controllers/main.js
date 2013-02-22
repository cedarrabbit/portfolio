'use strict';

joshuaApp.controller('MainCtrl', function($scope, $timeout) {

	var isotope_container = $('#isotope_container');

	$scope.projects = [
		{id:'p1',date:'2012',platform:'iOS',format:'Mobile App',client:'Accenture'},
		{id:'p2',date:'2012',platform:'Android',format:'Mobile App',client:'Barclays'},
		{id:'p3',date:'2011',platform:'iOS',format:'Mobile App',client:'FuelQuest'},
		{id:'p4',date:'2010',platform:'HTML5',format:'Web App',client:'FINRA'},
		{id:'p5',date:'2009',platform:'iOS',format:'Mobile App',client:'McGraw-Hill'},
		{id:'p6',pdate:'2009',latform:'Android',format:'Mobile App',client:'McDonalds'},
		{id:'p7',date:'2009',platform:'Air',format:'Desktop App',client:'NASA'},
		{id:'p8',date:'2008',platform:'Flash',format:'Website',client:'Huawei'},
		{id:'p8',date:'2008',platform:'Flex',format:'Web App',client:'Huawei'},
		{id:'p8',date:'2008',platform:'Director',format:'CDROM',client:'Parrimark'},
		{id:'p8',date:'2007',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2006',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2005',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2004',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2003',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2002',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2001',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'2000',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'1999',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'1998',platform:'iOS',format:'Mobile App',client:'Huawei'},
		{id:'p8',date:'1997',platform:'iOS',format:'Mobile App',client:'Huawei'}
	];

	$scope.filtering = false;
	$scope.filters = [];
	$scope.filter_year = [2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997];
	$scope.filter_platform = ['iOS','Android','HTML5','Air','Flash','Flex','Director'];
	$scope.filter_format = ['Mobile App','Web App','Desktop App','Website','CDROM'];
	$scope.filter_client = ['Accenture','Barclays','FuelQuest','FINRA','McGraw-Hill','McDonalds','NASA','Huawei','Parrimark'];
	$scope.filtered_total = $scope.projects.length;

	$timeout(function(){
		isotope_container.isotope({
			itemSelector: '.project',
			animationEngine: 'css'
		})

		$scope.contentReady = true;
	},1000);

	$scope.filter = function(event,val) {
		var el = $(event.target);
		var className = '.'+String(val).replace(/ /g,'');

		if(el.hasClass('selected'))	{
			$scope.filters.splice($scope.filters.indexOf(className),1);
			el.removeClass('selected');
		} else {
			$scope.filters.push(className)
			el.addClass('selected');
		}

		isotope_container.isotope({filter:$scope.filters.join()})

		// isotope-hidden
		$scope.filtered_total = $('.project').not('.isotope-hidden').length;
	}

	$scope.selectProject = function(project) {
		if(!$scope.filtering)
			$scope.selectedProject = project;
	}

	$scope.clearFilters = function() {
		$('.dropdown li').removeClass('selected');

		$scope.filters = [];
		isotope_container.isotope({filter:'*'});
	}

});
