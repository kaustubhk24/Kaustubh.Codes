"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[62760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,m=u["".concat(l,".").concat(b)]||u[b]||f[b]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},83046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Write a VB program to create screen saver on the form.",date:new Date("2020-08-28T14:44:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-create-screen-saver-on-the-form/"},i=void 0,c={permalink:"/blog/write-a-vb-program-to-create-screen-saver-on-the-form/",source:"@site/blog/2020-08-28-t1 (28).md",title:"Write a VB program to create screen saver on the form.",description:"",date:"2020-08-28T14:44:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.335,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB program to create screen saver on the form.",date:"2020-08-28T14:44:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-create-screen-saver-on-the-form/"},prevItem:{title:"Write a VB program to accept the details of book, store those details into the database and delete the particular record of given book id. (Use inputBox)",permalink:"/blog/write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/"},nextItem:{title:"Write a VB program to accept input from Textbox. Check whether given input is alphabet or number. If it is alphabet check that it is in uppercase or lowercase. Display appropriate result using msgbox.",permalink:"/blog/write-a-vb-program-to-accept-input-from-textbox-check-whether-given-input-is-alphabet-or-number-if-it-is-alphabet-check-that-it-is-in-uppercase-or-lowercase-display-appropriate-result-using-msg/"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'}," Dim n As Integer  \n   Private Sub Form_Load()  \n                Label1.Top = Me.Height / 2  \n                Label1.Left = Me.Width  \n                Timer1.Interval = 1  \n                Timer1.Enabled = True  \n                 \nEnd Sub  \nPrivate Sub Timer1_Timer()  \n                 \n                If n < 200 Then  \n                                n = n + 1  \n                                Label1.Left = Label1.Left + Val(10)  \n                ElseIf n < 400 Then  \n                                n = n + 1  \n                                Label1.Left = Label1.Left - Val(10)  \n                Else  \n                                n = 0  \n                End If  \nEnd Sub  \n  \n  \n  \n  \n\n")))}f.isMDXComponent=!0}}]);