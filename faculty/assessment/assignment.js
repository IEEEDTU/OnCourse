var app = angular.module('assignment', []);

// Evaluation Panel ------------------------
// For editing
app.directive('editEvaluationPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'edit-evaluation-panel.html'
	};
});

// For displaying
app.directive('displayEvaluationPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'display-evaluation-panel.html'
	};
});


app.controller('evaluationCtrl', function($scope){
  $scope.responses = [];
  for(var i=0;i<100;i++)
  {
    $scope.responses[i]={
      rollNo:"2K12/SE/00" + (i+1),
      link:"http://www.google.com",
      grade:"A"
    };
  }
});
