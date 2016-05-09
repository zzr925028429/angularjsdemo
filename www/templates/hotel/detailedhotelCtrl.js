/**
 * Created by zzr on 16/4/24.
 */
angular.module('detailedHotel.controller', [])

  .controller('DetailedHotelCtrl', function($scope,$state,Chats) {
    //轮播图
    $scope.slideimgs = Chats.all();
    $scope.index = 0;
    $scope.go = function (index) {
      console.log(index)
    }
    $scope.go_changed = function (index) {
      console.log(index)
    }

//隐藏/显示
    $scope.reserve = true;
    $scope.toggle = function() {
      $scope.reserve = !$scope.reserve;
    }
  })


