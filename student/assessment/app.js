/*---------------------------------------
Directives & Controller of Assessment app:
a. Score Card
b. Assignment Panel
c. Registration Widget
d. Result Panel
---------------------------------------*/

var app = angular.module('assessment', ['cms']);

// Score Card ------------------------
app.directive('scoreCard', function(){
	return {
		restrict: 'E',
		templateUrl: 'score-card.html'
	};
});

// Assignment Panel ------------------------
app.directive('assignmentPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'assignment-panel.html'
	};
});

// Registration Panel ------------------------
app.directive('registrationWidget', function(){
	return {
		restrict: 'E',
		templateUrl: 'registration-widget.html'
	};
});

// Score Card ------------------------
app.directive('resultPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'result-panel.html'
	};
});

// Score Card Controller
app.controller('scoreCardCtrl', function(){
});

// Assignment Panel Controller
app.controller('assignmentPanelCtrl', function(){
});

// Assignment Panel Controller
app.controller('resultPanelCtrl', function(){
});
