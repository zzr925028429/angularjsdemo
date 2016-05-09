/**
 * Created by zzr on 16/4/22.
 */
angular.module('detailedroute.controller', [])

  .controller('RouteDetailedCtrl', function($scope, $state) {
   $scope.goorder=function(){
     $state.go('tab.confirmorder');
   }

    var currentDate=new Date();
    $scope.onezoneDatepicker = {
      date: currentDate, // MANDATORY
      mondayFirst: false,
      months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      daysOfTheWeek: ['一', '二', '三', '四', '五', '六', '日'],
      startDate: new Date(2016, 2, 1),
      endDate: new Date(2016, 10, 1),
      disablePastDays: true,
      disableSwipe: false,
      disableWeekend: false,
      disableDates: false,
      disableDaysOfWeek:false,
      showDatepicker: false,
      showTodayButton: true,
      calendarMode: false,
      hideCancelButton: false,
      hideSetButton: false,
      highlights:[
        {
          date: new Date(2016, 4, 7),
          color: '#FF0000',
          textColor: '#7CFC00'
        },
        {
          date: new Date(2016, 4, 18),
          color: '#7CCD7C',
          textColor: '#FF0000'
        },
        {
          date: new Date(2016, 4, 19),
          color: '#FF0000',
          textColor: '#7CFC00',
          text:'11'
        },
        {
          date: new Date(2016, 4, 20)
        }
      ],
      callback: function (value) {
       alert(value);
      }
    }
  });
