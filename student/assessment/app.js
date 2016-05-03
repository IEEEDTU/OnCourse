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
	this.scores = {
		semOne: "71.23",
		semTwo: "56.77",
		semThree: "68.31",
		semFour: "70.66",
		aggScore: "65.66",
		creditsGained: "120",
		activeBacks: "0",
		clearedBacks: "2"
	}
});

// Assignment Panel Controller
app.controller('assignmentPanelCtrl', function(){
	this.assignments = [{
		assCode: "SE301A",
		subject: "SE 301",
		assignment: "assignment_12_02_2016.pdf",
		date: "27-12-2016",
		comment: "Sent in PDF format"
	},
	{
		assCode: "SE301A",
		subject: "SE 301",
		assignment: "assignment_12_02_2016.pdf",
		date: "27-12-2016",
		comment: "Sent in PDF format"
	},
	{
		assCode: "SE301A",
		subject: "SE 301",
		assignment: "assignment_12_02_2016.pdf",
		date: "27-12-2016",
		comment: "Sent in PDF format"
	},
	{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		date:"27-12-2016",
		comment:"Sent in PDF format"
	},
	{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		date:"27-12-2016",
		comment:"Sent in PDF format"
	}];

	this.assignmentGrades = [{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		grade:"A",
		status:"Submitted"
	},
	{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		grade:"B",
		status:"Submitted"
	},
	{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		grade:"A",
		status:"To be evaluated"
	},
	{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		grade:"A",
		status:"Submitted"
	},
	{
		assCode:"SE301A",
		subject:"SE 301",
		assignment:"assignment_12_02_2016.pdf",
		grade:"C",
		status:"To be evaluated"
	}];
});

// Assignment Panel Controller
app.controller('resultPanelCtrl', function(){
});
