angular.module('App')
.controller('DetailBiographyController', function($scope, Members, $stateParams){
    $scope.member = Members.get($stateParams.memberId)
})