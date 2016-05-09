/**
 * Created by zzr on 16/4/26.
 */
angular.module('order.controller', [])

  .controller('OrderCtrl', function($scope,$stateParams) {
console.log($stateParams.typeid)
    var typeid=$stateParams.typeid;
    if(typeid==1){
      console.log('11111')
    }else if(typeid==2){
      console.log('222')
    }else if(typeid==3){
      console.log('3333')
    }else if(typeid==4){
      console.log('4444')
    }


  })



