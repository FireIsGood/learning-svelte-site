import{S as P,i as z,s as q,e as p,t as E,a as D,c as b,b as v,f as T,g as _,d as O,h as u,j as F,k as r,m as U,D as I,E as J,C as V,r as K,w as L,n as M,F as Q,G as W,o as G,H as X}from"./chunks/index.746b9871.js";import{w as Y}from"./chunks/index.9b0b3c92.js";import{f as Z}from"./chunks/index.b6d51049.js";/* empty css                                                    */function ee(){const{subscribe:o,set:e,update:t}=Y(0);return{subscribe:o,increment:()=>{t(s=>s+1)},decrement:()=>{t(s=>s-1)},reset:()=>{e(0)}}}const x=ee();function j(o){let e,t,s;return{c(){e=p("span"),t=E(o[0]),this.h()},l(a){e=b(a,"SPAN",{class:!0});var c=v(e);t=T(c,o[0]),c.forEach(_),this.h()},h(){u(e,"class","svelte-18xiers")},m(a,c){F(a,e,c),r(e,t)},p(a,c){c&1&&M(t,a[0])},i(a){s||Q(()=>{s=W(e,Z,{y:-10}),s.start()})},o:G,d(a){a&&_(e)}}}function te(o){let e,t,s,a=o[0],c,i,h,y,N,f,R,S,m,w,B,$,l=j(o);return{c(){e=p("div"),t=p("h1"),s=E(`The count is\r
    `),l.c(),c=D(),i=p("div"),h=p("button"),y=E("-"),N=D(),f=p("button"),R=E("Reset"),S=D(),m=p("button"),w=E("+"),this.h()},l(n){e=b(n,"DIV",{class:!0});var d=v(e);t=b(d,"H1",{class:!0});var C=v(t);s=T(C,`The count is\r
    `),l.l(C),C.forEach(_),c=O(d),i=b(d,"DIV",{class:!0});var k=v(i);h=b(k,"BUTTON",{"aria-label":!0,class:!0});var g=v(h);y=T(g,"-"),g.forEach(_),N=O(k),f=b(k,"BUTTON",{"aria-label":!0,class:!0});var A=v(f);R=T(A,"Reset"),A.forEach(_),S=O(k),m=b(k,"BUTTON",{"aria-label":!0,class:!0});var H=v(m);w=T(H,"+"),H.forEach(_),k.forEach(_),d.forEach(_),this.h()},h(){u(t,"class","svelte-18xiers"),u(h,"aria-label","Remove 1 to count"),u(h,"class","svelte-18xiers"),u(f,"aria-label","Remove 1 to count"),u(f,"class","svelte-18xiers"),u(m,"aria-label","Add 1 to count"),u(m,"class","svelte-18xiers"),u(i,"class","svelte-18xiers"),u(e,"class","container svelte-18xiers")},m(n,d){F(n,e,d),r(e,t),r(t,s),l.m(t,null),r(e,c),r(e,i),r(i,h),r(h,y),r(i,N),r(i,f),r(f,R),r(i,S),r(i,m),r(m,w),B||($=[U(h,"click",x.decrement),U(f,"click",x.reset),U(m,"click",x.increment)],B=!0)},p(n,[d]){d&1&&q(a,a=n[0])?(X(),I(l,1,1,G),J(),l=j(n),l.c(),V(l,1),l.m(t,null)):l.p(n,d)},i(n){V(l)},o(n){I(l)},d(n){n&&_(e),l.d(n),B=!1,K($)}}}function se(o,e,t){let s;return L(o,x,a=>t(0,s=a)),[s]}class oe extends P{constructor(e){super(),z(this,e,se,te,q,{})}}export{oe as default};
