angular.module('App')
.controller('BiographyController', function ($scope, Presenters, $firebaseArray) {
    $scope.Presenters = Presenters.all();
    $scope.remove = function(Presenter) {
    Presenters.remove(Presenter);
  };
  
})