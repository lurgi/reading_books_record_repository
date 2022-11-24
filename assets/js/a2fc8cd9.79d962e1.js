"use strict";(self.webpackChunkreading_books_record_repository=self.webpackChunkreading_books_record_repository||[]).push([[3290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={sidebar_position:13,sidebar_label:"12. \ub4dc\ub514\uc5b4, \ub354\ud558\uae30"},s="\ud83c\udf08 Chapter 12: \ub4dc\ub514\uc5b4, \ub354\ud558\uae30",i={unversionedId:"test/test-driven-development/chapter-12",id:"test/test-driven-development/chapter-12",title:"\ud83c\udf08 Chapter 12: \ub4dc\ub514\uc5b4, \ub354\ud558\uae30",description:"\uadf8\ub0e5 Money.dollar(10)\ub97c \ubc18\ud658\ud558\ub294 \uc2dd\uc73c\ub85c \uac00\uc9dc \uad6c\ud604\uc744 \ud560 \uc218\ub3c4 \uc788\ub2e4. \ud558\uc9c0\ub9cc \uc5b4\ub5bb\uac8c \uad6c\ud604\ud574\uc57c \ud560\uc9c0 \uba85\ud655\ud558\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \ud558\uaca0\ub2e4.",source:"@site/docs/test/test-driven-development/chapter-12.md",sourceDirName:"test/test-driven-development",slug:"/test/test-driven-development/chapter-12",permalink:"/reading_books_record_repository/docs/test/test-driven-development/chapter-12",draft:!1,editUrl:"https://github.com/saseungmin/reading_books_record_repository/tree/master/docs/test/test-driven-development/chapter-12.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"12. \ub4dc\ub514\uc5b4, \ub354\ud558\uae30"},sidebar:"tutorialSidebar",previous:{title:"11. \ubaa8\ub4e0 \uc545\uc758 \uadfc\uc6d0",permalink:"/reading_books_record_repository/docs/test/test-driven-development/chapter-11"},next:{title:"13. \uc9c4\uc9dc\ub85c \ub9cc\ub4e4\uae30",permalink:"/reading_books_record_repository/docs/test/test-driven-development/chapter-13"}},d={},c=[],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-chapter-12-\ub4dc\ub514\uc5b4-\ub354\ud558\uae30"},"\ud83c\udf08 Chapter 12: \ub4dc\ub514\uc5b4, \ub354\ud558\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public void testSimpleAddition() {\n  Money sum = Money.dollar(5).plus(Money.dollar(5));\n  assertEquals(Money.dollar(10), sum);\n}\n")),(0,o.kt)("p",null,"\uadf8\ub0e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Money.dollar(10)"),"\ub97c \ubc18\ud658\ud558\ub294 \uc2dd\uc73c\ub85c \uac00\uc9dc \uad6c\ud604\uc744 \ud560 \uc218\ub3c4 \uc788\ub2e4. \ud558\uc9c0\ub9cc \uc5b4\ub5bb\uac8c \uad6c\ud604\ud574\uc57c \ud560\uc9c0 \uba85\ud655\ud558\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \ud558\uaca0\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Money\nMoney plus(Money addend) {\n  return new Money(amount + addend.amount, currency);\n}\n")),(0,o.kt)("p",null,"\uc774 \uac04\ub2e8\ud55c \uc608\uc81c\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"Bank"),"\uac00 \ud560 \uc77c\uc740 \uc815\ub9d0 \ud558\ub098\ub3c4 \uc5c6\ub2e4. \uc77c\ub2e8 \uac1d\uccb4\ub9cc \ud558\ub098 \uc788\ub2e4\uba74 \uc624\ucf00\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void testSimpleAddition() {\n  // ...\n  Bank bank = new Bank();\n  Money reduced = bank.reduce(sum, "USD");\n  assertEquals(Money.dollar(10), reduced);\n}\n')),(0,o.kt)("p",null,"\ub450 ",(0,o.kt)("inlineCode",{parentName:"p"},"Money"),"\uc758 \ud569\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"Expression"),"\uc774\uc5b4\uc57c \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void testSimpleAddition() {\n  // ...\n  Expression sum = five.plus(five);\n  Bank bank = new Bank();\n  Money reduced = bank.reduce(sum, "USD");\n  assertEquals(Money.dollar(10), reduced);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$5"),"\ub97c \ub9cc\ub4dc\ub294\uac74 \uac04\ub2e8\ud558\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void testSimpleAddition() {\n  Money five = Money.dollar(5);\n  Expression sum = five.plus(five);\n  Bank bank = new Bank();\n  Money reduced = bank.reduce(sum, "USD");\n  assertEquals(Money.dollar(10), reduced);\n}\n')),(0,o.kt)("p",null,"\uc774\uac78 \ucef4\ud30c\uc77c\ud558\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub098? ",(0,o.kt)("inlineCode",{parentName:"p"},"Expression")," \uc778\ud130\ud398\uc774\uc2a4\uac00 \ud544\uc694\ud558\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Expression\ninterface Expression\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Money.plus()"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Expression"),"\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"//\xa0Money\nExpression plus(Money addend) {\n  return new Money(amount + addend.amount, currency);\n}\n")),(0,o.kt)("p",null,"\uc774\uac74 ",(0,o.kt)("inlineCode",{parentName:"p"},"Money"),"\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Expression"),"\uc744 \uad6c\ud604\ud574\uc57c \ud55c\ub2e4\ub294 \ub73b\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Money\nclass Money implements Expression\n")),(0,o.kt)("p",null,"\uc774\uc81c \ube48 ",(0,o.kt)("inlineCode",{parentName:"p"},"Bank")," \ud074\ub798\uc2a4\uac00 \ud544\uc694\ud558\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Bank\nclass Bank\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Bank"),"\uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce()"),"\uc758 \uc2a4\ud141\uc774 \uc788\uc5b4\uc57c \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Bank\nMoney reduce(Expression source, String to) {\n  return null;\n}\n")),(0,o.kt)("p",null,"\uc774\uc81c \ucef4\ud30c\uc77c\uc774 \ub418\uace0, \ubc14\ub85c \uc2e4\ud328\ud55c\ub2e4. \ub9cc\uc138! \uc9c4\uc804\uc774\ub2e4. \uac04\ub2e8\ud788 \uac00\uc9dc \uad6c\ubb38\uc744 \ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Bank\nMoney reduce(Expression source, String to) {\n  return Money.dollar(10);\n}\n")))}m.isMDXComponent=!0}}]);