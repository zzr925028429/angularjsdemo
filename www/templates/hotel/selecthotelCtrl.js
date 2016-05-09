/**
 * Created by zzr on 16/4/24.
 */
angular.module('selecthotel.controller', [])

  .controller('SelectHotelCtrl', function($scope,$state,$stateParams) {
    $scope.address="北京市怀柔区大中富乐"
    $scope.seladdress=function(){
      $state.go('tab.map',{data:$scope.address});
    }

    console.log($stateParams.hotelid);
    if($stateParams.hotelid==1){
      $state.go('tab.detailedhotel');
    }
  })
