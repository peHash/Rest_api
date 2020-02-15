+function() {
	angular.module('MyApp')
  .factory('Users', function($resource) {
    return $resource('/api/v1/users');
  });	
}();