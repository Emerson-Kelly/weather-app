(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[32,547,761,462],{365:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(354),o=n.n(r),s=n(314),i=n.n(s)()(o());i.push([e.id,'html {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    "Liberation Mono", "Courier New", monospace;\n\n  /*font-family: "Montserrat", sans-serif;\n        font-optical-sizing: auto;\n        font-weight: <weight>;\n        font-style: normal;*/\n}\n\n#forecast > div {\n  width: 16rem;\n}\n\n.container {\n  max-width: 1200px;\n}\n\n.forecast-day img {\n  width: 40%;\n  margin-bottom: -12px;\n}\n\n.forecast-day h3 {\n  font-weight: 700;\n  font-size: 108%;\n  color: wheat;\n}\n\n@media only screen and (max-width: 560px) {\n  #forecast {\n    gap: 1rem;\n  }\n\n  .space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: none;\n  }\n\n  .search-bar {\n    width: 8rem;\n  }\n\n  .input input {\n    width: 2rem;\n  }\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE;+CAC6C;;EAE7C;;;4BAG0B;AAC5B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;AACF",sourcesContent:['html {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    "Liberation Mono", "Courier New", monospace;\n\n  /*font-family: "Montserrat", sans-serif;\n        font-optical-sizing: auto;\n        font-weight: <weight>;\n        font-style: normal;*/\n}\n\n#forecast > div {\n  width: 16rem;\n}\n\n.container {\n  max-width: 1200px;\n}\n\n.forecast-day img {\n  width: 40%;\n  margin-bottom: -12px;\n}\n\n.forecast-day h3 {\n  font-weight: 700;\n  font-size: 108%;\n  color: wheat;\n}\n\n@media only screen and (max-width: 560px) {\n  #forecast {\n    gap: 1rem;\n  }\n\n  .space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: none;\n  }\n\n  .search-bar {\n    width: 8rem;\n  }\n\n  .input input {\n    width: 2rem;\n  }\n}\n'],sourceRoot:""}]);const a=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},606:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,c=[],p=!1,d=-1;function u(){p&&a&&(p=!1,a.length?c=a.concat(c):d=-1,c.length&&l())}function l(){if(!p){var e=i(u);p=!0;for(var t=c.length;t;){for(a=c,c=[];++d<t;)a&&a[d].run();d=-1,t=c.length}a=null,p=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||p||i(l)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},788:(e,t,n)=>{"use strict";var r=n(72),o=n.n(r),s=n(825),i=n.n(s),a=n(659),c=n.n(a),p=n(56),d=n.n(p),u=n(540),l=n.n(u),f=n(113),m=n.n(f),h=n(365),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],p=r.base?c[0]+r.base:c[0],d=s[p]||0,u="".concat(p," ").concat(d);s[p]=d+1;var l=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),p=0;p<s.length;p++){var d=n(s[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},412:(e,t,n)=>{"use strict";n.d(t,{X:()=>c}),n(606),n(788);var r=n(220),o=n(985);class s{constructor(e,t,n,r,o,s,i){this.resolvedAddress=e||"Unknown Location",this.datetime=t||"Unknown Date",this.temp=void 0!==n?n:"N/A",this.tempmin=void 0!==r?r:"N/A",this.tempmax=void 0!==o?o:"N/A",this.conditions=s||"N/A",this.icon=i||"default-icon"}renderCurrentWeather(e){const t=n(634)(`./${this.icon}.png`);document.getElementById("current-weather").innerHTML=`\n            <img class="-ml-4 -mt-4 -mb-2" src="${t}" alt="${this.conditions}">\n            <h2 class="text-2xl mb-2 font-bold">${this.resolvedAddress}</h2>\n            <p class="text-xl temp mb-2 text-info font-semibold" data-original-temp="${this.temp}">${this.temp}${e}</p>\n            <p class="tempmin" data-original-temp="${this.tempmin}">${this.tempmin}${e} <span class="text-gray-400">/</span> \n            <span class="tempmax mb-2" data-original-temp="${this.tempmax}">${this.tempmax}${e}</span></p>\n            <p>${this.conditions}</p>\n        `}renderForecast(e,t){const r=n(634)(`./${this.icon}.png`),s=(0,o.S)(this.datetime);e.innerHTML=`\n            <div class="forecast-day bg-neutral pb-4 min-h-52 rounded-lg text-center flex flex-col justify-center w-64">\n                <center><img src="${r}" alt="${this.conditions}"></center>\n                <h3>${s}</h3>\n                <p class="tempmin text-white" data-original-temp="${this.tempmin}">${this.tempmin}${t} <span class="text-gray-400">/</span> \n                <span class="tempmax" data-original-temp="${this.tempmax}">${this.tempmax}${t}</span></p>\n                <p>${this.conditions}</p>\n            </div>\n        `}}var i=n(171);const a=document.getElementById("searchField");async function c(e){console.log("User entered:",e),(0,i.b)(!0);let t=(0,r.h)();const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}/next6days?unitGroup=${t}&elements=datetime%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Cconditions%2Cicon&key=NVX2UNEEQ2C2M6SWL7G732EED&contentType=json`,{mode:"cors"});try{const e=await n.json();console.log(e),function(e){try{if(e){console.log("Data is being passed through:",e);let t=e.days;const n=t[0],o=void 0!==e.currentConditions.tempmin?e.currentConditions.tempmin:n.tempmin,i=void 0!==e.currentConditions.tempmax?e.currentConditions.tempmax:n.tempmax,a=(0,r.D)(document.getElementById("tempToggle"));new s(e.resolvedAddress,e.currentConditions.datetime,e.currentConditions.temp,o,i,e.currentConditions.conditions,e.currentConditions.icon).renderCurrentWeather(a);const c=document.getElementById("forecast");t.slice(1,7).forEach((t=>{const n=new s(e.resolvedAddress,t.datetime,t.temp,t.tempmin,t.tempmax,t.conditions,t.icon),r=document.createElement("div");r.classList.add("day-container"),r.classList.add("carousel-item"),c.appendChild(r),n.renderForecast(r,a)}))}else console.log("Data is NOT being passed through")}catch(e){console.log("Data Parameter is NOT being received",e)}}(e)}catch(e){console.error("Error fetching the weather data:",e)}finally{(0,i.b)(!1)}}a.addEventListener("keypress",(function(e){if("Enter"===e.key){e.preventDefault();const t=document.getElementById("forecast");for(;t.firstChild;)t.removeChild(t.firstChild);c(a.value)}}))},985:(e,t,n)=>{"use strict";function r(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toLocaleDateString("en-US",{weekday:"long"})}n.d(t,{S:()=>r})},634:(e,t,n)=>{var r={"./clear-day.png":122,"./clear-night.png":358,"./cloudy.png":366,"./fog.png":848,"./hail.png":720,"./partly-cloudy-day.png":766,"./partly-cloudy-night.png":890,"./rain-snow-showers-day.png":173,"./rain-snow-showers-night.png":633,"./rain-snow.png":186,"./rain.png":572,"./showers-day.png":380,"./showers-night.png":40,"./sleet.png":505,"./snow-showers-day.png":288,"./snow-showers-night.png":196,"./snow.png":199,"./thunder-rain.png":367,"./thunder-showers-day.png":641,"./thunder-showers-night.png":77,"./thunder.png":382,"./wind.png":976};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=634},171:(e,t,n)=>{"use strict";n.d(t,{b:()=>o});var r=n(412);function o(e){let t=document.getElementById("initiateLoadModal");e?t.innerHTML='<span class="loading loading-spinner loading-lg"></span>':r.X&&o&&(t.innerHTML="")}},220:(e,t,n)=>{"use strict";n.d(t,{D:()=>s,h:()=>o});const r=function(e){let t;return function(...n){clearTimeout(t),t=setTimeout((()=>e.apply(this,n)),250)}}(n(412).X);function o(){document.querySelectorAll(".day-container").forEach((e=>{e.remove()}));const e=document.getElementById("tempToggle");let t=e.checked?"us":"metric";return e.addEventListener("change",(function(){t=this.checked?"us":"metric",console.log(this.checked?"Fahrenheit is selected.":"Celsius is selected.");const e=document.getElementById("searchField");return r(e.value),t})),t}function s(e){let t=e.checked?"°F":"°C";return document.querySelectorAll(".metric-symbol").forEach((e=>{e.textContent=t})),t}},122:(e,t,n)=>{"use strict";e.exports=n.p+"d1af54a7de6967757748.png"},358:(e,t,n)=>{"use strict";e.exports=n.p+"4fad58c6810d91bc7384.png"},366:(e,t,n)=>{"use strict";e.exports=n.p+"a921e745794410c2d281.png"},848:(e,t,n)=>{"use strict";e.exports=n.p+"f0c7d6ba1aad36cd573b.png"},720:(e,t,n)=>{"use strict";e.exports=n.p+"5e77beba39fb67a37b57.png"},766:(e,t,n)=>{"use strict";e.exports=n.p+"28f095d7c25369aec438.png"},890:(e,t,n)=>{"use strict";e.exports=n.p+"cf989d6adac6d8f5a718.png"},173:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},633:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},186:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},572:(e,t,n)=>{"use strict";e.exports=n.p+"dcc448eaac5fd4648c27.png"},380:(e,t,n)=>{"use strict";e.exports=n.p+"dcc448eaac5fd4648c27.png"},40:(e,t,n)=>{"use strict";e.exports=n.p+"6659ab4de1c132e448dc.png"},505:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},288:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},196:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},199:(e,t,n)=>{"use strict";e.exports=n.p+"4db6cbca7fa219f2cf04.png"},367:(e,t,n)=>{"use strict";e.exports=n.p+"331cf6886ed38d410fb4.png"},641:(e,t,n)=>{"use strict";e.exports=n.p+"331cf6886ed38d410fb4.png"},77:(e,t,n)=>{"use strict";e.exports=n.p+"331cf6886ed38d410fb4.png"},382:(e,t,n)=>{"use strict";e.exports=n.p+"331cf6886ed38d410fb4.png"},976:(e,t,n)=>{"use strict";e.exports=n.p+"f0c7d6ba1aad36cd573b.png"}},e=>{e(e.s=171)}]);
//# sourceMappingURL=loadingModal.bundle.js.map