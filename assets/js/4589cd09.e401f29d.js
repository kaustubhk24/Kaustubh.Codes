"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[59458],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(a),d=r,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Data Types in VB.NET",date:new Date("2021-01-04T05:06:46.000Z"),authors:"kaustubh",slug:"/data-types-in-vb-net/"},i=void 0,s={permalink:"/blog/data-types-in-vb-net/",source:"@site/blog/2020-08-28-t1 (5).md",title:"Data Types in VB.NET",description:"Declaration of Data type",date:"2021-01-04T05:06:46.000Z",formattedDate:"January 4, 2021",tags:[],readingTime:1.795,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Data Types in VB.NET",date:"2021-01-04T05:06:46.000Z",authors:"kaustubh",slug:"/data-types-in-vb-net/"},prevItem:{title:"How to Connect Microsoft Access Database to VB.NET in Visual Studio?",permalink:"/blog/how-to-connect-microsoft-access-database-to-vb-net-in-visual-studio/"},nextItem:{title:"Introduction to IDE",permalink:"/blog/introduction-to-ide/"}},o={authorsImageUrls:[void 0]},u=[{value:"Declaration of Data type",id:"declaration-of-data-type",level:2},{value:"Data Types in VB.NET",id:"data-types-in-vbnet",level:2},{value:"<strong>String</strong>",id:"string",level:3},{value:"<strong>Boolean</strong>",id:"boolean",level:3},{value:"<strong>Integer</strong>",id:"integer",level:3},{value:"<strong>Byte</strong>",id:"byte",level:3},{value:"<strong>Char</strong>",id:"char",level:3},{value:"<strong>Date</strong>",id:"date",level:3},{value:"<strong>Single</strong>",id:"single",level:3},{value:"<strong>Long</strong>",id:"long",level:3},{value:"<strong>Double</strong>",id:"double",level:3},{value:"<strong>How do you declare in VB?</strong>",id:"how-do-you-declare-in-vb",level:3}],p={toc:u},g="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"declaration-of-data-type"},"Declaration of Data type"),(0,r.kt)("p",null,"To declare Datatype, we use following syntax, For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim str As String\n")),(0,r.kt)("p",null,"Now let us see Data types in VB.NET"),(0,r.kt)("h2",{id:"data-types-in-vbnet"},"Data Types in VB.NET"),(0,r.kt)("p",null,"What are the data types available in VB?"),(0,r.kt)("h3",{id:"string"},(0,r.kt)("strong",{parentName:"h3"},"String")),(0,r.kt)("p",null,"String Data types used to Save words in varible Like  abc', Its size depends on platform implementation. example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Dim str As String= "PQR"\n')),(0,r.kt)("h3",{id:"boolean"},(0,r.kt)("strong",{parentName:"h3"},"Boolean")),(0,r.kt)("p",null,"Boolean is used to store values like ",(0,r.kt)("strong",{parentName:"p"},"true")," or ",(0,r.kt)("strong",{parentName:"p"},"false"),", You can also use 1 for true and 0 for false."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim flag As Boolean= false\n")),(0,r.kt)("h3",{id:"integer"},(0,r.kt)("strong",{parentName:"h3"},"Integer")),(0,r.kt)("p",null,"Integer data type is used to store numbers between -2,147,483,648 and 2,147,483,647 (signed), Size of Integer variable is 4 bytes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim a As Integer=55\n")),(0,r.kt)("h3",{id:"byte"},(0,r.kt)("strong",{parentName:"h3"},"Byte")),(0,r.kt)("p",null,"Byte data type is used for 0 to 255 (unsigned), it takes 1 byte of storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim a As Byte=0\n")),(0,r.kt)("h3",{id:"char"},(0,r.kt)("strong",{parentName:"h3"},"Char")),(0,r.kt)("p",null,"Char is used for defining single character"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Dim c As Char = "a"\n\n')),(0,r.kt)("h3",{id:"date"},(0,r.kt)("strong",{parentName:"h3"},"Date")),(0,r.kt)("p",null,"As name suggest date is used to save Date values , it's size is 8 bytes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim dt As Date = Today\n\n")),(0,r.kt)("h3",{id:"single"},(0,r.kt)("strong",{parentName:"h3"},"Single")),(0,r.kt)("p",null,"single data type size is 4 bytes. 1.401298E-45 to 3.4028235E+38 for positive values and -3.4028235E+38 to -1.401298E-45 for negative values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim r As Single = 2\n")),(0,r.kt)("h3",{id:"long"},(0,r.kt)("strong",{parentName:"h3"},"Long")),(0,r.kt)("p",null,"Long data type is used to store 8 bytes data types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim d as Long = 2\n")),(0,r.kt)("h3",{id:"double"},(0,r.kt)("strong",{parentName:"h3"},"Double")),(0,r.kt)("p",null,"Double used to store decimal values, size is 8 bytes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Dim dbl as Double =3.22\n")),(0,r.kt)("p",null,"These are most commonly used data types in Visual Basic .NET "),(0,r.kt)("h3",{id:"how-do-you-declare-in-vb"},(0,r.kt)("strong",{parentName:"h3"},"How do you declare in VB?")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-6.png",alt:"Data Types in VB.NET"})," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Public Class Form1\n Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load\n Dim str As String = "PQR"\n Dim flag As Boolean = False\n Dim a As Integer = 55\n Dim b As Byte = 0\n Dim c As Char = "a"\n Dim dt As Date = Today\n Dim r As Single = 2\n End Sub\nEnd Class\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.kaustubh.codes/index-complete-visual-basic-net-series/"},"Visit Index")))}c.isMDXComponent=!0}}]);