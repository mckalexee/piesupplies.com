if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,f)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return n;default:return e(i)}}))).then((e=>{const i=f(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-20fbe8f1"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"66d287f72ccb979a111cf941381580cb"},{url:"android-chrome-512x512.png",revision:"f66e1508b35fe483ddcf35c0c0915999"},{url:"apple-touch-icon.png",revision:"d7638e62b8e026e85f18ca20b97effb4"},{url:"browserconfig.xml",revision:"b8c7fc46f8968e2b1d953ddddd848122"},{url:"favicon-16x16.png",revision:"d0157a9a5c5e8a6ac4d8cb1bb0b607fb"},{url:"favicon-32x32.png",revision:"1c9374dc78c9532114378d1d4fa2e825"},{url:"favicon.ico",revision:"2a2bde3f843c35b9ad2069f48204015e"},{url:"img/profile_2x.jpg",revision:"9aa262291bc3cfc4fee1f75eea34f25d"},{url:"img/profile_3x.jpg",revision:"6b1096ff21328609c970ab7581a72573"},{url:"img/profile_4x.jpg",revision:"50ac0decc66a1e09be6c6e8cbd96982a"},{url:"img/profile.jpg",revision:"d42c1824d7e79622ff7b25eb52a74b13"},{url:"index.html",revision:"1d3715e3ad56b0513f08959bbfa038e0"},{url:"maskable_icon.png",revision:"5fd55f8333c9ad3bf3862dd1acefac37"},{url:"mstile-144x144.png",revision:"35d6a68803a3ae7f5da3cc52120f0a0f"},{url:"mstile-150x150.png",revision:"ed399c6f8a32fa1c175a6afb61d9874a"},{url:"mstile-310x150.png",revision:"91e322c3a3a88cc09559cf31547d9f44"},{url:"mstile-310x310.png",revision:"22cc9978f791688580388d5dea7caf12"},{url:"mstile-70x70.png",revision:"d9bcccc9b2cc565cff1d6e3151385b65"},{url:"normalize.css",revision:"e45f0257fbc6fc626d0878b745716b5f"},{url:"safari-pinned-tab.svg",revision:"415679beb1e928b28157eb34d2e933d2"},{url:"site.webmanifest",revision:"f1c282ee299f626a7839aa4db7dbb83c"},{url:"styles.css",revision:"4017221bf6a3640fb026fff1a1272115"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
