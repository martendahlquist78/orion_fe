app.controller('DatepickerController', function ($scope) {
	  $scope.today = function() {
	    $scope.dt = new Date();
	  };
	  $scope.today();

	  $scope.clear = function () {
	    $scope.dt = null;
	  };

	  // Disable weekend selection
	  $scope.disabled = function(date, mode) {
	    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	  };

	  $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
	  };
	  $scope.maxDate = new Date(2020, 5, 22);

	  $scope.open = function($event) {
	    $scope.status.opened = true;
	  };

	  $scope.setDate = function(year, month, day) {
	    $scope.dt = new Date(year, month, day);
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
	  };

	  $scope.formats = ['dd/MM'];
	  $scope.format = $scope.formats[0];

	  $scope.status = {
	    opened: false
	  };

	  var tomorrow = new Date();
	  tomorrow.setDate(tomorrow.getDate() + 1);
	  var afterTomorrow = new Date();
	  afterTomorrow.setDate(tomorrow.getDate() + 2);
	  $scope.events =
	    [
	      {
	        date: tomorrow,
	        status: 'full'
	      },
	      {
	        date: afterTomorrow,
	        status: 'partially'
	      }
	    ];
	  $scope.getDayClass = function(date, mode) {
	    if (mode === 'day') {
	      var dayToCheck = new Date(date).setHours(0,0,0,0);

	      for (var i=0;i<$scope.events.length;i++){
	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        if (dayToCheck === currentDay) {
	          return $scope.events[i].status;
	        }
	      }
	    }
	    return '';
	  };
	}).
	controller('TimepickerController', function ($scope, $log) {
		  $scope.mytime = new Date();
		  $scope.hstep = 1;
		  $scope.mstep = 15;
		  $scope.options = {
		    hstep: [1, 2, 3],
		    mstep: [1, 5, 10, 15, 25, 30]
		  };
		  $scope.ismeridian = false;
		  $scope.update = function() {
		    var d = new Date();
		    d.setHours( 14 );
		    d.setMinutes( 0 );
		    $scope.mytime = d;
		  };

		  $scope.changed = function () {
		    $log.log('Time changed to: ' + $scope.mytime);
		  };
}).
directive('ngReallyClick', ['$uibModal',
     function($uibModal) {
       var ModalInstanceCtrl = function($scope, $modalInstance) {
         $scope.ok = function() {
           $modalInstance.close();
         };
         $scope.cancel = function() {
           $modalInstance.dismiss('cancel');
         };
       };
       return {
         restrict: 'A',
         scope:{
           ngReallyClick:"&",
           item:"="
         },
         link: function(scope, element, attrs) {
           element.bind('click', function() {
             var message = attrs.ngReallyMessage || "Är du säker?";

             var modalHtml = '<div class="modal-body">' + message + '</div>';
             modalHtml += '<div class="modal-footer"><button class="btn btn-default" ng-click="ok()">Ok</button><button class="btn btn-default" ng-click="cancel()">Avbryt</button></div>';

             var modalInstance = $uibModal.open({
               template: modalHtml,
               controller: ModalInstanceCtrl
             });
             modalInstance.result.then(function() {
               scope.ngReallyClick({item:scope.item}); 
             }, function() {
             });
           });
         }
       }
     }
   ]);