/*---------------------------------------
This file contain main layout directives:
a. Notes Panel
b. Calendar Widget
c. Todo List Panel
d. Calendar Panel
---------------------------------------*/

var app = angular.module('workspace', ['cms']);

// Notes Panel ------------------------
app.directive('notesPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'notes-panel.html'
	};
});

// Calendar Widget ------------------------
app.directive('calendarWidget', function(){
	return {
		restrict: 'E',
		templateUrl: 'calendar-widget.html'
	};
});

// Todo List Panel ------------------------
app.directive('todoListPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'todo-list-panel.html'
	};
});

app.controller('notesCtrl', function(){
});

app.controller('calendarCtrl', function(){
});

app.controller('todoListCtrl', function(){
});


// Calendar Panel ------------------------
app.directive('calendarPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'calendar-panel.html'
	};
});
