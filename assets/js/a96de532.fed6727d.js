"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[77478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,g=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Write a java Program to raise NullPointerException",date:new Date("2020-08-28T15:59:00.000Z"),authors:"kaustubh",slug:"/write-a-java-program-to-raise-nullpointerexception/"},i=void 0,l={permalink:"/blog/write-a-java-program-to-raise-nullpointerexception/",source:"@site/blog/2020-08-28-write-a-java-program-to-raise-nullpointerexception.md",title:"Write a java Program to raise NullPointerException",description:"Output:",date:"2020-08-28T15:59:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.19,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a java Program to raise NullPointerException",date:"2020-08-28T15:59:00.000Z",authors:"kaustubh",slug:"/write-a-java-program-to-raise-nullpointerexception/"},prevItem:{title:"Write a program to insert the specified element at the end of this list. [Tip: use java.util.LinkedList.addLast()",permalink:"/blog/write-a-program-to-insert-the-specified-element-at-the-end-of-this-list-tip-use-java-util-linkedlist-addlast/"},nextItem:{title:"Write a java program to use the try and catch and finally block.",permalink:"/blog/write-a-java-program-to-use-the-try-and-catch-and-finally-block/"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="nullPointer.java"',title:'"nullPointer.java"'},"public class nullPointer {  \n    public static void main(String[] args) {  \n       Object ref = null;  \n       ref.toString();   \n    }  \n }  \n  \n\n")),(0,a.kt)("p",null,"Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  \nLENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  \n$ java null_pointer.java  \nException in thread "main" java.lang.NullPointerException  \n        at nullPointer.main(null_pointer.java:11)    \n  \n  \n  \n\n')))}m.isMDXComponent=!0}}]);