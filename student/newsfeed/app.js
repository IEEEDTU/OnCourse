/*---------------------------------------
Directives & Controller of Course app:
a. News Panel
b. Notice Panel
c. Event Panel
d. Announcement Panel
---------------------------------------*/

var app = angular.module('newsfeed', ['cms', 'ui.bootstrap', 'modalApp']);

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
	this.news = [{
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here.",
		time: "12-04-2016 12:05",
		image: "../../assets/dist/img/photo1.png",
		link: "www.google.com"
	},
	{
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here.",
		time: "12-04-2016 12:05",
		image: "../../assets/dist/img/photo1.png",
		link: "www.google.com"
	},
	{
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here.",
		time: "12-04-2016 12:05",
		image: "../../assets/dist/img/photo1.png",
		link: "www.google.com"
	},
	{
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here.",
		time: "12-04-2016 12:05",
		image: "../../assets/dist/img/photo1.png",
		link: "www.google.com"
	},
	{
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here.",
		time: "12-04-2016 12:05",
		image: "../../assets/dist/img/photo1.png",
		link: "www.google.com"
	}];

	this.notices = [{
		subject: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		issueDate: "Dated: 12-04-2016",
		fileLink: "www.google.com"
	},
	{
		subject: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		issueDate: "Dated: 12-04-2016",
		fileLink: "www.google.com"
	},
	{
		subject: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		issueDate: "Dated: 12-04-2016",
		fileLink: "www.google.com"
	},
	{
		subject: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		issueDate: "Dated: 12-04-2016",
		fileLink: "www.google.com"
	}];
});

// Notice Controller
app.controller('noticeCtrl', function(){
});

// Event Controller
app.controller('eventCtrl', function(){
	this.events = [{
		eventName: "ICICI Trinity Orientation",
		description: "Orientation of Trinity challenge 2016 in association with ICICI Orientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICI",
		image: "../../assets/dist/img/photo1.png",
		organisedBy: "Society of Software Engineers",
		startDateTime: {day: "27", month: "May", year: "2016", hour: "11", minute: "30"},
		endDateTime: {day: "27", month: "May", year: "2016", hour: "21", minute: "30"},
		website: "http://www.google.com",
		fbEvent: "http://www.facebook.com",
		venue: "Senate Hall, Admin Block",
		mobile: "+91-9999555666",
		email: "xyz@gmail.com"
	},
	{
		eventName: "ICICI Trinity Orientation",
		description: "Orientation of Trinity challenge 2016 in association with ICICI Orientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICI",
		image: "../../assets/dist/img/photo1.png",
		organisedBy: "Society of Software Engineers",
		startDateTime: {day: "27", month: "May", year: "2016", hour: "11", minute: "30"},
		endDateTime: {day: "27", month: "May", year: "2016", hour: "21", minute: "30"},
		website: "http://www.google.com",
		fbEvent: "http://www.facebook.com",
		venue: "Senate Hall, Admin Block",
		mobile: "+91-9999555666",
		email: "xyz@gmail.com"
	},
	{
		eventName: "ICICI Trinity Orientation",
		description: "Orientation of Trinity challenge 2016 in association with ICICI Orientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICI",
		image: "../../assets/dist/img/photo1.png",
		organisedBy: "Society of Software Engineers",
		startDateTime: {day: "27", month: "May", year: "2016", hour: "11", minute: "30"},
		endDateTime: {day: "27", month: "May", year: "2016", hour: "21", minute: "30"},
		website: "http://www.google.com",
		fbEvent: "http://www.facebook.com",
		venue: "Senate Hall, Admin Block",
		mobile: "+91-9999555666",
		email: "xyz@gmail.com"
	},
	{
		eventName: "ICICI Trinity Orientation",
		description: "Orientation of Trinity challenge 2016 in association with ICICI Orientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICI",
		image: "../../assets/dist/img/photo1.png",
		organisedBy: "Society of Software Engineers",
		startDateTime: {day: "27", month: "May", year: "2016", hour: "11", minute: "30"},
		endDateTime: {day: "27", month: "May", year: "2016", hour: "21", minute: "30"},
		website: "http://www.google.com",
		fbEvent: "http://www.facebook.com",
		venue: "Senate Hall, Admin Block",
		mobile: "+91-9999555666",
		email: "xyz@gmail.com"
	},
	{
		eventName: "ICICI Trinity Orientation",
		description: "Orientation of Trinity challenge 2016 in association with ICICI Orientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICIOrientation of Trinity challenge 2016 in association with ICICI",
		image: "../../assets/dist/img/photo1.png",
		organisedBy: "Society of Software Engineers",
		startDateTime: {day: "27", month: "May", year: "2016", hour: "11", minute: "30"},
		endDateTime: {day: "27", month: "May", year: "2016", hour: "21", minute: "30"},
		website: "http://www.google.com",
		fbEvent: "http://www.facebook.com",
		venue: "Senate Hall, Admin Block",
		mobile: "+91-9999555666",
		email: "xyz@gmail.com"
	}];
});

// Announcement Controller
app.controller('announcementCtrl', function(){
	this.announcement = [{
		time: "12:05",
		heading: "Civil department is holding the practical exams from 14th May",
		description: "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...",
		course: "Object Oriented Programming"
	},
	{
		time: "12:05",
		heading: "Civil department is holding the practical exams from 14th May",
		description: "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...",
		course: "Object Oriented Programming"
	},
	{
		time: "12:05",
		heading: "Civil department is holding the practical exams from 14th May",
		description: "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...",
		course: "Object Oriented Programming"
	},
	{
		time: "12:05",
		heading: "Civil department is holding the practical exams from 14th May",
		description: "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...",
		course: "Object Oriented Programming"
	},
	{
		time: "12:05",
		heading: "Civil department is holding the practical exams from 14th May",
		description: "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...",
		course: "Object Oriented Programming"
	}];
});
