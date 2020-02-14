+ function() {
angular.module('MyApp')
  .controller('SignupCtrl', function($scope, Auth) {
    $scope.signup = function() {
      Auth.signup({
        tel: $scope.cellPhoneNumber,
        password: $scope.password, 
        freelancer: $scope.freelancer
      });
    };
    $scope.pageClass = 'fadeZoom'
  });  
}();
