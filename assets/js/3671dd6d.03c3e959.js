"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[22670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=m(r),b=o,d=l["".concat(s,".").concat(b)]||l[b]||p[b]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={title:"Write a VB Program to move a command button by using timer control.",date:new Date("2020-08-28T14:37:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-move-a-command-button-by-using-timer-control/"},i=void 0,c={permalink:"/blog/write-a-vb-program-to-move-a-command-button-by-using-timer-control/",source:"@site/blog/2020-08-28-t1 (15).md",title:"Write a VB Program to move a command button by using timer control.",description:"",date:"2020-08-28T14:37:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.12,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB Program to move a command button by using timer control.",date:"2020-08-28T14:37:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-move-a-command-button-by-using-timer-control/"},prevItem:{title:"Write a VB program which accepts First name and last name from user into two textboxes and three command buttons Concatenate, Uppercase, Lowercase respectively. After clicking on command button appropriate result should get display into third textbox.",permalink:"/blog/write-a-vb-program-which-accepts-first-name-and-last-name-from-user-into-two-textboxes-and-three-command-buttons-concatenate-uppercase-lowercase-respectively-after-clicking-on-command-button-approp/"},nextItem:{title:"Write a VB program to design progress bar using Timer control. Once process is completed new form should get open and display message  Processed Successfully ",permalink:"/blog/write-a-vb-program-to-design-progress-bar-using-timer-control-once-process-is-completed-new-form-should-get-open-and-display-message-processed-successfully/"}},s={authorsImageUrls:[void 0]},m=[],u={toc:m},l="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Private Sub Form_Load()  \n  \n    Timer1.Interval = 1  \n    Timer1.Enabled = True  \n      \nEnd Sub  \n  \nPrivate Sub Timer1_Timer()  \n    Command1.Left = Command1.Left + 2  \nEnd Sub  \n  \n  \n  \n  \n  \n  \n  \n\n")))}p.isMDXComponent=!0}}]);