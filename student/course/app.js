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
v. 	 Assignments
vi.  Discussion
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

// Odd Courses Controller
app.controller('oddCourseCtrl', function(){
	this.courses = [{
		courseCode:"SE301",
		courseName:"Object Oriented Programming",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE302",
		courseName:"Data Structure",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE303",
		courseName:"Discrete Mathematics",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE304",
		courseName:"Operating System",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE305",
		courseName:"Algorithm Design and Analysis",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	}];
});

// Even Courses Controller
app.controller('evenCourseCtrl', function(){
	this.courses = [{
		courseCode:"SE311",
		courseName:"Object Oriented Programming",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE312",
		courseName:"Data Structure",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE313",
		courseName:"Discrete Mathematics",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE314",
		courseName:"Operating System",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE315",
		courseName:"Algorithm Design and Analysis",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	}];
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

// Assignment Panel ------------------------
app.directive('assignmentPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'assignment-panel.html'
	};
});

// Discussion Panel ------------------------
app.directive('discussionPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'discussion-panel.html'
	};
});

// Course Description Controller
app.controller('descriptionCtrl', function(){
});

// Course Curriculum Controller
app.controller('curriculumCtrl', function(){
});

// Instructor Controller
app.controller('instructorCtrl', function(){
});

// Resource Controller
app.controller('resourceCtrl', function(){
});

// Assignment Controller
app.controller('assignmentCtrl', function(){
});

// Discussion Controller
app.controller('discussionCtrl', function(){
});
