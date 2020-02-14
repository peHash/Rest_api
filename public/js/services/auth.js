  + function() {
angular.module('MyApp')
  .factory('Auth', function($http, $location, $rootScope, $alert, $window, toaster) {
    var token = $window.localStorage.token;
    if (token) {
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      $rootScope.currentUser = payload.user;
    }
    
    // // Asynchronously load Google+ SDK
    // (function() {
    //   var po = document.createElement('script');
    //   po.type = 'text/javascript';
    //   po.async = true;
    //   po.src = 'https://apis.google.com/js/client:plusone.js';
    //   var s = document.getElementsByTagName('script')[0];
    //   s.parentNode.insertBefore(po, s);
    // })();

    return {

      user: function() {
        if ($rootScope.currentUser) {
          return $http.post('/auth/getinfo', {id:$rootScope.currentUser._id}).then(function(data){
            
            $rootScope.user = data.data;
          }, function (response){
            toaster.pop('error','lOGIN FAILED', err);
            delete $window.localStorage.token;
          })
        } else 
        return;
      },
      login: function(user) {
        return $http.post('/auth/login', user)
          .then(function(data) {
            $window.localStorage.token = data.data.token;
            var payload = JSON.parse($window.atob(data.data.token.split('.')[1]));
            $rootScope.currentUser = payload.user;
            $rootScope.signedin = true;
            $location.path('/');
          }, function(err) {
            toaster.pop('error','lOGIN FAILED', err);
            delete $window.localStorage.token;
          });
      },
      signup: function(user) {
        return $http.post('/auth/signup', user)
          .then(function() {
            $location.path('/login');
          }, function(err) {
            toaster.pop('error','SIGNUP FAILED', err);
          });
      },
      logout: function() {
        delete $window.localStorage.token;
        $rootScope.currentUser = null;
        $rootScope.signedin = false;
      }
    };
  });  
}();
