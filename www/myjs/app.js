
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','router.services','local.services',
  'main.controller',
  'exchange.controller','home.controller','route.controller','hotel.controller','user.controller'
  ,'map.controller','selecthotel.controller','detailedHotel.controller','order.controller','collect.controller',
  'userone.controller','setuser.controller','setusername.controller','password.controller','detailedroute.controller'
,'exchangedet.controller','confirmorder.controller','ordermessage.controller','login.controller',
'onezone-datepicker'

])


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {





//tab导航android在底部
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.android.views.transition('android');

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
      controller: 'MainCtrl'

  })

  // Each tab has its own nav history stack:
//首页
  .state('tab.home', {
    url: '/home',
    cache: true,
    views: {
      'tab-home': {
        templateUrl: 'templates/home/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
    //兑换券
    .state('tab.exchange', {
      url: '/home/exchange',
      views: {
        'tab-home': {
          templateUrl: 'templates/exchange/exchange.html',
          controller: 'ExchangeCtrl'
        }
      }
    })
    //兑换卷详细
    .state('tab.detailedexchange', {
      url: '/home/exchange/detailedexchange',
      views: {
        'tab-home': {
          templateUrl: 'templates/exchange/exchange-detailed.html',
          controller: 'DetailedExchangeCtrl'
        }
      }
    })

    //旅游路线
  .state('tab.route', {
      url: '/route?routeid',
    cache: true,
      views: {
        'tab-route': {
          templateUrl: 'templates/route/tab-route.html',
          controller: 'RouteCtrl'
        }
      }
    })
  //路线详细
    .state('tab.routedetailed', {
      url: '/route/routedetailed',
      views: {
        'tab-route': {
          templateUrl: 'templates/route/detailed-route.html',
          controller: 'RouteDetailedCtrl'
        }
      }
    })
    //确认订单
    .state('tab.confirmorder', {
      url: '/route/routedetailed/confirmorder',
      views: {
        'tab-route': {
          templateUrl: 'templates/route/confirmorder.html',
          controller: 'ConfirmOrderCtrl'
        }
      }
    })
    //订单信息
    .state('tab.ordermessage', {
      url: '/route/routedetailed/confirmorder/ordermessage',
      views: {
        'tab-route': {
          templateUrl: 'templates/route/ordermessage.html',
          controller: 'OrderMessageCtrl'
        }
      }
    })

//酒店
  .state('tab.hotel', {
    url: '/hotel?hotelid',
    views: {
      'tab-hotel': {
        templateUrl: 'templates/hotel/tab-hotel.html',
        controller: 'HotelCtrl'
      }
    }
  })
//搜索酒店
    .state('tab.selecthotel', {
      url: '/hotel/selecthotel?hotelid',
      views: {
        'tab-hotel': {
          templateUrl: 'templates/hotel/select-hotel.html',
          controller: 'SelectHotelCtrl'
        }
      }
    })
    //酒店详细
    .state('tab.detailedhotel', {
      url: '/hotel/selecthotel/detailedhotel',
      views: {
        'tab-hotel': {
          templateUrl: 'templates/hotel/detailed-hotel.html',
          controller: 'DetailedHotelCtrl'
        }
      }
    })
//地图
    .state('tab.map', {
      url: '/hotel/map?data',
      views: {
        'tab-hotel': {
          templateUrl: 'templates/map/map.html',
          controller: 'MapCtrl'
        }
      }
    })

//用户
  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/tab-user.html',
        controller: 'UserCtrl'
      }
    }
  })

  //登录
    .state('tab.login', {
      url: '/user/login',
      views: {
        'tab-user': {
          templateUrl: 'templates/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    //用户个人信息
    .state('tab.userone', {
      url: '/user/userone',
      views: {
        'tab-user': {
          templateUrl: 'templates/user/user-userone.html',
          controller: 'UserOneCtrl'
        }
      }
    })
    //账号设置
    .state('tab.setuser', {
      url: '/user/userone/setuser',
      views: {
        'tab-user': {
          templateUrl: 'templates/user/set-user.html',
          controller: 'SetUserCtrl'
        }
      }
    })
    //呢称修改
    .state('tab.setusername', {
      url: '/user/userone/setuser/setusername',
      views: {
        'tab-user': {
          templateUrl: 'templates/user/set-suername.html',
          controller: 'SetUserNameCtrl'
        }
      }
    })
    //密码修改
    .state('tab.password', {
      url: '/user/userone/setuser/password',
      views: {
        'tab-user': {
          templateUrl: 'templates/user/password.html',
          controller: 'PassWordCtrl'
        }
      }
    })
    //订单
  .state('tab.order', {
    url: '/user/order?typeid',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/user-order.html',
        controller: 'OrderCtrl'
      }
    }
  })
    //收藏
    .state('tab.collect', {
      url: '/user/collect',
      views: {
        'tab-user': {
          templateUrl: 'templates/collect/collect.html',
          controller: 'CollectCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
