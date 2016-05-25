/*---------------------------------------
Directives & Controller of Course app:
A. Courses Index Page Panels
i.  Course Panel

B. Course Details Panels
i. 	 Course Description
ii.  Course Curriculum
iii. Instructor
iv.  Resources
v. 	 Discussion
---------------------------------------*/

var app = angular.module('course', ['cms', 'modalApp']);

/*--- A. Courses Index Page Panels ---*/
// Course Panel ------------------------
app.directive('coursePanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'course-panel.html'
	};
});

// Courses Controller
app.controller('courseCtrl', function(){
	this.courses = [{
		courseCode:"COE-211",
		courseName:"Data Structure",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"SE-612",
		courseName:"Advance Computer Architecture",
		description:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	},
	{
		courseCode:"MCE-413",
		courseName:"Operating Systems Design",
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

// Discussion Panel ------------------------
app.directive('discussionPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'discussion-panel.html'
	};
});

// Course Description Controller
app.controller('descriptionCtrl', function(){
	this.course = {
		courseId: "SE201",
		courseType: "Core",
		courseName: "Object Oriented Programming",
		description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
		credits: 4,
		sessMaxMarks: 30,
		endMaxMarks: 70,
		maxMarks: 100,
		minPassingMarks: 40,
		semester: 3
	}
		
});

// Course Curriculum Controller
app.controller('curriculumCtrl', function(){
	this.syllabus = [{
		unitId: "Unit 1",
		unitDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
	},
	{
		unitId: "Unit 2",
		unitDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo . nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
	},
	{
		unitId: "Unit 3",
		unitDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
	}];
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
