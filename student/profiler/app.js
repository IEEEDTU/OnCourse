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
			return $http.get("http://127.0.0.1:8000/profiler/getStudentByRollNo?rollNo="+"2K12/SE/059").then(function(response) {
				return response.data;
			});
		}
	}
});
// User Profile Controller
app.controller('userProfileCtrl', [ 'userService', '$scope', '$http', function(userService, $scope, $http){
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
		if ($scope.form.newsForm.$valid) {
			$scope.data = 'preferredName=' + $scope.student.preferredName + 
			'&personalEmail=' + $scope.student.personalEmail + 
			'&alternativeEmail=' + $scope.student.alternativeEmail + 
			'&personalMobile=' + $scope.student.personalMobile + 
			'&alternativeMobile=' + $scope.student.alternativeMobile +
			'&rollNo=' + '2K12/SE/059';
			
			$http({
					method: 'POST',
					url: 'http://127.0.0.1:8000/profiler/editStudentDetails/',
					data: $scope.data,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function(response){
					if(response.data.hasOwnProperty('exception')){
						alert(response.data.exception);
					}else{
						$scope.response = response.data;
						alert('Profile updated successfully, Refresh the page to see!');
					}
				});
		}
	}
		
}]);

app.factory('projectService', function($http) {
	return {
		getProjectDetail : function() {
			return $http.get("http://127.0.0.1:8000/profiler/retrieveProjects?rollNo="+"2K12/SE/059").then(function(response) {
				return response.data;
			});
		}
	}
});
// Projects Controller
app.controller('projectCtrl', [ '$scope', '$http', 'projectService', function($scope, $http, projectService){
	$scope.projects = [];
	// 	var conf\ig = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	$scope.deleteProject = function(id){
		$scope.data = 'id=' + id; 
		$http({
			method: 'POST',
		url: 'http://127.0.0.1:8000/profiler/deleteProject/',
		data: $scope.data,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).then(function(response){
			if(response.data.hasOwnProperty('exception')){
				alert(response.data.exception);
			}else{
				alert('Project deleted successfully');
			}
		});
	}
	
	projectService.getProjectDetail().then(function(projects){
		if(projects.hasOwnProperty('exception')){
			alert(projects.exception);
		}else{
			$scope.projects = projects.projects;

		}
		
		
		console.log(projects);
	});
}]);

app.factory('fieldsService', function($http) {
	return {
		getFields : function() {
			return $http.get("http://127.0.0.1:8000/profiler/retrieveFields").then(function(response) {
				return response.data;
			});
		}
	}
});

app.factory('skillsService', function($http) {
	return {
		getSkills : function() {
			return $http.get("http://127.0.0.1:8000/profiler/retrieveSkills").then(function(response) {
				return response.data;
			});
		}
	}
});

// Interest Field & Personal Skill Controller
app.controller('fieldSkillCtrl', function($scope, fieldsService, skillsService){
	$scope.fields = [];
	$scope.skills = [];
	
	fieldsService.getFields().then(function(fields){
		if(fields.hasOwnProperty('exception')){
			alert(fields.exception);
		}else{
			$scope.fields = fields.fields;
			
		}
		console.log(fields);
	});
	
	skillsService.getSkills().then(function(skills){
		if(skills.hasOwnProperty('exception')){
			alert(skills.exception);
		}else{
			$scope.skills = skills.skills;
			
		}
		console.log(skills);
	});
});

