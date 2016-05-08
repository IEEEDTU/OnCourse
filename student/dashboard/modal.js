var app = angular.module('modalApp', ['ui.bootstrap']);

/*----- Modal Controllers -----*/
// For displaying news -----------------
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
}]);

var newsModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
};


// For displaying event -----------------
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
}]);

var displayEventModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
};
