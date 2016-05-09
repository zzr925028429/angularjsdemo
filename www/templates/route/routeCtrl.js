/**
 * Created by zzr on 16/4/22.
 */
angular.module('route.controller', [])

  .controller('RouteCtrl', function ($rootScope, $scope, $state, $stateParams, $templateCache,Chats) {



    //if ($stateParams.routeid == 1) {
    //  $state.go('tab.routedetailed');
    //  $stateParams.routeid = -1;
    //}
    //if ($rootScope.routeid == 1) {
    //  $state.go('tab.routedetailed');
    //  $rootScope.routeid = -1;
    //}
    var va=Chats.add();
    console.log(va);
    $scope.onSwipeUp = function () {
      alert("hhhh");
    };
    $scope.routeitem = function () {
      console.log("aaa");
      $state.go('tab.routedetailed');
    }


  })
