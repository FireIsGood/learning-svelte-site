import{S as K,i as L,s as Q,B as W,e as g,a as C,c as p,b,f as y,g as d,C as j,D as B,h as u,j as q,k as o,E as X,n as M,w as Y,t as z,F as Z,d as D,G as ee,H as te,l as S,v as se,q as ae,I as re,r as ne}from"./chunks/index.b4c54308.js";/* empty css                              */function N(c,e,s){const t=c.slice();return t[1]=e[s],t}function J(c){let e,s;return{c(){e=g("source"),this.h()},l(t){e=p(t,"SOURCE",{srcset:!0,class:!0}),this.h()},h(){u(e,"srcset",s=c[1].srcset),u(e,"class","svelte-yzb0g")},m(t,i){q(t,e,i)},p(t,i){i&1&&s!==(s=t[1].srcset)&&u(e,"srcset",s)},d(t){t&&d(e)}}}function le(c){let e,s,t,i=c[0].sources,n=[];for(let a=0;a<i.length;a+=1)n[a]=J(N(c,i,a));let h=[c[0].image,{alt:""}],v={};for(let a=0;a<h.length;a+=1)v=W(v,h[a]);return{c(){e=g("picture");for(let a=0;a<n.length;a+=1)n[a].c();s=C(),t=g("img"),this.h()},l(a){e=p(a,"PICTURE",{class:!0});var l=b(e);for(let r=0;r<n.length;r+=1)n[r].l(l);s=y(l),t=p(l,"IMG",{alt:!0}),l.forEach(d),this.h()},h(){j(t,v),B(t,"svelte-yzb0g",!0),u(e,"class","svelte-yzb0g")},m(a,l){q(a,e,l);for(let r=0;r<n.length;r+=1)n[r].m(e,null);o(e,s),o(e,t)},p(a,[l]){if(l&1){i=a[0].sources;let r;for(r=0;r<i.length;r+=1){const I=N(a,i,r);n[r]?n[r].p(I,l):(n[r]=J(I),n[r].c(),n[r].m(e,s))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}j(t,v=X(h,[l&1&&a[0].image,{alt:""}])),B(t,"svelte-yzb0g",!0)},i:M,o:M,d(a){a&&d(e),Y(n,a)}}}function ce(c,e,s){let{picture:t}=e;return c.$$set=i=>{"picture"in i&&s(0,t=i.picture)},[t]}class ie extends K{constructor(e){super(),L(this,e,ce,le,Q,{picture:0})}}function oe(c){let e,s,t,i,n,h,v,a,l,r,I,E,U,k,A,H,$,x,P,V,w;return x=new ie({props:{picture:c[0]}}),{c(){e=g("section"),s=g("div"),t=g("a"),i=z("Home"),n=C(),h=g("a"),v=z("Users"),a=C(),l=g("a"),r=z("About"),I=C(),E=g("a"),U=z("Contact"),k=C(),A=g("div"),H=C(),$=g("div"),Z(x.$$.fragment),this.h()},l(f){e=p(f,"SECTION",{class:!0});var _=b(e);s=p(_,"DIV",{class:!0,"data-active-index":!0});var m=b(s);t=p(m,"A",{href:!0,class:!0});var F=b(t);i=D(F,"Home"),F.forEach(d),n=y(m),h=p(m,"A",{href:!0,class:!0});var G=b(h);v=D(G,"Users"),G.forEach(d),a=y(m),l=p(m,"A",{href:!0,class:!0});var O=b(l);r=D(O,"About"),O.forEach(d),I=y(m),E=p(m,"A",{href:!0,class:!0});var R=b(E);U=D(R,"Contact"),R.forEach(d),m.forEach(d),k=y(_),A=p(_,"DIV",{class:!0}),b(A).forEach(d),H=y(_),$=p(_,"DIV",{class:!0});var T=b($);ee(x.$$.fragment,T),T.forEach(d),_.forEach(d),this.h()},h(){u(t,"href","#"),u(t,"class","svelte-1x7epdn"),u(h,"href","#"),u(h,"class","svelte-1x7epdn"),u(l,"href","#"),u(l,"class","svelte-1x7epdn"),u(E,"href","#"),u(E,"class","svelte-1x7epdn"),u(s,"class","menu svelte-1x7epdn"),u(s,"data-active-index",c[1]),u(A,"class","grid-bg svelte-1x7epdn"),u($,"class","image-bg svelte-1x7epdn"),u(e,"class","svelte-1x7epdn")},m(f,_){q(f,e,_),o(e,s),o(s,t),o(t,i),o(s,n),o(s,h),o(h,v),o(s,a),o(s,l),o(l,r),o(s,I),o(s,E),o(E,U),o(e,k),o(e,A),o(e,H),o(e,$),te(x,$,null),P=!0,V||(w=[S(t,"mouseenter",c[3]),S(h,"mouseenter",c[4]),S(l,"mouseenter",c[5]),S(E,"mouseenter",c[6])],V=!0)},p(f,[_]){(!P||_&2)&&u(s,"data-active-index",f[1]);const m={};_&1&&(m.picture=f[0]),x.$set(m)},i(f){P||(se(x.$$.fragment,f),P=!0)},o(f){ae(x.$$.fragment,f),P=!1},d(f){f&&d(e),re(x),V=!1,ne(w)}}}function ue(c,e,s){let{bgPicture:t}=e,i=0;function n(r){s(1,i=r)}const h=()=>n(0),v=()=>n(1),a=()=>n(2),l=()=>n(3);return c.$$set=r=>{"bgPicture"in r&&s(0,t=r.bgPicture)},[t,i,n,h,v,a,l]}class de extends K{constructor(e){super(),L(this,e,ue,oe,Q,{bgPicture:0})}}export{de as default};