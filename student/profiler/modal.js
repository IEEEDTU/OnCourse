var app = angular.module('modalApp', ['ui.bootstrap']);

/*----- Modal Controllers -----*/
// For displaying & creating  project -----------------
app.controller("projectModalCtrl", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.addProjectDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'add-project-modal.html',
                controller: addProjectModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    projectForm: function () {
                        return $scope.projectForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.editProjectDialog = function (project){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
            $scope.project = project;

            var modalInstance = $modal.open({
                templateUrl: 'edit-project-modal.html',
                controller: editProjectModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    projectForm: function () {
                        return $scope.projectForm;
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

var addProjectModalInstanceCtrl = function ($scope, $modalInstance, projectForm, $http) {
    $scope.form = {}
    $scope.project = {}
    $scope.submitForm = function () {
        if ($scope.form.projectForm.$valid) {
            console.log('project form is in scope');
			console.log($scope.project.startDate);
			$scope.data = 'title=' + $scope.project.title + 
				'&description=' + $scope.project.description + 
				'&highlight=' + $scope.project.highlight + 
				'&startDate=' + $scope.project.startDate +
				'&endDate=' + $scope.project.endDate + 
				'&projectType=' + $scope.project.projectType + 
				'&teamSize=' + $scope.project.teamSize +
				'&rollNo=2K12/SE/001';
			console.log($scope.data);
			$http({
				method: 'POST',
				url: 'http://127.0.0.1:8000/profiler/addProject/',
				data: $scope.data,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(response){
				if(response.data.hasOwnProperty('exception')){
					alert(response.data.exception);
				}else{
					$scope.response = response.data;
				}
			});
            console.log($scope.form.projectForm.title);
            $modalInstance.close('closed');
        } else {
            console.log('projectForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

var editProjectModalInstanceCtrl = function ($scope, $modalInstance, projectForm, $http) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.projectForm.$valid) {
            console.log('project form is in scope');
            console.log($scope.form.projectForm.title);
			$scope.data = 'title=' + $scope.project.title + 
			'&description=' + $scope.project.description + 
			'&highlight=' + $scope.project.highlight + 
			'&startDate=' + $scope.project.startDate +
			'&endDate=' + $scope.project.endDate + 
			'&projectType=' + $scope.project.projectType + 
			'&teamSize=' + $scope.project.teamSize +
			'&rollNo=2K12/SE/001';
			console.log($scope.data);
			$http({
				method: 'POST',
		 url: 'http://127.0.0.1:8000/profiler/addProject/',
		 data: $scope.data,
		 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(response){
				if(response.data.hasOwnProperty('exception')){
					alert(response.data.exception);
				}else{
					$scope.response = response.data;
				}
			});
            $modalInstance.close('closed');
        } else {
            console.log('projectForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


// For editing about me details -----------------
app.controller("aboutModalCtrl", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.editAboutDialog = function (details){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
            $scope.details = details;

            var modalInstance = $modal.open({
                templateUrl: 'edit-about-me-modal.html',
                controller: editAboutModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    aboutForm: function () {
                        return $scope.aboutForm;
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

var editAboutModalInstanceCtrl = function ($scope, $modalInstance, aboutForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.aboutForm.$valid) {
            console.log('about form is in scope');
            console.log($scope.form.aboutForm);
            $modalInstance.close('closed');
        } else {
            console.log('aboutForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
