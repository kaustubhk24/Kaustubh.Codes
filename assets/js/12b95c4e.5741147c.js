"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[39990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(b,s(s({ref:t},u),{},{components:r})):a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Write a VB program to accept the details of students from user & store details in to the database. Using data environment create report. (Use standard ADODC controls) Student (S_Rollno, S_Name, S_Class, S_Address )",date:new Date("2020-08-28T14:43:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-accept-the-details-of-students-from-user-store-details-in-to-the-database-using-data-environment-create-report-use-standard-adodc-controls-student-s_rollno/"},s=void 0,i={permalink:"/blog/write-a-vb-program-to-accept-the-details-of-students-from-user-store-details-in-to-the-database-using-data-environment-create-report-use-standard-adodc-controls-student-s_rollno/",source:"@site/blog/2020-08-28-t1 (32).md",title:"Write a VB program to accept the details of students from user & store details in to the database. Using data environment create report. (Use standard ADODC controls) Student (S_Rollno, S_Name, S_Class, S_Address )",description:"",date:"2020-08-28T14:43:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.12,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB program to accept the details of students from user & store details in to the database. Using data environment create report. (Use standard ADODC controls) Student (S_Rollno, S_Name, S_Class, S_Address )",date:"2020-08-28T14:43:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-accept-the-details-of-students-from-user-store-details-in-to-the-database-using-data-environment-create-report-use-standard-adodc-controls-student-s_rollno/"},prevItem:{title:"Write a VB program to accept input from Textbox. Check whether given input is alphabet or number. If it is alphabet check that it is in uppercase or lowercase. Display appropriate result using msgbox.",permalink:"/blog/write-a-vb-program-to-accept-input-from-textbox-check-whether-given-input-is-alphabet-or-number-if-it-is-alphabet-check-that-it-is-in-uppercase-or-lowercase-display-appropriate-result-using-msg/"},nextItem:{title:"Write a VB program to load picture box at a runtime",permalink:"/blog/write-a-vb-program-to-load-picture-box-at-a-runtime/"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"Private Sub cmdadd_Click()  \n  \nAdodc1.Recordset.AddNew  \n  \nText1.SetFocus  \n  \nEnd Sub  \n  \nPrivate Sub cmdcancel_Click()  \n  \nUnload Me  \n  \nEnd Sub  \n  \nPrivate Sub cmdreport_Click()  \n  \nDataReport1.Show  \n  \nEnd SubEnd Sub  \n          \n  \n  \n  \n\n")))}d.isMDXComponent=!0}}]);