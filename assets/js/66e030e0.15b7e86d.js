"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[33034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,g=p["".concat(i,".").concat(b)]||p[b]||l[b]||a;return n?r.createElement(g,u(u({ref:t},c),{},{components:n})):r.createElement(g,u({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=b;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[p]="string"==typeof e?e:o,u[1]=m;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},31913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>m,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Write a Vb.net program to accept n numbers through inputBox and count the number of Armstrong and Perfect numbers among them and display their count by using messagebox.",date:new Date("2020-08-28T15:10:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-net-program-to-accept-n-numbers-through-inputbox-and-count-the-number-of-armstrong-and-perfect-numbers-among-them-and-display-their-count-by-using-messagebox/"},u=void 0,m={permalink:"/blog/write-a-vb-net-program-to-accept-n-numbers-through-inputbox-and-count-the-number-of-armstrong-and-perfect-numbers-among-them-and-display-their-count-by-using-messagebox/",source:"@site/blog/2020-08-28-t1 (66).md",title:"Write a Vb.net program to accept n numbers through inputBox and count the number of Armstrong and Perfect numbers among them and display their count by using messagebox.",description:"",date:"2020-08-28T15:10:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.85,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a Vb.net program to accept n numbers through inputBox and count the number of Armstrong and Perfect numbers among them and display their count by using messagebox.",date:"2020-08-28T15:10:00.000Z",authors:"kaustubh",slug:"/write-a-vb-net-program-to-accept-n-numbers-through-inputbox-and-count-the-number-of-armstrong-and-perfect-numbers-among-them-and-display-their-count-by-using-messagebox/"},prevItem:{title:"Write a Vb.net program to add two TextBoxes, two Labels and one button at runtime. Accept two numbers in textboxes and handle DivideByZeroException.",permalink:"/blog/write-a-vb-net-program-to-add-two-textboxes-two-labels-and-one-button-at-runtime-accept-two-numbers-in-textboxes-and-handle-dividebyzeroexception/"},nextItem:{title:"Write a Vb.Net program to move the Text \u201cKaustubh K..com\u201d continuously from Left to Right.",permalink:"/blog/write-a-vb-net-program-to-move-the-text-justinclicks-com-continuously-from-left-to-right/"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s},p="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'PublicClass Form1  \nPrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  \nSystem.EventArgs) Handles Button1.Click  \nDim no(10) AsInteger  \nDim i AsInteger  \nDim num AsInteger  \nDim num2 AsInteger  \nDim r AsInteger  \nDim armno AsInteger  \nDim perfct AsInteger  \nDim cntarm AsInteger  \nDim cntperfct AsInteger  \nDim nm AsInteger  \nFor i = 0 To 10 - 1  \n no(i) = CInt(inputBox("Enter Number"))  \nNext  \nFor i = 0 To 10 - 1  \n num = no(i)  \n armno = 0  \n perfct = 0  \n num2 = num  \nWhile num  \n r = num Mod 10  \n armno = armno + r * r * r  \n num = num  10  \nEndWhile  \nIf armno = num2 Then  \n cntarm = cntarm + 1  \nEndIf  \n num = num2  \n nm = 1  \nWhile nm <= num2  2  \nIf num2 Mod nm = 0 Then  \n perfct = perfct + nm  \nEndIf  \n nm = nm + 1  \nEndWhile  \nIf perfct = num Then  \n cntperfct = cntperfct + 1  \nEndIf  \nNext  \n MsgBox("Armstrong numbers "& cntarm)  \nNR Classes (8796064387 / 90) Page 3  \n MsgBox("Perfect numbers "& cntperfct)  \nEndSub  \nEndClass  \n  \n  \n\n')))}l.isMDXComponent=!0}}]);