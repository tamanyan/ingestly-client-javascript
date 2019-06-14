!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o,i=function(e,t){var n=new XMLHttpRequest;return"function"==typeof t&&(n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var e;try{e=JSON.parse(n.response)}catch(e){return e}t.call(null,e)}}),n.open("GET",e,!0),n.timeout=4e3,n.withCredentials=!0,n.send(),!0},a=function(e){var t=(+new Date).toString(36),n=document.location&&"https:"===document.location.protocol?"https:":"http:";return"".concat(n,"//").concat(o.endpoint,"/").concat(e,"/").concat(t,"/?key=").concat(o.apiKey,"&sdk=").concat(o.sdkName,"-").concat(o.sdkVersion)},c=function(e,t){return void 0!==t&&""!==t&&"{}"!==t?"&".concat(e,"=").concat(encodeURIComponent(t)):""},d=!0,u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=t}var t,n,u;return t=e,(n=[{key:"emit",value:function(e){var t=a("ingestly-ingest"),n={ingestlyId:o.deviceId,rootId:o.rootId,action:e.action,category:e.category,sinceInitMs:e.sinceInitMs,sincePrevMs:e.sincePrevMs,usId:e.userId,usStatus:e.userStatus,usAttr:JSON.stringify(e.userAttr),pgUrl:e.pageUrl,pgReferrer:e.pageReferrer,pgTitle:e.pageTitle,pgAttr:JSON.stringify(e.pageAttr),cnId:e.contentId,cnHeadline:e.contentHeadline,cnStatus:e.contentStatus,cnAttr:JSON.stringify(e.contentAttr),vpHeight:e.client.vpH,vpWidth:e.client.vpW,scHeight:e.client.scH,scWidth:e.client.scW,scOrientation:e.client.scOrientation,dvType:e.client.dvType,dvOs:e.client.dvOs,dvPlatform:e.client.dvPlatform,ptInteractive:e.pt?e.pt.interactive:void 0,ptDcl:e.pt?e.pt.dcl:void 0,ptComplete:e.pt?e.pt.complete:void 0,srDepth:e.srDepth,srUnit:e.srUnit,pgHeight:e.pgH,clTag:e.clTag,clId:e.clId,clClass:e.clClass,clPath:e.clPath,clLink:e.clLink,clAttr:JSON.stringify(e.clAttr),mdSrc:e.mdSrc,mdCurrentTime:e.mdCurrentTime,mdDuration:e.mdDuration,mdPlayedPercent:e.mdPlayedPercent,mdAttr:JSON.stringify(e.mdAttr),cpCode:e.campaignCode,cpName:e.campaignName,cpSource:e.campaignSource,cpMedium:e.campaignMedium,cpTerm:e.campaignTerm,cpContent:e.campaignContent,urProtocol:e.pur.protocol,urHost:e.pur.hostname,urPath:e.pur.pathname,urSearch:e.pur.search,urHash:e.pur.hash,urQuery:JSON.stringify(e.pur.query),rfProtocol:e.prf.protocol,rfHost:e.prf.hostname,rfPath:e.prf.pathname,rfSearch:e.prf.search,rfHash:e.prf.hash,rfQuery:JSON.stringify(e.prf.query),customAttr:JSON.stringify(e.customAttr)};for(var r in n)t+=c(r,n[r]);if("sendBeacon"in navigator&&"function"==typeof navigator.sendBeacon&&!0===d){try{navigator.sendBeacon(t)}catch(e){d=!1}if(!d)if("fetch"in window[o.target]&&"function"==typeof window[o.target].fetch){var u=new AbortController,l={signal:u.signal,method:"POST",cache:"no-store",keepalive:!0};setTimeout(function(){return u.abort()},4e3),window[o.target].fetch(t,l)}else i(t)}else i(t)}},{key:"getDeviceId",value:function(e){var t=a("ingestly-sync");if(t+="&ingestlyId=".concat(o.deviceId),"fetch"in window[o.target]&&"function"==typeof window[o.target].fetch){var n=new AbortController,r={signal:n.signal,method:"GET",cache:"no-store",keepalive:!0};setTimeout(function(){return n.abort()},4e3),window[o.target].fetch(t,r).then(function(e){return e.json()}).then(function(t){e.call(null,t.id)})}else i(t,function(t){e.call(null,t.id)})}}])&&r(t.prototype,n),u&&r(t,u),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s={},p=0,f=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{n=new CustomEvent(t.eventName)}catch(e){(n=window.parent.document.createEvent("CustomEvent")).initCustomEvent(t.eventName,!1,!1,{})}window.parent.requestAnimationFrame=window.parent.requestAnimationFrame||window.parent.mozRequestAnimationFrame||window.parent.webkitRequestAnimationFrame,function e(){if(window.parent.requestAnimationFrame(e),r)return!1;r=setTimeout(function(){window.parent.dispatchEvent(n),r=null},t.eventFrequency)}()}var t,n,r;return t=e,(n=[{key:"addListener",value:function(e,t,n,r){return e.addEventListener(t,n,r),s[p]={element:e,type:t,listener:n,capture:r},p++}},{key:"removeListener",value:function(e){if(e in s){var t=s[e];t.element.removeEventListener(t.type,t.listener,t.capture)}}}])&&l(t.prototype,n),r&&l(t,r),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v,g,h=function(){for(var e=(+new Date).toString(36),t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",r=0;r<32;r++)n+=t[Math.floor(Math.random()*t.length)];return"".concat(e,"-").concat(n)},y=function(){var e,t,n,r=(e=v,t=window.parent.document.cookie||"",("; ".concat(t,";").match("; ".concat(e,"=([^¥S;]*)"))||[])[1]||""),o=localStorage.getItem(v)||"";return r.length>8?n=r:o.length>8?n=o:(n=g,w=!0),n},w=!1,b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g=h(),v="".concat(t.prefix,"-id"),this.deviceId=y(),this.rootId=g,this.isNewId=w}var t,n,r;return t=e,(n=[{key:"setDeviceId",value:function(e){this.deviceId=e;try{localStorage.setItem(v,e)}catch(t){window.parent.document.cookie="".concat(v,"=").concat(e,"; Path=/; Max-Age=31536000; SameSite=Lax")}}}])&&m(t.prototype,n),r&&m(t,r),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"getPerformanceInfo",value:function(){var e=window.performance.timing,t=e.domInteractive-e.domLoading,n=e.domContentLoadedEventStart-e.domLoading,r=e.domComplete-e.domLoading;return{interactive:t>=0?t:void 0,dcl:n>=0?n:void 0,complete:r>=0?r:void 0}}},{key:"getClientInfo",value:function(){var e,t,n=screen.orientation||screen.mozOrientation||screen.msOrientation,r=navigator.userAgent;return r.match(/iPhone|iPod/g)?(t="iOS",e="Mobile"):r.match(/iPad/g)?(t="iOS",e="Tablet"):r.match(/Android/g)?r.match(/Windows Phone/g)?(t="Windows Phone",e="Mobile"):(t="Android",e=r.match(/Mobile/g)?"Mobile":"Tablet"):r.match(/Windows/g)?(t="Windows",e="Desktop"):r.match(/Mac OS X/g)?(t="Mac OS X",e="Desktop"):r.match(/Linux/g)?(t="Linux",e="Desktop"):r.match(/CrOS/g)?(t="Chrome OS",e="Desktop"):r.match(/Nintendo|PlayStation|Xbox/g)?(t="Other",e="Game"):(t="Other",e="Unknown"),{vpH:window.parent.innerHeight,vpW:window.parent.innerWidth,scH:window.parent.screen.height,scW:window.parent.screen.width,scOrientation:n,dvType:e,dvOs:t,dvPlatform:navigator.platform}}},{key:"getMediaInfo",value:function(e){return!!e&&{mdSrc:e.src,mdCurrentTime:Math.round(10*e.currentTime)/10,mdDuration:Math.round(10*e.duration)/10,mdPlayedPercent:Math.round(e.currentTime/e.duration*1e3)/10,mdAttr:{type:e.type||void 0,width:e.clientWidth||void 0,height:e.clientHeight||void 0,muted:e.muted||!1,defaultMuted:e.defaultMuted||!1,autoplay:e.autoplay||!1,playerId:e.playerId||void 0,dataset:e.dataset}}}},{key:"getScrollDepth",value:function(){var e=window.parent.innerHeight,t=window.parent.document.documentElement.scrollHeight,n=window.parent.document.visibilityState||"unknown",r="pageYOffset"in window.parent?window.parent.pageYOffset:(window.parent.document.documentElement||window.parent.document.body.parentNode||window.parent.document.body).scrollTop,o=r+e;return{dHeight:t,dIsVisible:n,dVisibleTop:r,dVisibleBottom:o,dScrollUntil:o,dScrollRate:o/t}}},{key:"queryMatch",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"data-trackable",o="button",i=[];for(3===t.nodeType&&(t=t.parentNode);t&&t!==window.parent.document;){var a=(t.matches||t.msMatchesSelector||function(){return!1}).bind(t);t.hasAttribute(r)&&i.unshift(t.getAttribute(r)),!n&&a(e)&&(o="a"===t.tagName.toLowerCase()?"link":t.tagName.toLowerCase(),n=t),t=t.parentNode}return!!(n&&i.length>0)&&{element:n,category:o,path:i.join(">")}}},{key:"mergeObj",value:function(e){for(var t={},n=0;n<e.length;n++)for(var r in e[n])"object"!==k(e[n][r])||null===e[n][r]||Array.isArray(e[n][r])?Array.isArray(e[n][r])?t[r]=t[r]?t[r].concat(e[n][r]):e[n][r]:t[r]=e[n][r]:t[r]=t[r]?this.mergeObj([t[r],e[n][r]]):e[n][r];return t}},{key:"parseUrl",value:function(e){var t,n={},r=document.createElement("a");return e&&(r.href=e,t=r.search.slice(1).split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{}),n={protocol:r.protocol,hostname:r.hostname,port:r.port,pathname:r.pathname,search:r.search,hash:r.hash,query:t}),n}}])&&S(t.prototype,n),r&&S(t,r),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A,M,P,T,C,L,N,D,H=new Date,j={media:[]},E=new Date,q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dataModel={}}var t,n,r;return t=e,(n=[{key:"config",value:function(e){A=e,L=new I,P=new b({prefix:A.prefix,target:A.targetWindow}),T=new u({endpoint:A.endpoint,apiKey:A.apiKey,sdkName:"JS",sdkVersion:"0.3.0",deviceId:P.deviceId,rootId:P.rootId,target:A.targetWindow}),M=A.targetWindow,N=L.parseUrl(window[M].document.location.href),D=L.parseUrl(window[M].document.referrer)}},{key:"init",value:function(e){var t,n=this;(this.dataModel=e,this.dataModel.pur=N,this.dataModel.prf=D,A.eventName&&A.eventFrequency&&void 0===C&&(C=new f({eventName:A.eventName,eventFrequency:A.eventFrequency})),"performance"in window[M]&&("interactive"===window[M].document.readyState||"complete"===window[M].document.readyState?this.trackAction("rum","page",{}):(C.removeListener(j.performance),j.performance=C.addListener(window[M].document,"DOMContentLoaded",function(){n.trackAction("rum","page",{})},!1))),A.options&&A.options.unload&&A.options.unload.enable)&&(t="onbeforeunload"in window[M]?"beforeunload":"onpagehide"in window[M]?"pagehide":"unload",C.removeListener(j.unload),j.unload=C.addListener(window[M],t,function(){n.trackAction("unload","page",{})},!1));if(A.options&&A.options.scroll&&A.options.scroll.enable){var r=A.options.scroll.granularity||20,o=100/r,i=1e3*A.options.scroll.threshold||2e3,a={},c=0,d=0,u="percent";C.removeListener(j.scroll),j.scroll=C.addListener(window[M],A.eventName,function(){"hidden"!==(a=L.getScrollDepth()).dIsVisible&&"prerender"!==a.dIsVisible&&("percent"===A.options.scroll.unit?c=Math.round(a.dScrollRate*o)*r:(c=Math.round(100*a.dScrollUntil)/100,u="pixel"),("percent"===u&&c>d&&c>=0||"pixel"===u&&c>d&&c>=r)&&setTimeout(function(){c>d&&(n.trackAction("scroll","page",{pgH:a.dHeight,srDepth:c,srUnit:u}),d="percent"===u?c:c+r)},i))},!1)}if(A.options&&A.options.clicks&&A.options.clicks.enable&&(C.removeListener(j.click),j.click=C.addListener(window[M].document.body,"click",function(e){var t=A.options.clicks.targetAttr||"data-trackable",r=L.queryMatch('a, button, input, [role="button"]',e.target,t),o=null;r&&(o=r.element,n.trackAction("click",r.category,{clTag:o.tagName,clId:o.id||void 0,clClass:o.className||void 0,clPath:r.path||void 0,clLink:o.href||void 0,clAttr:o.dataset||void 0}))},!1)),A.options&&A.options.media&&A.options.media.enable){for(var l=A.options.media.heartbeat||5,s=["play","pause","ended"],p={},m=0;m<s.length;m++)C.removeListener(j.media[s[m]]),j.media[s[m]]=C.addListener(window[M].document.body,s[m],function(e){n.trackAction(e.type,e.target.tagName.toLowerCase(),L.getMediaInfo(e.target))},{capture:!0});C.removeListener(j.media.timeupdate),j.media.timeupdate=C.addListener(window[M].document,"timeupdate",function(e){if(p[e.target.src])return!1;p[e.target.src]=setTimeout(function(){!0!==e.target.paused&&!0!==e.target.ended&&n.trackAction(e.type,e.target.tagName.toLowerCase(),L.getMediaInfo(e.target)),p[e.target.src]=!1},1e3*l)},{capture:!0})}}},{key:"trackAction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unknown",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unknown",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new Date,o=L.mergeObj([this.dataModel,n,{action:e,category:t,client:L.getClientInfo(),pt:L.getPerformanceInfo(),sinceInitMs:r.getTime()-H.getTime(),sincePrevMs:r.getTime()-E.getTime()}]);E=r,T.emit(o),P.isNewId?T.getDeviceId(function(e){P.setDeviceId(e),P.isNewId=!1}):P.setDeviceId(P.deviceId)}},{key:"trackPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.trackAction("view","page",e)}},{key:"getQueryVal",value:function(e){return N.query[e]?N.query[e]:""}}])&&O(t.prototype,n),r&&O(t,r),e}();window.Ingestly=new q}]);