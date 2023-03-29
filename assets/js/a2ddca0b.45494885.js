"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[1200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,f=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Write an implementation of hash tables from scratch. Define the following methods: get(key), put( key, value ), remove(key), containsKey (key), and size()",date:new Date("2020-10-04T12:42:00.000Z"),authors:"kaustubh",slug:"/write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/"},s=void 0,i={permalink:"/blog/write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/",source:"@site/blog/2020-10-04-write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size.md",title:"Write an implementation of hash tables from scratch. Define the following methods: get(key), put( key, value ), remove(key), containsKey (key), and size()",description:"Output:",date:"2020-10-04T12:42:00.000Z",formattedDate:"October 4, 2020",tags:[],readingTime:.42,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write an implementation of hash tables from scratch. Define the following methods: get(key), put( key, value ), remove(key), containsKey (key), and size()",date:"2020-10-04T12:42:00.000Z",authors:"kaustubh",slug:"/write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/"},prevItem:{title:"Write a program to demonstrate java Swing components such as JPasswordField, JCheckbox, JTextField, JList JRadioButton.",permalink:"/blog/write-a-program-to-demonstrate-java-swing-components-such-as-jpasswordfield-jcheckbox-jtextfield-jlist-jradiobutton/"},nextItem:{title:"Create java AWT GUI Program to Swap strings",permalink:"/blog/create-java-awt-gui-program-to-swap-strings/"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},h="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="hashtable.java"',title:'"hashtable.java"'},'  \n/**  \n* Q 1) Write an implementation of hash tables from scratch. Define the  \n* following methods: get(key), put( key, value ), remove(key), containsKey  \n* (key), and size().  \n*/  \nimport java.util.Hashtable;  \npublic class hashtable  \n{  \npublic static void main(String[] args) {  \nHashtable hashTable=new Hashtable<>();  \n//put(key,value)  \nhashTable.put(1,"Kaustubh");  \nhashTable.put(2,"Mahesh");  \nhashTable.put(3,"Angad");  \nhashTable.put(4,"Sagar");  \n//printing complete hashTable  \nSystem.out.println(hashTable);  \n//get(key) method  \nSystem.out.println(hashTable.get(1));  \n//remove(key)  \nhashTable.remove(3);  \nSystem.out.println(hashTable);  \n//contains(key)  \nSystem.out.println(hashTable.containsKey(3)); //false  \nSystem.out.println(hashTable.containsKey(1));//True  \n//size  \nSystem.out.println(hashTable.size());  \n}  \n}  \n\n')),(0,r.kt)("p",null,"Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  \n{1=Kaustubh, 2=Mahesh, 3=Angad, 4=Sagar}  \nKaustubh  \n{1=Kaustubh, 2=Mahesh, 4=Sagar}  \nfalse  \ntrue  \n3  \n\n")))}p.isMDXComponent=!0}}]);