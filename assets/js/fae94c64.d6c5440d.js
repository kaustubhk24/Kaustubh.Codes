"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[55854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"Write a VB Program to create status bar and display it on onto the form. Status bar should have five panels to display any text, date, time, CAPS ON/OFF, Num ON/OFF.",date:new Date("2020-08-28T14:32:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-create-status-bar-and-display-it-on-onto-the-form-status-bar-should-have-five-panels-to-display-any-text-date-time-caps-on-off-num-on-off/"},s=void 0,i={permalink:"/blog/write-a-vb-program-to-create-status-bar-and-display-it-on-onto-the-form-status-bar-should-have-five-panels-to-display-any-text-date-time-caps-on-off-num-on-off/",source:"@site/blog/2020-08-28-t1 (26).md",title:"Write a VB Program to create status bar and display it on onto the form. Status bar should have five panels to display any text, date, time, CAPS ON/OFF, Num ON/OFF.",description:"",date:"2020-08-28T14:32:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.335,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB Program to create status bar and display it on onto the form. Status bar should have five panels to display any text, date, time, CAPS ON/OFF, Num ON/OFF.",date:"2020-08-28T14:32:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-create-status-bar-and-display-it-on-onto-the-form-status-bar-should-have-five-panels-to-display-any-text-date-time-caps-on-off-num-on-off/"},prevItem:{title:"Write a VB program to store the details of players into the database and display that details using ADODC.",permalink:"/blog/write-a-vb-program-to-store-the-details-of-players-into-the-database-and-display-that-details-using-adodc/"},nextItem:{title:"Write a VB Program to create a POPUP menu. Menu are Color (sub menu- red, green, blue, yellow), Font (Times New Roman, Verdana, Arial Black etc), Font Size (10, 11, 12 etc) after clicking on particular menu changes should reflect on Label control",permalink:"/blog/write-a-vb-program-to-create-a-popup-menu-menu-are-color-sub-menu-red-green-blue-yellow-font-times-new-roman-verdana-arial-black-etc-font-size-10-11-12-etc-after-clicking-on-partic/"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Private Declare Function GetKeyState Lib "user32" (ByValnVirtKey As Long) As Integer  \nPrivate Sub Form_Load()  \n    StatusBar1.Panels(1) = "HI"  \n  \n    StatusBar1.Panels(2) = Date  \n    StatusBar1.Panels(3) = Time  \nEnd Sub  \n  \nPrivate Sub Timer1_Timer()  \nIf GetKeyState(vbKeyCapital) = 0 Then  \n        StatusBar1.Panels(4) = "CAPS OFF"  \n    Else  \n        StatusBar1.Panels(4) = "CAPS ON"  \n    End If  \n    If GetKeyState(vbKeyNumlock) = 0 Then  \n        StatusBar1.Panels(5) = "NUM LOCK OFF"  \n    Else  \n        StatusBar1.Panels(5) = "NUM LOCK ON"  \n    End If  \n      \nEnd Sub  \n  \n  \n  \n\n')))}f.isMDXComponent=!0}}]);