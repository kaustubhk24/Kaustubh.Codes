"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[16215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Revising the Select Query II",date:new Date("2021-03-04T07:42:23.000Z"),authors:"kaustubh",slug:"/revising-the-select-query-ii/"},l=void 0,o={permalink:"/blog/revising-the-select-query-ii/",source:"@site/blog/2021-03-04-revising-the-select-query-ii.md",title:"Revising the Select Query II",description:"Query the NAME field for all American cities in the CITY table with populations larger than 1200. The ountryCode_ for America is USA.",date:"2021-03-04T07:42:23.000Z",formattedDate:"March 4, 2021",tags:[],readingTime:.245,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Revising the Select Query II",date:"2021-03-04T07:42:23.000Z",authors:"kaustubh",slug:"/revising-the-select-query-ii/"},prevItem:{title:"Select All",permalink:"/blog/select-all/"},nextItem:{title:"Revising the Select Query I",permalink:"/blog/revising-the-select-query-i/"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query the ",(0,a.kt)("strong",{parentName:"p"},"NAME")," field for all American cities in the ",(0,a.kt)("strong",{parentName:"p"},"CITY")," table with populations larger than ",(0,a.kt)("inlineCode",{parentName:"p"},"120_0"),". The ",(0,a.kt)("em",{parentName:"p"},"ountryCode")," for America is ",(0,a.kt)("inlineCode",{parentName:"p"},"USA"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"CITY")," table is described as follows:\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-1.jpg",alt:null})," "),(0,a.kt)("p",null,"Answer :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL"',title:'"SQL"'},"select NAME as cities from CITY where POPULATION > 120000 and COUNTRYCODE='USA' ;\n")))}f.isMDXComponent=!0}}]);