+ function() {
  angular.module('MyApp')
  .controller('MainCtrl', function($scope, Show, $window, $uibModal, Auth, $rootScope) {
    $scope.mobile = false;
    if ($window.innerWidth < 900) {
      $scope.mobile = true;
    }
    Auth.user();

    $scope.openModal = openModal;

    function openModal (group) {
  switch (group){
    case 'freelancer':   
      modalStarter('HTML/view/partials/modal-contactus.html', 'static', contactUsController);
      break;
    case 'customer':
      modalStarter('HTML/view/partials/modal-new_project.html', 'static', newProjectController);
      break;
    case 'experts': 
      modalStarter('HTML/view/partials/modal-experts_list.html', 'false', expertsListController);
      break;
    case 'telephone_policy':
      modalStarter('HTML/view/partials/telephone_policy.html', 'false', telController);
      break;
    case 'verification':
      modalStarter('HTML/view/partials/modal-verification.html', 'false', verificationController);
      break;
    case 'payment':
      modalStarter('HTML/view/partials/modal-payment.html', 'false', paymentController, 'lg');
  }
}

// Trigger Modal  modalStarter();
function modalStarter(template,static,controller, size) {
    var modalInstance = $uibModal.open({
      templateUrl: template,
      // templateUrl : $templateCache.get('signup-modal.html'),
      size: size ? size : 'lg',
      backdrop: static ? static : true,
      backdropStyle: 'background-color: #333;', 
      controller : controller ? controller : contactUsController
    });
  };

// function logout(Auth) {
//   Auth.logout();
//   // $route.reload();
// }

function paymentController($scope, $http, $window) {
  Auth.user();
  $scope.pay = function() {
    var config = {
      method: 'POST',
      url: '/api/payment',
      data: {
        'url': 'https://pay.ir/payment/send',
        'api': 'a539036b4734cddd43aa8dd61e593e7c',
        'amount': parseInt($scope.amount),
        'redirect': 'http://onita.ir/api/cbpayment'
        // 'factorNumber': Math.random()*(Math.pow(10,15)).toString()
      }
    }
    $http(config).then(resolve, reject);
    function resolve(r){$window.location.href = 'https://pay.ir/payment/gateway/' + r.data['transId']};
    function reject(e){console.log(e)};
  }
}
function verificationController($window,$scope, Auth, toaster, $uibModalInstance, $http, $rootScope){
$scope.gen = function() {
  const genver = Math.floor(100000 + Math.random() * 900000).toString();
    var config = {
      method: 'POST',
      url: '/api/genverification',
      data: {
        '_id': $rootScope.user._id,
        'code': genver
      }
    }
    $http(config).then(resolve, reject);
    function resolve(r){$scope.genver = genver };
    function reject(e){console.log(e)};
  }
  $scope.eval = function() {
  
    var config = {
      method: 'POST',
      url: '/api/evaluateverification',
      data: {
        '_id': $rootScope.user._id,
        'code': $scope.vercode
      }
    }
    $http(config).then(resolve, reject);
    function resolve(r){$window.location.href = '/'};
    function reject(e){console.log(e)};
  }
  
}

function telController($window,$scope, Auth, toaster, $uibModalInstance, $http, $rootScope){
Auth.user();
$scope.dismiss = function(){
  $uibModalInstance.close();
}

  
}
    $scope.genres = ['آمار و احتمال مهندسی', 'ریاضی مهندسی', 'مدار های منطقی', 'معادلات دیفرانسیل', 'فیزیک ۱',
      'ریاضی ۱', 'ساختمان داده ها', 'برنامه سازی پیشرفته', 'جبر خطی', 'ریاضی عمومی ۲', 'توابع مختلط',
      'فرآیند تصادفی'];

    $scope.headingTitle = '۱۲ درس اول شما';

    // console.log($scope.jobs = Show.query());

    $scope.filterByGenre = function(genre) {
      $scope.shows = Show.query({ genre: genre });
      $scope.headingTitle = genre;
    };
       $scope.items = [
           'item1',
           'item2',
           'item3'
       ];
       $scope.addItem = function() {
           var newItemNo = $scope.items.length + 1;
           $scope.items.push('item' + newItemNo);
       };

       
  });  
}();
