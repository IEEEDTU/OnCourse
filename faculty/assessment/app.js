/*---------------------------------------
Directives & Controller of Assessment app:
a. Score Card
b. Assignment Panel
	i. Assignment creation form
	ii. Assignment editing form
	iii. Assignment deletion form
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

// 	i. Assignment creation form ---------------
app.directive('createAssignmentForm', function(){
	return {
		restrict: 'E',
		templateUrl: 'create-assignment-form.html'
	};
});

// 	ii. Assignment editing form ----------------
app.directive('editAssignmentForm', function(){
	return {
		restrict: 'E',
		templateUrl: 'edit-assignment-form.html'
	};
});

// 	iii. Assignment deletion form --------------
app.directive('deleteAssignmentForm', function(){
	return {
		restrict: 'E',
		templateUrl: 'delete-assignment-form.html'
	};
});

// Result Panel ------------------------
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

app.directive('validFile',function(){
  return {
    require:'ngModel',
    link:function(scope,el,attrs,ngModel){
      el.bind('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      });
    }
  }
});