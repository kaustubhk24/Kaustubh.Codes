"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[44459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(r),f=o,g=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={title:"Write a program to implement composition",date:new Date("2021-04-24T06:22:57.000Z"),authors:"kaustubh",slug:"/write-a-program-to-implement-composition/"},i=void 0,l={permalink:"/blog/write-a-program-to-implement-composition/",source:"@site/blog/2021-04-24-write-a-program-to-implement-composition.md",title:"Write a program to implement composition",description:"output:",date:"2021-04-24T06:22:57.000Z",formattedDate:"April 24, 2021",tags:[],readingTime:.335,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a program to implement composition",date:"2021-04-24T06:22:57.000Z",authors:"kaustubh",slug:"/write-a-program-to-implement-composition/"},prevItem:{title:"Write a program to implement aggregation",permalink:"/blog/write-a-program-to-implement-aggregation/"},nextItem:{title:"Write a program to implement method overriding.",permalink:"/blog/write-a-program-to-implement-method-overriding/"}},p={authorsImageUrls:[void 0]},m=[],s={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"class A:\n def __init__(self):\n print('Class - A Contructor')\n def m1(self):\n print('M1 method of Class - A.')\nclass B:\n def __init__(self):\n print('Class - B Constructor.')\n def m2(self):\n obj = A()\n obj.m1()\n print('M2 method of Class - B.')\nobj = B()\nobj.m2()\n")),(0,o.kt)("p",null,"output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"Class - B Constructor.\nClass - A Contructor\nM1 method of Class - A.\nM2 method of Class - B.\n")))}u.isMDXComponent=!0}}]);