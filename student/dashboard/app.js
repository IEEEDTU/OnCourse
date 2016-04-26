/*---------------------------------------
This file contain main layout directives:
a. Notice Board
b. Course Panel
c. Calendar Widget
d. Quick Links
---------------------------------------*/

var app = angular.module('dashboard', ['cms']);

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

app.controller('noticeBoardCtrl', function(){
	this.news = [{
		headline:"Jigyasa Grover, Umair Khan, Laavanye Bahl, Prempal Singh, Falit Jain, Saksham Saxena, Aanchal Somani selected for Google Summer of Code (GSoC) 2016",
		date:"2016-05-25"
	},
	{
		headline:"Akash Tayal in top 5 in GRE",
		date:"2016-05-12"
	},
	{
		headline:"Nitish Kumar secured AIR 500 in GATE",
		date:"2016-05-12"
	},
	{
		headline:"Nitish Kumar secured AIR 500 in GATE",
		date:"2016-05-12"
	},
	{
		headline:"Nitish Kumar secured AIR 500 in GATE",
		date:"2016-05-12"
	},
	{
		headline:"Nitish Kumar secured AIR 500 in GATE",
		date:"2016-05-12"
	},
	{
		headline:"Nitish Kumar secured AIR 500 in GATE",
		date:"2016-05-12"
	},
	{
		headline:"Nitish Kumar secured AIR 500 in GATE",
		date:"2016-05-12"
	}];

	this.notices = [{
		subject:"DWHM examination postponed",
		date:"2014-05-12"
	},
	{
		subject:"DWHM examination postponed",
		date:"2014-05-12"
	},
	{
		subject:"DWHM examination postponed",
		date:"2014-05-12"
	},
	{
		subject:"DWHM examination postponed",
		date:"2014-05-12"
	}];

	this.events = [{
		eventName:"ICICI Trinity Orientation",
		date:"2014-05-12"
	},
	{
		eventName:"ICICI Trinity Orientation",
		date:"2014-05-12"
	},
	{
		eventName:"ICICI Trinity Orientation",
		date:"2014-05-12"
	}];
});
