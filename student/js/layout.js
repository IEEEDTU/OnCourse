/*---------------------------------------
This file contain main layout directives:
a. Main header panel
b. Main sidebar panel
c. Control sidebar panel
d. Main footer panel
---------------------------------------*/

var app = angular.module('cms', [ ]);

// Header panel ------------------------
app.directive('headerPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '../layout/header-panel.html'
	};
});

// Main sidebar panel --------------------
app.directive('sidebarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: '../layout/sidebar-panel.html'
	};
});

// Control sidebar panel --------------------
app.directive('csidebarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: '../layout/csidebar-panel.html'
	};
});

// Footer panel --------------------
app.directive('footerPanel', function() {
	return {
		restrict: 'E',
		templateUrl: '../layout/footer-panel.html'
	};
});

app.controller('navbarCtrl', function() {
	this.mails = [{
		sender:"Veenal Bansal",
		dateTime:"12-01-2016 11:02 P.M."
	}];

	this.announcements = [{
		title:"DWHM class cancelled for today.",
		link:"www.google.com"
	},
	{
		title:"DWHM class cancelled for today.",
		link:"www.google.com"
	},
	{
		title:"DWHM class cancelled for today.",
		link:"www.google.com"
	}];

	/*
	this.tasks = [{
	}];
	*/
});