"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[31040],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>b});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(i),d=r,b=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return i?n.createElement(b,o(o({ref:t},p),{},{components:i})):n.createElement(b,o({ref:t},p))}));function b(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:r,o[1]=u;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},64341:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={title:"Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division",date:new Date("2020-08-28T14:40:00.000Z"),authors:"kaustubh",slug:"/write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/"},o=void 0,u={permalink:"/blog/write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/",source:"@site/blog/2020-08-28-t1 (1).md",title:"Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division",description:"Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division",date:"2020-08-28T14:40:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.385,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division",date:"2020-08-28T14:40:00.000Z",authors:"kaustubh",slug:"/write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/"},prevItem:{title:"Write VB program to design following form",permalink:"/blog/write-vb-program-to-design-following-form/"},nextItem:{title:"Design a calculator in VB, Which has Two extra command buttons to check factorial of given number and to check whether entered number is even or odd",permalink:"/blog/design-a-calculator-in-vb-which-has-two-extra-command-buttons-to-check-factorial-of-given-number-and-to-check-whether-entered-number-is-even-or-odd/"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},s="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Private Sub cmdClear_Click()  \nText1.Text =     \nText2.Text =     \nText3.Text =     \nText1.SetFocus  \nEnd Sub  \nPrivate Sub cmdExit_Click()  \nUnload Me  \nEnd Sub  \nPrivate Sub mnuadd_Click()  \nText3.Text = Val(Text1.Text) + Val(Text2.Text)  \nEnd Sub  \nPrivate Sub mnuDiv_Click()  \nText3.Text = Val(Text1.Text) / Val(Text2.Text)  \nEnd Sub  \nPrivate Sub mnuMult_Click()  \nText3.Text = Val(Text1.Text) * Val(Text2.Text)  \nEnd Sub  \nPrivate Sub mnusub_Click()  \nText3.Text = Val(Text1.Text)   Val(Text2.Text)  \nEnd Sub  \n  \n  \n  \n  \n\n")))}m.isMDXComponent=!0}}]);