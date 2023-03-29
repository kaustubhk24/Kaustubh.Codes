"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[98913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,g=h["".concat(u,".").concat(m)]||h[m]||p[m]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Write a java program which shows how to get the name of a running thread?",date:new Date("2020-09-01T08:41:00.000Z"),authors:"kaustubh",slug:"/write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/"},i=void 0,s={permalink:"/blog/write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/",source:"@site/blog/2020-09-01-write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread.md",title:"Write a java program which shows how to get the name of a running thread?",description:"Output:",date:"2020-09-01T08:41:00.000Z",formattedDate:"September 1, 2020",tags:[],readingTime:.305,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a java program which shows how to get the name of a running thread?",date:"2020-09-01T08:41:00.000Z",authors:"kaustubh",slug:"/write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/"},prevItem:{title:"Write a program to traverse (or iterate) ArrayList?",permalink:"/blog/write-a-program-to-traverse-or-iterate-arraylist/"},nextItem:{title:"Write a program to insert the specified element at the end of this list. [Tip: use java.util.LinkedList.addLast()",permalink:"/blog/write-a-program-to-insert-the-specified-element-at-the-end-of-this-list-tip-use-java-util-linkedlist-addlast/"}},u={authorsImageUrls:[void 0]},c=[],l={toc:c},h="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="getThreadName.java"',title:'"getThreadName.java"'},'  \n/**  \n *   Q1 Write a java program which shows how to get the name of a running thread?  \n */  \n  \nclass getThreadName extends Thread{    \n      public static void main(String args[]){    \n  \n  \n    getThreadName t=new getThreadName();    \n    t.start();   \n    System.out.println("Name of Thread :"+t.getName());    \n    t.setName("TEST_NAME");    \n    System.out.println("After changing name of t:"+t.getName());   \n      \n      \n   }    \n  }    \n\n')),(0,n.kt)("p",null,"Output: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  \nLENOVO@DESKTOP-U7S0D\\assignment no2_8be11fb  \nName of Thread :Thread-0  \nAfter changing name of t:TEST_NAME  \n\n")))}p.isMDXComponent=!0}}]);