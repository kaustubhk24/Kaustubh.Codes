"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[20753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},16221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Write a VB.NET program to create a table Patient (Pid,PName,Contact_No, Disease). Insert records into table and display appropriate message in message box. (Use MS Access to create db)",date:new Date("2020-08-28T15:23:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-net-program-to-create-a-table-patient-pidpnamecontact_no-disease-insert-records-into-table-and-display-appropriate-message-in-message-box-use-ms-access-to-create-db/"},s=void 0,i={permalink:"/blog/write-a-vb-net-program-to-create-a-table-patient-pidpnamecontact_no-disease-insert-records-into-table-and-display-appropriate-message-in-message-box-use-ms-access-to-create-db/",source:"@site/blog/2020-08-28-t1 (60).md",title:"Write a VB.NET program to create a table Patient (Pid,PName,Contact_No, Disease). Insert records into table and display appropriate message in message box. (Use MS Access to create db)",description:"",date:"2020-08-28T15:23:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.745,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB.NET program to create a table Patient (Pid,PName,Contact_No, Disease). Insert records into table and display appropriate message in message box. (Use MS Access to create db)",date:"2020-08-28T15:23:00.000Z",authors:"kaustubh",slug:"/write-a-vb-net-program-to-create-a-table-patient-pidpnamecontact_no-disease-insert-records-into-table-and-display-appropriate-message-in-message-box-use-ms-access-to-create-db/"},prevItem:{title:"Write a VB.NET program to create a table student (RollNo,SName, Class). Insert the records (Max: 5). Update class of students to \u201eTYBCA\u201f whose class is \u201eSYBCA\u201f and display updated records in GridView. (Use MS Access to create db)",permalink:"/blog/write-a-vb-net-program-to-create-a-table-student-rollnosname-class-insert-the-records-max-5-update-class-of-students-to-tybca-whose-class-is-sybca-and-disp/"},nextItem:{title:"Write a VB.NET program to do the following operations on RichTextBox values i) Font Style ii) Font Color iii) Save iv) Open",permalink:"/blog/write-a-vb-net-program-to-do-the-following-operations-on-richtextbox-values-i-font-style-ii-font-color-iii-save-iv-open/"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'PublicClass Form1  \nDim con AsNew OleDb.OleDbConnection  \nDim da AsNew OleDb.OleDbDataAdapter  \nDim ds AsNew DataSet  \nDim DbProvider AsString  \nDim DbSource AsString  \nDim query AsString  \nDim cmd AsNew OleDb.OleDbCommand  \nPrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)  \nHandlesMyBase.Load  \n DbProvider = "PROVIDER=Microsoft.Jet.OLEDB.4.0;"  \n DbSource = "Data Source = D:Documents_backuppatient.mdb"  \n con.ConnectionString = DbProvider & DbSource  \n con.Open()  \n query = "Select * from pat"  \n da = New OleDb.OleDbDataAdapter(query, con)  \n da.Fill(ds, "pat")  \n DataGridView1.DataSource = ds.Tables("pat")  \nEndSub  \nPrivateSub btnInsert_Click(ByVal sender As System.Object, ByVal e As  \nSystem.EventArgs) Handles btnInsert.Click  \nDim x AsInteger  \nTry  \n query = "insert into pat values("&CInt(TextBox4.Text) &",\'"&  \nTextBox1.Text &" \',\' "& TextBox2.Text &" \', \' "& TextBox3.Text &" \')"  \n cmd = New OleDb.OleDbCommand(query, con)  \n x = cmd.ExecuteNonQuery()  \nIf (x) Then  \n MsgBox("Data Inserted")  \nElse  \n MsgBox("data Not inserted")  \nEndIf  \nCatch ex As Exception  \n MsgBox(ex)  \nEndTry  \n ds.Tables.Clear()  \n query = "Select * from pat"  \n da = New OleDb.OleDbDataAdapter(query, con)  \n da.Fill(ds, "pat")  \n DataGridView1.DataSource = ds.Tables("pat")  \nEndSub  \nEndClass  \n\n')))}u.isMDXComponent=!0}}]);