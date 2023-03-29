"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[15486],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},f="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:e},s),{},{components:t})):r.createElement(m,i({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=n,u[f]="string"==typeof n?n:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6713:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"Program for Deque Using Array",date:new Date("2020-08-16T12:18:00.000Z"),authors:"kaustubh",slug:"/program-for-deque-using-array/"},i=void 0,u={permalink:"/blog/program-for-deque-using-array/",source:"@site/blog/2020-08-16-program-for-deque-using-array.md",title:"Program for Deque Using Array",description:"",date:"2020-08-16T12:18:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:1.475,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program for Deque Using Array",date:"2020-08-16T12:18:00.000Z",authors:"kaustubh",slug:"/program-for-deque-using-array/"},prevItem:{title:"Program for Priority Queue in CPP",permalink:"/blog/program-for-priority-queue-in-cpp/"},nextItem:{title:"Circular Queue Using Array in CPP",permalink:"/blog/circular-queue-using-array-in-cpp/"}},c={authorsImageUrls:[void 0]},l=[],s={toc:l},f="wrapper";function p(n){let{components:e,...t}=n;return(0,a.kt)(f,(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="deque.cpp"',title:'"deque.cpp"'},'#include<iostream>\nusing namespace std;\nint front=-1;\nint rear=-1;\nint q[10];\nint data;\nbool isfull()\n{\n    if(rear==9)\n    {\n        return 1;\n    }\n    else \n    {\n        return 0;\n    }\n}\nbool isempty()\n{\n    if(front==-1)\n    {\n        return 1;\n    }\n    else\n    {\n        return 0;\n    }\n}\nint insert_front()\n{\n    if(isfull())\n    {\n        cout<<"Queue Overflow!"<<endl;\n    }\n    else\n    {\n        if(front==-1)\n        {\n            front=0;\n            rear=0;\n        }\n        else if(front<1)\n        {\n            cout<<"Cannot add Item"<<endl;\n        }\n        else\n        {\n            front=front-1;\n        }\n        cout<<"Enter Data:";\n        cin>>data;\n        q[front]=data;\n    }\n}\nint insert_rear()\n{\n    if(isfull())\n    {\n        cout<<"Queue Overflow!"<<endl;\n    }\n    else\n    {\n        if(front==-1)\n        {\n            front=0;\n            rear=0;\n        }\n        else\n        {\n            rear=rear+1;\n        }\n        cout<<"Enter Data:";\n        cin>>data;\n        q[rear]=data;\n    }\n}\nint delete_front()\n{\n    if(isempty())\n    {\n        cout<<"Queue Underflow!"<<endl;\n    }\n    else\n    {\n        if(front==rear)\n        {\n            cout<<"Deleted element is "<<q[front];\n            front=-1;\n            rear=-1;\n        }\n        else\n        {\n            cout<<"Deleted element is "<<q[front];\n            front=front+1;\n        }\n    }\n}\nint delete_rear()\n{\n    if(isempty())\n    {\n        cout<<"Queue Underflow!"<<endl;\n    }\n    else\n    {\n        if(front==rear)\n        {\n            cout<<"Deleted element is "<<q[front];\n            front=-1;\n            rear=-1;\n        }\n        else\n        {\n            cout<<"Deleted element is "<<q[rear];\n            rear=rear-1;\n        }\n    }\n}\nint display()\n{\n    if(isempty())\n    {\n        cout<<"Queue Underflow!"<<endl;\n    }\n    else\n    {\n        cout<<"Queue elements are:"<<endl;\n        for(int i=front;i<=rear;i++)\n        {\n            cout<<q[i]<<"->";\n        }\n    }\n}\nint main()\n{\n    int ch,ch1,ch2;\n    while(ch!=-1)\n    {\n        cout<<"n----Menu----"<<endl;\n        cout<<"1.input Restricted Queue"<<endl;\n        cout<<"2.Output Restricted Queue"<<endl;\n        cout<<"3.Exit"<<endl;\n        cout<<"Enter a choice:";\n        cin>>ch;\n        switch(ch)\n        {\n            case 1:\n                while(ch1!=-1)\n                {\n                        cout<<"n--input Restricted Queue--"<<endl;\n                        cout<<"1.Add at Rear."<<endl;\n                        cout<<"2.Delete from Front."<<endl;\n                        cout<<"3.Delete from Rear."<<endl;\n                        cout<<"4.Display"<<endl;\n                        cout<<"5.Exit"<<endl;\n                        cout<<"Enter a choice:";\n                        cin>>ch1;\n                        switch(ch1)\n                        {\n                            case 1:\n                                insert_rear();\n                                break;                      \n                            case 2:\n                                delete_front();\n                                break;\n                            case 3:\n                                delete_rear();\n                                break;\n                            case 4:\n                                display();\n                                break;\n                            case 5:\n                                exit(0);\n                        }\n                }\n            case 2:\n                    while(ch2!=-1)\n                {\n                        cout<<"n--input Restricted Queue--"<<endl;\n                        cout<<"1.Add at Rear."<<endl;\n                        cout<<"2.Add at Front."<<endl;\n                        cout<<"3.Delete from Front."<<endl;\n                        cout<<"4.Display"<<endl;\n                        cout<<"5.Exit"<<endl;\n                        cout<<"Enter a choice:";\n                        cin>>ch2;\n                        switch(ch2)\n                        {\n                            case 1:\n                                insert_rear();\n                                break;                      \n                            case 2:\n                                insert_front();\n                                break;\n                            case 3:\n                                delete_front();\n                                break;\n                            case 4:\n                                display();\n                                break;\n                            case 5:\n                                exit(0);\n                        }\n                }\n                case 3:\n                    exit(0);\n        }\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);