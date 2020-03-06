+ function() {
    angular.module('MyApp')
    .controller('topCtrl', function($scope, Users, $location, $window, $http) {

		$scope.search = {
			city : '',
			rate : '',
			elite: '',
			fast: ''
		};
		ref();
		
		$scope.remove_filter = function() {
			$scope.search = {
			city : '',
			rate : '',
			elite: '',
			fast: ''
		};
			ref();
		}

		$scope.setTag = function(tag) {
			$scope.search.tag = tag;
			ref();
		}

		$scope.$watch('search.city', function () {
            ref();
        });
        $scope.$watch('search.rate', function() {
        	ref();
        });
        $scope.$watch('search.elite', function(){
        	ref();
        });
        $scope.$watch('search.fast', function(){
        	ref();
        });


		



	    function ref() {
	      $http({
	      url : '/api/v1/top30',
	      method : 'POST',
	      data : {
	        'tag' : $scope.search.tag,
	        'city' : $scope.search.city,
	        'rate' : $scope.search.rate,
	        'elite' : $scope.search.elite,
	        'fast' : $scope.search.fast
	      }
	    })
	    .then(function(response){
	    	$scope.users = response.data;
	    	// console.log(response)	
	      // toaster.pop('success', 'عالی !', 'پیشنهاد شما با موفقیت ارسال گردید !');
	      // $window.location.href = '/job/' + job._id;
	    },
	    function(response) {
	      // toaster.error('درست پیش نرفت', 'مشکلی پیش آمده است ، لطفا دوباره تلاش کنید !')
	      // $window.location.href = '/job/' + job._id;
	    });
	  };

    });  
  }();