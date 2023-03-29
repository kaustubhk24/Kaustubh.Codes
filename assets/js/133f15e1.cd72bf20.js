"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[28915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},31932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Adding Words",date:new Date("2021-05-23T00:00:00.000Z"),authors:"kaustubh",slug:"/adding-words/",tags:["Python","Coding Question","Array"]},i=void 0,l={permalink:"/blog/adding-words/",source:"@site/blog/2022-05-21-adding-words.mdx",title:"Adding Words",description:"Adding Words",date:"2021-05-23T00:00:00.000Z",formattedDate:"May 23, 2021",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"Coding Question",permalink:"/blog/tags/coding-question"},{label:"Array",permalink:"/blog/tags/array"}],readingTime:.325,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Adding Words",date:"2021-05-23T00:00:00.000Z",authors:"kaustubh",slug:"/adding-words/",tags:["Python","Coding Question","Array"]},prevItem:{title:"Making Free Medium Blog",permalink:"/blog/making-free-medium-blog/"},nextItem:{title:"Program to create following threads",permalink:"/blog/program-to-create-following-threads/"}},s={authorsImageUrls:[void 0]},u=[{value:"Adding Words",id:"adding-words",level:2},{value:"Sample input",id:"sample-input",level:3},{value:"Sample Output",id:"sample-output",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"adding-words"},"Adding Words"),(0,a.kt)("p",null,"You need to write a function that takes multiple words as its argument and returns a concatenated version of those words separated by dashes (-).\nThe function should be able to take a varying number of words as the argument."),(0,a.kt)("h3",{id:"sample-input"},"Sample input"),(0,a.kt)("p",null,"this\nis\ngreat"),(0,a.kt)("h3",{id:"sample-output"},"Sample Output"),(0,a.kt)("p",null,"this-is-great\nRecall, using "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="addWords.py"',title:'"addWords.py"'},'\ndef concatenate(*args):\n    print(\'-\'.join(args))\n    \n\nprint(concatenate("I", "love", "Python", "!"))\n')))}c.isMDXComponent=!0}}]);