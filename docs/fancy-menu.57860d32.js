import{S as j,i as B,s as Q,J as W,e as g,a as y,c as p,b,g as A,f as d,K as G,L as J,h as u,k as F,l as o,M as X,o as K,F as Y,t as z,u as Z,d as S,v as ee,w as te,n as U,y as se,z as ae,A as re,r as ne}from"./chunks/index.a34bd419.js";/* empty css                              */function L(c,e,s){const t=c.slice();return t[1]=e[s],t}function N(c){let e,s;return{c(){e=g("source"),this.h()},l(t){e=p(t,"SOURCE",{srcset:!0,class:!0}),this.h()},h(){u(e,"srcset",s=c[1].srcset),u(e,"class","svelte-yzb0g")},m(t,i){F(t,e,i)},p(t,i){i&1&&s!==(s=t[1].srcset)&&u(e,"srcset",s)},d(t){t&&d(e)}}}function le(c){let e,s,t,i=c[0].sources,n=[];for(let a=0;a<i.length;a+=1)n[a]=N(L(c,i,a));let h=[c[0].image,{alt:""}],v={};for(let a=0;a<h.length;a+=1)v=W(v,h[a]);return{c(){e=g("picture");for(let a=0;a<n.length;a+=1)n[a].c();s=y(),t=g("img"),this.h()},l(a){e=p(a,"PICTURE",{class:!0});var l=b(e);for(let r=0;r<n.length;r+=1)n[r].l(l);s=A(l),t=p(l,"IMG",{alt:!0}),l.forEach(d),this.h()},h(){G(t,v),J(t,"svelte-yzb0g",!0),u(e,"class","svelte-yzb0g")},m(a,l){F(a,e,l);for(let r=0;r<n.length;r+=1)n[r].m(e,null);o(e,s),o(e,t)},p(a,[l]){if(l&1){i=a[0].sources;let r;for(r=0;r<i.length;r+=1){const $=L(a,i,r);n[r]?n[r].p($,l):(n[r]=N($),n[r].c(),n[r].m(e,s))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}G(t,v=X(h,[l&1&&a[0].image,{alt:""}])),J(t,"svelte-yzb0g",!0)},i:K,o:K,d(a){a&&d(e),Y(n,a)}}}function ce(c,e,s){let{picture:t}=e;return c.$$set=i=>{"picture"in i&&s(0,t=i.picture)},[t]}class ie extends j{constructor(e){super(),B(this,e,ce,le,Q,{picture:0})}}function oe(c){let e,s,t,i,n,h,v,a,l,r,$,E,k,D,C,V,I,x,P,w,H;return x=new ie({props:{picture:c[0]}}),{c(){e=g("section"),s=g("div"),t=g("a"),i=z("Home"),n=y(),h=g("a"),v=z("Users"),a=y(),l=g("a"),r=z("About"),$=y(),E=g("a"),k=z("Contact"),D=y(),C=g("div"),V=y(),I=g("div"),Z(x.$$.fragment),this.h()},l(f){e=p(f,"SECTION",{class:!0});var _=b(e);s=p(_,"DIV",{class:!0,"data-active-index":!0});var m=b(s);t=p(m,"A",{href:!0,class:!0});var M=b(t);i=S(M,"Home"),M.forEach(d),n=A(m),h=p(m,"A",{href:!0,class:!0});var O=b(h);v=S(O,"Users"),O.forEach(d),a=A(m),l=p(m,"A",{href:!0,class:!0});var R=b(l);r=S(R,"About"),R.forEach(d),$=A(m),E=p(m,"A",{href:!0,class:!0});var T=b(E);k=S(T,"Contact"),T.forEach(d),m.forEach(d),D=A(_),C=p(_,"DIV",{class:!0}),b(C).forEach(d),V=A(_),I=p(_,"DIV",{class:!0});var q=b(I);ee(x.$$.fragment,q),q.forEach(d),_.forEach(d),this.h()},h(){u(t,"href","#"),u(t,"class","svelte-1x7epdn"),u(h,"href","#"),u(h,"class","svelte-1x7epdn"),u(l,"href","#"),u(l,"class","svelte-1x7epdn"),u(E,"href","#"),u(E,"class","svelte-1x7epdn"),u(s,"class","menu svelte-1x7epdn"),u(s,"data-active-index",c[1]),u(C,"class","grid-bg svelte-1x7epdn"),u(I,"class","image-bg svelte-1x7epdn"),u(e,"class","svelte-1x7epdn")},m(f,_){F(f,e,_),o(e,s),o(s,t),o(t,i),o(s,n),o(s,h),o(h,v),o(s,a),o(s,l),o(l,r),o(s,$),o(s,E),o(E,k),o(e,D),o(e,C),o(e,V),o(e,I),te(x,I,null),P=!0,w||(H=[U(t,"mouseenter",c[3]),U(h,"mouseenter",c[4]),U(l,"mouseenter",c[5]),U(E,"mouseenter",c[6])],w=!0)},p(f,[_]){(!P||_&2)&&u(s,"data-active-index",f[1]);const m={};_&1&&(m.picture=f[0]),x.$set(m)},i(f){P||(se(x.$$.fragment,f),P=!0)},o(f){ae(x.$$.fragment,f),P=!1},d(f){f&&d(e),re(x),w=!1,ne(H)}}}function ue(c,e,s){let{bgPicture:t}=e,i=0;function n(r){s(1,i=r)}const h=()=>n(0),v=()=>n(1),a=()=>n(2),l=()=>n(3);return c.$$set=r=>{"bgPicture"in r&&s(0,t=r.bgPicture)},[t,i,n,h,v,a,l]}class de extends j{constructor(e){super(),B(this,e,ue,oe,Q,{bgPicture:0})}}export{de as default};
