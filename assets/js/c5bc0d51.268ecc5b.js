"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[9592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,g=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Program for Insertion Sort in CPP",date:new Date("2020-08-16T11:54:00.000Z"),authors:"kaustubh",slug:"/program-for-insertion-sort-in-cpp/"},i=void 0,c={permalink:"/blog/program-for-insertion-sort-in-cpp/",source:"@site/blog/2020-08-16-program-for-insertion-sort-in-cpp.md",title:"Program for Insertion Sort in CPP",description:"",date:"2020-08-16T11:54:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.255,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program for Insertion Sort in CPP",date:"2020-08-16T11:54:00.000Z",authors:"kaustubh",slug:"/program-for-insertion-sort-in-cpp/"},prevItem:{title:"Program for factorial of Number",permalink:"/blog/program-for-factorial-of-number/"},nextItem:{title:"Program for Selection Sort in CPP",permalink:"/blog/program-for-selection-sort-in-cpp/"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="insertion.cpp"',title:'"insertion.cpp"'},'\n#include<iostream>\n \nusing namespace std;\n \nint main()\n{\n    int i,j,n,temp;\n    cout<<"Enter the number of elements:";\n    cin>>n;\n    int a[n];\n    cout<<"nEnter the elementsn";\n \n    for(i=0;i<n;i++)\n    {\n        cin>>a[i];\n    }\n \n    for(i=1;i<=n-1;i++)\n    {\n        temp=a[i];\n        j=i-1;\n \n        while((temp<a[j])&&(j>=0))\n        {\n            a[j+1]=a[j];    \n            j=j-1;\n        }\n \n        a[j+1]=temp;   \n    }\n \n    cout<<"nSorted list is as follows\\n";\n    for(i=0;i<n;i++)\n    {\n        cout<<a[i]<<" ";\n    }\n \n    return 0;\n}\n\n\n')))}f.isMDXComponent=!0}}]);