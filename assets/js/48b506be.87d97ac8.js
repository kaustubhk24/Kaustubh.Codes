"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[48135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,g=s["".concat(p,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Read Age From File and check vote eligibility",date:new Date("2021-06-12T01:06:54.000Z"),authors:"kaustubh",slug:"/read-age-from-file-and-check-vote-eligibility/"},o=void 0,l={permalink:"/blog/read-age-from-file-and-check-vote-eligibility/",source:"@site/blog/2021-06-12-read-age-from-file-and-check-vote-eligibility.md",title:"Read Age From File and check vote eligibility",description:"Que > Write a program to read Name and age of person from file named &#8216;file.txt' and print if person is eligible for voting or not.",date:"2021-06-12T01:06:54.000Z",formattedDate:"June 12, 2021",tags:[],readingTime:.305,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Read Age From File and check vote eligibility",date:"2021-06-12T01:06:54.000Z",authors:"kaustubh",slug:"/read-age-from-file-and-check-vote-eligibility/"},prevItem:{title:"write a python program to create file and write 1 to 100 numbers",permalink:"/blog/write-a-python-program-to-create-file-and-write-1-to-100-numbers/"},nextItem:{title:"Program to reads an image, display image and then represents the image in array",permalink:"/blog/program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Que >")," Write a program to read Name and age of person from file named ","\u2018","file.txt' and print if person is eligible for voting or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="file.txt"',title:'"file.txt"'},"Your Name,24\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Program.py"',title:'"Program.py"'},'def checkAge(name,age):\n    if (int(age)>18):\n        print(name+" is eligible for voting")\n    else:\n        print(name+" is not eligible for voting")\nf=open("file.txt")\ncontent=f.read()\ndata=content.split(",")\ncheckAge(data[0],data[1])\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Output > "),"\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/06/image.png",alt:"Output",title:"Output"})))}m.isMDXComponent=!0}}]);