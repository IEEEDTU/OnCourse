/*---------------------------------------
Directives & Controller of Communique app:
a. User Widget
b. About me Widget
c. Project Panel
d. User Details Panel
e. Setting Panel
---------------------------------------*/

var app = angular.module('profiler', ['cms', 'modalApp']);

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
app.factory('userService', function($http) {
	return {
		getStudentDetail : function() {
			return $http.get("http://127.0.0.1:8000/profiler/getStudentByRollNo?rollNo="+"2K12/SE/001").then(function(response) {
				return response.data;
			});
		}
	}
});
// User Profile Controller
app.controller('userProfileCtrl', function(userService,$scope){
$scope.student = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	
	userService.getStudentDetail().then(function(student){
		if(student.hasOwnProperty('exception')){
			alert(student.exception);
		}else{
			$scope.student = student.student;

		}
		
		console.log(student);
	});
	
	$scope.updateProfile = function(){
		
	}
		
});

app.factory('projectService', function($http) {
	return {
		getProjectDetail : function() {
			return $http.get("http://127.0.0.1:8000/profiler/retrieveProjects?rollNo="+"2K12/SE/001").then(function(response) {
				return response.data;
			});
		}
	}
});
// Projects Controller
app.controller('projectCtrl', function($scope,projectService){
	$scope.projects = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	
	projectService.getProjectDetail().then(function(projects){
		if(projects.hasOwnProperty('exception')){
			alert(projects.exception);
		}else{
			$scope.projects = projects.projects;

		}
		
		
		console.log(projects);
	});
});

// Interest Field & Personal Skill Controller
app.controller('fieldSkillCtrl', function(){
});

