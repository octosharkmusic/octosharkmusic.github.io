!function(){"use strict";self.CACHE_BUSTER="1568847470874|0.5372542967048592",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()});var e=function(e,t){return caches.keys().then(function(n){n.forEach(function(n){0===n.indexOf(e)&&n!==t&&caches.delete(n)})})},t="".concat("esw-asset-cache","-").concat("1"),n=["assets/auto-import-fastboot-c3d02cb631f0339aad7d59036c00e81d.js","assets/chunk.12428b27e23bab226084.js","assets/chunk.23c15718be2ffe6a757b.js","assets/chunk.23d97c9a2ee1de784f7d.js","assets/chunk.59a20e4eb5a24c3fc0aa.js","assets/chunk.6b8f7b9c756e87770523.js","assets/chunk.90266b197a7eead2db89.js","assets/chunk.ac0ac7728fa300b0a238.js","assets/images/100pap-12-2018-0ec8c51b7ae3a103b1d827bb9a8257d3.jpg","assets/images/clito-night-02-2018-7e08efb38c2828d43b237ab0705b572b.jpg","assets/images/favicon.ico","assets/images/game-over-01-2018-f80137a7d7ad4116765c0ed0aa61c8cd.jpg","assets/images/global-hybrid-06-2019-c41abd70bd79d38b83175bb0debe00fc.jpg","assets/images/octoshark-logo-black-b3021127c20742d248058171c4edc43d.png","assets/images/party-of-k-04-2019-4cd18c72c7186fdfa7e4f89e23567ebd.jpg","assets/images/tribunion-01-2020-c4b3fb5d9a1544c7ee3bd17625cd4b04.jpg","assets/images/tribunion-02-2019-ebf5939ba5407d333db7586e6003205e.jpg","assets/images/tribunion-07-2019-d71197d88155489d163794311733fcaa.jpg","assets/octoshark-music-caca56058e5f3c7d762f14116e097688.css","assets/octoshark-music-f33b340bbd234655d1c31b01c505869d.js","assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css","assets/vendor-0b28f69f66bf9d6ed8efe9f7525dcc7d.js"].map(function(e){return new URL(e,self.location).toString()});self.addEventListener("install",function(e){e.waitUntil(caches.open(t).then(function(e){return Promise.all(n.map(function(t){var n=new Request(t,{mode:"cors"});return fetch(n).then(function(n){if(n.status>=400){var s=new Error("Request for ".concat(t," failed with status ").concat(n.statusText));throw s}return e.put(t,n)}).catch(function(e){console.error("Not caching ".concat(t," due to ").concat(e))})}))}))}),self.addEventListener("activate",function(s){s.waitUntil(Promise.all([e("esw-asset-cache",t),void caches.open(t).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===n.indexOf(t.url)&&e.delete(t)})})})]))}),self.addEventListener("fetch",function(e){var s="GET"===e.request.method,a=-1!==n.indexOf(e.request.url);s&&a&&e.respondWith(caches.match(e.request,{cacheName:t}).then(function(t){return t||fetch(e.request.url,{mode:"cors"})}))});var s=[],a=[];function c(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}self.INDEX_FILE_HASH="99b4eb7ca36bc2c99dc99134eb5f9284";var i="".concat("esw-index","-").concat("1"),o=new URL("index.html",self.location).toString();self.addEventListener("install",function(e){e.waitUntil(fetch(o,{credentials:"include"}).then(function(e){return caches.open(i).then(function(t){return t.put(o,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index",i))}),self.addEventListener("fetch",function(e){var t=e.request,n=new URL(t.url),r="GET"===t.method,u=-1!==t.headers.get("accept").indexOf("text/html"),f=n.origin===location.origin,h=c(t.url,s),l=!a.length||c(t.url,a);!("/tests"===n.pathname&&!1)&&r&&u&&f&&l&&!h&&e.respondWith(caches.match(o,{cacheName:i}).then(function(e){return e||fetch(o,{credentials:"include"}).then(function(e){return caches.open(i).then(function(t){return t.put(o,e)}),e.clone()})}))})}();
//# sourceMappingURL=sw-cef05f5f9fbb7676870564109811b0d8.map