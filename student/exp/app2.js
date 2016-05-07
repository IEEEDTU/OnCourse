var app = angular.module("modalDisplayApp", ['ui.bootstrap']);
app.controller("modalDialogController", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.showDialog = function () {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'modal.html',
                controller: ModalInstanceCtrl,
                scope: $scope
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
}]);

var ModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
};