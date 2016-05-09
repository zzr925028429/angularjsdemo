/**
 * Created by zzr on 16/4/22.
 */
angular.module('home.controller', [])

  .controller('HomeCtrl', function ($rootScope, $scope, $state, Chats, Myser) {

    var promise = Myser.get();

    promise.then(function (data) {  // 调用承诺API获取数据 .resolve
      console.log(data.records[0].Name);

    }, function (data) {  // 处理错误 .reject
      console.log(data)
    });


//详细页跳转
    $scope.lxitem = function () {
      //  $rootScope.jumpUri ="travel://route/1";
      // $rootScope.routeid=1;
      Chats.add(1)
      $state.go('tab.route');


    }
    $scope.rxitem = function () {
      $rootScope.routeid = 2;
      $state.go('tab.route');

    }

    $scope.jditem = function () {
      $rootScope.hotelid = 1;
      $state.go('tab.hotel');
    }
    $scope.dhitem = function () {
      $state.go('tab.detailedexchange');
    }


    //轮播图
    $scope.slideimgs = Chats.all();
    $scope.index = 0;
    //角标点击
    $scope.goid = function (index) {
      console.log(index)
    }
    //自动轮询
    $scope.go_changed = function (index) {
      console.log(index)
    }
    //图片点击
    $scope.slideimg = function (imginfoid) {
      alert(imginfoid);
    }

  })
