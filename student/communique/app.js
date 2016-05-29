/*---------------------------------------
Directives & Controller of Communique app:
a. mailbox panel
b. read mail panel
c. compose mail panel
---------------------------------------*/

var app = angular.module('communique', ['cms']);

// Mailbox Panel ------------------------
app.directive('mailboxPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'mailbox-panel.html'
	};
});

// Read Mail Panel ------------------------
app.directive('readMailPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'read-mail-panel.html'
	};
});

// Compose Mail Panel ------------------------
app.directive('composeMailPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'compose-mail-panel.html'
	};
});

// Mailbox Controller
app.controller('mailboxCtrl', [ '$scope', '$http', '$window', function($scope, $http, $window){
	$scope.mail = {};
	$scope.sendMail = function(){
		console.log($scope.mail.message_text);
		//$window.location.href = "http://localhost:8080?to=" + $scope.mail.to + "&subject=" + $scope.mail.subject + "&message_text=" + $scope.mail.message_text;
		$http.get("http://localhost:8080?to=" + $scope.mail.to + "&subject=" + $scope.mail.subject + "&message_text=" + $scope.mail.message_text)
		.then(function(response){
			alert(response.data);
		});
	}
	
}]);
