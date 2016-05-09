/**
 * Created by zzr on 16/5/4.
 */
angular.module('router.services', [])
.service('Myser', function($http,$q,$state,locals) {
this.get=function(){
  var deferred = $q.defer();// 声明延后执行，表示要去监控后面的执行

   $http({
    url: './myjs/data1.json',
    method: 'GET'
  }).success(function (data, header, config, status) {
    //响应成功
    console.log(data.records[0].Name)
     deferred.resolve(data);// 声明执行成功，即http请求数据成功，可以返回数据了
  }).error(function (data, header, config, status) {
    //处理响应失败
     deferred.reject(data);// 声明执行失败，即服务器返回错误
  });

  return deferred.promise;// 返回承诺，这里并不是最终数据，而是访问最终数据的API
};



this.login=function(userinfo){
  var loginq = $q.defer();
  $http({
    url: './myjs/data.json',
    method: 'GET'
  }).success(function (data, header, config, status) {
    //响应成功
    if(data.login.name==userinfo.name && data.login.pass==userinfo.pass){

      locals.setObject("user",userinfo);
      loginq.resolve(data);
      console.log(locals.getObject('user'));
      $state.go('tab.user');
    }else {
   loginq.resolve("xxxxxx")
    }

  }).error(function (data, header, config, status) {
    //处理响应失败
    loginq.resolve("处理响应失败");
  });
 return loginq.promise;
}

  //this.post=function(){
  //  var deferred = $q.defer();// 声明延后执行，表示要去监控后面的执行
  //
  //  $http({
  //    url: './myjs/data1.json',
  //    data:{name:"aa"},
  //    method: 'POST'
  //  }).success(function (data, header, config, status) {
  //    //响应成功
  //    console.log(data)
  //    deferred.resolve(data);// 声明执行成功，即http请求数据成功，可以返回数据了
  //  }).error(function (data, header, config, status) {
  //    //处理响应失败
  //    deferred.reject(data);// 声明执行失败，即服务器返回错误
  //  });
  //
  //  return deferred.promise;
  //}

})
