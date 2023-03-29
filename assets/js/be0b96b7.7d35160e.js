"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[21349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),s=d(a),h=n,p=s["".concat(l,".").concat(h)]||s[h]||c[h]||o;return a?r.createElement(p,i(i({ref:t},u),{},{components:a})):r.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var g={};for(var l in t)hasOwnProperty.call(t,l)&&(g[l]=t[l]);g.originalType=e,g[s]="string"==typeof e?e:n,i[1]=g;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},75513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"ServiceNow GlideAggregate API & Methods",date:new Date("2023-01-12T00:00:00.000Z"),authors:"kaustubh",slug:"/glideAggregate-api-and-methods-in-servicenow/",tags:["ServiceNow"]},i=void 0,g={permalink:"/blog/glideAggregate-api-and-methods-in-servicenow/",source:"@site/blog/glideaggregare-servicenow.mdx",title:"ServiceNow GlideAggregate API & Methods",description:"The GlideAggregate API is a powerful tool in ServiceNow that allows developers to perform complex calculations and aggregate functions on records in a table. With the GlideAggregate API, developers can perform functions such as counting records, finding the maximum or minimum value of a field, or summing up the values of a field for a particular group of records.",date:"2023-01-12T00:00:00.000Z",formattedDate:"January 12, 2023",tags:[{label:"ServiceNow",permalink:"/blog/tags/service-now"}],readingTime:2.7,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"ServiceNow GlideAggregate API & Methods",date:"2023-01-12T00:00:00.000Z",authors:"kaustubh",slug:"/glideAggregate-api-and-methods-in-servicenow/",tags:["ServiceNow"]},prevItem:{title:"ServiceNow g_form API & Methods",permalink:"/blog/gform-api-and-methods-in-servicenow/"},nextItem:{title:"ServiceNow GlideRecord API & Methods",permalink:"/blog/gliderecord-api-and-methods-in-servicenow/"}},l={authorsImageUrls:[void 0]},d=[],u={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The GlideAggregate API is a powerful tool in ServiceNow that allows developers to perform complex calculations and aggregate functions on records in a table. With the GlideAggregate API, developers can perform functions such as counting records, finding the maximum or minimum value of a field, or summing up the values of a field for a particular group of records."),(0,n.kt)("p",null,"In this section, we'll explore the GlideAggregate API and its various methods, along with examples of how to use them."),(0,n.kt)("p",null,"Creating a GlideAggregate Object\nTo get started with the GlideAggregate API, we first need to create a GlideAggregate object that represents the table we want to perform calculations on. The constructor of the GlideAggregate object takes the name of the table as an argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a GlideAggregate object for the Incident table\nvar ga = new GlideAggregate('incident');\n")),(0,n.kt)("p",null,"Once we have the GlideAggregate object, we can perform a variety of operations on it using the available methods."),(0,n.kt)("p",null,"Adding Aggregations\nThe GlideAggregate API provides several methods for adding aggregations to a query, including addAggregate(), addEncodedQuery(), and groupBy(). These methods allow you to perform calculations and aggregate functions on records in the table based on certain conditions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Count the number of records in the Incident table with a priority of 1\nvar ga = new GlideAggregate('incident');\nga.addQuery('priority', '1');\nga.addAggregate('COUNT');\nga.query();\nif (ga.next()) {\n  gs.log(ga.getValue('COUNT'));\n}\n")),(0,n.kt)("p",null,"In this example, we're counting the number of records in the Incident table with a priority of 1. We use the addQuery() method to specify the query condition, add the COUNT aggregation using the addAggregate() method, and then call the query() method to execute the query. Finally, we retrieve the count value using the getValue() method and log it."),(0,n.kt)("p",null,"Grouping Aggregations\nThe GlideAggregate API also allows you to group aggregations based on certain fields in the table using the groupBy() method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sum the value of the Impact field in the Incident table, grouped by Category\nvar ga = new GlideAggregate('incident');\nga.addAggregate('SUM', 'impact');\nga.groupBy('category');\nga.query();\nwhile (ga.next()) {\n  gs.log(ga.category + ' - ' + ga.getValue('SUM', 'impact'));\n}\n")),(0,n.kt)("p",null,"In this example, we're summing up the value of the Impact field in the Incident table, grouped by Category. We use the addAggregate() method to add the SUM aggregation for the Impact field, use the groupBy() method to group the results by the Category field, and then loop through the result set using the next() method and log the category and sum value for each group."),(0,n.kt)("p",null,"Adding Conditions\nThe GlideAggregate API also allows you to add conditions to aggregations using the addHaving() method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Find the maximum value of the Severity field in the Incident table for records with a priority of 1\nvar ga = new GlideAggregate('incident');\nga.addQuery('priority', '1');\nga.addAggregate('MAX', 'severity');\nga.addHaving('severity', '>', '3');\nga.query();\nif (ga.next()) {\n  gs.log(ga.getValue('MAX', 'severity'));\n}\n")),(0,n.kt)("p",null,"In this example, we're finding the maximum value of the Severity field in the Incident table for records with a priority of 1. We use the addQuery() method to specify the query condition, add the MAX aggregation for the Severity field using the addAggregate() method, and then add a condition to the aggregation using the addHaving() method. Finally, we retrieve the maximum value using the getValue() method and log it."))}c.isMDXComponent=!0}}]);