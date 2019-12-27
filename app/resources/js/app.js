(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],2:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Typewriter",[],t):"object"==typeof exports?exports.Typewriter=t():e.Typewriter=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(t){for(var r=n(3),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],l=0;!s&&l<a.length;l++)s=o[a[l]+"Request"+i],u=o[a[l]+"Cancel"+i]||o[a[l]+"CancelRequest"+i];if(!s||!u){var c=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(2))},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},l={TYPE_CHARACTER:"TYPE_CHARACTER",REMOVE_CHARACTER:"REMOVE_CHARACTER",REMOVE_ALL:"REMOVE_ALL",REMOVE_LAST_VISIBLE_NODE:"REMOVE_LAST_VISIBLE_NODE",PAUSE_FOR:"PAUSE_FOR",CALL_FUNCTION:"CALL_FUNCTION",ADD_HTML_TAG_ELEMENT:"ADD_HTML_TAG_ELEMENT",REMOVE_HTML_TAG_ELEMENT:"REMOVE_HTML_TAG_ELEMENT",CHANGE_DELETE_SPEED:"CHANGE_DELETE_SPEED",CHANGE_DELAY:"CHANGE_DELAY",CHANGE_CURSOR:"CHANGE_CURSOR"},c={HTML_TAG:"HTML_TAG",TEXT_NODE:"TEXT_NODE"};function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){function e(t,n){var u=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),E(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null}),E(this,"setupWrapperElement",(function(){u.state.elements.wrapper.className=u.options.wrapperClassName,u.state.elements.cursor.className=u.options.cursorClassName,u.state.elements.cursor.innerHTML=u.options.cursor,u.state.elements.container.innerHTML="",u.state.elements.container.appendChild(u.state.elements.wrapper),u.state.elements.container.appendChild(u.state.elements.cursor)})),E(this,"start",(function(){return u.state.eventLoopPaused=!1,u.runEventLoop(),u})),E(this,"pause",(function(){return u.state.eventLoopPaused=!0,u})),E(this,"stop",(function(){return u.state.eventLoop&&(Object(r.cancel)(u.state.eventLoop),u.state.eventLoop=null),u})),E(this,"pauseFor",(function(e){return u.addEventToQueue(l.PAUSE_FOR,{ms:e}),u})),E(this,"typeOutAllStrings",(function(){return"string"==typeof u.options.strings?(u.typeString(u.options.strings).pauseFor(1500),u):(u.options.strings.forEach((function(e){u.typeString(e).pauseFor(1500).deleteAll()})),u)})),E(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return u.typeOutHTMLString(e,t);if(e){var n=u.options||{},r=n.stringSplitter,o="function"==typeof r?r(e):e.split("");u.typeCharacters(o,t)}return u})),E(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i(e);if(n.length>0)for(var r=0;r<n.length;r++){var o=n[r],a=o.innerHTML;o&&3!==o.nodeType?(o.innerHTML="",u.addEventToQueue(l.ADD_HTML_TAG_ELEMENT,{node:o,parentNode:t}),u.typeString(a,o)):o.textContent&&u.typeString(o.textContent,t)}return u})),E(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return u.addEventToQueue(l.REMOVE_ALL,{speed:e}),u})),E(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return u.addEventToQueue(l.CHANGE_DELETE_SPEED,{speed:e}),u})),E(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return u.addEventToQueue(l.CHANGE_DELAY,{delay:e}),u})),E(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return u.addEventToQueue(l.CHANGE_CURSOR,{cursor:e}),u})),E(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)u.addEventToQueue(l.REMOVE_CHARACTER);return u})),E(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return u.addEventToQueue(l.CALL_FUNCTION,{cb:e,thisArg:t}),u})),E(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){u.addEventToQueue(l.TYPE_CHARACTER,{character:e,node:t})})),u})),E(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){u.addEventToQueue(l.REMOVE_CHARACTER)})),u})),E(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.addEventToStateProperty(e,t,n,"eventQueue")})),E(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u.options.loop;return r?u.addEventToStateProperty(e,t,n,"reverseCalledEvents"):u})),E(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return u.state[r]=n?[o].concat(d(u.state[r])):[].concat(d(u.state[r]),[o]),u})),E(this,"runEventLoop",(function(){u.state.lastFrameTime||(u.state.lastFrameTime=Date.now());var e=Date.now(),t=e-u.state.lastFrameTime;if(!u.state.eventQueue.length){if(!u.options.loop)return;u.state.eventQueue=d(u.state.calledEvents),u.state.calledEvents=[],u.options=p({},u.state.initialOptions)}if(u.state.eventLoop=o()(u.runEventLoop),!u.state.eventLoopPaused){if(u.state.pauseUntil){if(e<u.state.pauseUntil)return;u.state.pauseUntil=null}var n=d(u.state.eventQueue),r=n.shift(),a=0;if(!(t<=(a=r.eventName===l.REMOVE_LAST_VISIBLE_NODE||r.eventName===l.REMOVE_CHARACTER?"natural"===u.options.deleteSpeed?s(40,80):u.options.deleteSpeed:"natural"===u.options.delay?s(120,160):u.options.delay))){var i=r.eventName,f=r.eventArgs;switch(u.logInDevMode({currentEvent:r,state:u.state,delay:a}),i){case l.TYPE_CHARACTER:var E=f.character,v=f.node,h=document.createTextNode(E);v?v.appendChild(h):u.state.elements.wrapper.appendChild(h),u.state.visibleNodes=[].concat(d(u.state.visibleNodes),[{type:c.TEXT_NODE,node:h}]);break;case l.REMOVE_CHARACTER:n.unshift({eventName:l.REMOVE_LAST_VISIBLE_NODE,eventArgs:{removingCharacterNode:!0}});break;case l.PAUSE_FOR:var m=r.eventArgs.ms;u.state.pauseUntil=Date.now()+parseInt(m);break;case l.CALL_FUNCTION:var T=r.eventArgs,_=T.cb,y=T.thisArg;_.call(y,{elements:u.state.elements});break;case l.ADD_HTML_TAG_ELEMENT:var A=r.eventArgs,g=A.node,w=A.parentNode;w?w.appendChild(g):u.state.elements.wrapper.appendChild(g),u.state.visibleNodes=[].concat(d(u.state.visibleNodes),[{type:c.HTML_TAG,node:g,parentNode:w||u.state.elements.wrapper}]);break;case l.REMOVE_ALL:var L=u.state.visibleNodes,C=f.speed,N=[];C&&N.push({eventName:l.CHANGE_DELETE_SPEED,eventArgs:{speed:C,temp:!0}});for(var b=0,O=L.length;b<O;b++)N.push({eventName:l.REMOVE_LAST_VISIBLE_NODE,eventArgs:{removingCharacterNode:!1}});C&&N.push({eventName:l.CHANGE_DELETE_SPEED,eventArgs:{speed:u.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,N);break;case l.REMOVE_LAST_VISIBLE_NODE:var S=r.eventArgs.removingCharacterNode;if(u.state.visibleNodes.length){var R=u.state.visibleNodes.pop(),M=R.type,D=R.node;D.parentNode.removeChild(D),M===c.HTML_TAG&&S&&n.unshift({eventName:l.REMOVE_LAST_VISIBLE_NODE,eventArgs:{}})}break;case l.CHANGE_DELETE_SPEED:u.options.deleteSpeed=r.eventArgs.speed;break;case l.CHANGE_DELAY:u.options.delay=r.eventArgs.delay;break;case l.CHANGE_CURSOR:u.options.cursor=r.eventArgs.cursor,u.state.elements.cursor.innerHTML=r.eventArgs.cursor}u.options.loop&&(r.eventName===l.REMOVE_LAST_VISIBLE_NODE||r.eventArgs&&r.eventArgs.temp||(u.state.calledEvents=[].concat(d(u.state.calledEvents),[r]))),u.state.eventQueue=n,u.state.lastFrameTime=e}}})),!t)throw new Error("No container element was provided");if("string"==typeof t){var f=document.querySelector(t);if(!f)throw new Error("Could not find container element");this.state.elements.container=f}else this.state.elements.container=t;n&&(this.options=p({},this.options,n)),this.state.initialOptions=p({},this.options),this.init()}var t,n,v;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(l.CHANGE_CURSOR,{cursor:this.options.cursor},!0),this.addEventToQueue(l.REMOVE_ALL,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(u(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&f(t.prototype,n),v&&f(t,v),e}();n.d(t,"default",(function(){return v}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){(function(){var n,r,o,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),i=a-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(4))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,l=[],c=!1,p=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):p=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(u=l,l=[];++p<t;)u&&u[p].run();p=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function E(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new E(e,t)),1!==l.length||c||s(f)},E.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]).default}));
},{}],3:[function(require,module,exports){
'use strict';

var _render = require('./service/render.service');

var _render2 = _interopRequireDefault(_render);

var _header = require('./view/header');

var _header2 = _interopRequireDefault(_header);

var _home = require('./view/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//REQUIRE


//VIEW
var Navigo = require('navigo');

//JQUERY ON LOAD
//IMPORT
$(function () {

    /* +++++++++ RUTIRANJE +++++++++ */

    //INICIJALIZIRAJ RUTERA
    var router = new Navigo(null, true, '#!');

    //UČITAJ PRIJE SVEGA
    router.hooks({
        before: function before(done, params) {
            new _render2.default('./templates/header.html', 'header').HTML(_header2.default);
            new _render2.default('./templates/footer.html', 'footer').HTML();
            done();
        }
    });

    //DOSTUPNE RUTE
    router.on({
        '/home': function home() {
            new _render2.default('./templates/home.html', 'app').HTML(_home2.default);
        },
        '/about': function about() {
            new _render2.default('./templates/about.html', 'app').HTML();
        },
        '/news': function news() {
            new _render2.default('./templates/news.html', 'app').HTML();
        },
        '/curriculum': function curriculum() {
            new _render2.default('./templates/curriculum.html', 'app').HTML();
        },
        '/contact': function contact() {
            new _render2.default('./templates/contact.html', 'app').HTML();
        }
    });

    //DEFAULT RUTA
    router.on(function () {
        new _render2.default('./templates/home.html', 'app').HTML();
    });

    //404 RUTA
    router.notFound(function (query) {
        new _render2.default('./templates/error.html', 'app').HTML();
    });

    //POKRENI
    router.resolve();

    /* +++++++++ ++++++++++ +++++++++ */
});

},{"./service/render.service":4,"./view/header":5,"./view/home":6,"navigo":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderService = function () {
    function RenderService(url, id) {
        _classCallCheck(this, RenderService);

        this.url = url;
        this.id = id;
    }

    _createClass(RenderService, [{
        key: 'HTML',
        value: function HTML() {
            var fCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            $('#' + this.id).load(this.url, fCallback);
        }
    }]);

    return RenderService;
}();

exports.default = RenderService;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    $(window).scroll(function () {
        var sticky = $('.navbar-sticky'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.addClass('navbar-fixed');
        } else {
            sticky.removeClass('navbar-fixed');
        }
    });
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var appContainer = document.getElementById('text-story');

    var typewriter = new _core2.default(appContainer, {
        loop: false
    });

    typewriter.pauseFor(600).typeString('Budi izvrstan u onom što vidiš!').pauseFor(300).deleteChars(6).typeString('voliš.').pauseFor(300).typeString('</br> <span class="span-gradient">ZAISKRI</span>.').start();
};

var _core = require('typewriter-effect/dist/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"typewriter-effect/dist/core":2}]},{},[3]);
