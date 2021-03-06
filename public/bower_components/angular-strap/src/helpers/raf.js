'use strict';

if (angular.version.minor < 3 && angular.version.dot < 14) {
  angular.module('ng')

  .factory('$$rAF', function ($window, $timeout) {

    var requestAnimationFrame = $window.requestAnimationFrame ||
                                $window.webkitRequestAnimationFrame ||
                                $window.mozRequestAnimationFrame;

    var cancelAnimationFrame = $window.cancelAnimationFrame ||
                               $window.webkitCancelAnimationFrame ||
                               $window.mozCancelAnimationFrame ||
                               $window.webkitCancelRequestAnimationFrame;

    var rafSupported = !!requestAnimationFrame;
    var raf = rafSupported ?
      function (fn) {
        var id = requestAnimationFrame(fn);
        return function () {
          cancelAnimationFrame(id);
        };
      } :
      function (fn) {
        var timer = $timeout(fn, 16.66, false); // 1000 / 60 = 16.666
        return function () {
          $timeout.cancel(timer);
        };
      };

    raf.supported = rafSupported;

    return raf;

  });
}
