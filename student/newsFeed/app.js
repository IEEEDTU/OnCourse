/*---------------------------------------
Directives & Controller of Course app:
a. News Panel
b. Notice Panel
c. Event Panel
d. Announcement Panel
---------------------------------------*/

var app = angular.module('newsfeed', ['cms']);

// News & Notice Panel ------------------------
app.directive('newsNoticePanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'news-notice-panel.html'
	};
});

// Event Panel ------------------------
app.directive('eventPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'event-panel.html'
	};
});

// Announcement Panel ------------------------
app.directive('announcementPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'announcement-panel.html'
	};
});


// News Controller
app.controller('newsCtrl', function(){
});

// Notice Controller
app.controller('noticeCtrl', function(){
});

// Event Controller
app.controller('eventCtrl', function(){
});

// Announcement Controller
app.controller('announcementCtrl', function(){
});
