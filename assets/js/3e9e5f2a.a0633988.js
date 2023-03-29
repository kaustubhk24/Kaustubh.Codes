"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[77230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Video Forward-Reverse Controls in HTML",date:new Date("2020-08-16T12:25:00.000Z"),authors:"kaustubh",slug:"/video-forward-reverse-controls-in-html/"},i=void 0,l={permalink:"/blog/video-forward-reverse-controls-in-html/",source:"@site/blog/2020-08-16-video-forward-reverse-controls-in-html.md",title:"Video Forward-Reverse Controls in HTML",description:"",date:"2020-08-16T12:25:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.245,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Video Forward-Reverse Controls in HTML",date:"2020-08-16T12:25:00.000Z",authors:"kaustubh",slug:"/video-forward-reverse-controls-in-html/"},prevItem:{title:"Calculator Example using JQuery",permalink:"/blog/calculator-example-using-jquery/"},nextItem:{title:"User Audio Playlist using HTML",permalink:"/blog/user-audio-playlist-using-html/"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Video-Forward,Reverse</title>\n\n</head>\n<body>\n    <center>\n        <video width="400" height="400" id="myVd" controls>\n                  <source id="firstVd" src="1.mp4" type="video/mp4"></video>\n       <button id="btFwd" type="button" onClick="vdFwd()">Forward</button>\n       <button id="btBhd" type="button" onClick="vdRev()">Reverse</button><br>\n        </center>\n        <script type="text/javascript">\n            var vd = document.getElementById("myVd");\n           \n            function vdFwd()\n            {\n                vd.currentTime=vd.currentTime+10;\n                vd.play();\n            }\n            function vdRev()\n            {\n                vd.currentTime=vd.currentTime-10;\n                vd.play();\n            }<\/script>\n</body>\n</html>\n')))}p.isMDXComponent=!0}}]);