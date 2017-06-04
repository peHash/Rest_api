
app.controller('MyController', function ($scope,Modernizr,$window, $timeout, $http, $document) {

$scope.sentences  = ["your elegant app", "your creative app", "your modern design"];

$scope.parts = ['header', 'features', 'working', 'plans', 'subscription'];

$scope.part = $scope.parts[0];

$scope.lp = {
  header: {
    title: 'اونیتا',
    desc: 'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    btn1: 'ثبت نام',
    btn2: 'سفارش ترجمه'
  },
  features: {
    title: 'امکانات بیشتر',
    desc: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.  ',
    doc: 'مستندات',
    docDesc: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    desktop: 'طراحی زیبا',
    desktopDesc: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    psd: 'خیلی قشنگ',
    psdDesc: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. '
  }
}

function makeScript(data) {
  var document = $document[0];
  var script = document.createElement('script');
            script.text = data;
            document.head.prepend(script);
            return;
}
$scope.fire = fire;

function fire() {
  $http.get('/read')
            .success(function(data) {
              makeScript(data);
            })
            .error(function(err) {
              // toaster.pop('error','SIGNUP FAILED', err);
              console.log('error');
              return
            });  
}


$(window).load(function(){
        $('#main_loader').fadeOut('slow');

        $scope.SyncOwl();

if (Modernizr.csstransforms3d) {

      window.sr = ScrollReveal();
    
      sr.reveal('.snap_middle', {
       origin: 'bottom',
       distance: '100px',
       duration: 1300,
       delay: 400,
       opacity: 1,
       scale: 0,
       easing: 'ease-in',      
       reset: true
      });  
      sr.reveal('.snap_left_2', {
       origin: 'right',
       distance: '100px',
       duration: 1300,
       delay: 600,
       rotate : { x: 0, y: 0, z: 15 },     
       opacity: 0,
       scale: 0,
       easing: 'ease-in',      
       reset: true
      });  
      sr.reveal('.snap_left_3', {
       origin: 'right',
       distance: '100px',
       duration: 1300,
       delay: 800,
       rotate : { x: 0, y: 0, b: 25 },
       opacity: 0,
       scale: 0,
       easing: 'ease-in',      
       reset: true
      }); 
      sr.reveal('.snap_left_4', {
       origin: 'left',
       distance: '100px',
       duration: 1300,
       delay: 600,
       rotate : { x: 0, y: 0, a: 15 },
       opacity: 0,
       scale: 0,
       easing: 'ease-in',      
       reset: true
      });   
       
      sr.reveal('.snap_left_5', {
       origin: 'left',
       distance: '100px',
       duration: 1300,
       delay: 800,
       rotate : { x: 0, y: 0, c: 25 },
       opacity: 0,
       scale: 0,
       easing: 'ease-in',      
       reset: true
      });
       sr.reveal('.home_slide1', {
       origin: 'right',
       distance: '50px',
       duration: 1300,
       delay: 600,         
       opacity: 0.6,
       scale: 0,
       easing: 'linear',      
       reset: true
      });   
       sr.reveal('.home_slide2', {
       origin: 'right',
       distance: '50px',
       duration: 1300,
       delay: 1800,         
       opacity:0,
       scale: 0,
       easing: 'linear',      
       reset: true
      });  
        sr.reveal('.home_slide3', {
       origin: 'right',
       distance: '50px',
       duration: 1300,
       delay: 3000,         
       opacity: 0,
       scale: 0,
       easing: 'linear',      
       reset: true
      });
       sr.reveal('.animate_left_40', {
       origin: 'left',
       distance: '40px',
       duration: 800,
       delay: 400,       
       opacity: 0, 
       scale: 0,      
       easing: 'linear',      
       reset: true
      }); 
       sr.reveal('.animate_top_60', {
       origin: 'top',
       distance: '60px',
       duration: 800,
       delay: 400,       
       opacity: 0, 
       scale: 0,      
       easing: 'linear',      
       reset: true
      });  
       sr.reveal('.animate_bottom_60', {
       origin: 'bottom',
       distance: '60px',
       duration: 800,
       delay: 400,       
       opacity: 0, 
       scale: 0,      
       easing: 'linear',      
       reset: true
      });  
       sr.reveal('.animate_fade_in', {      
       duration: 800,
       delay: 400,       
       opacity: 0, 
       scale: 0,      
       easing: 'linear',      
       reset: true
      });        
     }

          });

 /* Menu hide/show on scroll */

$scope.ost = 0;
        $(window).scroll(function() {
          
          $scope.m=angular.element($window);
            $scope.cOst = $scope.m.scrollTop();
            if($scope.cOst == 0)
            {
              
              angular.element('.navbar').addClass("top-nav-collapse");
              angular.element('.navbar').removeClass('scroll_menu');
            } else if($scope.cOst > $scope.ost)
            {
              
              angular.element('.navbar').addClass("top-nav-collapse").removeClass("default");
              angular.element('.navbar').removeClass('scroll_menu');
            } else 
            {
              
              angular.element('.navbar').addClass("default").removeClass("top-nav-collapse");
              angular.element('.navbar').addClass('scroll_menu').removeClass('top-nav-collapse');
            }
            $scope.ost = $scope.cOst;
        });

   
/*Collapse Start*/

    $scope.oneAtATime = true;
    $scope.status={
        feature1Open:true,
        feature1close:false,
        feature2close:false,
        feature3close:false
    };
    /*Collapse End*/
      
      // Team js starts

      $scope.SyncOwl=function(){

            var $sync1 = $("#sync1"),
                $sync2 = $("#sync2"),
                $sync3 = $(".sync3"),
                flag = false,
                duration = 300;

        $sync1.owlCarousel({
                    items: 1,
                    autoplay: false,
                    margin: 10,
                    nav: false,
                    dots: false                    
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        
                        flag = true;
                        var a= e.property.value++;
                        $(".team-images").removeClass("current_dot");
                        $('.team-images').eq(a).addClass("current_dot");
                        $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

        $sync2
        .owlCarousel({
            margin: 20,
            items: 1,
            nav: false,
            autoplay: false,
            center: false,
            dotsEach: false,
            dots: true,
            dotsContainer: '#carousel-custom-dots',
                
                })
                .on('click', '.owl-item', function () {

                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
                    $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = true;
                        var a= e.property.value++;
                        $(".team-images").removeClass("current_dot");
                        $('.team-images').eq(a).addClass("current_dot");
                        $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });


        $(".team-images").eq(0).addClass("current_dot");
        $('.team-images').click(function (e) {
 $(".team-images").removeClass("current_dot");
            $(this).addClass("current_dot");
            $sync2.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        });
      }
// Team js ends  

/*Backstretch slider start*/
 $scope.images = [
    'assets/images/banner/slide_1.jpg',
                        'assets/images/banner/slide_2.jpg',
                        'assets/images/banner/slide_3.jpg'
  ];
 /* Backstretch slider End*/





  
}).value('duScrollOffset', 50);

+function () {

    angular
    .module('appLab')
    .factory('ResourceLoaderService', ['$q', '$document', '$timeout', resourceLoaderService]);

    function resourceLoaderService($q, $document, $timeout) {

        var document = $document[0],
            service = {},
            promises = {};

        service.load = load;
        service.loadJs = loadJs;
        service.loadCss = loadCss;
        service.unloadCss = unloadCss;

        return service;


        function loadJs(url) {
            return loader(createScriptElement)(url);
        }

        function unloadCss(url) {
          delete promises[url];
          var docHead = document.head;
          if(docHead) {
            var targetCss = docHead.querySelector('[href="' + url + '"]');
            if(targetCss) {
              targetCss.remove();
              return true;
            }
          }
          return false;
        }

        function loadCss(url) {
            var docHead = document.head;
            if(docHead) {
              var targetCss = docHead.querySelector('[href="' + url + '"]');
              if (targetCss) {
                return true;
              } else {
                return loader(createCssLinkElement)(url);
              }
            }
        }

        function load(urls) {
            return $q.all(urls.map(function (url) {
                if (isCss(url)) {
                    return loadCss(url);
                }
                if (isJs(url)) {
                    return loadJs(url);
                }
            }));
        }

        function isCss(url) {
            return url.indexOf('.css') > -1;
        }

        function isJs(url) {
            return url.indexOf('.js') > -1;
        }

        function loader(createElementFn) {
            return function (url) {
                if (typeof promises[url] === 'undefined') {
                    promises[url] = createPromise(url);
                }

                return promises[url];
            };

            function createPromise(url) {
                var defer = $q.defer(),
                    element = createElementFn(url);

                element.onload = element.onreadystatechange = function (e) {
                    $timeout(function () {
                        defer.resolve(e);
                    });
                };

                element.onerror = function (e) {
                    $timeout(function () {
                        defer.reject(e);
                    });
                };

                return defer.promise;
            }
        }

        function createScriptElement(src) {
            var script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
            return script;
        }

        function createCssLinkElement(href) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = href;
            document.head.firstChild.prepend(link);
            return link;
        }
    }
}();