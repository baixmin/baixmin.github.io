if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let r={};const n=e=>s(e,l),o={module:{uri:l},exports:r,require:n};i[l]=Promise.all(a.map((e=>o[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/color.css",revision:"dba9ecd443ae2c9f26cc603a392f64b3"},{url:"css/custom.css",revision:"45e125d4e098c6c88c41d74f3ed5b116"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"f392a230141fbd284e5c9210a3de4e7e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"f8548b62abc7e18437876042f9aba6ff"},{url:"404.html",revision:"4a736e09bb1e3eb682a45b208c1fd081"},{url:"js/lanmoyan-blog-friends@1.1.0.js",revision:"43613dbf327739973ca624ce0fc4c77d"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"6d27ae3cf834050e2b8c3a3c0bd4573d"},{url:"js/welcome.js",revision:"fe4eceb110907166c2399c45e129a052"},{url:"anzhiyu/random.js",revision:"b598e0da6e27951de445ea70028c3496"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"f5eecf718e996f0546d01942faf69a0d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"37704d000d888681af3edc313fa51fbd"},{url:"img/favicon.ico",revision:"e340dd55bd1c0e938a7183f4330227de"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"f4a9f8dec1c7e0f59d552deae46bae7f"},{url:"img/siteicon/32.png",revision:"359d78bc4ebeba27462cee221564307c"},{url:"img/siteicon/apple-icon-180.png",revision:"b01fcf7ed60e3ab799f3eb7b373791a3"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"7c81ccbf7f22ae922e1bf7e9e49d8765"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"20cfa71bdaa2c83937d2073257ac7d9c"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"240d008280f4ee5a20c9528b45c0dfb7"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"cbdc08e817aec0dc0621a12f71732779"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"a6f70219eea50b5358b8798fbffdf1cb"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"3f105b93bc818b914993be031d18071d"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"4ab51ba48cd300c3ce4f4b3d4b99fce6"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"f0f6097440eb060c1b033d0565867670"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"3b8d0b49a8c66312045b9474598a4627"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"6d0102ae16c79af345e8215a4d9b199b"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"00e18e06c20385208a58d1256bbba79e"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"9ca172a3aaa60919d3d01834da99271a"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"c4417715e37591dfcdd4fefc3964f195"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"735de56481e15a747cc260e7ef24faa3"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"9ae18b2d975c82560e5ccce0bc6afff7"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"2c9f068f6269e2a8972a8ff4f4870fb8"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"9ab94c38b9a4b9b7476765ae11703b31"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"ac1ca54e1c096ddcb121ada1fee45afd"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"e49a3a41412ab0568657c3da00c3a906"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"71dfe000cea711971f9d6b08f356ee79"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"202c83c7b1f9e8a6b597f3d832cdf3de"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"832469d287f28685f9530927574a265c"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"98f5beaf9e36a0af477604a791208fc7"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"56ffd6825cccb838286b0200e889477e"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"be5d1be29be5a076fa6f6e246c8a174b"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"09cd11664e8169a51e28aa0228b0b14d"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"84b057c2ea3b54236231518a3fce54d1"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"e04258fc523e6637765b2d0a3f82f54f"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"d861040d9de3ceb4d94077c0febfcab1"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"027a58a819730b00dd77f0ad87f6e962"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"c61d8877365fd679e27889d4faeb68b0"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"10c2326dcbc4ef6fa6469181ea80278e"},{url:"/",revision:"index-20230624110041698"},{url:"music/",revision:"music-20230624110041698"},{url:"about/",revision:"about-20230624110041698"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
