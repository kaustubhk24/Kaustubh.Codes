"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[71424],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(u,".").concat(f)]||p[f]||c[f]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m[p]="string"==typeof e?e:o,i[1]=m;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Program to Check If a 3 Digit Number Is Armstrong Number or Not",date:new Date("2021-05-22T01:36:19.000Z"),authors:"kaustubh",slug:"/program-to-check-if-a-3-digit-number-is-armstrong-number-or-not/"},i=void 0,m={permalink:"/blog/program-to-check-if-a-3-digit-number-is-armstrong-number-or-not/",source:"@site/blog/2021-05-22-program-to-check-if-a-3-digit-number-is-armstrong-number-or-not.md",title:"Program to Check If a 3 Digit Number Is Armstrong Number or Not",description:"Que > Program to Check If a 3 Digit Number Is Armstrong Number or Not",date:"2021-05-22T01:36:19.000Z",formattedDate:"May 22, 2021",tags:[],readingTime:.51,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Check If a 3 Digit Number Is Armstrong Number or Not",date:"2021-05-22T01:36:19.000Z",authors:"kaustubh",slug:"/program-to-check-if-a-3-digit-number-is-armstrong-number-or-not/"},prevItem:{title:"Program to demonstrate the Scope of Variables",permalink:"/blog/program-to-demonstrate-the-scope-of-variables/"},nextItem:{title:"Program to demonstrate the Return of Multiple Values from a Function Definition",permalink:"/blog/program-to-demonstrate-the-return-of-multiple-values-from-a-function-definition/"}},u={authorsImageUrls:[void 0]},l=[],s={toc:l},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Que > Program to Check If a 3 Digit Number Is Armstrong Number or Not"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},'from math import *\ndef armstrong(number):\n result = 0\n n = 0\n temp = number\n while (temp != 0):\n temp =int(temp / 10)\n n = n + 1\n temp = number\n while (temp != 0):\n remainder = temp % 10\n result = result + pow(remainder, n)\n temp = int(temp/10)\n if(result == number):\n print("Armstrong number")\n else:\n print("Not an Armstrong number")\nnumber = int(input("Enter the number : "))\nif(len(str(number))==3):\n armstrong(number)\nelse:\n print("Enter 3 digit number")\n')),(0,o.kt)("h2",{id:""}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"Enter the number : 371\nArmstrong number\n")))}c.isMDXComponent=!0}}]);