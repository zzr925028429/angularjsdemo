/**
 * Created by zzr on 16/4/22.
 */
angular.module('confirmorder.controller', [])

  .controller('ConfirmOrderCtrl', function($scope,$state) {
    $scope.txmessage=function(){
      $state.go("tab.ordermessage");
    }

  })
