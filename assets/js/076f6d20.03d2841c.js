"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[53010],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=c(n),s=a,g=l["".concat(u,".").concat(s)]||l[s]||f[s]||i;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var m={};for(var u in r)hasOwnProperty.call(r,u)&&(m[u]=r[u]);m.originalType=e,m[l]="string"==typeof e?e:a,o[1]=m;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84560:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const i={title:"Program to Find Minimum and Maximum Number from Given Array",date:new Date("2020-08-16T11:34:00.000Z"),authors:"kaustubh",slug:"/program-to-find-minimum-and-maximum-number-from-given-array/"},o=void 0,m={permalink:"/blog/program-to-find-minimum-and-maximum-number-from-given-array/",source:"@site/blog/2020-08-16-program-to-find-minimum-and-maximum-number-from-given-array.md",title:"Program to Find Minimum and Maximum Number from Given Array",description:"",date:"2020-08-16T11:34:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.235,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Find Minimum and Maximum Number from Given Array",date:"2020-08-16T11:34:00.000Z",authors:"kaustubh",slug:"/program-to-find-minimum-and-maximum-number-from-given-array/"},prevItem:{title:"Program to Perform Linear Search on Array",permalink:"/blog/program-to-perform-linear-search-on-array/"},nextItem:{title:"Program to Find Given Number is Perfect or NOT",permalink:"/blog/program-to-find-given-number-is-perfect-or-not/"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c},l="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(l,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="MinMax.cpp"',title:'"MinMax.cpp"'},'  \n  \n#include  \nusing namespace std;  \nint main()  \n{  \n int arr[10],n,max=0,min;  \n cout<<"Enter size of array";  \n cin>>n;  \n cout<<"Enter array elements";  \n for(int i=0;i {  \n cin>>arr[i];  \n   \n }  \n for(int i=0;i {  \n if(arr[i]>max)  \n {  \n max=arr[i];  \n   \n }  \n }  \n min=max;  \n   \n for(int i=0;i {  \n if(arr[i] {  \n min=arr[i];  \n   \n }  \n }  \n cout<<"max is:";  \n cout<   \n cout<   \n}  \n  \n\n')))}f.isMDXComponent=!0}}]);