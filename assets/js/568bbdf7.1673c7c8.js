"use strict";(self.webpackChunkreading_books_record_repository=self.webpackChunkreading_books_record_repository||[]).push([[9420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||p;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>y});var a=t(7462),r=t(3366),p=(t(7294),t(3905)),o=["components"],i={sidebar_position:6,sidebar_label:"5. any \ub2e4\ub8e8\uae30"},l="\ud83d\udc24 Chapter 5. any \ub2e4\ub8e8\uae30",c={unversionedId:"typescript/effective-typescript/chapter-5",id:"typescript/effective-typescript/chapter-5",title:"\ud83d\udc24 Chapter 5. any \ub2e4\ub8e8\uae30",description:"\ud83e\udd55 \uc544\uc774\ud15c 38. any \ud0c0\uc785\uc740 \uac00\ub2a5\ud55c \ud55c \uc881\uc740 \ubc94\uc704\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\uae30",source:"@site/docs/typescript/effective-typescript/chapter-5.md",sourceDirName:"typescript/effective-typescript",slug:"/typescript/effective-typescript/chapter-5",permalink:"/reading_books_record_repository/docs/typescript/effective-typescript/chapter-5",draft:!1,editUrl:"https://github.com/saseungmin/reading_books_record_repository/tree/master/docs/typescript/effective-typescript/chapter-5.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"5. any \ub2e4\ub8e8\uae30"},sidebar:"tutorialSidebar",previous:{title:"4. \ud0c0\uc785 \uc124\uacc4",permalink:"/reading_books_record_repository/docs/typescript/effective-typescript/chapter-4"},next:{title:"\ud83d\ude80 \ucc45 \ubaa9\ub85d",permalink:"/reading_books_record_repository/docs/agile/table-of-contents"}},s={},y=[{value:"\ud83e\udd55 \uc544\uc774\ud15c 38. <code>any</code> \ud0c0\uc785\uc740 \uac00\ub2a5\ud55c \ud55c \uc881\uc740 \ubc94\uc704\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\uae30",id:"-\uc544\uc774\ud15c-38-any-\ud0c0\uc785\uc740-\uac00\ub2a5\ud55c-\ud55c-\uc881\uc740-\ubc94\uc704\uc5d0\uc11c\ub9cc-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ud83e\udd55 \uc544\uc774\ud15c 39. <code>any</code>\ub97c \uad6c\uccb4\uc801\uc73c\ub85c \ubcc0\ud615\ud574\uc11c \uc0ac\uc6a9\ud558\uae30",id:"-\uc544\uc774\ud15c-39-any\ub97c-\uad6c\uccb4\uc801\uc73c\ub85c-\ubcc0\ud615\ud574\uc11c-\uc0ac\uc6a9\ud558\uae30",level:2}],u={toc:y};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"-chapter-5-any-\ub2e4\ub8e8\uae30"},"\ud83d\udc24 Chapter 5. any \ub2e4\ub8e8\uae30"),(0,p.kt)("h2",{id:"-\uc544\uc774\ud15c-38-any-\ud0c0\uc785\uc740-\uac00\ub2a5\ud55c-\ud55c-\uc881\uc740-\ubc94\uc704\uc5d0\uc11c\ub9cc-\uc0ac\uc6a9\ud558\uae30"},"\ud83e\udd55 \uc544\uc774\ud15c 38. ",(0,p.kt)("inlineCode",{parentName:"h2"},"any")," \ud0c0\uc785\uc740 \uac00\ub2a5\ud55c \ud55c \uc881\uc740 \ubc94\uc704\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"function processBar(b: Bar) { /* ... */ }\n\nfunction f() {\n  const x = expressionReturnFoo();\n  processBar(x);\n  //         ~ 'Foo' \ud615\uc2dd\uc758 \uc778\uc218\ub294 'Bar' \ud615\uc2dd\uc758 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ud560\ub2f9\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n}\n")),(0,p.kt)("p",null,"\ubb38\ub9e5\uc0c1\uc73c\ub85c ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"\ub77c\ub294 \ubcc0\uc218\uac00 \ub3d9\uc2dc\uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"Foo")," \ud0c0\uc785\uacfc ",(0,p.kt)("inlineCode",{parentName:"p"},"Bar")," \ud0c0\uc785\uc5d0 \ud560\ub2f9 \uac00\ub2a5\ud558\ub2e4\uba74, \uc624\ub958\ub97c \uc81c\uac70\ud558\ub294 \ubc29\ubc95\uc740 \ub450 \uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"function f1() {\n  const x: any = expressionReturnFoo(); // \uc774\ub807\uac8c \ud558\uc9c0 \ub9d9\uc2dc\ub2e4.\n  processBar(x);\n}\n\nfunction f2() {\n  const x = expressionReturnFoo();\n  processBar(x as any); // \uc774\uac8c \ub0ab\uc2b5\ub2c8\ub2e4.\n}\n")),(0,p.kt)("p",null,"\ub450 \uac00\uc9c0 \ud574\uacb0\ucc45 \uc911\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"f1"),"\uc5d0 \uc0ac\uc6a9\ub41c ",(0,p.kt)("inlineCode",{parentName:"p"},"x: any"),"\ubcf4\ub2e4 ",(0,p.kt)("inlineCode",{parentName:"p"},"f2"),"\uc5d0 \uc0ac\uc6a9\ub41c ",(0,p.kt)("inlineCode",{parentName:"p"},"x as any")," \ud615\ud0dc\uac00 \uad8c\uc7a5\ub429\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"any")," \ud0c0\uc785\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"processBar")," \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub41c \ud45c\ud604\uc2dd\uc774\ubbc0\ub85c \ub2e4\ub978 \ucf54\ub4dc\uc5d0\ub294 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.   "),(0,p.kt)("p",null,"\ube44\uc2b7\ud55c \uad00\uc810\uc5d0\uc11c, \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \ucd94\ub860\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \uba85\uc2dc\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \uba85\uc2dc\ud558\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"any")," \ud0c0\uc785\uc758 \ud568\uc218 \ubc14\uae65\uc73c\ub85c \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uac83\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"f1"),"\uc740 \uc624\ub958\ub97c \uc81c\uac70\ud558\uae30 \uc704\ud574 ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},"any")," \ud0c0\uc785\uc73c\ub85c \uc120\uc5b8\ud588\uc2b5\ub2c8\ub2e4. \ud55c\ud3b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"f2"),"\ub294 \uc624\ub958\ub97c \uc81c\uac70\ud558\uae30 \uc704\ud574 ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"\uac00 \uc0ac\uc6a9\ub418\ub294 \uacf3\uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"as any")," \ub2e8\uc5b8\ubb38\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"@ts-ignore"),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc624\ub958\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"function f1() {\n  const x = expressionReturnFoo();\n  // @ts-ignore\n  processBar(x);\n  return x;\n}\n")),(0,p.kt)("p",null,"\uadf8\ub7ec\ub098 \uadfc\ubcf8\uc801\uc778 \uc6d0\uc778\uc744 \ud574\uacb0\ud55c \uac83\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uacf3\uc5d0\uc11c \ub354 \ud070 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud0c0\uc785 \uccb4\ucee4\uac00 \uc54c\ub824 \uc8fc\ub294 \uc624\ub958\ub294 \ubb38\uc81c\uac00 \ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc740 \ubd80\ubd84\uc774\ubbc0\ub85c \uadfc\ubcf8\uc801\uc778 \uc6d0\uc778\uc744 \ucc3e\uc544 \uc801\uadf9\uc801\uc73c\ub85c \ub300\ucc98\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud569\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc774\ubc88\uc5d0\ub294 \uac1d\uccb4\uc640 \uad00\ub828\ud55c ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\uc758 \uc0ac\uc6a9\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \ud070 \uac1d\uccb4 \uc548\uc758 \ud55c \uac1c \uc18d\uc131\uc774 \ud0c0\uc785 \uc624\ub958\ub97c \uac00\uc9c0\ub294 \uc0c1\ud669\uc744 \uc608\ub85c \ub4e4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const config: Config = {\n  a: 1,\n  b: 2,\n  c: {\n    key: value\n  // ~~ 'foo' \uc18d\uc131\uc774 'Foo' \ud0c0\uc785\uc5d0 \ud544\uc694\ud558\uc9c0\ub9cc 'Bar' \ud0c0\uc785\uc5d0\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.\n  }\n};\n")),(0,p.kt)("p",null,"\ub2e8\uc21c\ud788 \uc0dd\uac01\ud558\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"config")," \uac1d\uccb4 \uc804\uccb4\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},"as any"),"\ub85c \uc120\uc5b8\ud574\uc11c \uc624\ub958\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const config: Config = {\n  a: 1,\n  b: 2,\n  c: {\n    key: value\n  }\n} as any; // \uc774\ub807\uac8c \ud558\uc9c0 \ub9d9\uc2dc\ub2e4!\n")),(0,p.kt)("p",null,"\uac1d\uccb4 \uc804\uccb4\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub85c \ub2e8\uc5b8\ud558\uba74 \ub2e4\ub978 \uc18d\uc131\ub4e4 \uc5ed\uc2dc \ud0c0\uc785 \uccb4\ud06c\uac00 \ub418\uc9c0 \uc54a\ub294 \ubd80\uc791\uc6a9\uc774 \uc0dd\uae41\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \ub2e4\uc74c \ucf54\ub4dc\ucc98\ub7fc \ucd5c\uc18c\ud55c\uc758 \ubc94\uc704\uc5d0\uc11c\ub9cc ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const config: Config = {\n  a: 1,\n  b: 2,\n  c: {\n    key: value as any\n  }\n};\n")),(0,p.kt)("h2",{id:"-\uc544\uc774\ud15c-39-any\ub97c-\uad6c\uccb4\uc801\uc73c\ub85c-\ubcc0\ud615\ud574\uc11c-\uc0ac\uc6a9\ud558\uae30"},"\ud83e\udd55 \uc544\uc774\ud15c 39. ",(0,p.kt)("inlineCode",{parentName:"h2"},"any"),"\ub97c \uad6c\uccb4\uc801\uc73c\ub85c \ubcc0\ud615\ud574\uc11c \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud45c\ud604\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uac12\uc744 \uc544\uc6b0\ub974\ub294 \ub9e4\uc6b0 \ud070 \ubc94\uc704\uc758 \ud0c0\uc785\uc785\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"any")," \ud0c0\uc785\uc5d0\ub294 \ubaa8\ub4e0 \uc22b\uc790, \ubb38\uc790\uc5f4, \ubc30\uc5f4, \uac1d\uccb4, \uc815\uaddc\uc2dd, \ud568\uc218, \ud074\ub798\uc2a4, DOM \uc5d8\ub9ac\uba3c\ud2b8\ub294 \ubb3c\ub860 ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),"\uacfc ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined"),"\uae4c\uc9c0\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ubc18\ub300\ub85c \ub9d0\ud558\uba74, \uc77c\ubc18\uc801\uc778 \uc0c1\ud669\uc5d0\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ubcf4\ub2e4 \ub354 \uad6c\uccb4\uc801\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc774 \uc874\uc7ac\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uae30 \ub54c\ubb38\uc5d0 \ub354 \uad6c\uccb4\uc801\uc778 \ud0c0\uc785\uc744 \ucc3e\uc544 \ud0c0\uc785 \uc548\uc804\uc131\uc744 \ub192\uc774\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4.   "),(0,p.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,p.kt)("inlineCode",{parentName:"p"},"any")," \ud0c0\uc785\uc758 \uac12\uc744 \uadf8\ub300\ub85c \uc815\uaddc\uc2dd\uc774\ub098 \ud568\uc218\uc5d0 \ub123\ub294 \uac83\uc740 \uad8c\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"function getLengthBad(array: any) { // \uc774\ub807\uac8c \ud558\uc9c0 \ub9d9\uc2dc\ub2e4!\n  return array.length;\n}\n\nfunction getLength(array: any[]) {\n  return array:length;\n}\n")),(0,p.kt)("p",null,"\uc55e\uc758 \uc608\uc81c\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub97c \uc0ac\uc6a9\ud558\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"getLengthBad"),"\ubcf4\ub2e4\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"any[]"),"\ub97c \uc0ac\uc6a9\ud558\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"getLength"),"\uac00 \ub354 \uc88b\uc740 \ud568\uc218\uc785\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294 \uc138 \uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\ud568\uc218 \ub0b4\uc758 ",(0,p.kt)("inlineCode",{parentName:"li"},"array.length")," \ud0c0\uc785\uc774 \uccb4\ud06c\ub429\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc774 ",(0,p.kt)("inlineCode",{parentName:"li"},"any")," \ub300\uc2e0 ",(0,p.kt)("inlineCode",{parentName:"li"},"number"),"\ub85c \ucd94\ub860\ub429\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},"\ud568\uc218 \ud638\ucd9c\ub420 \ub54c \ub9e4\uac1c\ubcc0\uc218\uac00 \ubc30\uc5f4\uc778\uc9c0 \uccb4\ud06c\ud569\ub2c8\ub2e4.")),(0,p.kt)("p",null,"\uadf8\ub9ac\uace0 \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uac1d\uccb4\uc774\uae34 \ud558\uc9c0\ub9cc \uac12\uc744 \uc54c \uc218 \uc5c6\ub2e4\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"{[key: string]: any}"),"\ucc98\ub7fc \uc120\uc5b8\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"function hasTwelveLetterKey(o: {[key: string]: any}) {\n  for (const key in o) {\n    if (key.length === 12) {\n      return true;\n    }\n  }\n  return false;\n}\n")),(0,p.kt)("p",null,"\uc55e\uc758 \uc608\uc81c\ucc98\ub7fc \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uac1d\uccb4\uc9c0\ub9cc \uac12\uc744 \uc54c \uc218 \uc5c6\ub2e4\uba74 \ubaa8\ub4e0 \ube44\uae30\ubcf8\ud615 \ud0c0\uc785\uc744 \ud3ec\ud568\ud558\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"object")," \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"object"),"\ud0c0\uc785\uc740 \uac1d\uccb4\uc758 \ud0a4\ub97c \uc5f4\uac70\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc \uc18d\uc131\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"{[key: string]: any}"),"\uc640 \uc57d\uac04 \ub2e4\ub985\ub2c8\ub2e4.   "),(0,p.kt)("p",null,"\ud568\uc218\uc758 \ud0c0\uc785\uc5d0\uc11c\ub3c4 \ub2e8\uc21c\ud788 ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub97c \uc0ac\uc6a9\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. \ucd5c\uc18c\ud55c\uc73c\ub85c\ub098\ub9c8 \uad6c\uccb4\ud654\ud560 \uc218 \uc788\ub294 \uc138 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'type Fn0 = () => any; // \ub9e4\uac1c\ubcc0\uc218 \uc5c6\uc774 \ud638\ucd9c \uac00\ub2a5\ud55c \ubaa8\ub4e0 \ud568\uc218\ntype Fn1 = (arg: any) => any; // \ub9e4\uac1c\ubcc0\uc218 1\uac1c\ntype FnN = (...args: any[]) => any; // \ubaa8\ub4e0 \uac1c\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218 "Function" \ud0c0\uc785\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4.\n')),(0,p.kt)("p",null,"\uc55e\uc758 \uc608\uc81c\uc5d0 \ub4f1\uc7a5\ud55c \uc138 \uac00\uc9c0 \ud568\uc218 \ud0c0\uc785 \ubaa8\ub450 ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ubcf4\ub2e4\ub294 \uad6c\uccb4\uc801\uc785\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 \uc904\uc744 \uc798 \uc0b4\ud3b4\ubcf4\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"...args"),"\uc758 \ud0c0\uc785\uc744 ",(0,p.kt)("inlineCode",{parentName:"p"},"any[]"),"\ub85c \uc120\uc5b8\ud588\uc2b5\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"any"),"\ub85c \uc120\uc5b8\ud574\ub3c4 \ub3d9\uc791\ud558\uc9c0\ub9cc ",(0,p.kt)("inlineCode",{parentName:"p"},"any[]"),"\ub85c \uc120\uc5b8\ud558\uba74 \ubc30\uc5f4 \ud615\ud0dc\u3150\ub77c\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5b4 \ub354 \uad6c\uccb4\uc801\uc785\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const numArgsBad = (...args: any) => args.length; // any\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\nconst numArgsGood = (...args: any[]) => args.length; // number\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n")))}d.isMDXComponent=!0}}]);