!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.b=e()}(this,function(){"use strict";function t(e){return e.hasOwnProperty("width")?e:t(Object.getPrototypeOf(e))}function e(t,e){return t.indexOf(e,t.length-e.length)>-1}function n(t){return t.charAt(0).toLowerCase()+t.slice(1)}function r(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function i(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})}function o(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function u(t){return t.charAt(0)+(t.match(/([A-Z])/g)||[]).join("").toLowerCase()}function c(t){var e=u(t),n=L[e]&&L[e]!==t?t:e;return M[n]=t,n}function f(t){return Object.keys(t).sort().map(function(e){return e.replace(/CLASS_NAME/g,t[e])}).join("")}function a(t){var e=[],n=[],r=!1;return Object.keys(t).forEach(function(i){"@"===i.charAt(0)?(e.push([i,t[i]]),delete t[i]):" "===i.charAt(0)||":"===i.charAt(0)?(n.push([i,t[i]]),delete t[i]):r=!0}),(r?l(".CLASS_NAME",t):"")+n.map(function(t){return l(".CLASS_NAME"+t[0],t[1])}).join("")+e.map(function(t){return t[0]+"{"+l(".CLASS_NAME",t[1])+"}"}).join("")}function l(t,e){return t+"{"+s("string"==typeof e?p(e):e.style||e)+"}"}function s(t){return Object.keys(d(t)).map(function(e){return g(t,e)}).join("")}function d(t){return Object.keys(t).forEach(function(e){e in P&&(t[P[e]]=t[e],delete t[e]);var n=t[e];n||0===n||""===n?"content"===e&&'"'!==n.charAt(0)?t[e]='"'+n+'"':t[e]=b(e,n):delete t[e]}),t}function p(t){return t.indexOf(";")>-1?m(t):y(t)}function m(t){return t.split(";").reduce(function(t,e){var n=e.trim().split(":"),r=n[0],o=n[1];return r&&o&&(t[i(r.trim())]=o.trim()),t},{})}function y(t){return t.split("\n").reduce(function(t,e){var n=e.trim().split(" ");if(n.length>1){var r=i(n.shift().trim());t[M[r]||r]=n.join(" ").trim()}return t},{})}function h(t){throw new Error("not implemented")}function g(t,e){return(z.test(e)?"-":"")+o(e)+":"+b(e,t[e])+";"}function b(t,e){return e+("number"==typeof e&&T.indexOf(t)>-1?"px":"")}function v(){D=!1,_.textContent=Z+f(R)}function A(t){Z+=String(t),O()}function j(t){var e=a(t);if(e in R)return R[e];var n=W+ ++B;return R[e]=n,O(),n}function O(){D||(D=!0,U.resolve().then(v))}function w(t){var e=arguments;if(Array.isArray(t)&&Array.isArray(t.raw))arguments[0]={raw:arguments[0]},r(K,p(String.raw.apply(null,arguments)));else for(var n=0;n<arguments.length;n++)"string"==typeof e[n]?r(K,p(e[n])):"object"==typeof e[n]&&r(K,e[n].style||e[n]);return w}function x(t,e){w[t]=w[c(t)]=k(e||t)}function k(t){return function(e){return K[t]=void 0!==e&&e,w}}function S(t,e){return K=I,K[t]=e,w}function E(t){return function(){return I=K,K={},t}}function C(t,e){Object.defineProperty(w,t,{get:e})}var L={ai:"alignItems",b:"bottom",bc:"backgroundColor",br:"borderRadius",bs:"boxShadow",c:"color",d:"display",fd:"flexDirection",ff:"fontFamily",fs:"fontSize",h:"height",jc:"justifyContent",l:"left",m:"margin",mb:"marginBottom",ml:"marginLeft",mr:"marginRight",mt:"marginTop",o:"opacity",p:"padding",pb:"paddingBottom",pl:"paddingLeft",pr:"paddingRight",pt:"paddingTop",r:"right",t:"top",ta:"textAlign",td:"textDecoration",tt:"textTransform",w:"width"},M=Object.create(null),$=Object.keys(t(document.documentElement.style)).filter(function(t){return"string"==typeof document.documentElement.style[t]}),P=Object.create(null,{}),z=/^(o|O|ms|MS|Ms|moz|Moz|webkit|Webkit|WebKit)([A-Z])/,N=window.navigator.userAgent.indexOf("Edge")>-1,T=function(){var t=document.createElement("div");return $.filter(function(n){try{t.style[n]="1px",t.style.setProperty(n,"1px")}catch(t){return}return e(!N&&t.style[n]||t.style.getPropertyValue(n),"px")}).concat("gridGap")}(),_=document.createElement("style"),R=Object.create(null,{}),Z="",B=0,D=!1,U=window.Promise||{resolve:function(){return{then:function(t){return setTimeout(t,0)}}}};document.head.appendChild(_);var W="b"+("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3),q=0,F={},G=["active","any","checked","default","disabled","empty","enabled","first","first-child","first-of-type","fullscreen","focus","hover","indeterminate","in-range","invalid","last-child","last-of-type","left","link","only-child","only-of-type","optional","out-of-range","read-only","read-write","required","right","root","scope","target","valid","visited","dir","lang","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","after","before","first-letter","first-line","selection","backdrop","placeholder","marker","spelling-error","grammar-error"],I={},K={};return w.toString=function(){return"."+w.class},w.forceUpdate=v,w.$keyframes=function(t){var e=Object.keys(t).map(function(e){return l(e,t[e])}).join("");if(e in F)return F[e];var n=W+ ++q;return F[e]=n,A("@keyframes "+n+"{"+e+"}"),n},w.prepend=A,w.helper=function(t,e){return 1===arguments.length?h(t):(e===w&&(e=e.style),"function"!=typeof e?(delete w[t],void C(t,function(){return r(K,e),w})):void(w[t]=function(){return r(K,e.apply(null,arguments)),w}))},w.css=function(t,e){A(l(t,e.style||e))},$.forEach(function(t){if(z.test(t)){var e=n(t.replace(z,"$2"));if(-1===$.indexOf(e))return P[e]=t,x(e,t)}x(t)}),C("style",function(){var t=d(K);return K={},t}),C("class",function(){var t=j(K);return K={},t}),C("$animate",E(function(t,e){return K=I,w.animation(w.$keyframes(e)+" "+t),w})),C("$media",E(function(t,e){return S("@media "+t,e.style||e)})),C("$nest",E(function(t,e){return S((0===t.indexOf(":")?"":" ")+t,e.style||e)})),G.forEach(function(t){return C("$"+i(t),E(function(e,n){return S(":"+t+(n?"("+e+")":""),n?n.style||n:e.style||e)}))}),w});
//# sourceMappingURL=bss.js.map
