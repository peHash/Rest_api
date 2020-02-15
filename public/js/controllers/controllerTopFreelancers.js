+ function() {
    angular.module('MyApp')
    .controller('topCtrl', function($scope, Users, $location, $window) {
		$scope.introBtn = 'بزن بریم !';
		$scope.newsletterPlaceHolder = 'ایمیل شما اینجا ...';
		$scope.newsletterSignUpValue = 'همین حالا ثبت کن';
		$scope.users = Users.query();
    });  
  }();