var app = angular.module('xcms', ['ngCookies']);

app.controller('mainCtrl', [ '$scope', '$http', '$cookies', '$cookieStore', function($scope, $http, $cookies, $cookieStore){
	
	$scope.setCookie = function(){
		$cookies.rollNo = '2K12/SE/001';
		$cookieStore.put('branch',);
		$cookieStore.put('degree',);
		$cookieStore.put('admissionYear',);
	}
	
}]);
