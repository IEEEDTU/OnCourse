var app = angular.module('modalApp', ['ui.bootstrap']);

/*----- Modal Controllers -----*/
// For displaying & creating  news -----------------
app.controller("newsModalCtrl", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.displayNewsDialog = function (news) {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
			$scope.news = news;

            var modalInstance = $modal.open({
                templateUrl: 'display-news-modal.html',
                controller: newsModalInstanceCtrl,
                scope: $scope
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.createNewsDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'create-news-modal.html',
                controller: createNewsModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    newsForm: function () {
                        return $scope.newsForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
}]);

var newsModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
};

var createNewsModalInstanceCtrl = function ($scope, $modalInstance, newsForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.newsForm.$valid) {
            console.log('news form is in scope');
            console.log($scope.form.newsForm.headline);
            $modalInstance.close('closed');
        } else {
            console.log('newsForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


// For displaying & creating event -----------------
app.controller("eventModalCtrl", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.displayEventDialog = function (event) {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
			$scope.event = event;

            var modalInstance = $modal.open({
                templateUrl: 'display-event-modal.html',
                controller: displayEventModalInstanceCtrl,
                scope: $scope
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.createEventDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'create-event-modal.html',
                controller: createEventModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    eventForm: function () {
                        return $scope.eventForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
}]);

var displayEventModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
};

var createEventModalInstanceCtrl = function ($scope, $modalInstance, eventForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.eventForm.$valid) {
            console.log('event form is in scope');
            console.log($scope.form.eventForm.eventName);
            $modalInstance.close('closed');
        } else {
            console.log('eventForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

app.directive('validFile',function(){
  return {
    require:'ngModel',
    link:function(scope,el,attrs,ngModel){
      el.bind('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      });
    }
  }
});