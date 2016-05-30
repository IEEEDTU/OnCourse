var app = angular.module('result', []);

// Result Panel ------------------------
// For editing
app.directive('editResultPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'edit-result-panel.html'
	};
});

// For display
app.directive('displayResultPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'display-result-panel.html'
	};
});


app.controller('resultCtrl', function($scope){
  $scope.scores = [];
  for(var i=0;i<100;i++)
  {
    $scope.scores[i]={
      rollNo:"2K12/SE/00" + (i+1),
      sessMarks:0,
      endMarks:0
    };
  }
});
