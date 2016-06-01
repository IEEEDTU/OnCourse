
var app = angular.module('modalApp', ['ui.bootstrap']);

app.factory('fieldsModalService', function($http) {
	return {
		getFields : function() {
			return $http.get("http://127.0.0.1:8000/profiler/retrieveFields").then(function(response) {
				return response.data;
			});
		}
	}
});

app.factory('skillsModalService', function($http) {
	return {
		getSkills : function() {
			return $http.get("http://127.0.0.1:8000/profiler/retrieveSkills").then(function(response) {
				return response.data;
			});
		}
	}
});

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
				'&startDate=' + "2016-05-12" +//$scope.project.startDate +
				'&endDate=' + "2016-05-12" +//$scope.project.endDate +
				'&projectType=' + $scope.project.projectType + 
				'&teamSize=' + $scope.project.teamSize +
				'&rollNo=2K12/SE/059';
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
          alert('Project added successfully, Refresh the page to see!');
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

var editAboutModalInstanceCtrl = function ($scope, $modalInstance, $http, aboutForm, fieldsModalService, skillsModalService) {
    $scope.form = {}
    $scope.ff = true;
	$scope.fs = true;
    $scope.fDelCount = 0;
	$scope.fAddCount = 0;
	$scope.fDel = [];
	$scope.fAdd = [];
    $scope.fields = [];
	$scope.sDelCount = 0;
	$scope.sAddCount = 0;
	$scope.sDel = [];
	$scope.sAdd = [];
	$scope.skills = [];
	
	fieldsModalService.getFields().then(function(fields){
		if(fields.hasOwnProperty('exception')){
			alert(fields.exception);
		}else{
			$scope.fields = fields.fields;
			
		}
		console.log(fields);
	});
	
	skillsModalService.getSkills().then(function(skills){
		if(skills.hasOwnProperty('exception')){
			alert(skills.exception);
		}else{
			$scope.skills = skills.skills;
			
		}
		console.log(skills);
	});
	
	$scope.addField = function(interest){
		$scope.fAddCount++;
		$scope.fAdd[$scope.fAddCount] = interest;
	}
	
	$scope.delField = function(fId){
		$scope.fDelCount++;
		$scope.fDel[$scope.fDelCount] = fId;
	}
	
	$scope.addSkill = function(sk){
		$scope.sAddCount++;
		$scope.sAdd[$scope.sAddCount] = sk;
	}
	
	$scope.delSkill = function(sId){
		$scope.sDelCount++;
		$scope.sDel[$scope.sDelCount] = sId;
	}
	
    $scope.submitForm = function () {
		console.log('about form is in scope');
		var i;
        if ($scope.fDelCount > 0) {
			for(i = 1; i <= $scope.fDelCount; i++){
				$scope.data = 'id=' + $scope.fDel[i]; 
				$http({
					method: 'POST',
					url: 'http://127.0.0.1:8000/profiler/deleteField/',
					data: $scope.data,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function(response){
					if(response.data.hasOwnProperty('exception')){
						alert(response.data.exception);
					}else{
						$scope.response = response.data;
						alert('Field deleted successfully');
					}
				});
			}
		}
		if ($scope.fAddCount > 0) {
			for(i = 1; i <= $scope.fAddCount; i++){
				$scope.data = 'fieldName=' + $scope.fAdd[i]; 
				$http({
					method: 'POST',
					url: 'http://127.0.0.1:8000/profiler/addField/',
					data: $scope.data,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function(response){
					if(response.data.hasOwnProperty('exception')){
						alert(response.data.exception);
					}else{
						$scope.response = response.data;
						alert('Field added successfully');
					}
				});
			}
		}
		if ($scope.sDelCount > 0) {
			for(i = 1; i <= $scope.sDelCount; i++){
				$scope.data = 'id=' + $scope.sDel[i]; 
				$http({
					method: 'POST',
					url: 'http://127.0.0.1:8000/profiler/deleteSkill/',
					data: $scope.data,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function(response){
					if(response.data.hasOwnProperty('exception')){
						alert(response.data.exception);
					}else{
						$scope.response = response.data;
						alert('Skill deleted successfully');
					}
				});
			}
		}
		if ($scope.sAddCount > 0) {
			for(i = 1; i <= $scope.sAddCount; i++){
				$scope.data = 'skillName=' + $scope.sAdd[i]; 
				$http({
					method: 'POST',
					url: 'http://127.0.0.1:8000/profiler/addSkill/',
					data: $scope.data,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function(response){
					if(response.data.hasOwnProperty('exception')){
						alert(response.data.exception);
					}else{
						$scope.response = response.data;
						alert('Skill added successfully');
					}
				});
			}
		}
		$modalInstance.close('closed');
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
