function MainController($scope) {
  $scope.name = 'Deniz';
}

angular
  .module('app')
  .controller('MainController', MainController);