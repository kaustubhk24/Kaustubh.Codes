"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[88913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Write a program in VB for Login screen validation.(use ADODC Control)",date:new Date("2020-08-28T14:52:00.000Z"),authors:"kaustubh",slug:"/write-a-program-in-vb-for-login-screen-validation-use-adodc-control/"},i=void 0,s={permalink:"/blog/write-a-program-in-vb-for-login-screen-validation-use-adodc-control/",source:"@site/blog/2020-08-28-t1 (70).md",title:"Write a program in VB for Login screen validation.(use ADODC Control)",description:"",date:"2020-08-28T14:52:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.33,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a program in VB for Login screen validation.(use ADODC Control)",date:"2020-08-28T14:52:00.000Z",authors:"kaustubh",slug:"/write-a-program-in-vb-for-login-screen-validation-use-adodc-control/"},prevItem:{title:"Write a Vb.net program to check whether entered string is palindrome or not.",permalink:"/blog/write-a-vb-net-program-to-check-whether-entered-string-is-palindrome-or-not/"},nextItem:{title:"Write a VB program to design Traffic signal using shape control.",permalink:"/blog/write-a-vb-program-to-design-traffic-signal-using-shape-control/"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://1.bp.blogspot.com/-YnfOMnS5bjw/X0kaBOpuYdI/AAAAAAAAfhE/Ca-tRJoqtt4vRZ5UPN5aYm1hNCqd6bEIQCLcBGAsYHQ/s316/1.png"},(0,o.kt)("img",{parentName:"a",src:"https://1.bp.blogspot.com/-YnfOMnS5bjw/X0kaBOpuYdI/AAAAAAAAfhE/Ca-tRJoqtt4vRZ5UPN5aYm1hNCqd6bEIQCLcBGAsYHQ/s400/1.png",alt:null}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Private Sub cmdok_Click()  \nStatic y As Integer  \n Adodc1.Refresh  \n    With Adodc1.Recordset  \n      \n    If .RecordCount > 0 Then  \n         If .EOF = False Then  \n        .MoveFirst  \n        If !UserName = txtUsername And !Password = txtPassword Then  \n        MsgBox "Login Successful!"  \n        frmMenu.Show  \n        Unload Me  \n  \n    Else  \n        MsgBox "Invalid username/password!", vbOKOnly + vbCritical, "Access denied!"  \n        txtUsername.Text = ""  \n        txtPassword.Text = ""  \n        txtUsername.SetFocus  \n    End If  \n    End If  \n    End If  \n    End With  \nEnd Sub  \n  \n  \n  \n  \n  \n  \n  \n  \n\n')))}f.isMDXComponent=!0}}]);