+ function() {
  angular.module('MyApp')
  .controller('navbarCtrl', function($rootScope, $scope, $window, Auth, $routeParams, $route, $location, $anchorScroll) {
  	$scope.userdown = false;
    $scope.dropdown2 = false;
    $scope.category = 'special';
    $scope.styleobj = {};
    $scope.leftNavBtn = urlExtractor($location.path());
    $scope.refresh = function() {
      $window.location.href = '/';
    }
    $scope.gotohiw = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $window.gotoHIW()
    }
    $scope.logout = function() {
	  	Auth.logout();
		$window.location.href = '/';
		$scope.userdown = !($scope.userdown);
    };
    $scope.usertoggle = function() {
    	$scope.userdown = !($scope.userdown);
      $scope.dropdown2 = false;
    };
    $scope.droptoggle = function() {
      $scope.dropdown2 = !($scope.dropdown2)
    }
    $scope.setcat = function(cat) {
      $scope.category = cat;
    }
      $scope.getStyle= function(){  
     if($rootScope.currentUser){
        $scope.styleobj.right = '-270px';
     }else{
        $scope.styleobj.right = '0px';  
     }
     return $scope.styleobj;
  }
  });
  function urlExtractor(location) {
    if (location.includes('article')){
      return 'article';
    } else { 
      return 'non-article';
    }
  }
}();