"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Write a VB Program to accept the number from the user in text box and display multiplication table of that number into the list box.",date:new Date("2020-08-28T14:25:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/"},i=void 0,u={permalink:"/blog/write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/",source:"@site/blog/2020-08-28-t1 (30).md",title:"Write a VB Program to accept the number from the user in text box and display multiplication table of that number into the list box.",description:"",date:"2020-08-28T14:25:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB Program to accept the number from the user in text box and display multiplication table of that number into the list box.",date:"2020-08-28T14:25:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/"},prevItem:{title:"Write a VB program to accept the details of book, store those details into the database and delete the particular record of given book id. (Use inputBox)",permalink:"/blog/write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox-2/"},nextItem:{title:"Write a VB program for currency conversion. The program should input the amount in any currency and the output should be displayed in the desire currency as selected by the user. An input form should accept all the currency rates. The various currencies are rupee, dollar, pound and euro. (Use textbox control for input and to display output also)",permalink:"/blog/write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Private Sub cmdShow_Click()  \n  \nno = Val(Text1.Text)  \nFor i = 1 To 10 Step 1  \nList1.AddItem (no &" x " & i & " = " & no * i)  \nNext  \nEnd Sub  \n  \n  \n\n')))}b.isMDXComponent=!0}}]);