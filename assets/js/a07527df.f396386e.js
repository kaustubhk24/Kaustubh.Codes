"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[56974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(r),f=n,g=c["".concat(u,".").concat(f)]||c[f]||s[f]||o;return r?a.createElement(g,m(m({ref:t},p),{},{components:r})):a.createElement(g,m({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,m=new Array(o);m[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,m[1]=i;for(var l=2;l<o;l++)m[l]=r[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Program to get the maximum value from given matrix",date:new Date("2021-05-31T07:36:11.000Z"),authors:"kaustubh",slug:"/program-to-get-the-maximum-value-from-given-matrix/"},m=void 0,i={permalink:"/blog/program-to-get-the-maximum-value-from-given-matrix/",source:"@site/blog/2021-05-31-program-to-get-the-maximum-value-from-given-matrix.md",title:"Program to get the maximum value from given matrix",description:"Code >",date:"2021-05-31T07:36:11.000Z",formattedDate:"May 31, 2021",tags:[],readingTime:.275,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to get the maximum value from given matrix",date:"2021-05-31T07:36:11.000Z",authors:"kaustubh",slug:"/program-to-get-the-maximum-value-from-given-matrix/"},prevItem:{title:"Program to select the elements from a given matrix",permalink:"/blog/program-to-select-the-elements-from-a-given-matrix/"},nextItem:{title:"Juice Maker",permalink:"/blog/juice-maker/"}},u={authorsImageUrls:[void 0]},l=[],p={toc:l},c="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Code > ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"import numpy as np\nimport pandas as pd\nmatrix = [(100, 63, 47),\n          (11, 103, 117),\n          (49, 36, 55),\n          (75,24, 34),\n          (89, 21, 44)\n          ]\npanda_max = pd.DataFrame(matrix, index = list('symca'), columns = list('psk'))\nmaxValues = panda_max.max()\nprint(maxValues)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Output > ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"100\n103\n117\n")))}s.isMDXComponent=!0}}]);