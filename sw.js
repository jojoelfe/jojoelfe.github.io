if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(l(...s),a)))}}define(["./workbox-3c99db12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about.html",revision:"5b4367ab73c15a1472a8d62b59b22b63"},{url:"assets/_...all_.993e7f23.css",revision:null},{url:"assets/_...all_.ba7602f4.js",revision:null},{url:"assets/404.387e7733.js",revision:null},{url:"assets/404.a9d4f0d8.css",revision:null},{url:"assets/about.43cdaa54.css",revision:null},{url:"assets/about.53cc19f8.js",revision:null},{url:"assets/app.1e80d497.css",revision:null},{url:"assets/app.495e2bf6.js",revision:null},{url:"assets/home.2a3afd17.js",revision:null},{url:"assets/home.b2157269.css",revision:null},{url:"assets/input-knob.esm.af9b4d6e.js",revision:null},{url:"assets/virtual_pwa-register.0b4e155d.js",revision:null},{url:"assets/vue-i18n.runtime.esm-bundler.99f4b461.js",revision:null},{url:"index.html",revision:"a6ff5f9b46b8573e3bb5aa0954bc566d"},{url:"favicon.svg",revision:"fa977a6ff11b8d02d2311d6161a6eba6"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));