"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[58295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,g=u["".concat(d,".").concat(p)]||u[p]||h[p]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"ServiceNow GlideRecord API & Methods",date:new Date("2023-01-10T00:00:00.000Z"),authors:"kaustubh",slug:"/gliderecord-api-and-methods-in-servicenow/",tags:["ServiceNow"]},i=void 0,l={permalink:"/blog/gliderecord-api-and-methods-in-servicenow/",source:"@site/blog/gliderecord-in-servicenow.mdx",title:"ServiceNow GlideRecord API & Methods",description:"The GlideRecord API is a powerful and versatile API in ServiceNow that enables developers to query, update, and manipulate records in tables. With the GlideRecord API, developers can perform a wide range of functions, such as inserting records, updating records, deleting records, and querying records.",date:"2023-01-10T00:00:00.000Z",formattedDate:"January 10, 2023",tags:[{label:"ServiceNow",permalink:"/blog/tags/service-now"}],readingTime:2.72,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"ServiceNow GlideRecord API & Methods",date:"2023-01-10T00:00:00.000Z",authors:"kaustubh",slug:"/gliderecord-api-and-methods-in-servicenow/",tags:["ServiceNow"]},prevItem:{title:"ServiceNow GlideAggregate API & Methods",permalink:"/blog/glideAggregate-api-and-methods-in-servicenow/"},nextItem:{title:"ServiceNow Glide API's Examples",permalink:"/blog/glide-apis-examples-in-servicenow/"}},d={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GlideRecord API is a powerful and versatile API in ServiceNow that enables developers to query, update, and manipulate records in tables. With the GlideRecord API, developers can perform a wide range of functions, such as inserting records, updating records, deleting records, and querying records."),(0,o.kt)("p",null,"In this section, we'll explore the GlideRecord API and its various methods, along with examples of how to use them."),(0,o.kt)("p",null,"Creating a GlideRecord Object To get started with the GlideRecord API, we first need to create a GlideRecord object that represents the table we want to query or manipulate. The constructor of the GlideRecord object takes the name of the table as an argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a GlideRecord object for the Incident table\nvar gr = new GlideRecord('incident');\n")),(0,o.kt)("p",null,"Once we have the GlideRecord object, we can perform a variety of operations on it using the available methods."),(0,o.kt)("p",null,"Querying Records The GlideRecord API provides several methods for querying records in a table, including addQuery(), addEncodedQuery(), and query(). These methods allow you to filter the records in the table based on certain conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Query the Incident table for all records with a priority of 1\nvar gr = new GlideRecord('incident');\ngr.addQuery('priority', '1');\ngr.query();\nwhile (gr.next()) {\n  gs.log(gr.number);\n}\n")),(0,o.kt)("p",null,"In this example, we're querying the Incident table for all records with a priority of 1. We use the addQuery() method to specify the query condition and then call the query() method to execute the query. Finally, we loop through the result set using the next() method and log the incident number for each record."),(0,o.kt)("p",null,"Updating Records The GlideRecord API provides several methods for updating records in a table, including setValue(), setDisplayValue(), and update(). These methods allow you to modify the values of one or more fields in a record."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Update the Short Description of a record in the Incident table\nvar gr = new GlideRecord('incident');\ngr.get('number', 'INC0010001');\ngr.setValue('short_description', 'New Short Description');\ngr.update();\n")),(0,o.kt)("p",null,"In this example, we're updating the Short Description of a record in the Incident table with number INC0010001. We use the get() method to retrieve the record with the specified number, and then use the setValue() method to set the new value for the Short Description field. Finally, we call the update() method to save the changes."),(0,o.kt)("p",null,"Deleting Records The GlideRecord API provides the deleteRecord() method for deleting records from a table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Delete a record from the Incident table\nvar gr = new GlideRecord('incident');\ngr.get('number', 'INC0010001');\ngr.deleteRecord();\n")),(0,o.kt)("p",null,"In this example, we're deleting a record from the Incident table with number INC0010001. We use the get() method to retrieve the record with the specified number and then call the deleteRecord() method to delete it."),(0,o.kt)("p",null,"Working with Multiple Tables The GlideRecord API also supports working with multiple tables. You can use the addJoinQuery() method to join two tables and then query records based on the fields in both tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Join the Incident and User tables and query records based on the caller's name\nvar gr = new GlideRecord('incident');\ngr.addJoinQuery('caller_id', 'sys_user', 'name');\ngr.addQuery('sys_user.name', 'John Smith');\ngr.query();\nwhile (gr.next()) {\n  gs.log(gr.number);\n}\n")),(0,o.kt)("p",null,"In this example, we're joining the Incident and User tables on the caller_id field and the sys_user table's name field. We then use the addQuery() method to filter"))}h.isMDXComponent=!0}}]);