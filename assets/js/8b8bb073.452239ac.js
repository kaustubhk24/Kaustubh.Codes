"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[95740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,b=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Program to Find Fibonacci Series Upto Given Number",date:new Date("2020-08-16T11:28:00.000Z"),authors:"kaustubh",slug:"/program-to-find-fibonacci-series-upto-given-number/"},i=void 0,c={permalink:"/blog/program-to-find-fibonacci-series-upto-given-number/",source:"@site/blog/2020-08-16-program-to-find-fibonacci-series-upto-given-number.md",title:"Program to Find Fibonacci Series Upto Given Number",description:"",date:"2020-08-16T11:28:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.17,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Find Fibonacci Series Upto Given Number",date:"2020-08-16T11:28:00.000Z",authors:"kaustubh",slug:"/program-to-find-fibonacci-series-upto-given-number/"},prevItem:{title:"Program to Check If Given Number is Prime or NOT",permalink:"/blog/program-to-check-if-given-number-is-prime-or-not/"},nextItem:{title:"Program to Find Factorial of Number",permalink:"/blog/program-to-find-factorial-of-number/"}},u={authorsImageUrls:[void 0]},p=[],l={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="file.cpp"',title:'"file.cpp"'},'#include   \nusing namespace std;  \nint main()  \n{  \n int n;  \n cout<<"Enter Number ";  \n cin>>n;  \n cout<<"Series:";  \n int n1=0,n2=1,n3;  \n cout< cout<<" ";  \n cout<   \n   \n for(int i=1;i<=n;i++)  \n {  \n n3=n1+n2;  \n cout<<" ";  \n cout< n1=n2;  \n n2=n3;  \n   \n   \n }  \n}  \n  \n  \n  \n  \n\n')))}m.isMDXComponent=!0}}]);