/**
 * Created by zzr on 16/4/22.
 */
angular.module('exchangedet.controller', [])

  .controller('DetailedExchangeCtrl', function ($scope, $state, $stateParams, Chats) {
    var chats;
    chats = Chats.get(1);
    $scope.cardsbtn = function (value) {
      chats = Chats.get(value);
      $scope.card = chats.face;
      //  addClass('activated');

    }
    $scope.card = chats.face;

//数量

    $scope.num = 1;
    $scope.price = 1000;
    var sum;
    var price1 = 1000;
    $scope.addnum = function () {
      $scope.num += 1
      $scope.price = 1000 * $scope.num;
    }
    $scope.reducenum = function () {
      if ($scope.num <= 1 || $scope.price <= 1000) {
        $scope.num = 1
        $scope.price = 1000;
      } else {
        $scope.num--;
        $scope.price = $scope.price - price1;
      }

    }


  })
