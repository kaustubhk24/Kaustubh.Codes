"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[55249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,b=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,u(u({ref:t},l),{},{components:r})):n.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,u[1]=c;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Program for Number Pattern",date:new Date("2020-08-16T11:46:00.000Z"),authors:"kaustubh",slug:"/program-for-number-pattern/"},u=void 0,c={permalink:"/blog/program-for-number-pattern/",source:"@site/blog/2020-08-16-program-for-number-pattern.md",title:"Program for Number Pattern",description:"",date:"2020-08-16T11:46:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.21,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program for Number Pattern",date:"2020-08-16T11:46:00.000Z",authors:"kaustubh",slug:"/program-for-number-pattern/"},prevItem:{title:"Program for Number Pattern 2",permalink:"/blog/program-for-number-pattern-2/"},nextItem:{title:"Program to create * pattern in CPP",permalink:"/blog/program-to-create-pattern-in-cpp/"}},i={authorsImageUrls:[void 0]},p=[],l={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Pattern.cpp"',title:'"Pattern.cpp"'},'/* Program for below pattern \n\n\n1   \n2   2   \n3   3   3   \n4   4   4   4   \n5   5   5   5   5   \n\n\n\n\n*/\n\n\n#include<iostream>\nusing namespace std;\nint main()\n{\n        for(int i=1;i<=5;i++)\n    {\n        for(int j=1;j<=i;j++)\n        {\n            cout<<i<<"t";\n        }\n        cout<<endl;\n    }\n}\n\n\n')))}s.isMDXComponent=!0}}]);