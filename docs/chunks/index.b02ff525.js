function g(){}const et=t=>t;function nt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function z(){return Object.create(null)}function v(t){t.forEach(J)}function L(t){return typeof t=="function"}function Mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function Pt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?nt(n.ctx.slice(),t[1](i(e))):n.ctx}function Rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,c){if(r){const s=K(e,n,i,c);t.p(s,r)}}function qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function zt(t){return t??""}const Q=typeof window<"u";let st=Q?()=>window.performance.now():()=>Date.now(),P=Q?t=>requestAnimationFrame(t):g;const y=new Set;function W(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&P(W)}function lt(t){let e;return y.size===0&&P(W),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let O=!1;function ot(){O=!0}function ct(){O=!1}function ut(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:ut(1,r,_=>e[n[_]].claim_order,o))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,r=Math.max(f,r)}const c=[],s=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<s.length;l++){for(;o<c.length&&s[l].claim_order>=c[o].claim_order;)o++;const a=o<c.length?c[o]:null;t.insertBefore(s[l],a)}}function at(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=X("style");return dt(U(t),e),e.sheet}function dt(t,e){return at(t.head||t,e),e.sheet}function ht(t,e){if(O){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){O&&!n?ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function It(){return R(" ")}function Gt(){return R("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:pt(t,i,e[i])}function Qt(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function yt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,i,r=!1){gt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Z(t,e,n,i){return Y(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Wt(t,e,n){return Z(t,e,n,X)}function Ut(t,e,n){return Z(t,e,n,mt)}function xt(t,e){return Y(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Vt(t){return xt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e){t.value=e??""}function Zt(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const S=new Map;let j=0;function wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function $t(t,e){const n={stylesheet:_t(e),rules:{}};return S.set(t,n),n}function vt(t,e,n,i,r,c,s,u=0){const l=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=l){const E=e+(n-e)*c(m);o+=m*100+`%{${s(E,1-E)}}
`}const a=o+`100% {${s(n,1-n)}}
}`,f=`__svelte_${wt(a)}_${u}`,_=U(t),{stylesheet:h,rules:d}=S.get(_)||$t(_,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${f} ${i}ms linear ${r}ms 1 both`,j+=1,f}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),j-=r,j||Et())}function Et(){P(()=>{j||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),S.clear())})}let B;function $(t){B=t}const w=[],H=[],N=[],I=[],kt=Promise.resolve();let M=!1;function Nt(){M||(M=!0,kt.then(tt))}function C(t){N.push(t)}const D=new Set;let k=0;function tt(){const t=B;do{for(;k<w.length;){const e=w[k];k++,$(e),At(e.$$)}for($(null),w.length=0,k=0;H.length;)H.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];D.has(n)||(D.add(n),n())}N.length=0}while(w.length);for(;I.length;)I.pop()();M=!1,D.clear(),$(t)}function At(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}let b;function St(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function G(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const A=new Set;let p;function te(){p={r:0,c:[],p}}function ee(){p.r||v(p.c),p=p.p}function jt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),p.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ct={duration:0};function ie(t,e,n){let i=e(t,n),r=!1,c,s,u=0;function l(){c&&F(t,c)}function o(){const{delay:f=0,duration:_=300,easing:h=et,tick:d=g,css:x}=i||Ct;x&&(c=vt(t,0,1,_,f,h,x,u++)),d(0,1);const m=st()+f,E=m+_;s&&s.abort(),r=!0,C(()=>G(t,!0,"start")),s=lt(T=>{if(r){if(T>=E)return d(1,0),G(t,!0,"end"),l(),r=!1;if(T>=m){const q=h((T-m)/_);d(q,1-q)}}return r})}let a=!1;return{start(){a||(a=!0,F(t),L(i)?(i=i(),St().then(o)):o())},invalidate(){a=!1},end(){r&&(l(),r=!1)}}}const re=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function se(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=e[c];if(u){for(const l in s)l in u||(i[l]=1);for(const l in u)r[l]||(n[l]=u[l],r[l]=1);t[c]=u}else for(const l in s)r[l]=1}for(const s in i)s in n||(n[s]=void 0);return n}function le(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||C(()=>{const s=t.$$.on_mount.map(J).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),c.forEach(C)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),Nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,i,r,c,s,u=[-1]){const l=B;$(t);const o=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:z(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(f,_,...h)=>{const d=h.length?h[0]:_;return o.ctx&&r(o.ctx[f],o.ctx[f]=d)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](d),a&&Dt(t,f)),_}):[],o.update(),a=!0,v(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ot();const f=yt(e.target);o.fragment&&o.fragment.l(f),f.forEach(V)}else o.fragment&&o.fragment.c();e.intro&&jt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),ct(),tt()}$(l)}class ue{$destroy(){Tt(this,1),this.$destroy=g}$on(e,n){if(!L(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,qt as B,Rt as C,jt as D,ne as E,ee as F,C as G,ie as H,te as I,et as J,le as K,oe as L,Ot as M,Tt as N,zt as O,mt as P,Ut as Q,nt as R,ue as S,Kt as T,se as U,It as a,yt as b,Wt as c,xt as d,X as e,Vt as f,V as g,pt as h,ce as i,Ft as j,ht as k,Jt as l,re as m,g as n,H as o,Qt as p,Ht as q,v as r,Mt as s,R as t,Gt as u,Xt as v,Yt as w,Lt as x,Pt as y,Zt as z};