var app = angular.module('xcms', ['ngCookies']);

app.controller('mainCtrl', [ '$scope', '$http', '$cookies', '$cookieStore', function($scope, $http, $cookies, $cookieStore){
	
	$scope.setCookie = function(){
		$cookies.rollNo = '2K12/SE/001';
		$cookieStore.put('branch','SE');
		$cookieStore.put('degree','BTech');
		$cookieStore.put('admissionYear','2013');
	}
	
}]);
