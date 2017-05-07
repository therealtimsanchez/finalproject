angular.module('App.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BiographyController', function($scope, presenter) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.presenter = presenter.all();
  $scope.remove = function(chat) {
    presenter.remove(chat);
  };
})

.controller('BiographyController', function($scope, $stateParams, presenter) {
  $scope.chat = presenter.get($stateParams.chatId);
})
