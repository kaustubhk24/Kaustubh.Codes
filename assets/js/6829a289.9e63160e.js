"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[65650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,f=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Program To Get Largest Number From List",date:new Date("2021-02-21T06:06:04.000Z"),authors:"kaustubh",slug:"/program-to-get-largest-number-from-list/"},l=void 0,i={permalink:"/blog/program-to-get-largest-number-from-list/",source:"@site/blog/2021-02-21-program-to-get-largest-number-from-list.md",title:"Program To Get Largest Number From List",description:"",date:"2021-02-21T06:06:04.000Z",formattedDate:"February 21, 2021",tags:[],readingTime:.16,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program To Get Largest Number From List",date:"2021-02-21T06:06:04.000Z",authors:"kaustubh",slug:"/program-to-get-largest-number-from-list/"},prevItem:{title:"Program To Remove Duplicate From List",permalink:"/blog/program-to-remove-duplicate-from-list/"},nextItem:{title:"Program To Sum All The Items In A List",permalink:"/blog/program-to-sum-all-the-items-in-a-list/"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"# Write a program to get largest number from list\nlist1=[*range(1,50)]\nprint(max(list1))\n#alternate method\nlargest=0\nfor i in list1:\n if i>largest:\n largest=i\nprint(largest)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"Output:\n49\n49\n")))}c.isMDXComponent=!0}}]);