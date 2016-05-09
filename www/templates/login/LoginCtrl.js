/**
 * Created by zzr on 16/5/4.
 */
angular.module('login.controller', [])

  .controller('LoginCtrl', function($scope,$state,$stateParams,$http,Myser) {
    $scope.userinfo = {
      name: "",
      pass: ""

    };

    $scope.login=function(){

      var promise=Myser.login($scope.userinfo);
      promise.then(function(data){
        console.log(data)

      },function(data){
        console.log(data)
      })

    }



  })
