+ function() {
    angular.module('MyApp')
    .controller('landingPageCtrl', function($scope, Users, User, $window) {
		$scope.introBtn = 'بزن بریم !';
		$scope.newsletterPlaceHolder = 'ایمیل شما اینجا ...';
		$scope.newsletterSignUpValue = 'همین حالا ثبت کن';
		$scope.users = Users.query();
		$scope.useri = '';
		$scope.setFreelancer = function(id) {
			User.get({ _id: id }, function(info) {
               $scope.useri = info;
             }); 
			$window.gotoFreelancer();
		}
		$scope.gotohiw = function() {
			$window.gotoHIW();
		}
    });  
  }();