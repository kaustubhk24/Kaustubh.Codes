"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[46198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Write a VB program to accept the details of book, store those details into the database and delete the particular record of given book id. (Use inputBox)",date:new Date("2020-08-28T14:45:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/"},i=void 0,s={permalink:"/blog/write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/",source:"@site/blog/2020-08-28-t1 (38).md",title:"Write a VB program to accept the details of book, store those details into the database and delete the particular record of given book id. (Use inputBox)",description:"",date:"2020-08-28T14:45:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:1.23,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB program to accept the details of book, store those details into the database and delete the particular record of given book id. (Use inputBox)",date:"2020-08-28T14:45:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/"},prevItem:{title:"Write a VB program that takes a set of ten numbers and converts them into either a bar chart or pie chart using appropriate button.",permalink:"/blog/write-a-vb-program-that-takes-a-set-of-ten-numbers-and-converts-them-into-either-a-bar-chart-or-pie-chart-using-appropriate-button/"},nextItem:{title:"Write a VB program to create screen saver on the form.",permalink:"/blog/write-a-vb-program-to-create-screen-saver-on-the-form/"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Dim C As New Connection  \nDim R As New Recordset  \nDim S As String  \nPrivate Sub cmdAdd_Click()  \n                txtBno.Text = ""  \n                txtBname.Text = ""  \n                txtAuthor.Text = ""  \n                txtPrice.Text = ""  \n                 \n                txtBno.SetFocus  \nEnd Sub  \n  \nPrivate Sub cmdDelete_Click()  \n                Dim id As Integer  \n                 \n                id = Val(inputBox("Enter Book Number"))  \n                 \n                R.Close  \n                S = "delete from book where bno like \'" & id & "\'"  \n                R.Open S, C, adOpenDynamic, adLockOptimistic  \n                S = "select * from book"  \n                R.Open S, C, adOpenDynamic, adLockOptimistic  \n                If Not R.BOF And Not R.EOF Then  \n                                R.MoveFirst  \n                                txtBno.Text = R.Fields(0).Value  \n                                txtBname.Text = R.Fields(1).Value  \n                                txtAuthor.Text = R.Fields(2).Value  \n                                txtPrice.Text = R.Fields(3).Value  \n                End If  \n                 \n                MsgBox ("Record Deleted Successfully")  \nEnd Sub  \nPrivate Sub cmdNext_Click()  \n                R.MoveNext  \n                If Not R.EOF Then  \n                                txtBno.Text = R.Fields(0)  \n                                txtBname.Text = R.Fields(1).Value  \n                                txtAuthor.Text = R.Fields(2).Value  \n                                txtPrice.Text = R.Fields(3).Value  \n                Else  \n                                MsgBox "No More Records!",vbInformation, "Book"  \n                End If  \nEnd Sub  \nPrivate Sub cmdSave_Click()  \n                R.Close  \n                S = "Insert Into book Values(" & Val(txtBno.Text) & ",\'" &txtBname.Text& "\',\'" &txtAuthor.Text& "\', " & Val(txtPrice.Text) & ")"  \n                R.Open S, C, adOpenDynamic, adLockOptimistic  \n                S = "Select * From book"  \n                R.Open S, C, adOpenDynamic, adLockOptimistic  \n                If Not R.BOF And Not R.EOF Then  \n                                R.MoveFirst  \n                                txtBno.Text = R.Fields(0).Value  \n                                txtBname.Text = R.Fields(1).Value  \n                                txtAuthor.Text = R.Fields(2).Value  \n                                txtPrice.Text = R.Fields(3).Value  \n                End If  \n                MsgBox "Book Added Successfully!",vbInformation, "Book"  \nEnd Sub  \nPrivate Sub Form_Load()  \n                S = "Select * From book"  \n                C.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:UsersRamdasDocumentsbook.mdb;Persist Security Info=False"  \n                R.Open S, C, adOpenDynamic, adLockOptimistic  \n                If Not R.BOF And Not R.EOF Then  \n                                R.MoveFirst  \n                                txtBno.Text = R.Fields(0).Value  \n                                txtBname.Text = R.Fields(1).Value  \n                                txtAuthor.Text = R.Fields(2).Value  \n                                txtPrice.Text = R.Fields(3).Value  \n                End If  \nEnd Sub  \n  \n  \n  \n\n')))}p.isMDXComponent=!0}}]);