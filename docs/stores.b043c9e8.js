import{S as P,i as z,s as F,e as p,t as E,h as O,c as v,a as b,k as T,d as _,j as U,b as u,f as G,l,m as $,C as V,D as J,B as g,u as K,v as L,q as M,E as Q,F as W,n as H,G as X}from"./chunks/index.6ec7a832.js";import{w as Y}from"./chunks/index.0b9432b0.js";import{f as Z}from"./chunks/index.424d3fdf.js";/* empty css                                                    */function ee(){const{subscribe:o,set:e,update:t}=Y(0);return{subscribe:o,increment:()=>{t(s=>s+1)},decrement:()=>{t(s=>s-1)},reset:()=>{e(0)}}}const x=ee();function j(o){let e,t,s;return{c(){e=p("span"),t=E(o[0]),this.h()},l(a){e=v(a,"SPAN",{class:!0});var c=b(e);t=T(c,o[0]),c.forEach(_),this.h()},h(){u(e,"class","svelte-18xiers")},m(a,c){G(a,e,c),l(e,t)},p(a,c){c&1&&M(t,a[0])},i(a){s||Q(()=>{s=W(e,Z,{y:-10}),s.start()})},o:H,d(a){a&&_(e)}}}function te(o){let e,t,s,a=o[0],c,i,h,y,B,f,N,R,m,S,C,q,r=j(o);return{c(){e=p("div"),t=p("h1"),s=E(`The count is\r
    `),r.c(),c=O(),i=p("div"),h=p("button"),y=E("-"),B=O(),f=p("button"),N=E("Reset"),R=O(),m=p("button"),S=E("+"),this.h()},l(n){e=v(n,"DIV",{class:!0});var d=b(e);t=v(d,"H1",{class:!0});var D=b(t);s=T(D,`The count is\r
    `),r.l(D),D.forEach(_),c=U(d),i=v(d,"DIV",{class:!0});var k=b(i);h=v(k,"BUTTON",{"aria-label":!0,class:!0});var w=b(h);y=T(w,"-"),w.forEach(_),B=U(k),f=v(k,"BUTTON",{"aria-label":!0,class:!0});var A=b(f);N=T(A,"Reset"),A.forEach(_),R=U(k),m=v(k,"BUTTON",{"aria-label":!0,class:!0});var I=b(m);S=T(I,"+"),I.forEach(_),k.forEach(_),d.forEach(_),this.h()},h(){u(t,"class","svelte-18xiers"),u(h,"aria-label","Remove 1 to count"),u(h,"class","svelte-18xiers"),u(f,"aria-label","Remove 1 to count"),u(f,"class","svelte-18xiers"),u(m,"aria-label","Add 1 to count"),u(m,"class","svelte-18xiers"),u(i,"class","svelte-18xiers"),u(e,"class","container svelte-18xiers")},m(n,d){G(n,e,d),l(e,t),l(t,s),r.m(t,null),l(e,c),l(e,i),l(i,h),l(h,y),l(i,B),l(i,f),l(f,N),l(i,R),l(i,m),l(m,S),C||(q=[$(h,"click",x.decrement),$(f,"click",x.reset),$(m,"click",x.increment)],C=!0)},p(n,[d]){d&1&&F(a,a=n[0])?(X(),V(r,1,1,H),J(),r=j(n),r.c(),g(r,1),r.m(t,null)):r.p(n,d)},i(n){g(r)},o(n){V(r)},d(n){n&&_(e),r.d(n),C=!1,K(q)}}}function se(o,e,t){let s;return L(o,x,a=>t(0,s=a)),[s]}class oe extends P{constructor(e){super(),z(this,e,se,te,F,{})}}export{oe as default};
