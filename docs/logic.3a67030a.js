import{S as tt,i as et,s as lt,e as k,t as b,a as y,c as w,b as E,f as g,g as p,d as B,h as T,j as G,k as l,m as F,n as A,o as X,p as st,r as ot}from"./chunks/index.cbcec1ba.js";/* empty css                                                   */function Y(a,t,e){const s=a.slice();return s[7]=t[e],s}function Z(a){let t,e;return{c(){t=k("h1"),e=b("Wow"),this.h()},l(s){t=w(s,"H1",{class:!0});var n=E(t);e=g(n,"Wow"),n.forEach(p),this.h()},h(){T(t,"class","svelte-10usnxf")},m(s,n){G(s,t,n),l(t,e)},d(s){s&&p(t)}}}function $(a){let t,e,s=a[7].title+"",n,v,c,m=a[7].body+"",_,O;return{c(){t=k("li"),e=k("h2"),n=b(s),v=y(),c=k("p"),_=b(m),O=y(),this.h()},l(f){t=w(f,"LI",{class:!0});var u=E(t);e=w(u,"H2",{class:!0});var U=E(e);n=g(U,s),U.forEach(p),v=B(u),c=w(u,"P",{class:!0});var C=E(c);_=g(C,m),C.forEach(p),O=B(u),u.forEach(p),this.h()},h(){T(e,"class","svelte-10usnxf"),T(c,"class","svelte-10usnxf"),T(t,"class","post svelte-10usnxf")},m(f,u){G(f,t,u),l(t,e),l(e,n),l(t,v),l(t,c),l(c,_),l(t,O)},p(f,u){u&2&&s!==(s=f[7].title+"")&&A(n,s),u&2&&m!==(m=f[7].body+"")&&A(_,m)},d(f){f&&p(t)}}}function nt(a){let t,e,s,n,v,c,m,_=(a[0]?a[0]:"no")+"",O,f,u=a[0]!==1?"s":"",U,C,D,W,I,H,R,L,S,V,j,q,J,d=a[2]&&Z(),N=a[1],h=[];for(let o=0;o<N.length;o+=1)h[o]=$(Y(a,N,o));return{c(){t=k("div"),e=k("button"),s=b("Click to show Wow"),n=y(),d&&d.c(),v=y(),c=k("p"),m=b("and now... "),O=b(_),f=b(" post"),U=b(u),C=b("!"),D=y(),W=k("div"),I=k("button"),H=b("Remove One"),R=y(),L=k("button"),S=b("Add One"),V=y(),j=k("ul");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){t=w(o,"DIV",{class:!0});var i=E(t);e=w(i,"BUTTON",{class:!0});var r=E(e);s=g(r,"Click to show Wow"),r.forEach(p),n=B(i),d&&d.l(i),v=B(i),c=w(i,"P",{class:!0});var P=E(c);m=g(P,"and now... "),O=g(P,_),f=g(P," post"),U=g(P,u),C=g(P,"!"),P.forEach(p),D=B(i),W=w(i,"DIV",{class:!0});var x=E(W);I=w(x,"BUTTON",{});var K=E(I);H=g(K,"Remove One"),K.forEach(p),R=B(x),L=w(x,"BUTTON",{});var M=E(L);S=g(M,"Add One"),M.forEach(p),x.forEach(p),V=B(i),j=w(i,"UL",{class:!0});var Q=E(j);for(let z=0;z<h.length;z+=1)h[z].l(Q);Q.forEach(p),i.forEach(p),this.h()},h(){T(e,"class","svelte-10usnxf"),T(c,"class","svelte-10usnxf"),T(W,"class","svelte-10usnxf"),T(j,"class","svelte-10usnxf"),T(t,"class","container svelte-10usnxf")},m(o,i){G(o,t,i),l(t,e),l(e,s),l(t,n),d&&d.m(t,null),l(t,v),l(t,c),l(c,m),l(c,O),l(c,f),l(c,U),l(c,C),l(t,D),l(t,W),l(W,I),l(I,H),l(W,R),l(W,L),l(L,S),l(t,V),l(t,j);for(let r=0;r<h.length;r+=1)h[r].m(j,null);q||(J=[F(e,"click",a[5]),F(I,"click",a[4]),F(L,"click",a[3])],q=!0)},p(o,[i]){if(o[2]?d||(d=Z(),d.c(),d.m(t,v)):d&&(d.d(1),d=null),i&1&&_!==(_=(o[0]?o[0]:"no")+"")&&A(O,_),i&1&&u!==(u=o[0]!==1?"s":"")&&A(U,u),i&2){N=o[1];let r;for(r=0;r<N.length;r+=1){const P=Y(o,N,r);h[r]?h[r].p(P,i):(h[r]=$(P),h[r].c(),h[r].m(j,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=N.length}},i:X,o:X,d(o){o&&p(t),d&&d.d(),st(h,o),q=!1,ot(J)}}}function at(a,t,e){let s=[];fetch("https://jsonplaceholder.typicode.com/posts").then(f=>f.json()).then(f=>{e(6,s=f)});let n=1,v=[];function c(){n!==100&&e(0,n+=1)}function m(){n!==0&&e(0,n-=1)}let _=!1;function O(){e(2,_=!_)}return a.$$.update=()=>{a.$$.dirty&65&&e(1,v=s.slice(0,n))},[n,v,_,c,m,O,s]}class it extends tt{constructor(t){super(),et(this,t,at,nt,lt,{})}}export{it as default};
