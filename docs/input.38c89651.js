import{S as L,i as C,s as D,e as d,h as H,t as N,c as h,a as v,j as P,k as S,d as m,b as p,f as U,l as u,r as y,m as k,n as E,u as V,v as j}from"./chunks/index.6ec7a832.js";import{s as T,h as g}from"./chunks/event-store.133bd807.js";/* empty css                                                    */import"./chunks/index.0b9432b0.js";function q(a){let e,t,l,s,n,r,o,_,I;return{c(){e=d("div"),t=d("input"),l=H(),s=d("div"),n=d("label"),r=d("input"),o=N(`\r
      Hide Incorrect Items`),this.h()},l(i){e=h(i,"DIV",{class:!0});var c=v(e);t=h(c,"INPUT",{type:!0,placeholder:!0}),l=P(c),s=h(c,"DIV",{class:!0});var b=v(s);n=h(b,"LABEL",{class:!0});var f=v(n);r=h(f,"INPUT",{type:!0}),o=S(f,`\r
      Hide Incorrect Items`),f.forEach(m),b.forEach(m),c.forEach(m),this.h()},h(){p(t,"type","text"),p(t,"placeholder","Type a name..."),p(r,"type","checkbox"),p(n,"class","svelte-s01opo"),p(s,"class","check"),p(e,"class","container svelte-s01opo")},m(i,c){U(i,e,c),u(e,t),y(t,a[0]),u(e,l),u(e,s),u(s,n),u(n,r),r.checked=a[1],u(n,o),_||(I=[k(t,"input",a[2]),k(r,"change",a[3])],_=!0)},p(i,[c]){c&1&&t.value!==i[0]&&y(t,i[0]),c&2&&(r.checked=i[1])},i:E,o:E,d(i){i&&m(e),_=!1,V(I)}}}function w(a,e,t){let l;j(a,g,o=>t(1,l=o));let s;function n(){s=this.value,t(0,s)}function r(){l=this.checked,g.set(l)}return a.$$.update=()=>{if(a.$$.dirty&1)if(s){const o=s.toLowerCase();T.set(o)}else T.set("?")},[s,l,n,r]}class z extends L{constructor(e){super(),C(this,e,w,q,D,{})}}export{z as default};