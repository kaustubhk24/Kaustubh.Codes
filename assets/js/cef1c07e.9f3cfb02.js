"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[35335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,f=p["".concat(c,".").concat(b)]||p[b]||m[b]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},82243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Write a Vb.net program for blinking an image",date:new Date("2020-08-28T15:07:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-net-program-for-blinking-an-image/"},o=void 0,l={permalink:"/blog/write-a-vb-net-program-for-blinking-an-image/",source:"@site/blog/2020-08-28-t1 (68).md",title:"Write a Vb.net program for blinking an image",description:"",date:"2020-08-28T15:07:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.15,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a Vb.net program for blinking an image",date:"2020-08-28T15:07:00.000Z",authors:"kaustubh",slug:"/write-a-vb-net-program-for-blinking-an-image/"},prevItem:{title:"Write a Vb.net program to accept a number from anuser through inputBox and display its multiplication table into the ListBox",permalink:"/blog/write-a-vb-net-program-to-accept-a-number-from-anuser-through-inputbox-and-display-its-multiplication-table-into-the-listbox/"},nextItem:{title:"Write a Vb.net program to check whether entered string is palindrome or not.",permalink:"/blog/write-a-vb-net-program-to-check-whether-entered-string-is-palindrome-or-not/"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"  \nPublicClass Form1  \nPrivateSub Timer1_Tick(ByVal sender As System.Object, ByVal e As  \nSystem.EventArgs) Handles Timer1.Tick  \nIf PictureBox1.Visible = TrueThen  \n PictureBox1.Visible = False  \nElse  \n PictureBox1.Visible = True  \nEndIf  \nEndSub  \nEndClass  \n  \n\n")))}m.isMDXComponent=!0}}]);