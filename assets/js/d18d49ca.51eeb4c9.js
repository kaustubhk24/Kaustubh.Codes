"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[64542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},61763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Write a Vb.net program to accept sentences in text box and count the number of words and display the count in message box",date:new Date("2020-08-28T15:14:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-net-program-to-accept-sentences-in-text-box-and-count-the-number-of-words-and-display-the-count-in-message-box/"},c=void 0,i={permalink:"/blog/write-a-vb-net-program-to-accept-sentences-in-text-box-and-count-the-number-of-words-and-display-the-count-in-message-box/",source:"@site/blog/2020-08-28-t1 (64).md",title:"Write a Vb.net program to accept sentences in text box and count the number of words and display the count in message box",description:"",date:"2020-08-28T15:14:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.305,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a Vb.net program to accept sentences in text box and count the number of words and display the count in message box",date:"2020-08-28T15:14:00.000Z",authors:"kaustubh",slug:"/write-a-vb-net-program-to-accept-sentences-in-text-box-and-count-the-number-of-words-and-display-the-count-in-message-box/"},prevItem:{title:"Write a Vb.net program to design the following form, accept the numbers through textbox and add them into the ListBoxe1by clicking on Add button. When user click on Prime button then all the prime numbers from ListBox1 should get added into ListBox2.",permalink:"/blog/write-a-vb-net-program-to-design-the-following-form-accept-the-numbers-through-textbox-and-add-them-into-the-listboxe1by-clicking-on-add-button-when-user-click-on-prime-button-then-all-the-prime-num/"},nextItem:{title:"Write a Vb.net program to accept a character from keyboard and check whether it is vowel or not. Also display the case of that character.",permalink:"/blog/write-a-vb-net-program-to-accept-a-character-from-keyboard-and-check-whether-it-is-vowel-or-not-also-display-the-case-of-that-character/"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'PublicClass Form1  \nPrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  \nSystem.EventArgs) Handles Button1.Click  \nDim sentence AsString  \nDim i AsInteger  \nDim wc AsInteger  \n sentence = TextBox1.Text  \nDim arr() AsChar = sentence.ToCharArray()  \nFor i = 0 To arr.Length - 1  \nIf arr(i) = " "Then  \n wc = wc + 1  \nEndIf  \nNext  \n MsgBox("Total Words "& wc + 1)  \nEndSub  \nEndClass  \n  \n\n')))}m.isMDXComponent=!0}}]);