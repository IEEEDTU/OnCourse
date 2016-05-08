/*---------------------------------------
This file contain main layout directives:
a. Notice Board
b. Course Panel
c. Calendar Widget
d. Quick Links
---------------------------------------*/

var app = angular.module('dashboard', ['cms', 'modalApp']);

// Notice Board ------------------------
app.directive('noticeBoard', function(){
	return {
		restrict: 'E',
		templateUrl: 'notice-board.html'
	};
});

// Course Panel ------------------------
app.directive('coursePanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'course-panel.html'
	};
});

// Calendar Panel ------------------------
app.directive('calendarWidget', function(){
	return {
		restrict: 'E',
		templateUrl: 'calendar-widget.html'
	};
});

// Quick Links Panel ------------------------
app.directive('quickLinks', function(){
	return {
		restrict: 'E',
		templateUrl: 'quick-links.html'
	};
});

app.factory('newsService', function($http) {
	return {
		getNews : function() {
			return $http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreNews?rowsPerPage=" + 15 + "&pageNo=" + 1).then(function(response) {
				return response.data;
			});
		}
	}
});

app.factory('noticesService', function($http) {
	return {
		getNotices : function() {
			return $http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreNotices?rowsPerPage=" + 15 + "&pageNo=" + 1).then(function(response) {
				return response.data;
			});
		}
	}
});

app.factory('eventsService', function($http) {
	return {
		getEvents : function() {
			return $http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreEvents?rowsPerPage=" + 15 + "&pageNo=" + 1).then(function(response) {
				return response.data;
			});
		}
	}
});

app.controller('newsCtrl', function($scope, newsService){
	$scope.news = [];
// 	var config = {
// 		headers: {
//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
//         	'Accept': 'application/json',
//         	'Content-Type': 'application/x-www-form-urlencoded',
//     	}
//     };
	$scope.filteredNews = [];
	$scope.totalItems = 0;
	
	newsService.getNews().then(function(news){
		if(news.hasOwnProperty('exception')){
			alert(news.exception);
		}else{
			$scope.news = news.news;
		}
		$scope.totalItems = $scope.news.length;;
		$scope.itemsPerPage = 5;
		$scope.currentPage = 1;
		
		$scope.maxSize = 5;
		
		console.log(news);
	});
	
	$scope.pageCount = function () {
		return Math.ceil($scope.news.length / $scope.itemsPerPage);
	};
	
	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				  end = begin + $scope.itemsPerPage;
				  console.log('watch news : ' + $scope.news);
				  $scope.filteredNews = $scope.news.slice(begin,end);		
	});
	
});

app.controller('noticesCtrl', function($scope, noticesService){
	$scope.notices = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	$scope.filteredNotices = [];
	$scope.totalItems = 0;
	
	noticesService.getNotices().then(function(notices){
		if(notices.hasOwnProperty('exception')){
			alert(notices.exception);
		}else{
			$scope.notices = notices.notices;
		}
		$scope.totalItems = $scope.notices.length;;
		$scope.itemsPerPage = 5;
		$scope.currentPage = 1;
		
		$scope.maxSize = 5;
		
		console.log(notices);
	});
	
	$scope.pageCount = function () {
		return Math.ceil($scope.notices.length / $scope.itemsPerPage);
	};
	
	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				  end = begin + $scope.itemsPerPage;
				  console.log('watch notices : ' + $scope.notices);
				  $scope.filteredNotices = $scope.notices.slice(begin,end);		
	});
	
});

app.controller('eventsCtrl', function($scope, eventsService){
	$scope.events = [];
	// 	var config = {
	// 		headers: {
	//         	'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	//         	'Accept': 'application/json',
	//         	'Content-Type': 'application/x-www-form-urlencoded',
	//     	}
	//     };
	$scope.filteredEvents = [];
	$scope.totalItems = 0;
	
	eventsService.getEvents().then(function(events){
		if(events.hasOwnProperty('exception')){
			alert(events.exception);
		}else{
			$scope.events = events.events;
		}
		$scope.totalItems = $scope.events.length;;
		$scope.itemsPerPage = 5;
		$scope.currentPage = 1;
		
		$scope.maxSize = 5;
		
		console.log(events);
	});
	
	$scope.pageCount = function () {
		return Math.ceil($scope.events.length / $scope.itemsPerPage);
	};
	
	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				  end = begin + $scope.itemsPerPage;
				  console.log('watch events : ' + $scope.events);
				  $scope.filteredEvents = $scope.events.slice(begin,end);		
	});
	
});
