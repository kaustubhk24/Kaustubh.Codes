"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[96214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,y=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:n,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Program to calculate the sum of the diagonal elements of a NumPy array",date:new Date("2021-05-31T07:40:01.000Z"),authors:"kaustubh",slug:"/program-to-calculate-the-sum-of-the-diagonal-elements-of-a-numpy-array/"},l=void 0,u={permalink:"/blog/program-to-calculate-the-sum-of-the-diagonal-elements-of-a-numpy-array/",source:"@site/blog/2021-05-31-program-to-calculate-the-sum-of-the-diagonal-elements-of-a-numpy-array.md",title:"Program to calculate the sum of the diagonal elements of a NumPy array",description:"Code >",date:"2021-05-31T07:40:01.000Z",formattedDate:"May 31, 2021",tags:[],readingTime:.275,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to calculate the sum of the diagonal elements of a NumPy array",date:"2021-05-31T07:40:01.000Z",authors:"kaustubh",slug:"/program-to-calculate-the-sum-of-the-diagonal-elements-of-a-numpy-array/"},prevItem:{title:"Program to create a Numpy array filled with all ones",permalink:"/blog/program-to-create-a-numpy-array-filled-with-all-ones/"},nextItem:{title:"Program to find the sum of values in a matrix",permalink:"/blog/program-to-find-the-sum-of-values-in-a-matrix/"}},i={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Code > ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.vb"',title:'"file.vb"'},'import numpy as np\nn_array = np.array([[95, 25, 15],\n [30, 24, 2],\n [14, 25, 47]])\nprint("Numpy Matrix is:")\nprint(n_array)\ntrace = np.trace(n_array)\nprint("Trace of given matrix:")\nprint(trace)\n')),(0,n.kt)("p",null,"Output>"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"Numpy Matrix is:\n[[95 25 15]\n [30 24 2]\n [14 25 47]]\nTrace of given matrix:\n166\n")))}s.isMDXComponent=!0}}]);