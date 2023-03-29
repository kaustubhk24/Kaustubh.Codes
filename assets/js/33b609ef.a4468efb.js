"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[39527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=o,b=g["".concat(u,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Write a VB program for dragging and dropping multiple objects. (Take two command buttons RESET and EXIT, and four image controls). When user click on reset button then all images will go to original position.",date:new Date("2020-08-28T14:50:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/"},i=void 0,l={permalink:"/blog/write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/",source:"@site/blog/2020-08-28-t1 (44).md",title:"Write a VB program for dragging and dropping multiple objects. (Take two command buttons RESET and EXIT, and four image controls). When user click on reset button then all images will go to original position.",description:"",date:"2020-08-28T14:50:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.72,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB program for dragging and dropping multiple objects. (Take two command buttons RESET and EXIT, and four image controls). When user click on reset button then all images will go to original position.",date:"2020-08-28T14:50:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/"},prevItem:{title:"Write a VB program to design Traffic signal using shape control.",permalink:"/blog/write-a-vb-program-to-design-traffic-signal-using-shape-control/"},nextItem:{title:"Write a VB a program to accept a string from user if the string contain any integer number that get replaced by *.",permalink:"/blog/write-a-vb-a-program-to-accept-a-string-from-user-if-the-string-contain-any-integer-number-that-get-replaced-by/"}},u={authorsImageUrls:[void 0]},s=[],c={toc:s},g="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Private Sub Command1_Click()  \nFor i = 1 To 4  \nImage1(i).Visible = True  \nNext  \nEnd Sub  \n  \nPrivate Sub Command1_DragDrop(Source As Control, X As Single, Y As Single)  \nBadDrop Source  \n  \nEnd Sub  \n  \nPrivate Sub Command2_Click()  \nUnload Me  \nEnd Sub  \n  \nPrivate Sub Command2_DragDrop(Source As Control, X As Single, Y As Single)  \nBadDrop Source  \nEnd Sub  \n  \nPrivate Sub Command2_DragOver(Source As Control, X As Single, Y As Single, State As Integer)  \nSource.Visible = False  \nEnd Sub  \n  \nPrivate Sub Form_DragDrop(Source As Control, X As Single, Y As Single)  \nDim i As Integer  \nFor i = 1 To 4  \nImage1(i).DragIcon = Image1(i).Picture  \nNext  \nEnd Sub  \n  \nPrivate Sub Form_DragOver(Source As Control, X As Single, Y As Single, State As Integer)  \nSource.Visible = False  \nEnd Sub  \n  \nPrivate Sub Picture1_DragDrop(Source As Control, X As Single, Y As Single)  \nPicture1.Picture = Source.Picture  \nEnd Sub  \nPrivate Sub BadDrop(Source)  \nSource.Visible = True  \nEnd Sub  \n  \n\n")))}p.isMDXComponent=!0}}]);