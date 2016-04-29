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
	this.headlines = [{
		time: "12-04-2016 12:05",
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here."
	},
	{
		time: "12-04-2016 12:05",
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here."
	},
	{
		time: "12-04-2016 12:05",
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here."
	},
	{
		time: "12-04-2016 12:05",
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here."
	},
	{
		time: "12-04-2016 12:05",
		headline: "News Headline",
		description: "Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Description about the attachment can be placed here.Description about the attachment can be placed here. Description about the attachment can be placed here."
	}];
	this.notices = [{
		headline: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		date: "Dated: 12-04-2016"
	},
	{
		headline: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		date: "Dated: 12-04-2016"
	},
	{
		headline: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		date: "Dated: 12-04-2016"
	},
	{
		headline: "Supplementary examination for B.Tech (eve) students / ex - students who are declared failed in the subjects of the odd semester 2015",
		date: "Dated: 12-04-2016"
	}];
});

// Notice Controller
app.controller('noticeCtrl', function(){
});

// Event Controller
app.controller('eventCtrl', function(){
	this.events = [{
		eventDate: "27",
		eventMonth: "Apr",
		eventTitle: "Training & Placements",
		eventVenue: "Senate Hall, Admin Block"
	},
	{
		eventDate: "27",
		eventMonth: "Apr",
		eventTitle: "Training & Placements",
		eventVenue: "Senate Hall, Admin Block"
	},
	{
		eventDate: "27",
		eventMonth: "Apr",
		eventTitle: "Training & Placements",
		eventVenue: "Senate Hall, Admin Block"
	},
	{
		eventDate: "27",
		eventMonth: "Apr",
		eventTitle: "Training & Placements",
		eventVenue: "Senate Hall, Admin Block"
	},
	{
		eventDate: "27",
		eventMonth: "Apr",
		eventTitle: "Training & Placements",
		eventVenue: "Senate Hall, Admin Block"
	}];
});

// Announcement Controller
app.controller('announcementCtrl', function(){
	this.timeline = [{
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
