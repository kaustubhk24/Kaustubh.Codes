"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[34649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Write a java program to find the duplicate values of an array of integer values.",date:new Date("2020-08-28T15:56:00.000Z"),authors:"kaustubh",slug:"/write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/"},o=void 0,l={permalink:"/blog/write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/",source:"@site/blog/2020-08-28-write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values.md",title:"Write a java program to find the duplicate values of an array of integer values.",description:"Output:",date:"2020-08-28T15:56:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.43,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a java program to find the duplicate values of an array of integer values.",date:"2020-08-28T15:56:00.000Z",authors:"kaustubh",slug:"/write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/"},prevItem:{title:'Write a java program to replace all the "d" characters with "f" characters. input :  The quick brown fox jumps over the lazy dog ',permalink:"/blog/write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/"},nextItem:{title:"Write HTML and CSS code to design a web page. Divide the browser screen into two frames. The first frame will display the heading. The second frame contains a menu consisting of hyperlinks. Clicking on any one of these hyperlinks will display related information in a new page as shown below. Use Internal style sheet with appropriate attributes to display information of each frame",permalink:"/blog/write-html-and-css-code-to-design-a-web-page-divide-the-browser-screen-into-two-frames-the-first-frame-will-display-the-heading-the-second-frame-contains-a-menu-consisting-of-hyperlinks-clicking-o/"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="duplicate.java"',title:'"duplicate.java"'},'import java.util.Arrays;   \npublic class duplicate{  \n  public static void main(String[] args)   \n    {  \n        int[] arr = {1, 2, 5, 5, 6, 6, 7, 2};  \n   \n        for (int i = 0; i < arr.length-1; i++)  \n        {  \n            for (int j = i+1; j < arr.length; j++)  \n            {  \n                if ((arr[i] == arr[j]) && (i != j))  \n                {  \n                    System.out.println("Duplicate Element : "+arr[j]);  \n                }  \n            }  \n        }  \n    }      \n}  \n  \n  \n\n\n\n')),(0,n.kt)("p",null,"Output:  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  \nLENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  \n$ java find_duplicate_values_in_array.java  \nDuplicate Element : 2  \nDuplicate Element : 5  \nDuplicate Element : 6  \n  \n\n")))}f.isMDXComponent=!0}}]);