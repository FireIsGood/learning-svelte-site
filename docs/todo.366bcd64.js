import{S as $,i as ee,s as te,e as k,t as C,a as O,c as I,b as U,d as y,f as S,g as P,h,k as q,l as r,n as J,o as R,y as X,r as x,m as j,X as H,z as K}from"./chunks/index.0cf57acb.js";/* empty css                              */function M(t,e,a){const s=t.slice();return s[9]=e[a],s[11]=a,s}function Q(t,e,a){const s=t.slice();return s[9]=e[a],s[12]=e,s[13]=a,s}function Y(t){let e,a,s,i,c,f,b,E,d;function m(){t[5].call(a,t[12],t[13])}function L(){t[6].call(c,t[12],t[13])}return{c(){e=k("li"),a=k("input"),i=O(),c=k("input"),b=O(),this.h()},l(u){e=I(u,"LI",{class:!0});var o=U(e);a=I(o,"INPUT",{type:!0,"aria-label":!0}),i=P(o),c=I(o,"INPUT",{type:!0,placeholder:!0,label:!0}),b=P(o),o.forEach(S),this.h()},h(){h(a,"type","checkbox"),h(a,"aria-label",s="Todo "+t[9].task+" Checkbox"),h(c,"type","text"),h(c,"placeholder","What task?"),c.disabled=f=t[9].done,h(c,"label","Todo List Item"),h(e,"class","svelte-pbi01x")},m(u,o){q(u,e,o),r(e,a),a.checked=t[9].done,r(e,i),r(e,c),j(c,t[9].task),r(e,b),E||(d=[J(a,"change",m),J(c,"input",L)],E=!0)},p(u,o){t=u,o&1&&s!==(s="Todo "+t[9].task+" Checkbox")&&h(a,"aria-label",s),o&1&&(a.checked=t[9].done),o&1&&f!==(f=t[9].done)&&(c.disabled=f),o&1&&c.value!==t[9].task&&j(c,t[9].task)},d(u){u&&S(e),E=!1,x(d)}}}function Z(t){let e,a,s,i,c=t[9].done+"",f,b,E,d,m,L=t[9].task+"",u,o,B;return{c(){e=k("code"),a=C(t[11]),s=C(`:\r
        `),i=k("span"),f=C(c),E=O(),d=k("span"),m=C('"'),u=C(L),o=C('"'),B=O(),this.h()},l(p){e=I(p,"CODE",{class:!0});var _=U(e);a=y(_,t[11]),s=y(_,`:\r
        `),i=I(_,"SPAN",{class:!0});var w=U(i);f=y(w,c),w.forEach(S),E=P(_),d=I(_,"SPAN",{class:!0});var N=U(d);m=y(N,'"'),u=y(N,L),o=y(N,'"'),N.forEach(S),B=P(_),_.forEach(S),this.h()},h(){h(i,"class",b=H(t[9].done?"done":"not-done")+" svelte-pbi01x"),h(d,"class","string svelte-pbi01x"),h(e,"class","svelte-pbi01x")},m(p,_){q(p,e,_),r(e,a),r(e,s),r(e,i),r(i,f),r(e,E),r(e,d),r(d,m),r(d,u),r(d,o),r(e,B)},p(p,_){_&1&&c!==(c=p[9].done+"")&&K(f,c),_&1&&b!==(b=H(p[9].done?"done":"not-done")+" svelte-pbi01x")&&h(i,"class",b),_&1&&L!==(L=p[9].task+"")&&K(u,L)},d(p){p&&S(e)}}}function le(t){let e,a,s,i,c,f,b,E,d,m,L,u,o,B,p,_,w,N=t[0],g=[];for(let n=0;n<N.length;n+=1)g[n]=Y(Q(t,N,n));let V=t[0],v=[];for(let n=0;n<V.length;n+=1)v[n]=Z(M(t,V,n));return{c(){e=k("div"),a=k("div"),s=k("button"),i=C("Add Item"),c=O(),f=k("button"),b=C("Clear Completed Items"),E=O(),d=k("label"),m=k("input"),L=C(`\r
      Use Local Storage`),u=O(),o=k("ul");for(let n=0;n<g.length;n+=1)g[n].c();B=O(),p=k("div");for(let n=0;n<v.length;n+=1)v[n].c();this.h()},l(n){e=I(n,"DIV",{class:!0});var T=U(e);a=I(T,"DIV",{class:!0});var l=U(a);s=I(l,"BUTTON",{class:!0});var A=U(s);i=y(A,"Add Item"),A.forEach(S),c=P(l),f=I(l,"BUTTON",{class:!0});var z=U(f);b=y(z,"Clear Completed Items"),z.forEach(S),E=P(l),d=I(l,"LABEL",{class:!0});var W=U(d);m=I(W,"INPUT",{type:!0,class:!0,"aria-label":!0}),L=y(W,`\r
      Use Local Storage`),W.forEach(S),l.forEach(S),u=P(T),o=I(T,"UL",{class:!0});var F=U(o);for(let D=0;D<g.length;D+=1)g[D].l(F);F.forEach(S),B=P(T),p=I(T,"DIV",{class:!0});var G=U(p);for(let D=0;D<v.length;D+=1)v[D].l(G);G.forEach(S),T.forEach(S),this.h()},h(){h(s,"class","svelte-pbi01x"),h(f,"class","svelte-pbi01x"),h(m,"type","checkbox"),h(m,"class","local-storage-toggle svelte-pbi01x"),h(m,"aria-label","Use Local Storage"),h(d,"class","svelte-pbi01x"),h(a,"class","buttons svelte-pbi01x"),h(o,"class","todo-list svelte-pbi01x"),h(p,"class","svelte-pbi01x"),h(e,"class","container svelte-pbi01x")},m(n,T){q(n,e,T),r(e,a),r(a,s),r(s,i),r(a,c),r(a,f),r(f,b),r(a,E),r(a,d),r(d,m),r(d,L),r(e,u),r(e,o);for(let l=0;l<g.length;l+=1)g[l].m(o,null);r(e,B),r(e,p);for(let l=0;l<v.length;l+=1)v[l].m(p,null);_||(w=[J(s,"click",t[2]),J(f,"click",t[3]),J(m,"click",t[1])],_=!0)},p(n,[T]){if(T&1){N=n[0];let l;for(l=0;l<N.length;l+=1){const A=Q(n,N,l);g[l]?g[l].p(A,T):(g[l]=Y(A),g[l].c(),g[l].m(o,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=N.length}if(T&1){V=n[0];let l;for(l=0;l<V.length;l+=1){const A=M(n,V,l);v[l]?v[l].p(A,T):(v[l]=Z(A),v[l].c(),v[l].m(p,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=V.length}},i:R,o:R,d(n){n&&S(e),X(g,n),X(v,n),_=!1,x(w)}}}function ae(){let t=localStorage.getItem("todo");return t==null||t.toString()==="undefined"?[]:JSON.parse(t)}function se(t,e,a){let s=!1,i=[],c=[{done:!1,task:"Eat Breakfast"},{done:!1,task:"Refill Water"},{done:!1,task:"Fight God"}];i=c;function f(){a(4,s=!s),s?a(0,i=ae()):a(0,i=c)}function b(){localStorage.setItem("todo",JSON.stringify(i)),console.log("wow")}function E(){a(0,i=[...i,{done:!1,task:""}]),b()}function d(){a(0,i=i.filter(u=>!u.done)),b()}function m(u,o){u[o].done=this.checked,a(0,i)}function L(u,o){u[o].task=this.value,a(0,i)}return t.$$.update=()=>{t.$$.dirty&17&&s&&b()},[i,f,E,d,s,m,L]}class re extends ${constructor(e){super(),ee(this,e,se,le,te,{})}}export{re as default};
