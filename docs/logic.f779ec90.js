import{S as ee,i as te,s as le,e as k,t as b,a as C,c as w,b as E,d as g,g as v,f as I,h as O,j as G,k as l,l as F,v as x,n as X,q as se,r as oe}from"./chunks/index.b02ff525.js";/* empty css                              */function Y(n,e,t){const s=n.slice();return s[7]=e[t],s}function Z(n){let e,t;return{c(){e=k("h1"),t=b("Wow"),this.h()},l(s){e=w(s,"H1",{class:!0});var a=E(e);t=g(a,"Wow"),a.forEach(v),this.h()},h(){O(e,"class","svelte-10usnxf")},m(s,a){G(s,e,a),l(e,t)},d(s){s&&v(e)}}}function $(n){let e,t,s=n[7].title+"",a,p,r,m=n[7].body+"",_,P;return{c(){e=k("li"),t=k("h2"),a=b(s),p=C(),r=k("p"),_=b(m),P=C(),this.h()},l(f){e=w(f,"LI",{class:!0});var u=E(e);t=w(u,"H2",{class:!0});var U=E(t);a=g(U,s),U.forEach(v),p=I(u),r=w(u,"P",{class:!0});var L=E(r);_=g(L,m),L.forEach(v),P=I(u),u.forEach(v),this.h()},h(){O(t,"class","svelte-10usnxf"),O(r,"class","svelte-10usnxf"),O(e,"class","post svelte-10usnxf")},m(f,u){G(f,e,u),l(e,t),l(t,a),l(e,p),l(e,r),l(r,_),l(e,P)},p(f,u){u&2&&s!==(s=f[7].title+"")&&x(a,s),u&2&&m!==(m=f[7].body+"")&&x(_,m)},d(f){f&&v(e)}}}function ae(n){let e,t,s,a,p,r,m,_=(n[0]?n[0]:"no")+"",P,f,u=n[0]!==1?"s":"",U,L,A,W,j,D,H,y,R,S,B,V,J,d=n[2]&&Z(),N=n[1],h=[];for(let o=0;o<N.length;o+=1)h[o]=$(Y(n,N,o));return{c(){e=k("div"),t=k("button"),s=b("Click to show Wow"),a=C(),d&&d.c(),p=C(),r=k("p"),m=b("and now... "),P=b(_),f=b(" post"),U=b(u),L=b("!"),A=C(),W=k("div"),j=k("button"),D=b("Remove One"),H=C(),y=k("button"),R=b("Add One"),S=C(),B=k("ul");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){e=w(o,"DIV",{class:!0});var i=E(e);t=w(i,"BUTTON",{class:!0});var c=E(t);s=g(c,"Click to show Wow"),c.forEach(v),a=I(i),d&&d.l(i),p=I(i),r=w(i,"P",{class:!0});var T=E(r);m=g(T,"and now... "),P=g(T,_),f=g(T," post"),U=g(T,u),L=g(T,"!"),T.forEach(v),A=I(i),W=w(i,"DIV",{class:!0});var q=E(W);j=w(q,"BUTTON",{"aria-label":!0});var K=E(j);D=g(K,"Remove One"),K.forEach(v),H=I(q),y=w(q,"BUTTON",{"aria-label":!0});var M=E(y);R=g(M,"Add One"),M.forEach(v),q.forEach(v),S=I(i),B=w(i,"UL",{class:!0});var Q=E(B);for(let z=0;z<h.length;z+=1)h[z].l(Q);Q.forEach(v),i.forEach(v),this.h()},h(){O(t,"class","svelte-10usnxf"),O(r,"class","svelte-10usnxf"),O(j,"aria-label","remove post"),O(y,"aria-label","add post"),O(W,"class","svelte-10usnxf"),O(B,"class","svelte-10usnxf"),O(e,"class","container svelte-10usnxf")},m(o,i){G(o,e,i),l(e,t),l(t,s),l(e,a),d&&d.m(e,null),l(e,p),l(e,r),l(r,m),l(r,P),l(r,f),l(r,U),l(r,L),l(e,A),l(e,W),l(W,j),l(j,D),l(W,H),l(W,y),l(y,R),l(e,S),l(e,B);for(let c=0;c<h.length;c+=1)h[c].m(B,null);V||(J=[F(t,"click",n[5]),F(j,"click",n[4]),F(y,"click",n[3])],V=!0)},p(o,[i]){if(o[2]?d||(d=Z(),d.c(),d.m(e,p)):d&&(d.d(1),d=null),i&1&&_!==(_=(o[0]?o[0]:"no")+"")&&x(P,_),i&1&&u!==(u=o[0]!==1?"s":"")&&x(U,u),i&2){N=o[1];let c;for(c=0;c<N.length;c+=1){const T=Y(o,N,c);h[c]?h[c].p(T,i):(h[c]=$(T),h[c].c(),h[c].m(B,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=N.length}},i:X,o:X,d(o){o&&v(e),d&&d.d(),se(h,o),V=!1,oe(J)}}}function ne(n,e,t){let s=[];fetch("https://jsonplaceholder.typicode.com/posts").then(f=>f.json()).then(f=>{t(6,s=f)});let a=1,p=[];function r(){a!==100&&t(0,a+=1)}function m(){a!==0&&t(0,a-=1)}let _=!1;function P(){t(2,_=!_)}return n.$$.update=()=>{n.$$.dirty&65&&t(1,p=s.slice(0,a))},[a,p,_,r,m,P,s]}class ie extends ee{constructor(e){super(),te(this,e,ne,ae,le,{})}}export{ie as default};