/**
 * Created by zzr on 16/4/22.
 */
angular.module('exchange.controller', [])

  .controller('ExchangeCtrl', function($scope,$state) {
$scope.ckexchange=function(){
  $state.go('tab.detailedexchange')
}
  })
