"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[54405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,g=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Write a java program to get an element in a tree set which is strictly less than the given element",date:new Date("2020-09-10T08:37:00.000Z"),authors:"kaustubh",slug:"/write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element/"},o=void 0,l={permalink:"/blog/write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element/",source:"@site/blog/2020-09-10-write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element.md",title:"Write a java program to get an element in a tree set which is strictly less than the given element",description:"Output:",date:"2020-09-10T08:37:00.000Z",formattedDate:"September 10, 2020",tags:[],readingTime:.205,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a java program to get an element in a tree set which is strictly less than the given element",date:"2020-09-10T08:37:00.000Z",authors:"kaustubh",slug:"/write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element/"},prevItem:{title:"Write a java program to get the number of elements in a hash set.",permalink:"/blog/write-a-java-program-to-get-the-number-of-elements-in-a-hash-set/"},nextItem:{title:"Write a java program to get the first and last elements in a tree",permalink:"/blog/write-a-java-program-to-get-the-first-and-last-elements-in-a-tree/"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="lessThan.java"',title:'"lessThan.java"'},'  \nimport java.util.*;  \npublic class lessThan {  \npublic static void main(String[] args) {  \nTreeSet tree = new TreeSet();  \ntree.add(15);  \ntree.add(22);  \ntree.add(13);  \n  \nSystem.out.println(tree.lower(16)+ " is strictly less than 16");  \n}  \n}  \n\n')),(0,a.kt)("p",null,"Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  \n15 is strictly less than 16  \n\n")))}m.isMDXComponent=!0}}]);