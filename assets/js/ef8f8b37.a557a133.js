"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[74822],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},l="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),l=s(r),m=o,f=l["".concat(p,".").concat(m)]||l[m]||g[m]||i;return r?n.createElement(f,a(a({ref:e},u),{},{components:r})):n.createElement(f,a({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[l]="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95415:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Program to Copy String in Another String Without Using strcpy()",date:new Date("2020-08-16T12:00:00.000Z"),authors:"kaustubh",slug:"/program-to-copy-string-in-another-string-without-using-strcpy/"},a=void 0,c={permalink:"/blog/program-to-copy-string-in-another-string-without-using-strcpy/",source:"@site/blog/2020-08-16-program-to-copy-string-in-another-string-without-using-strcpy.md",title:"Program to Copy String in Another String Without Using strcpy()",description:"",date:"2020-08-16T12:00:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.135,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Copy String in Another String Without Using strcpy()",date:"2020-08-16T12:00:00.000Z",authors:"kaustubh",slug:"/program-to-copy-string-in-another-string-without-using-strcpy/"},prevItem:{title:"Program to Convert Lowercase to Uppercase in CPP",permalink:"/blog/program-to-convert-lowercase-to-uppercase-in-cpp/"},nextItem:{title:"Program to Find Length of String in CPP",permalink:"/blog/program-to-find-length-of-string-in-cpp/"}},p={authorsImageUrls:[void 0]},s=[],u={toc:s},l="wrapper";function g(t){let{components:e,...r}=t;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="file.cpp"',title:'"file.cpp"'},"#include<iostream>\nusing namespace std;\nint main()\n{\n    char str1[20],str2[20];\n    int i;\n\n    cout<<\"Enter String :\";\n    cin>>str1;\n    for(i=0;str1[i]!='';i++)\n    {\n      str2[i]=str1[i];\n    }\n    str2[i]='';\n    cout<<\"Copied String :\"<<str2;\n}\n")))}g.isMDXComponent=!0}}]);