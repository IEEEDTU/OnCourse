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
app.controller('scoreCardCtrl', function($scope){
	$scope.scores = [{
		semester: 1,
		totalScore: "71.23",
		totalCredits: "30"
	},
	{
		semester: 2,
		totalScore: "56.77",
		totalCredits: "30"
	},
	{
		semester: 3,
		totalScore: "71.23",
		totalCredits: "30"
	},
	{
		semester: 4,
		totalScore: "70.66",
		totalCredits: "30"
	},
	{
		semester: 5,
		totalScore: "65.66",
		totalCredits: "30"
	}];

	$scope.result = {
		spi: "65.66",
		creditsGained: "120",
		activeBacks: "0",
		clearedBacks: "2"
	}
});

// Assignment Panel Controller
app.controller('assignmentPanelCtrl', function($scope){
	// assignments
	$scope.assignments = [{
		assignmentCode: "SE301A",
		course: "SE 301",
		group: "A",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		group: "A",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		group: "A",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		group: "A",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		group: "A",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	}];

	// assignment evaluation
	$scope.assignmentEvaluation = [{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		group: "B",
		submissionNum: "50",
		status:"Evaluated"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		group: "B",
		submissionNum: "50",
		status:"Not Evaluated"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		group: "B",
		submissionNum: "50",
		status:"Not Evaluated"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		group: "B",
		submissionNum: "50",
		status:"Evaluated"
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