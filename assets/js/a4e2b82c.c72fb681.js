"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[52511],{3905:(A,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>s});var r=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},a=Object.keys(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var p=r.createContext({}),g=function(A){var e=r.useContext(p),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},i=function(A){var e=g(A.components);return r.createElement(p.Provider,{value:e},A.children)},u="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,p=A.parentName,i=l(A,["components","mdxType","originalType","parentName"]),u=g(t),m=n,s=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(s,o(o({ref:e},i),{},{components:t})):r.createElement(s,o({ref:e},i))}));function s(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=A,l[u]="string"==typeof A?A:n,o[1]=l;for(var g=2;g<a;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10406:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var r=t(87462),n=(t(67294),t(3905));const a={title:"Program to Plot List of X, Y Coordinates in Matplotlib",date:new Date("2021-05-31T07:48:45.000Z"),authors:"kaustubh",slug:"/program-to-plot-list-of-x-y-coordinates-in-matplotlib/"},o=void 0,l={permalink:"/blog/program-to-plot-list-of-x-y-coordinates-in-matplotlib/",source:"@site/blog/2021-05-31-program-to-plot-list-of-x-y-coordinates-in-matplotlib.md",title:"Program to Plot List of X, Y Coordinates in Matplotlib",description:"Code >",date:"2021-05-31T07:48:45.000Z",formattedDate:"May 31, 2021",tags:[],readingTime:.205,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Plot List of X, Y Coordinates in Matplotlib",date:"2021-05-31T07:48:45.000Z",authors:"kaustubh",slug:"/program-to-plot-list-of-x-y-coordinates-in-matplotlib/"},prevItem:{title:"Program to reads an image, display image and then represents the image in array",permalink:"/blog/program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/"},nextItem:{title:"Program to add column in to Dataframe",permalink:"/blog/program-to-add-column-in-to-dataframe/"}},p={authorsImageUrls:[void 0]},g=[],i={toc:g},u="wrapper";function c(A){let{components:e,...t}=A;return(0,n.kt)(u,(0,r.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Code > ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"import numpy as np\nimport matplotlib.pyplot as plt\nx = np.arange(1, 11, 1)\ny = np.arange(10, 0, -1)\n# plot our list in X,Y coordinates\nplt.scatter(x, y)\nplt.show()\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Output > ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"data:image/png;base64,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%0A",alt:"Output",title:"Output"})))}c.isMDXComponent=!0}}]);