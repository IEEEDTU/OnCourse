var app = angular.module('admin', [ ]);

/*app.config(['$stateProvider', 
	function($stateProvider){
		$stateProvider
			.state('app', {
      url: '/js',
            views: {
              '@': {
                templateUrl: '/app/layout/layout.html'
              },
              'calendar@app' : { 
                templateUrl: 'calendar-panel.html'
              }
            },
          });
	}])*/

app.directive('headerPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'header-panel.html'
		
	};
});

app.directive('sidebarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'sidebar-panel.html'

	};
});

/*app.directive('csidebarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'csidebar-panel'
		

	};
});
*/
app.directive('noticeBoard', function() {
	return {
		restrict: 'E',
		templateUrl: 'notice-board.html'

	};
});

app.directive('calendarPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'calendar-panel.html'

	};
});

app.controller('CsidebarController', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
        });

app.directive('coursesPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'courses-panel.html'

	};
});

app.directive('quickLinks', function() {
	return {
		restrict: 'E',
		templateUrl: 'quick-links.html'

	};
});

app.controller('EmailController',function(){
	// body...
	this.mail = [
		{
			id: "123@456.com",
			message: "hello"
		},
		{
			id : "abc@alpha.com",
			message: "hello there how are you"
		},
		{
			id: "xyz@beta.com",
			message: "hello world"
		}
		];
	});

/*app.controller('CsidebarController', function () {
  this.isCollapsed = true;
});*/

app.directive('coursesOdd', function(){
	return {
		restrict: 'E',
		templateUrl: 'courses-odd.html'
		
	};
});

app.directive('coursesEven', function(){
	return {
		restrict: 'E',
		templateUrl: 'courses-even.html'
		
	};
});

/*var gems = [
	{
		id: "123@456.com",
		message: "hello"
	},
		{
			id : "abc@alpha.com",
			message: "hello there how are you"
		},
		{
			id: "xyz@beta.com",
			message: "hello world"
		}
		];*/
