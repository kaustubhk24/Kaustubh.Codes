"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[30605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,b=l["".concat(m,".").concat(f)]||l[f]||s[f]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u[l]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Program to Find Prime Number in java",date:new Date("2020-08-16T12:32:00.000Z"),authors:"kaustubh",slug:"/program-to-find-prime-number-in-java/"},o=void 0,u={permalink:"/blog/program-to-find-prime-number-in-java/",source:"@site/blog/2020-08-16-program-to-find-prime-number-in-java.md",title:"Program to Find Prime Number in java",description:"",date:"2020-08-16T12:32:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.38,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Find Prime Number in java",date:"2020-08-16T12:32:00.000Z",authors:"kaustubh",slug:"/program-to-find-prime-number-in-java/"},prevItem:{title:"Write a VB program to find out twin prime numbers between 10 to 100. Twin primes are defined to be two consecutive odd numbers, which are prime (Accept input through textbox and display result on form) e.g.: 11 and 13, 17 and 19 are twin prime numbers.",permalink:"/blog/write-a-vb-program-to-find-out-twin-prime-numbers-between-10-to-100-twin-primes-are-defined-to-be-two-consecutive-odd-numbers-which-are-prime-accept-input-through-textbox-and-display-result-on-form/"},nextItem:{title:"Jquery Find and Highlight Child",permalink:"/blog/jquery-find-and-highlight-child/"}},m={authorsImageUrls:[void 0]},p=[],c={toc:p},l="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Prime.cpp"',title:'"Prime.cpp"'},'import java.util.Scanner;  \nclass prime  \n{  \n    public static void main(String args[])  \n    {  \n        Scanner sc = new Scanner(System.in);   \n        System.out.println("Please enter number ");  \n        int num = sc.nextInt();  \n        //int num = 29;  \n        boolean flag = false;  \n        for(int i = 2; i <= num/2; ++i)  \n        {  \n            if(num % i == 0)  \n            {  \n                flag = true;  \n                break;  \n            }  \n        }  \n  \n        if (!flag)  \n            System.out.println(num + " is a prime number.");  \n        else  \n            System.out.println(num + " is not a prime number.");  \n  \n    }  \n}  \n  \n\n')))}s.isMDXComponent=!0}}]);