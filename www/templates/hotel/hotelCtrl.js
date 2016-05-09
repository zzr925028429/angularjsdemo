/**
 * Created by zzr on 16/4/24.
 */
angular.module('hotel.controller', [])

  .controller('HotelCtrl', function($scope,$state,$stateParams) {
    $scope.mylocation=function(){
      $state.go('tab.map');
    }
    $scope.selecthotel=function(){

      $state.go('tab.selecthotel');
    }


  })
