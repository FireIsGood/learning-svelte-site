import{S as U,i as L,s as R,e as _,c as k,a as S,d as f,b as g,f as I,n as A,g as x,h as D,t as y,j as T,k as v,l as m,m as q,o as H,p as C,q as F}from"./chunks/index.6ec7a832.js";/* empty css                                                    */function O(i,e,t){const o=i.slice();return o[11]=e[t],o}function j(i,e,t){const o=i.slice();return o[8]=e[t],o[10]=t,o}function M(i){let e,t,o,l,r,h,d=i[3],s=[];for(let a=0;a<d.length;a+=1)s[a]=N(O(i,d,a));return{c(){e=_("div");for(let a=0;a<s.length;a+=1)s[a].c();t=D(),o=_("button"),l=y("Calculate Score"),this.h()},l(a){e=k(a,"DIV",{class:!0});var c=S(e);for(let u=0;u<s.length;u+=1)s[u].l(c);t=T(c),o=k(c,"BUTTON",{class:!0});var n=S(o);l=v(n,"Calculate Score"),n.forEach(f),c.forEach(f),this.h()},h(){g(o,"class","reset-button svelte-189syv1"),g(e,"class","rating-container svelte-189syv1")},m(a,c){I(a,e,c);for(let n=0;n<s.length;n+=1)s[n].m(e,null);m(e,t),m(e,o),m(o,l),r||(h=q(o,"click",i[5]),r=!0)},p(a,c){if(c&9){d=a[3];let n;for(n=0;n<d.length;n+=1){const u=O(a,d,n);s[n]?s[n].p(u,c):(s[n]=N(u),s[n].c(),s[n].m(e,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=d.length}},d(a){a&&f(e),H(s,a),r=!1,h()}}}function W(i){let e,t,o,l,r,h,d=i[2],s=[];for(let a=0;a<d.length;a+=1)s[a]=V(j(i,d,a));return{c(){e=_("div");for(let a=0;a<s.length;a+=1)s[a].c();t=D(),o=_("button"),l=y("Calculate Score"),this.h()},l(a){e=k(a,"DIV",{class:!0});var c=S(e);for(let u=0;u<s.length;u+=1)s[u].l(c);t=T(c),o=k(c,"BUTTON",{class:!0});var n=S(o);l=v(n,"Calculate Score"),n.forEach(f),c.forEach(f),this.h()},h(){g(o,"class","calculate-button svelte-189syv1"),g(e,"class","sin-container svelte-189syv1")},m(a,c){I(a,e,c);for(let n=0;n<s.length;n+=1)s[n].m(e,null);m(e,t),m(e,o),m(o,l),r||(h=q(o,"click",i[4]),r=!0)},p(a,c){if(c&5){d=a[2];let n;for(n=0;n<d.length;n+=1){const u=j(a,d,n);s[n]?s[n].p(u,c):(s[n]=V(u),s[n].c(),s[n].m(e,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=d.length}},d(a){a&&f(e),H(s,a),r=!1,h()}}}function B(i){let e,t,o,l,r=i[11].rating+"",h,d,s=100-i[0].length+"",a,c,n,u,b=i[11].remark+"",E;return{c(){e=_("p"),t=y("Your Innocence:"),o=D(),l=_("h2"),h=y(r),d=y(" ("),a=y(s),c=y(")"),n=D(),u=_("p"),E=y(b),this.h()},l(p){e=k(p,"P",{class:!0});var w=S(e);t=v(w,"Your Innocence:"),w.forEach(f),o=T(p),l=k(p,"H2",{class:!0});var Y=S(l);h=v(Y,r),d=v(Y," ("),a=v(Y,s),c=v(Y,")"),Y.forEach(f),n=T(p),u=k(p,"P",{class:!0});var P=S(u);E=v(P,b),P.forEach(f),this.h()},h(){g(e,"class","svelte-189syv1"),g(l,"class","svelte-189syv1"),g(u,"class","svelte-189syv1")},m(p,w){I(p,e,w),m(e,t),I(p,o,w),I(p,l,w),m(l,h),m(l,d),m(l,a),m(l,c),I(p,n,w),I(p,u,w),m(u,E)},p(p,w){w&1&&s!==(s=100-p[0].length+"")&&F(a,s)},d(p){p&&f(e),p&&f(o),p&&f(l),p&&f(n),p&&f(u)}}}function N(i){let e,t=i[11].floor<=i[0].length&&i[0].length<=i[11].ceil&&B(i);return{c(){t&&t.c(),e=C()},l(o){t&&t.l(o),e=C()},m(o,l){t&&t.m(o,l),I(o,e,l)},p(o,l){o[11].floor<=o[0].length&&o[0].length<=o[11].ceil?t?t.p(o,l):(t=B(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(o){t&&t.d(o),o&&f(e)}}}function V(i){let e,t,o,l,r=i[10]+1+"",h,d,s=i[8]+"",a,c,n;return{c(){e=_("div"),t=_("input"),o=D(),l=_("label"),h=y(r),d=y(": "),a=y(s),this.h()},l(u){e=k(u,"DIV",{class:!0});var b=S(e);t=k(b,"INPUT",{type:!0,name:!0,id:!0}),o=T(b),l=k(b,"LABEL",{for:!0,class:!0});var E=S(l);h=v(E,r),d=v(E,": "),a=v(E,s),E.forEach(f),b.forEach(f),this.h()},h(){g(t,"type","checkbox"),g(t,"name",i[8]),g(t,"id",i[10].toString()),t.__value=i[10],t.value=t.__value,i[7][0].push(t),g(l,"for",i[10].toString()),g(l,"class","svelte-189syv1"),g(e,"class","input-item svelte-189syv1")},m(u,b){I(u,e,b),m(e,t),t.checked=~i[0].indexOf(t.__value),m(e,o),m(e,l),m(l,h),m(l,d),m(l,a),c||(n=q(t,"change",i[6]),c=!0)},p(u,b){b&1&&(t.checked=~u[0].indexOf(t.__value))},d(u){u&&f(e),i[7][0].splice(i[7][0].indexOf(t),1),c=!1,n()}}}function z(i){let e;function t(r,h){return r[1]?M:W}let o=t(i),l=o(i);return{c(){e=_("div"),l.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var h=S(e);l.l(h),h.forEach(f),this.h()},h(){g(e,"class","container")},m(r,h){I(r,e,h),l.m(e,null)},p(r,[h]){o===(o=t(r))&&l?l.p(r,h):(l.d(1),l=o(r),l&&(l.c(),l.m(e,null)))},i:A,o:A,d(r){r&&f(e),l.d()}}}function G(i,e,t){const o=["been on a date \u{1F495}","been in a relationship \u{1F970}","kissed a mps (member of the preferred sex) \u{1F618}","made out in public \u{1F610}","played a game involved stripping \u{1FA72}","masturbated \u{1F608}","sent or received underwear pics \u{1F459}","sent nudes \u{1F6AB}","received nudes \u274C","sexted \u{1F4F2}","facetime sex \u{1F933}","kissed 3 or more people in one night. \u{1F468}\u200D\u{1F469}\u200D\u{1F466}","FwB \u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","been in love \u{1F496}","had a dating app \u{1F525}","paid for a premium version of a dating app \u{1F4B8}","long distance relationship \u{1F6EB}","asked for a stranger\u2019s contact info #\uFE0F\u20E3","been asked for your contact info by a stranger \u{1F47B}","gotten back with/hooked up with an ex \u274E","slid into someone\u2019s DMs \u{1F4F3}","watched porn \u{1F7E7}\u2B1B\uFE0F","paid for any porn \u{1F911}","watched porn with mps \u{1F37F}","talked to 5 or more people at once 5\uFE0F\u20E3","posted a thirst trap \u{1F61C}","said \u201Ci love you\u201D \u{1F60D}","been to a party \u{1F389}","thrown a party \u{1F973}","drank \u{1F942}","been drunk \u{1F635}","blacked or yakked \u{1F974}","played a drinking game \u{1F964}","faked sobriety \u{1F925}","flirted with a stranger to get a free drink \u{1F37B}","taken alcohol from your parents \u{1F943}","smoked weed \u{1F343}","done edibles \u{1F36A}","hit a bong \u2697\uFE0F","nicotine (vaped) \u{1F4A8}","smoked a cigarette \u{1F6AC}","cocaine or a drug stronger \u{1F489}","had a fake \u{1F194}","had a fake ID confiscated \u{1F46E}\u200D\u2642\uFE0F","used a fake to buy alcohol/drugs \u{1F4B0}","used a fake to get into a bar/club \u{1F57A}","had the police called on you \u{1F694}","gotten in trouble with school or law \u{1F641}","showered with mps \u{1F6BF}","given/received a hickey \u{1F48B}","had/given blue balls \u{1F535}","someone else made you orgasm \u{1F92F}","cheated/been cheated on/been cheated with \u{1F92E}","bought plan b \u{1F47C}\u{1F3FC}","bought birth control \u{1F48A}","given head \u{1F9E0}","received head \u{1F444}","used a sex toy \u{1F9F8}","spent the night with mps \u{1F4A4}","been walked in on while engaging in a sexual act \u{1F633}","sexiled a roommate \u{1F44B}\u{1F3FC}","had sex \u{1F346}","had sex 3 or more times in one night. \u{1F3D8}","STI/STD test \u{1F9A0}","had car sex \u{1F698}","had sex in public \u{1F4E2}","used blindfold/handcuffs in bed \u{1F92D}","joined the mile high club \u{1F6EB}","\u2753","3some 3\uFE0F\u20E3","orgy! \u{1F522}","body count > 5 \u{1F4C8}","sex tape. \u{1F3A5}","anal \u{1F351}","period sex \u{1FA78}","bought a pregnancy test \u{1F4C4}","been preggo/ gotten someone preggo \u{1F930}","streaked \u{1F440}","skinny dipped \u{1F30A}","seen a stripper \u{1F445}","run from the police \u{1F46E}","been questioned by/handcuffed by police \u{1F6A8}","committed vandalism \u{1F3A8}","driven under the influence \u{1F699}","texted while driving \u{1F4AC}","gotten a tattoo \u{1F58B}\uFE0F","pierced something other than your ears \u{1F443}","stolen something \u{1F4B2}","crashed a car \u{1F3CE}","blocked someone on social media \u{1F44E}\u{1F3FD}","gotten kicked out of a party \u{1F621}","been at a party that got raided \u{1F692}","snuck out \u{1F630}","had corona! \u{1F637}","had a crush on a teacher \u{1F469}\u200D\u{1F3EB}","stalked someone\u2019s snapchat location \u{1F4CD}","gotten with 2+ people in the same friend group \u{1F44F}\u{1F3FC}","whole snap best friends list has been love interests \u{1F60E}","gotten with someone 3+ years older than you \u{1F475}","gotten with someone 3+ years younger than you \u{1F476}"],l=[{floor:0,ceil:2,rating:"Angel",remark:"You're literally not real or 12. Did you just skip all the checkboxes to see what this would say? If this is actually you, you're probably ace or something idk. "},{floor:3,ceil:6,rating:"Innocent",remark:"You're quite well behaved, I'd guess you haven't been in trouble at school before. You're more pure than most people pretend to be, and you should feel free to be proud of this if you so wish. There's not really much to say about you from just this number."},{floor:7,ceil:33,rating:"Average Person",remark:"I would guess this is where the average person stands. You're probably fine as far as anyone else can see. I don't have much to say since this is one of the more likely scores. Anyways, how is your day?"},{floor:34,ceil:55,rating:"Rebelious",remark:"You've done quite a number of things, I would say I'm impressed if I were near your level. Honestly I have no idea how you're even doing all these things. I might not want to be your friend, although I'm not sure since I'm not aware of people's scores"},{floor:56,ceil:91,rating:"Impure",remark:"You are quite impure! Holy hell that's a lot of things. Are you sure you're still alive? Either way, please excuse me as I will be exiting immedietly to avoid getting stabbed."},{floor:92,ceil:100,rating:"Embodiment of Pure Sin",remark:"You are pure evil. Well, at least by society's standards. I would probably not hang out with you since you likely have more than one felony. I willingly admit I am more than a little scared of you. Please do not break my kneecaps or stab either of my kidneys."}];let r=[],h=!1;function d(){t(1,h=!0)}function s(){t(0,r=[]),t(1,h=!1)}const a=[[]];function c(){r=x(a[0],this.__value,this.checked),t(0,r)}return[r,h,o,l,d,s,c,a]}class Q extends U{constructor(e){super(),L(this,e,G,z,R,{})}}export{Q as default};