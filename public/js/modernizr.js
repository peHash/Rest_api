/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-fontface-json-localstorage-setclasses !*/
!function(e,n,t){function s(e,n){return typeof e===n}function r(){var e,n,t,r,o,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=s(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function o(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?C.className.baseVal=n:C.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function l(e,t,s,r){var o,l,f,u,c="modernizr",d=i("div"),p=a();if(parseInt(s,10))for(;s--;)f=i("div"),f.id=r?r[s]:c+(s+1),d.appendChild(f);return o=i("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],s(r,"function")?c(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,s){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+p(n[r])+":"+s+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,o){function a(){c&&(delete P.style,delete P.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var l=m(e,r);if(!s(l,"undefined"))return l}for(var c,d,p,h,g,v=["modernizr","tspan","samp"];!P.style&&v.length;)c=!0,P.modElem=i(v.shift()),P.style=P.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],g=P.style[h],f(h,"-")&&(h=u(h)),P.style[h]!==t){if(o||s(r,"undefined"))return a(),"pfx"==n?h:!0;try{P.style[h]=r}catch(y){}if(P.style[h]!=g)return a(),"pfx"==n?h:!0}return a(),!1}function g(e,n,t,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return s(n,"string")||s(n,"undefined")?h(a,n,r,o):(a=(e+" "+N.join(i+" ")+i).split(" "),d(a,n,t))}function v(e,n,s){return g(e,t,t,n,s)}var y=[],w=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}});var C=n.documentElement,S="svg"===C.nodeName.toLowerCase(),_=x.testStyles=l,b=function(){var e=navigator.userAgent,n=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),t=e.match(/w(eb)?osbrowser/gi),s=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>n&&e.match(/android/gi);return t||r||s}();b?Modernizr.addTest("fontface",!1):_('@font-face {font-family:"font";src:url("https://")}',function(e,t){var s=n.getElementById("smodernizr"),r=s.sheet||s.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",i)});var T="Moz O ms Webkit",E=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=E;var N=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=N;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style}),x.testAllProps=g,x.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),r(),o(y),delete x.addTest,delete x.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);