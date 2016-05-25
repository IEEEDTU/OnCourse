var app = angular.module('modalApp', ['ui.bootstrap']);

/*----- Modal Controllers -----*/
// For adding resources -----------------
app.controller("resourceModalCtrl", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.addBookDialog = function (selected){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
            $scope.selected = selected;

            var modalInstance = $modal.open({
                templateUrl: 'add-book-modal.html',
                controller: addBookModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    bookForm: function () {
                        return $scope.bookForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.addPublicationDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'add-publication-modal.html',
                controller: addPublicationModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    publicationForm: function () {
                        return $scope.publicationForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.addDocumentDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'add-document-modal.html',
                controller: addDocumentModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    documentForm: function () {
                        return $scope.documentForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.addWebLinkDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'add-weblink-modal.html',
                controller: addWebLinkModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    webLinkForm: function () {
                        return $scope.webLinkForm;
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

var addBookModalInstanceCtrl = function ($scope, $modalInstance, bookForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.bookForm.$valid) {
            console.log('bookForm is in scope');
            console.log($scope.form.bookForm);
            $modalInstance.close('closed');
        } else {
            console.log('bookForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

var addPublicationModalInstanceCtrl = function ($scope, $modalInstance, publicationForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.publicationForm.$valid) {
            console.log('publicationForm is in scope');
            console.log($scope.form.publicationForm);
            $modalInstance.close('closed');
        } else {
            console.log('publicationForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

var addDocumentModalInstanceCtrl = function ($scope, $modalInstance, documentForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.documentForm.$valid) {
            console.log('documentForm is in scope');
            console.log($scope.form.documentForm);
            $modalInstance.close('closed');
        } else {
            console.log('documentForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

var addWebLinkModalInstanceCtrl = function ($scope, $modalInstance, webLinkForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.webLinkForm.$valid) {
            console.log('webLinkForm is in scope');
            console.log($scope.form.webLinkForm);
            $modalInstance.close('closed');
        } else {
            console.log('webLinkForm is not in scope');
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