import{S as C,i as w,s as z,e as m,a as N,t as y,c as f,b,d as P,f as B,g as h,h as l,j as F,k as t,l as U,m as $,n as j,o as q,r as G}from"./chunks/index.cbcec1ba.js";/* empty css                                                   */function J(r){let a,n,e,d,o,v,_=(r[0]?r[0]:"no one in particular")+"",g,D,V,c,u,A,p,E,H,S;return{c(){a=m("div"),n=m("div"),e=m("input"),d=N(),o=m("label"),v=y("Hi "),g=y(_),D=y("!"),V=N(),c=m("div"),u=m("input"),A=N(),p=m("label"),E=y(r[1]),this.h()},l(s){a=f(s,"DIV",{class:!0});var i=b(a);n=f(i,"DIV",{class:!0});var k=b(n);e=f(k,"INPUT",{type:!0,name:!0}),d=P(k),o=f(k,"LABEL",{for:!0});var I=b(o);v=B(I,"Hi "),g=B(I,_),D=B(I,"!"),I.forEach(h),k.forEach(h),V=P(i),c=f(i,"DIV",{class:!0});var L=b(c);u=f(L,"INPUT",{type:!0,name:!0,id:!0,class:!0}),A=P(L),p=f(L,"LABEL",{for:!0,class:!0});var T=b(p);E=B(T,r[1]),T.forEach(h),L.forEach(h),i.forEach(h),this.h()},h(){l(e,"type","text"),l(e,"name","greet"),l(o,"for","greet"),l(n,"class","input-item svelte-1nmoeom"),l(u,"type","checkbox"),l(u,"name","stupid"),l(u,"id","stupid"),l(u,"class","svelte-1nmoeom"),l(p,"for","stupid"),l(p,"class","svelte-1nmoeom"),l(c,"class","input-item svelte-1nmoeom"),l(a,"class","container svelte-1nmoeom")},m(s,i){F(s,a,i),t(a,n),t(n,e),U(e,r[0]),t(n,d),t(n,o),t(o,v),t(o,g),t(o,D),t(a,V),t(a,c),t(c,u),u.checked=r[1],t(c,A),t(c,p),t(p,E),H||(S=[$(e,"input",r[2]),$(u,"change",r[3])],H=!0)},p(s,[i]){i&1&&e.value!==s[0]&&U(e,s[0]),i&1&&_!==(_=(s[0]?s[0]:"no one in particular")+"")&&j(g,_),i&2&&(u.checked=s[1]),i&2&&j(E,s[1])},i:q,o:q,d(s){s&&h(a),H=!1,G(S)}}}function K(r,a,n){let e="mom",d=!1;function o(){e=this.value,n(0,e)}function v(){d=this.checked,n(1,d)}return[e,d,o,v]}class Q extends C{constructor(a){super(),w(this,a,K,J,z,{})}}export{Q as default};
