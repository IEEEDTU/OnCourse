/*---------------------------------------
Directives & Controller of Course app:
A. Courses Index Page Panels
i.  Odd Course Panel
ii. Even Course Panel

B. Course Details Panels
i. 	 Course Description
ii.  Course Curriculum
iii. Instructor
iv.  Resources
v. 	 Discussion
---------------------------------------*/

var app = angular.module('course', ['cms']);


/*--- A. Courses Index Page Panels ---*/
// Odd Course Panel ------------------------
app.directive('oddCoursePanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'odd-course-panel.html'
	};
});

// Even Course Panel ------------------------
app.directive('evenCoursePanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'even-course-panel.html'
	};
});
// odd course factory
app.factory('oddCourseService', function($http) {
	return {
		getOddCourse : function() {
			return $http.get("http://127.0.0.1:8000/course/retrieveOddCourses?branchCode="+"SE"+"&degreeCode="+"BTech"+"&degreeType="+"Regular").then(function(response) {
				return response.data;
			});
		}
	}
});

app.factory('evenCourseService', function($http) {
	return {
		getEvenCourse : function() {
			return $http.get("http://127.0.0.1:8000/course/retrieveEvenCourses?branchCode="+"SE"+"&degreeCode="+"BTech"+"&degreeType="+"Regular").then(function(response) {
				return response.data;
			});
		}
	}
});
var property='SE202';
app.factory('sharedProperties', function () {

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
                //alert(property);
            }
        };
    });
// Odd Courses Controller
app.controller('oddCourseCtrl', function($scope,oddCourseService,sharedProperties){
	$scope.courses = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	
	oddCourseService.getOddCourse().then(function(courses){
		if(courses.hasOwnProperty('exception')){
			alert(courses.exception);
		}else{
			$scope.courses = courses.courses;
		}
		
		
		console.log(courses);
	});

    $scope.fetchCourse=function(id){
	sharedProperties.setProperty(id);
	id=sharedProperties.getProperty()
console.log(id);
    };

		//console.log(id);


});

// Even Courses Controller
app.controller('evenCourseCtrl', function($scope,evenCourseService){
	$scope.courses = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	
	evenCourseService.getEvenCourse().then(function(courses){
		if(courses.hasOwnProperty('exception')){
			alert(courses.exception);
		}else{
			$scope.courses = courses.courses;
		}
		
		
		console.log(courses);
	});
	$scope.fetchCourse=function(id){
	sharedProperties.setProperty(id);
	id=sharedProperties.getProperty()
console.log(id);
    };

});

/*--- B. Course Details Panels ---*/
// Course Description Panel ------------------------
app.directive('descriptionPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'description-panel.html'
	};
});

// Course Curriculum Panel ------------------------
app.directive('curriculumPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'curriculum-panel.html'
	};
});

// Instructor Panel ------------------------
app.directive('instructorPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'instructor-panel.html'
	};
});

// Resource Panel ------------------------
app.directive('resourcePanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'resource-panel.html'
	};
});

// Discussion Panel ------------------------
app.directive('discussionPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'discussion-panel.html'
	};
});



app.factory('courseMenuService', function($http) {
	return {
		getDescription : function(id) {
			return $http.get("http://127.0.0.1:8000/course/getCourseById"+id).then(function(response) {
				return response.data;
			});
		}
	}
});

// Course Menu Controller
app.controller('courseMenuCtrl', function($scope,courseMenuService){
	$scope.courses = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	var id=window.location.search;
	console.log(id);
	
	courseMenuService.getDescription(id).then(function(courses){
		if(courses.hasOwnProperty('exception')){
			alert(courses.exception);
		}else{
			$scope.courses = courses.course;

		}
		
		
		console.log(courses);
	});
		
});

app.factory('descriptionService', function($http) {
	return {
		getDescription : function(id) {
			return $http.get("http://127.0.0.1:8000/course/getCourseById"+id).then(function(response) {
				return response.data;
			});
		}
	}
});

// Course Description Controller
app.controller('descriptionCtrl', function($scope,descriptionService){
	$scope.courses = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	var id=window.location.search;
	console.log(id);
	
	descriptionService.getDescription(id).then(function(courses){
		if(courses.hasOwnProperty('exception')){
			alert(courses.exception);
		}else{
			$scope.courses = courses.course;

		}
		
		
		console.log(courses);
	});
		
});

app.factory('curriculumService', function($http) {
	return {
		getCurriculum : function(id) {
			return $http.get("http://127.0.0.1:8000/course/retrieveCourseCurriculum"+id).then(function(response) {
				return response.data;
			});
		}
	}
});

// Course Curriculum Controller
app.controller('curriculumCtrl', function($scope,curriculumService){
	$scope.curriculum = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	
	var id=window.location.search;
	curriculumService.getCurriculum(id).then(function(curriculum){
		if(curriculum.hasOwnProperty('exception')){
			alert(curriculum.exception);
		}else{
			$scope.curriculum = curriculum.coursecurriculum;

		}
		
		
		console.log(curriculum);
	});
});

// Instructor Controller
app.controller('instructorCtrl', function(){
	this.faculty = {
		name: "Dr. Ruchika Malhotra",
		personalEmail: "abc@gmail.com",
		personalMobile: "+91-9999645456",
		designation: "Associate professor",
		department: "Computer Science and Engineering Department"
	};
});

// Resource Controller
app.controller('resourceCtrl', function(){
	this.textBooks = [{
		bookName: "Data Structures",
		authors: "R.S. Pillai, S.K. Saini",
		edition: "2",
		publisher: "McGraw Hill"
	},
	{
		bookName: "Data Structures",
		authors: "R.S. Pillai, S.K. Saini",
		edition: "2",
		publisher: "McGraw Hill"
	},
	{
		bookName: "Data Structures",
		authors: "R.S. Pillai, S.K. Saini",
		edition: "2",
		publisher: "McGraw Hill"
	}];

	this.referenceBooks = [{
		bookName: "Data Structures",
		authors: "R.S. Pillai, S.K. Saini",
		edition: "2",
		publisher: "McGraw Hill"
	},
	{
		bookName: "Data Structures",
		authors: "R.S. Pillai, S.K. Saini",
		edition: "2",
		publisher: "McGraw Hill"
	},
	{
		bookName: "Data Structures",
		authors: "R.S. Pillai, S.K. Saini",
		edition: "2",
		publisher: "McGraw Hill"
	}];

	this.publications = [{
		title: "Intrusion Detection and Prevention",
		authors: "Ashish Kamra",
		organization: "IEEE",
		publicationDate: "2014-08-13",
		link: "www.google.com"
	}];

	this.documents = [{
		source: "www.sites.google.com/dss/lecture1.pdf"
	},
	{
		source: "www.sites.google.com/dss/lecture1.pdf"
	}];

	this.weblinks = [{
		link: "www.wikipedia.com/data_structures"
	},
	{
		link: "www.wikipedia.com/data_structures"
	}];
});

// Discussion Controller
app.controller('discussionCtrl', function(){
});
