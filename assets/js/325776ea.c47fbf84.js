"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[75875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||g[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Write a VB program to design Traffic signal using shape control.",date:new Date("2020-08-28T14:50:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-design-traffic-signal-using-shape-control/"},i=void 0,l={permalink:"/blog/write-a-vb-program-to-design-traffic-signal-using-shape-control/",source:"@site/blog/2020-08-28-t1 (24).md",title:"Write a VB program to design Traffic signal using shape control.",description:"",date:"2020-08-28T14:50:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.24,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB program to design Traffic signal using shape control.",date:"2020-08-28T14:50:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-design-traffic-signal-using-shape-control/"},prevItem:{title:"Write a program in VB for Login screen validation.(use ADODC Control)",permalink:"/blog/write-a-program-in-vb-for-login-screen-validation-use-adodc-control/"},nextItem:{title:"Write a VB program for dragging and dropping multiple objects. (Take two command buttons RESET and EXIT, and four image controls). When user click on reset button then all images will go to original position.",permalink:"/blog/write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Private Sub Timer1_Timer()  \nIf Shape3.BackColor = vbGreen Then  \nShape2.BackColor = vbYellow  \nShape3.BackColor = vbWhite  \nTimer1.Interval = 500  \nElseIf Shape2.BackColor = vbYellow Then  \nShape1.BackColor = vbRed  \nShape2.BackColor = vbWhite  \nTimer1.Interval = 5000  \nElse  \nShape3.BackColor = vbGreen  \nShape1.BackColor = vbWhite  \nTimer1.Interval = 3500  \nEnd If  \nEnd Sub  \n  \n  \n\n")))}g.isMDXComponent=!0}}]);