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

app.controller('newsCtrl', function($scope, $http){
	$scope.news = {};
	$http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreNews?rowsPerPage=" + 15 + "&pageNo=" + 1)
	.then(function(response){
		if(response.data.hasOwnProperty('exception')){
			alert(response.data.exception);
		}else{
			$scope.news = response.data.news;
			for(i=0;i<5;i++){
				$scope.filteredNews[i] = $scope.news[i];
			}
		}
	});

	$scope.totalItems = $scope.news.length;
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;
	
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	
	$scope.pageChanged = function() {
		console.log('Page changed to: ' + $scope.currentPage);
	};
	
	$scope.pageCount = function () {
		return Math.ceil($scope.news.length / $scope.itemsPerPage);
	};
	
	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				  end = begin + $scope.itemsPerPage;
		$scope.filteredNews = {};
		for(i=begin;i<end;i++){
			$scope.filteredNews[i] = $scope.news[i];
		}
		
	});
	
});

app.controller('noticesCtrl', function($scope, $http){
	$scope.notices = {};
	$http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreNotices?rowsPerPage=" + 15 + "&pageNo=" + 1)
	.then(function(response){
		if(response.data.hasOwnProperty('exception')){
			alert(response.data.exception);
		}else{
			$scope.notices = response.data.notices;
			for(i=0;i<5;i++){
				$scope.filteredNotices[i] = $scope.notices[i];
			}
		}
	});
	
	$scope.totalItems = $scope.notices.length;
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;
	
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	
	$scope.pageChanged = function() {
		console.log('Page changed to: ' + $scope.currentPage);
	};
	
	$scope.pageCount = function () {
		return Math.ceil($scope.notices.length / $scope.itemsPerPage);
	};
	
	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				  end = begin + $scope.itemsPerPage;
				  
		$scope.filteredNotices = {};
		for(i=begin;i<end;i++){
			$scope.filteredNotices[i] = $scope.notices[i];
		}
	});
	
});

app.controller('eventsCtrl', function($scope, $http){
	$scope.events = {};
	$http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreEvents?rowsPerPage=" + 15 + "&pageNo=" + 1)
	.then(function(response){
		if(response.data.hasOwnProperty('exception')){
			alert(response.data.exception);
		}else{
			$scope.events = response.data.events;
			for(i=0;i<5;i++){
				$scope.filteredEvents[i] = $scope.events[i];
			}
		}
	});
	
	$scope.totalItems = $scope.events.length;
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;
	
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	
	$scope.pageChanged = function() {
		console.log('Page changed to: ' + $scope.currentPage);
	};
	
	$scope.pageCount = function () {
		return Math.ceil($scope.events.length / $scope.itemsPerPage);
	};
	
	$scope.$watch('currentPage + itemsPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
				  end = begin + $scope.itemsPerPage;
				  
		$scope.filteredEvents = {};
		for(i=begin;i<end;i++){
			$scope.filteredEvents[i] = $scope.events[i];
		}
	});
	
});
