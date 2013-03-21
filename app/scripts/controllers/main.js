'use strict';

joshuaApp.controller('MainCtrl', function($scope, $timeout) {
	$scope.persona = {
		name:'JOSHUA DANIEL',
		title:'UI/UX DESIGNER & DEVELOPER',
		profile:'This is my profile...',
		about:"This is what I'm about...",
		ed_1:"2003 BA Indiana University Informatics-HCI",
		ed_2:"1997 BA Indiana University Anthropology",
		email:'joshua.daniel@me.com',
		resume:'http://www.google.com'
	};
	
	$scope.projects = [
		{date:'2012',platform:'HTML5',format:'Web App',client:'Huawei',name:'Red Carpet Agent',description:'Next generation Cloud-based Customer Service Solution',thumb:'styles/image/grid/rc_agent_grid.jpg',
			slides:[
				{image:'styles/image/rc_agent_v1_01.png'},
				{image:'styles/image/rc_agent_v1_02.jpg'},
				{image:'styles/image/rc_agent_v1_03.jpg'},
				{image:'styles/image/rc_agent_v1_04.jpg'},
				{image:'styles/image/rc_agent_v1_05.jpg'},
				{image:'styles/image/rc_agent_v2_01.jpg'},
				{image:'styles/image/rc_agent_v2_02.jpg'},
				{image:'styles/image/rc_agent_v3_01.jpg'},
				{image:'styles/image/rc_agent_v4_01.jpg'},
				{image:'styles/image/rc_agent_v4_02.jpg'}
			]
		},
		{date:'2012',platform:'iOS',format:'Mobile App',client:'Huawei',name:'Red Carpet Client',description:'Next generation Cloud-based Customer Service Solution',thumb:'styles/image/grid/rc_client_grid.jpg',
			slides:[
				{image:'styles/image/rc_client_01.jpg'},
				{image:'styles/image/rc_client_02.jpg'}
			]
		},
		{date:'2012',platform:'HTML5',format:'Web App',client:'Huawei',name:'On The Go',description:'Mobile Enterprise Productivity Platform',thumb:'styles/image/grid/onthego_grid.jpg',
			slides:[
				{image:'styles/image/otg_v1_01.png'},
				{image:'styles/image/otg_v1_02.jpg'},
				{image:'styles/image/otg_v1_03.jpg'},
				{image:'styles/image/otg_v1_04.jpg'},
				{image:'styles/image/otg_v1_05.jpg'},
				{image:'styles/image/otg_v1_06.jpg'},
				{image:'styles/image/otg_v1_07.jpg'},
				{image:'styles/image/otg_v2_01.jpg'},
				{image:'styles/image/otg_v2_02.jpg'},
				{image:'styles/image/otg_v2_03.jpg'},
				{image:'styles/image/otg_v2_04.jpg'},
				{image:'styles/image/otg_v2_05.jpg'},
				{image:'styles/image/otg_v2_06.jpg'},
				{image:'styles/image/otg_v2_07.jpg'},
				{image:'styles/image/otg_v2_08.jpg'},
				{image:'styles/image/otg_v3_01.jpg'},
				{image:'styles/image/otg_v3_02.jpg'},
				{image:'styles/image/otg_v3_03.jpg'},
				{image:'styles/image/otg_v3_04.jpg'},
				{image:'styles/image/otg_v4_01.jpg'},
				{image:'styles/image/otg_v4_02.jpg'},
				{image:'styles/image/otg_v4_03.jpg'},
				{image:'styles/image/otg_v4_04.jpg'},
				{image:'styles/image/otg_v4_05.jpg'}
			]
		},
		{date:'2012',platform:'HTML5',format:'Web App',client:'Huawei',name:'Single Cloud Developer',description:'Cloud-based Developer Platform',thumb:'styles/image/grid/scd_grid.jpg',
			slides:[
				{image:'styles/image/scd_01.png'},
				{image:'styles/image/scd_02.jpg'},
				{image:'styles/image/scd_03.jpg'}
			]
		},
		{date:'2011',platform:'iOS',format:'Mobile App',client:'Huawei',name:'Paris',description:'Mobile Enterprise Network Management Platform',thumb:'styles/image/grid/paris_grid.jpg',
			slides:[
				{image:'styles/image/paris_01.png'},
				{image:'styles/image/paris_02.jpg'},
				{image:'styles/image/paris_03.jpg'},
				{image:'styles/image/paris_04.jpg'},
				{image:'styles/image/paris_05.jpg'}
			]
		},
		{date:'2011',platform:'HTML5',format:'Web App',client:'Huawei',name:'Virtual Process Migration',description:'Enterprise Network Management Platform',thumb:'styles/image/grid/vpm_grid.jpg',
			slides:[
				{image:'styles/image/vpm_01.jpg'}
			]
		},
		{date:'2011',platform:'HTML5',format:'Web App',client:'Huawei',name:'SMB Cloud Service',description:'Cloud-Based Business Application Platform',thumb:'styles/image/grid/starhub_grid.jpg',
			slides:[
				{image:'styles/image/starhub_01.png'},
				{image:'styles/image/starhub_02.jpg'},
				{image:'styles/image/starhub_03.jpg'},
				{image:'styles/image/starhub_04.jpg'},
				{image:'styles/image/starhub_05.jpg'},
				{image:'styles/image/starhub_06.jpg'},
				{image:'styles/image/starhub_07.jpg'},
				{image:'styles/image/starhub_08.jpg'}
			]
		},
		{date:'2011',platform:'HTML5',format:'Website',client:'Huawei',name:'Center for Innovation',description:'Corporate Website',thumb:'styles/image/grid/innovation_grid.jpg',
			slides:[
				{image:'styles/image/innovation_01.jpg'},
				{image:'styles/image/innovation_02.jpg'}
			]
		},
		{date:'2010',platform:'Flex',format:'Web App',client:'Barclays',name:'CreditFocus',description:'Credit Management Dashboard',thumb:'styles/image/grid/barclays_grid.jpg',
			slides:[
				{image:'styles/image/barclays_01.jpg'},
				{image:'styles/image/barclays_02.jpg'},
				{image:'styles/image/barclays_03.jpg'},
				{image:'styles/image/barclays_04.jpg'},
				{image:'styles/image/barclays_05.jpg'},
				{image:'styles/image/barclays_06.jpg'}
			]
		},
		{date:'2010',platform:'Flex',format:'Web App',client:'Parrimark',name:'Events Perfect',description:'Event Management Dashboard',thumb:'styles/image/grid/parrimark_grid.jpg',
			slides:[
				{image:'styles/image/parrimark_01.jpg'},
				{image:'styles/image/parrimark_02.jpg'},
				{image:'styles/image/parrimark_03.jpg'},
				{image:'styles/image/parrimark_04.jpg'},
				{image:'styles/image/parrimark_05.jpg'}
			]
		},
		{date:'2010',platform:'Flex',format:'Web App',client:'FuelQuest',name:'FuelQuest',description:'Fuel Inventory Management Dashboard',thumb:'styles/image/grid/fuelquest_grid.jpg',
			slides:[
				{image:'styles/image/fuelquest_01.jpg'},
				{image:'styles/image/fuelquest_02.jpg'},
				{image:'styles/image/fuelquest_03.jpg'}
			]
		},
		{date:'2009',platform:'Flash',format:'Website',client:'Nigels',name:'Nigels',description:'Bespoke Tailoring',thumb:'styles/image/grid/nigels_grid.jpg',
			slides:[
				{image:'styles/image/nigels_01.jpg'},
				{image:'styles/image/nigels_02.jpg'},
				{image:'styles/image/nigels_03.jpg'}
			]
		},
		{date:'2009',platform:'Flash',format:'Web Component',client:'Discovery',name:'Timeline',description:'Timeline Selector Web Component',thumb:'styles/image/grid/discovery_grid.jpg',
			slides:[
				{image:'styles/image/discovery_01.jpg'}
			]
		},
		{date:'2009',platform:'Flash',format:'Web Component',client:'Maximus',name:'Web Component',description:'Web Banner & Interactive Map',thumb:'styles/image/grid/maximus_grid.jpg',
			slides:[
				{image:'styles/image/maximus_01.jpg'},
				{image:'styles/image/maximus_02.jpg'}
			]
		},
		{date:'2008',platform:'AIR',format:'Serious Game',client:'NASA',name:'Virtual Astronaut',description:'e-Learning Serious Game',thumb:'styles/image/grid/nasa_grid.jpg',
			slides:[
				{image:'styles/image/nasa_01.jpg'},
				{image:'styles/image/nasa_02.jpg'},
				{image:'styles/image/nasa_03.jpg'},
				{image:'styles/image/nasa_04.jpg'},
				{image:'styles/image/nasa_05.jpg'}
			]
		},
		{date:'2007',platform:'AIR',format:'Serious Game',client:'PHMSA',name:'Hazmat Training',description:'e-Learning Serious Game',thumb:'styles/image/grid/phmsa_grid.jpg',
			slides:[
				{image:'styles/image/hazmat_01.jpg'},
				{image:'styles/image/hazmat_02.jpg'},
				{image:'styles/image/hazmat_03.jpg'},
				{image:'styles/image/hazmat_04.jpg'},
				{image:'styles/image/hazmat_05.jpg'},
				{image:'styles/image/hazmat_06.jpg'}
			]
		},
		{date:'2007',platform:'Flex',format:'Web App',client:'FINRA',name:'Continuing Education System',description:'e-Learning Platform',thumb:'styles/image/grid/finra_grid.jpg',
			slides:[
				{image:'styles/image/finra_01.jpg'}
			]
		},
		{date:'2006',platform:'Flex',format:'Web App',client:'Accenture',name:'Scenarios',description:'e-Training Platform',thumb:'styles/image/grid/accenture_grid.jpg',
			slides:[
				{image:'styles/image/accenture_01.jpg'},
				{image:'styles/image/accenture_02.jpg'},
				{image:'styles/image/accenture_03.jpg'},
				{image:'styles/image/accenture_04.jpg'},
				{image:'styles/image/accenture_05.jpg'},
				{image:'styles/image/accenture_06.jpg'}
			]
		},
		{date:'2005',platform:'Flash',format:'Website',client:'Flixters',name:'Flixters',description:'Mobile Video Content',thumb:'styles/image/grid/flixters_grid.jpg',
			slides:[
				{image:'styles/image/flixters_01.jpg'},
				{image:'styles/image/flixters_02.jpg'},
				{image:'styles/image/flixters_03.jpg'}
			]
		},
		{date:'2004',platform:'AIR',format:'Desktop App',client:'McGraw-Hill',name:'Spelling Mastery',description:'K-12 Spelling Textbook E-Learning',thumb:'styles/image/grid/mcgrawhill_grid.jpg',
			slides:[
				{image:'styles/image/mcgraw-hill_01.jpg'},
				{image:'styles/image/mcgraw-hill_02.jpg'},
				{image:'styles/image/mcgraw-hill_03.jpg'}
			]
		},
		{date:'2004',platform:'Flash',format:'Website',client:'The Writing Team',name:'The Writing Team',description:'Screenplay Development',thumb:'styles/image/grid/twt_grid.jpg',
			slides:[
				{image:'styles/image/twt_01.jpg'},
				{image:'styles/image/twt_02.jpg'},
				{image:'styles/image/twt_03.jpg'},
				{image:'styles/image/twt_04.jpg'},
				{image:'styles/image/twt_05.jpg'},
				{image:'styles/image/twt_06.jpg'}
			]
		},
		{date:'2004',platform:'Flash',format:'Website',client:'Brew PR',name:'Brew PR',description:'Company Website',thumb:'styles/image/grid/brew_grid.jpg',
			slides:[
				{image:'styles/image/brew_01.jpg'},
				{image:'styles/image/brew_02.jpg'},
				{image:'styles/image/brew_03.jpg'},
				{image:'styles/image/brew_04.jpg'},
				{image:'styles/image/brew_05.jpg'}
			]
		},
		{date:'2003',platform:'Flash',format:'Web App',client:'Deloitte',name:'Ethics',description:'Ethics e-Training Platform',thumb:'styles/image/grid/deloitte_grid.jpg',
			slides:[
				{image:'styles/image/deloitte_01.jpg'},
			]
		},
		{date:'2003',platform:'Flash',format:'Mobile App',client:'Oingo Bingo',name:'Oingo Bingo',description:'Wireless Entertainment Center Controller',thumb:'styles/image/grid/oingobingo_grid.jpg',
			slides:[
				{image:'styles/image/oingobingo_01.jpg'},
				{image:'styles/image/oingobingo_02.jpg'},
				{image:'styles/image/oingobingo_03.jpg'},
				{image:'styles/image/oingobingo_04.jpg'}
			]
		},
		{date:'2002',platform:'Flex',format:'Web App',client:'US Army',name:'Deployment Journal',description:'Online Journal for Soldier Deployment',thumb:'styles/image/grid/defense_grid.jpg',
			slides:[
				{image:'styles/image/deployment_01.jpg'},
				{image:'styles/image/deployment_02.jpg'},
				{image:'styles/image/deployment_03.jpg'},
				{image:'styles/image/deployment_04.jpg'}
			]
		},
		{date:'2002',platform:'Flash',format:'Web App',client:'Toyota',name:'Financial Calculator',description:'Loan Calculator',thumb:'styles/image/grid/toyota_grid.jpg',
			slides:[
				{image:'styles/image/toyota_01.jpg'}
			]
		},
		{date:'2002',platform:'Flash',format:'Web App',client:'Indiana University',name:'ArchSearch',description:'Archaeological Data Search',thumb:'styles/image/grid/archsearch_grid.jpg',
			slides:[
				{image:'styles/image/archsearch_01.jpg'},
				{image:'styles/image/archsearch_02.jpg'}
			]
		}
	];

	$scope.clients = _.uniq(_.pluck($scope.projects,'client'));
	$scope.technologies = _.uniq(_.pluck($scope.projects,'platform'));
	$scope.formats = _.uniq(_.pluck($scope.projects,'format'));
	$scope.industries = _.uniq(_.pluck($scope.projects,'industry'));

	$scope.selectedProjects = [];










	// var isotope_container = $('#isotope_container');

	// $scope.isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) );
	// $scope.filtering = false;
	// $scope.filters = [];
	// $scope.filtered_projects = [];
	// $scope.filter_date = _.uniq(_.pluck($scope.projects,'date'));
	// $scope.filter_platform = _.uniq(_.pluck($scope.projects,'platform'));
	// $scope.filter_format = _.uniq(_.pluck($scope.projects,'format'));
	// $scope.filter_client = _.uniq(_.pluck($scope.projects,'client'));
	// $scope.filtered_total = $scope.projects.length;
	// $scope.detail_index = 0;

	// $timeout(function(){
	// 	isotope_container.isotope({
	// 		itemSelector: '.project',
	// 		animationEngine: 'css'
	// 	})

	// 	$scope.contentReady = true;
	// },1000);

	// $scope.selectProject = function(project) {
	// 	if(!$scope.filtering)
	// 	{
	// 		$scope.selectedProject = project;
	// 		$timeout(function(){
	// 			$scope.swiper = new Swipe(document.getElementById('swipe'),{
	// 				callback: function(event,index,elem) {
	// 					$scope.detail_index = index;
	// 					$scope.$apply();
	// 				}
	// 			});
	// 		},0)
	// 	}
	// }

	// $scope.swipe = function(dir) {
	// 	dir > 0 ? $scope.swiper.next() : $scope.swiper.prev();
	// }

	// $scope.showSlide = function(index) {
	// 	$scope.swiper.slide(index);
	// }

	// $scope.closeDetail = function() {
	// 	$scope.selectedProject=false;
	// 	$scope.detail_index = 0;
	// }

});
