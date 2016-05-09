/**
 * Created by zzr on 16/4/22.
 */
angular.module('user.controller', [])

  .controller('UserCtrl', function($scope,$http,$state) {
$scope.userone=function(){
 // $state.go('tab.userone');
  $state.go('tab.login');
}




  })

