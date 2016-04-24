angular.module('csidebar', ['ngAnimate', 'ui.bootstrap']);
angular.module('csidebar').controller('CsidebarController', function ($scope) {
  $scope.isCollapsed = false;
});