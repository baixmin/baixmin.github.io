if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const n=e=>i(e,d),o={module:{uri:d},exports:f,require:n};s[d]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/color.css",revision:"dba9ecd443ae2c9f26cc603a392f64b3"},{url:"css/custom.css",revision:"45e125d4e098c6c88c41d74f3ed5b116"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"f392a230141fbd284e5c9210a3de4e7e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"f8548b62abc7e18437876042f9aba6ff"},{url:"404.html",revision:"7fcdf8513706dff2836d22be9f477550"},{url:"js/lanmoyan-blog-friends@1.1.0.js",revision:"43613dbf327739973ca624ce0fc4c77d"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"6d27ae3cf834050e2b8c3a3c0bd4573d"},{url:"js/welcome.js",revision:"fe4eceb110907166c2399c45e129a052"},{url:"anzhiyu/random.js",revision:"5901ee4e50a72290af0774882ea156ad"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"f5eecf718e996f0546d01942faf69a0d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"37704d000d888681af3edc313fa51fbd"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"manifest.json",revision:"5f8beed188de90799666786d2ef180cb"},{url:"/",revision:"index-20230624133842498"},{url:"music/",revision:"music-20230624133842498"},{url:"about/",revision:"about-20230624133842498"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
