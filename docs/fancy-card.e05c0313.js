import{S as z,i as L,s as F,e as m,t as S,a as T,c as g,b as k,d as C,f,g as D,h as y,j as M,k as H,l as c,v as O,w as X,x as P,y as G,z as J,A as K,B as R,o as $,C as U}from"./chunks/index.0cf57acb.js";/* empty css                              */function Q(r,e,t){const s=r.slice();return s[5]=e[t],s}function A(r){let e,t,s,a,h=r[1][r[0]]+"",n,_;return{c(){e=m("h2"),t=S("Quote of the Day"),s=T(),a=m("p"),n=S(h),this.h()},l(o){e=g(o,"H2",{class:!0});var d=k(e);t=C(d,"Quote of the Day"),d.forEach(f),s=D(o),a=g(o,"P",{class:!0});var u=k(a);n=C(u,h),u.forEach(f),this.h()},h(){y(e,"class","svelte-1t3cppq"),y(a,"class","svelte-1t3cppq")},m(o,d){H(o,e,d),c(e,t),H(o,s,d),H(o,a,d),c(a,n)},p(o,d){d&1&&h!==(h=o[1][o[0]]+"")&&J(n,h)},i(o){_||K(()=>{_=R(a,Y,{speed:15}),_.start()})},o:$,d(o){o&&f(e),o&&f(s),o&&f(a)}}}function B(r){let e,t,s=r[5].title+"",a,h,n,_=r[5].body+"",o,d;return{c(){e=m("div"),t=m("h2"),a=S(s),h=T(),n=m("p"),o=S(_),d=T(),this.h()},l(u){e=g(u,"DIV",{class:!0,style:!0});var b=k(e);t=g(b,"H2",{class:!0});var I=k(t);a=C(I,s),I.forEach(f),h=D(b),n=g(b,"P",{class:!0});var v=k(n);o=C(v,_),v.forEach(f),d=D(b),b.forEach(f),this.h()},h(){y(t,"class","svelte-1t3cppq"),y(n,"class","svelte-1t3cppq"),y(e,"class","card svelte-1t3cppq"),y(e,"style",`--hue: ${r[5].hue}`)},m(u,b){H(u,e,b),c(e,t),c(t,a),c(e,h),c(e,n),c(n,o),c(e,d)},p:$,d(u){u&&f(e)}}}function W(r){let e,t,s,a,h,n,_,o,d,u,b=r[0],I,v=A(r),q=r[2],p=[];for(let l=0;l<q.length;l+=1)p[l]=B(Q(r,q,l));return{c(){e=m("section"),t=m("div"),s=m("div"),a=m("h2"),h=S("Thoughts"),n=T(),_=m("p"),o=S(`I enjoy eating pancakes, but they are sometimes ovecooked. This is an\r
        issue and I dislike it.`),d=T(),u=m("div"),v.c(),I=T();for(let l=0;l<p.length;l+=1)p[l].c();this.h()},l(l){e=g(l,"SECTION",{class:!0});var w=k(e);t=g(w,"DIV",{class:!0});var i=k(t);s=g(i,"DIV",{class:!0,style:!0});var E=k(s);a=g(E,"H2",{class:!0});var x=k(a);h=C(x,"Thoughts"),x.forEach(f),n=D(E),_=g(E,"P",{class:!0});var V=k(_);o=C(V,`I enjoy eating pancakes, but they are sometimes ovecooked. This is an\r
        issue and I dislike it.`),V.forEach(f),E.forEach(f),d=D(i),u=g(i,"DIV",{class:!0,style:!0});var j=k(u);v.l(j),j.forEach(f),I=D(i);for(let N=0;N<p.length;N+=1)p[N].l(i);i.forEach(f),w.forEach(f),this.h()},h(){y(a,"class","svelte-1t3cppq"),y(_,"class","svelte-1t3cppq"),y(s,"class","card svelte-1t3cppq"),M(s,"--hue","320"),y(u,"class","card quotes svelte-1t3cppq"),M(u,"--hue","0"),y(t,"class","card-wrapper svelte-1t3cppq"),y(e,"class","svelte-1t3cppq")},m(l,w){H(l,e,w),c(e,t),c(t,s),c(s,a),c(a,h),c(s,n),c(s,_),c(_,o),c(t,d),c(t,u),v.m(u,null),c(t,I);for(let i=0;i<p.length;i+=1)p[i].m(t,null)},p(l,[w]){if(w&1&&F(b,b=l[0])?(U(),O(v,1,1,$),X(),v=A(l),v.c(),P(v,1),v.m(u,null)):v.p(l,w),w&4){q=l[2];let i;for(i=0;i<q.length;i+=1){const E=Q(l,q,i);p[i]?p[i].p(E,w):(p[i]=B(E),p[i].c(),p[i].m(t,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=q.length}},i(l){P(v)},o(l){O(v)},d(l){l&&f(e),v.d(l),G(p,l)}}}function Y(r,{speed:e=1}){if(!(r.childNodes.length===1&&r.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node");const s=r.innerText;return{duration:s?.length*e,tick:h=>{const n=Math.trunc(s.length*h);r.textContent=s.slice(0,n)}}}function Z(r,e,t){const s=["Did you know? For every three fingers you have, your life expectancy drops by 15%","I am within your walls","The devil works fast but wikipedia editors work faster.","I wish I could reach out and","Cards games are a little silly, wouldn't you agree? I'm no game."];let a=0;setInterval(n,1e4);const h=[{title:"Amogus",body:"Sussy Baka",hue:80},{title:"How are you today?",body:"Have you been drinking water? Many symptoms of fatigue can be traced back to dehydration. Stay healthy!",hue:120},{title:"short boye",body:"so short and concise!",hue:240},{title:"Secret Message woooo",body:"I am the body text Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos laudantium magnam dolorem ut laboriosam excepturi facilis saepe cum.",hue:200}];function n(){t(0,a=(a+1)%s.length)}return[a,s,h]}class se extends z{constructor(e){super(),L(this,e,Z,W,F,{})}}export{se as default};
