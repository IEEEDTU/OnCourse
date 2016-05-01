/*---------------------------------------
Directives & Controller of Communique app:
a. User Widget
b. About me Widget
c. Project Panel
d. User Details Panel
e. Setting Panel
---------------------------------------*/

var app = angular.module('profiler', ['cms']);

// User Widget ------------------------
app.directive('userWidget', function(){
	return {
		restrict: 'E',
		templateUrl: 'user-widget.html'
	};
});

// About me Widget ------------------------
app.directive('aboutMeWidget', function(){
	return {
		restrict: 'E',
		templateUrl: 'about-me-widget.html'
	};
});

// Project Panel ------------------------
app.directive('projectPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'project-panel.html'
	};
});

// User Details Panel ------------------------
app.directive('userDetailPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'user-detail-panel.html'
	};
});

// Setting Panel ------------------------
app.directive('settingPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'setting-panel.html'
	};
});

// User Profile Controller
app.controller('userProfileCtrl', function(){
});

// Projects Controller
app.controller('projectCtrl', function(){
});

// Interest Field & Personal Skill Controller
app.controller('fieldSkillCtrl', function(){
});

// Settings Controller
app.controller('settingCtrl', function(){
});
