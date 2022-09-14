!function(){"use strict";function t(t,n){return{x:t||0,y:n||0}}const n=(t,n)=>(t.x=n.x,t.y=n.y,t),e=(t,n,e)=>(t.x=n,t.y=e,t),o=(t,n,e)=>(t.x=n.x+e.x,t.y=n.y+e.y,t),r=(t,n,e)=>(t.x=n.x-e.x,t.y=n.y-e.y,t),c=(t,n)=>t.x*n.x+t.y*n.y,s=(t,n,e)=>(t.x=n.x*e,t.y=n.y*e,t),i=(t,n)=>{const e=t.x-n.x,o=t.y-n.y;return Math.sqrt(e*e+o*o)},a=t=>{const n=t.x,e=t.y;return Math.sqrt(n*n+e*e)},u=(t,n)=>{const e=n.x,o=n.y;let r=e*e+o*o;return r>0&&(r=1/Math.sqrt(r),t.x=n.x*r,t.y=n.y*r),t},l=(t,n)=>{t.t.x+=t.o.x*n*n*.001,t.t.y+=t.o.y*n*n*.001,e(t.o,0,0)},h=t(),f=t(),d=t(),p=t(),w=t(),g=t(),v=t(),M=t(),y=t(),b=t(),x=t(),m=t(),k=t(),S=t(),T=(i,l,T,O,A,L,C,R,D,I,N,P,H,E,F)=>{e(h,0,0),e(f,0,0),e(d,0,0),e(p,0,0),e(w,0,0),e(g,0,0),e(v,0,0),e(M,0,0),e(y,0,0),e(b,0,0),e(x,0,0),e(m,0,0),e(k,0,0),e(S,0,0),!H||0===H.x&&0===H.y?(r(h,i,C),u(h,h)):e(h,H.x,H.y),s(f,h,-1);const j=T+D,K=1+(O>I?O:I);r(d,i,l);const W=c(h,d);s(p,h,W),r(w,d,p),r(g,C,R);const $=c(f,g);s(v,f,$),r(M,g,v),s(x,p,(T-D)/j),s(m,v,K*D/j),o(y,x,m),o(y,y,w),s(k,p,K*T/j),s(S,v,(D-T)/j),o(b,k,S),o(b,b,M);const B=o(t(),y,b),G=t();s(G,h,c(B,h));const U=r(t(),B,G);u(U,U);let z=-c(B,U);z/=1/(T+D);const Y=Math.abs(z);if(Y>1e-4){const n=a(w),e=a(M),r=t(),c=t();s(r,U,Y<n*A?A:-n*L),s(c,U,Y<e*N?N:-e*P),o(y,y,r),o(b,b,c)}n(E,y),n(F,b)},O=t=>{const n=2*t.t.x-t.i.x,o=2*t.t.y-t.i.y;e(t.i,t.t.x,t.t.y),e(t.t,n,o)},A=(t,n,o,r,c,s,i,a,u)=>{const l=c-t,h=i/2+o/2-Math.abs(l),f=s-n,d=a/2+r/2-Math.abs(f);if(h<=0)return null;if(d<=0)return null;if(e(u.resolve,0,0),e(u.u,0,0),e(u.l,0,0),h<d){const n=l<0?-1:1;u.resolve.x=h*n,u.l.x=n,u.u.x=t+o/2*n,u.u.y=s}else{const t=f<0?-1:1;u.resolve.y=d*t,u.l.y=t,u.u.x=c,u.u.y=n+r/2*t}return u},L=t(),C=t();function R(t,n,e,o,c){r(L,n,t),r(C,o,e);const s=(-L.y*(t.x-e.x)+L.x*(t.y-e.y))/(-C.x*L.y+L.x*C.y),i=(C.x*(t.y-e.y)-C.y*(t.x-e.x))/(-C.x*L.y+L.x*C.y);return s>=0&&s<=1&&i>=0&&i<=1&&(c.x=t.x+i*L.x,c.y=t.y+i*L.y,!0)}const D=t(),I=t(),N=t(),P=t(),H=t(),E=t();const F=t(),j=t();function K(t,n,o,s){if(r(F,o,n),0===F.x&&0===F.y)throw new Error("ZeroLengthEdge");const a=((t.x-n.x)*F.x+(t.y-n.y)*F.y)/(F.x*F.x+F.y*F.y);s.h=a;const l=e(s.p,n.x+a*F.x,n.y+a*F.y);s.g=i(l,t);const h=((t,n,e)=>(t.y=e.x-n.x,t.x=n.y-e.y,u(t,t)))(s.v,n,o);r(j,t,l),s.M=c(h,j)}function W(t){return t&&"object"==typeof t&&"number"==typeof t.id}class ${constructor(t){this.m=t,this.k=$.hash(this.m),this.S=new Set}T(t){this.S.add(t)}O(t,n){const e=n.map(t=>t.A);this.m.every(t=>e.indexOf(t)>-1)&&!this.S.has(t)&&this.S.add(t)}L(t,n){const e=n.map(t=>t.A);this.m.every(t=>e.indexOf(t)>-1)&&this.S.has(t)&&this.S.delete(t)}static hash(t){return t.slice().sort().join("|")}}const B=33.3333333,G=new class{constructor(){this.C=1,this.S=new Map,this.R=new Map,this.D=new Set}I(t){const n={id:this.C++};return this.S.set(n,t),this.R.forEach(e=>e.O(n,t)),n}N(t){this.D.add(t)}P(t){return this.D.has(t)}H(){if(0===this.D.size)return;let t=!1;const n=e=>{e&&"object"==typeof e&&!W(e)&&Object.values(e).forEach(e=>{W(e)?(this.N(e),t=!0):n(e)})};this.D.forEach(t=>{if(this.D.delete(t),!this.S.has(t))return;const e=this.S.get(t);e.forEach(t=>{n(t)}),this.S.delete(t),this.R.forEach(n=>n.L(t,e))}),t&&this.H()}select(t){const n=$.hash(t);if(this.R.has(n))return this.R.get(n).S;const e=new $(t);return this.R.set(e.k,e),this.S.forEach((n,o)=>{let r=!0;for(let e=0;e<t.length;e++){const o=t[e];n.find(t=>t.A===o)||(r=!1)}r&&e.T(o)}),e.S}F(t){return this.select(t).values().next().value}data(t,n){const e=this.S.get(t);let o;for(let t=0;t<e.length;t++){const r=e[t];r.A===n&&(o=r)}return o}j(t){const n=this.F([t]);if(!n)return;return this.data(n,t)}};function U(){return G}function z(t,n,e){const o=e.getContext("2d"),r=window.devicePixelRatio||1;return e.style.width=t+"px",e.style.height=n+"px",e.width=Math.floor(t*r),e.height=Math.floor(n*r),o.scale(r,r),o.webkitImageSmoothingEnabled=!1,o.msImageSmoothingEnabled=!1,o.mozImageSmoothingEnabled=!1,o.imageSmoothingEnabled=!1,{width:t,height:n,K:e,W:o,$:r}}const Y=document.querySelector.bind(document),q=(document.querySelectorAll.bind(document),Y("#r")),Z=Y("#c"),J=Y("#u");if(!q||!Z||!J)throw new Error("Could not locate DOM!");function Q(t,n,e,o){return t.addEventListener(n,e,o),()=>{t.removeEventListener(n,e,o)}}const V="transparent",X="rgba(255,255,132,1)",_="rgba(255,255,132,0.5)",tt="rgba(40,40,40,1)",nt=45,et="Arial, sans-serif",ot="Courier, Courier New, monospace";function rt(n=0,e=0){return t(n,e)}function ct(t){const n=U().j("vp"),e=n.B;return t/n.G*e.width}function st(t,n){const e=U().j("vp"),{U:o}=e;return ct(t-("x"===n?o.target.x:o.target.y))}const it=t=>t/U().j("vp").B.width*100;function at(t){const e=U().j("vp");n(e.U.target,t)}function ut(){const t=U().j("vp"),{W:n}=t.B;n.save(),function(t){const{W:n}=t.B,{U:e}=t;n.scale(1,-1),n.translate(-ct(e.Y.x),-ct(e.Y.y))}(t),n.clearRect(0,0,t.B.K.width,t.B.K.height),n.restore()}function lt(t=tt){const n=U().j("vp"),{W:e}=n.B;e.fillStyle=t;const o=2*n.U.Y.x,r=n.q-2*n.U.Y.y;e.fillRect(st(n.U.target.x-n.U.Y.x,"x"),st(n.U.target.y-n.U.Y.y,"y"),ct(o),ct(-r))}function ht(t,n,e,r,c,s="transparent",i=et){const a=U().j("vp"),{U:u}=a,l=rt();return l.x=u.target.x-u.Y.x,l.y=u.target.y+u.Y.y,o(l,l,n),ft(t,l,e,r,c,s,i)}function ft(t,n,e,o,r,c="transparent",s=et){const i=U().j("vp"),{U:a}=i,{W:u}=i.B;u.save(),u.scale(1,-1);const{Z:l,font:h}=dt(t,o,s);let f=0,d=ct(-n.y+a.target.y);return u.font=h,t.split("\n").forEach((t,o)=>{const s=u.measureText(t).width+1,i=ct(l);0===o&&(d+=i);const a="center"===e?st(n.x,"x")-s/2:"left"===e?st(n.x,"x"):st(n.x,"x")-s;"transparent"!==c&&(u.fillStyle=c,u.fillRect(a,d,s,-i)),u.fillStyle=r,u.fillText(t,a,d),d+=i,f+=i}),u.restore(),it(f)}function dt(t,n,e=et){const o=U().j("vp"),{W:r}=o.B,c=o.height/n;r.save();const s=`${c}px/1.2 ${e}`;r.font=s;const i=r.measureText(t),a=1.2*(i.actualBoundingBoxAscent?i.actualBoundingBoxAscent+i.actualBoundingBoxDescent:c);r.restore();const u=t.split("\n");return{font:s,fontSize:c+"px",total:it(a*u.length),J:1.2,Z:it(a)}}function pt(){const t=window.innerWidth<window.innerHeight?window.innerWidth:.6*window.innerHeight,n=window.innerWidth<window.innerHeight?window.innerWidth/.6:window.innerHeight;return{A:"vp",ratio:.6,width:t,height:n,G:100,q:100/.6,B:z(t,n,Z),U:{Y:rt(50,50),mode:"center",target:rt(0,0)}}}function wt(){const t=pt(),n=U(),e=n.F(["vp"]);e&&n.N(e);q.style.width=t.width+"px";const o=n=>Math.floor(n/t.G*t.B.width);t.B.W.translate(o(t.U.Y.x),o(t.U.Y.y)),t.B.W.scale(1,-1);const r=[t];n.I(r)}function gt(t,n,e,o){const r=n.x-e.x,c=n.y-e.y,s=Math.sin(o),i=Math.cos(o);return t.x=r*i-c*s+e.x,t.y=r*s+c*i+e.y,t}function vt(){return{g:0,M:0,h:0,p:t(),v:t()}}window.addEventListener("resize",wt);const Mt=t(),yt=t(),bt=t();function xt(t,n,e){return r(Mt,n.t,n.i),u(yt,Mt),s(bt,yt,e),o(t,bt,n.t),t}function mt(t){return Math.atan2(t.y,t.x)}const kt=new URLSearchParams(window.location.search);function St(t,n){const{width:e,height:r}=function(t){return{width:t.G,height:Math.min(.75*t.G,.75*t.q)}}(n),c=t.width/2,i=t.height/2,a=n.U.target,u=rt(Math.cos(t.V),Math.sin(t.V)),l=s(rt(),u,Math.min(e/2,r/2)),h=o(rt(),a,l),f=rt(h.x,h.y-c),d=rt(h.x,h.y+c);return gt(f,f,h,t.V),gt(d,d,h,t.V),{x:h.x,y:h.y,angle:t.V,X:c,_:i,tt:f,p1:d}}function Tt(t,e,c,i){l(t,i);const{tt:a,p1:u,_:h}=St(e,c),f={nt:a,et:u},d=t,p=h,w=vt();K(d.t,f.nt,f.et,w);const g=n(rt(),w.p),v=r(rt(),e.ot.t,e.ot.i),M=r(rt(),g,v),y=2+p;if(w.h>=0&&w.h<=1&&w.g<=y){const t=1,n=1e7,e=.5,c=.87,i=.87,a=rt(),u=rt();T(d.t,d.i,t,e,c,i,g,M,n,e,c,i,w.v,a,u),r(d.i,d.t,a);const l=Math.abs(y-w.g);((t,...n)=>{for(let e=0;e<n.length;e++){const r=n[e];o(r,r,t)}})(s(rt(),w.v,w.M>0?l:-l),d.t,d.i)}O(t)}const Ot=kt.get("seed"),At=Ot?Number(Ot):Date.now(),Lt=(Rt=61^(Rt=At)^Rt>>>16,Rt+=Rt<<3,Rt=Math.imul(Rt,668265261),Ct=(Rt^=Rt>>>15)>>>0,t=>(Ct=Ct+1831565813|0,(((t=(t=Math.imul(Ct^Ct>>>15,1|Ct))+Math.imul(t^t>>>7,61|t)^t)^t>>>14)>>>0)/2**32));var Ct,Rt;const Dt=()=>Lt();function It(){const t=U().j("vp"),{U:n,B:{W:e}}=t;e.fillStyle=tt,e.fillRect(st(n.target.x-n.Y.x,"x"),st(n.target.y+n.Y.y,"y"),ct(2*n.Y.x),ct(2*-n.Y.y))}let Nt;function Pt(){const t=U().j("vp"),{U:n}=t,e=2*n.Y.x,o=2*n.Y.y;if(!Nt){const n=document.createElement("canvas"),r=n.getContext("2d");Nt=z(ct(2*t.U.Y.x),ct(2*t.U.Y.y),n);const c=.1,s=.3,i=2*t.U.Y.y*8;r.fillStyle=_;let a=0;for(;a<i;){const t=Dt()*e,n=Dt()*o,i=Dt()*(s-c)+c;r.beginPath(),r.arc(ct(t),ct(n),ct(i),0,2*Math.PI,!1),r.fill(),a++}}const r=n.target.x/e,c=n.target.y/o,s=Math.floor(r),i=Math.floor(c);let a=n.target.x%e/e,u=n.target.y%o/o;a=n.target.x<0?1-Math.abs(a):a,u=n.target.y<0?1-Math.abs(u):u;const l=t.B.W;It(),l.drawImage(Nt.K,0,0,ct(e),ct(o),st(s*e,"x"),st(i*o,"y"),ct(e),ct(o)),a<.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st((s-1)*e,"x"),st(i*o,"y"),ct(e),ct(o)),a>=.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st((s+1)*e,"x"),st(i*o,"y"),ct(e),ct(o)),u<.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st(s*e,"x"),st((i-1)*o,"y"),ct(e),ct(o)),u>=.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st(s*e,"x"),st((i+1)*o,"y"),ct(e),ct(o)),a<.5&&u<.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st((s-1)*e,"x"),st((i-1)*o,"y"),ct(e),ct(o)),a>=.5&&u<.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st((s+1)*e,"x"),st((i-1)*o,"y"),ct(e),ct(o)),a<.5&&u>=.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st((s-1)*e,"x"),st((i+1)*o,"y"),ct(e),ct(o)),a>=.5&&u>=.5&&l.drawImage(Nt.K,0,0,ct(e),ct(o),st((s+1)*e,"x"),st((i+1)*o,"y"),ct(e),ct(o))}function Ht(t=0,e=rt(0,0)){const o=U().j("vp");return{V:t,width:o.G/2,height:o.G/16,ot:{o:rt(),t:n(rt(),e),i:n(rt(),e)}}}function Et(t=rt(),e=0,o=rt()){const c=U().j("vp"),i={t:n(rt(),t),i:n(rt(),t),o:rt(),width:c.G/32,height:c.G/32},a=s(rt(),o,e);return r(i.i,i.t,a),i}function Ft(t){return{ot:{t:n(rt(),t),i:n(rt(),t),o:rt()},rt:rt(10,10)}}function jt(t,n){return{nt:t,et:n,ct:!1,st:!1}}function Kt(t,n,e=!1){return{nt:t,et:n,ct:!0,st:e}}function Wt(t,n=!0,e=!0){const o=[];for(let n=0;n<t.length;n++){const r=n>0?t[n-1]:null,c=t[n];r&&o.push(e?jt(c,r):jt(r,c))}return n&&o.push(e?jt(t[0],t[t.length-1]):jt(t[t.length-1],t[0])),o}function $t(t,e,o=!1,r=!0){return{ot:{t:n(rt(),t),i:n(rt(),t),o:rt()},rt:rt(10,10),it:n(rt(),e),at:o,ut:r}}const Bt={lt:0,ht:null,state:"boot",level:-1,ft:null,dt:[],wt:null,gt:!1,vt:[function(){return{Mt:Et(rt(20,0),.5,rt(-1,0)),yt:Ht(Math.PI),target:Ft(rt(40,0)),bt:Wt([rt(-60,60),rt(60,60),rt(60,-60),rt(-60,-60)]),xt:[],kt:"Signal, meet target"}},function(){return{Mt:Et(rt(20,0),.5,rt(-1,0)),yt:Ht(Math.PI),target:Ft(rt(40,-40)),bt:Wt([rt(-60,60),rt(60,60),rt(60,-60),rt(-60,-60)]),xt:[],kt:"Sometimes you need to rotate"}},function(){return{Mt:Et(rt(20,0),.2,rt(-1,0)),yt:Ht(Math.PI),target:Ft(rt(80,-40)),bt:Wt([rt(-60,60),rt(100,60),rt(100,-60),rt(-60,-60)]),xt:[],kt:"Offscreen targets are tracked"}},function(){return{Mt:Et(rt(20,0),.2,rt(-1,0)),yt:Ht(Math.PI),target:Ft(rt(80,-180)),bt:Wt([rt(-60,60),rt(100,60),rt(100,-200),rt(60,-200),rt(60,-60),rt(-60,-60)]),xt:[],kt:"Down the well..."}},function(){return{Mt:Et(rt(0,-10),.5,rt(0,1)),yt:Ht(Math.PI),target:Ft(rt(30,10)),bt:[jt(rt(20,15),rt(-20,15)),Kt(rt(-20,5),rt(20,5)),...Wt([rt(-60,60),rt(60,60),rt(60,-60),rt(-60,-60)])],xt:[],kt:"One way is the only way"}},function(){const t=Ht();return{Mt:Et(rt(-30,-40),.5,rt(0,1)),yt:t,target:Ft(rt(30,-40)),bt:Wt([rt(-60,60),rt(60,60),rt(60,-60),rt(-60,-60)]),xt:[$t(rt(-20,10),rt(1,-1))],kt:"Arrows, they shoot"}},function(){const t=Ht(Math.PI);return{Mt:Et(rt(-30,-40),.5,rt(0,1)),yt:t,target:Ft(rt(510,0)),bt:Wt([rt(-60,60),rt(60,60),rt(60,5),rt(500,10),rt(500,20),rt(520,20),rt(520,-20),rt(500,-20),rt(500,-10),rt(60,-5),rt(60,-60),rt(-60,-60)]),xt:[$t(rt(50,0),rt(1,0),!0)],kt:"Some arrows take you with"}},function(){const t=Ht();return{Mt:Et(rt(-21,20),.5,rt(1,0)),yt:t,target:Ft(rt(0,0)),bt:Wt([rt(-60,60),rt(60,60),rt(60,-60),rt(-60,-60)]),xt:[$t(rt(-20,20),rt(1,0)),$t(rt(20,20),rt(0,-1)),$t(rt(20,-20),rt(-1,0)),$t(rt(-20,-20),rt(0,1))],kt:"Tetherball"}},function(){const t=Ht(Math.PI,rt(30,0));return{Mt:Et(rt(30,0),.5,rt(0,1)),yt:t,target:Ft(rt(135,0)),bt:Wt([rt(-25,25),rt(25,25),rt(25,20),rt(55,30),rt(60,10),rt(65,30),rt(70,9),rt(75,30),rt(80,8),rt(85,30),rt(90,7),rt(95,30),rt(100,6),rt(105,30),rt(110,5),rt(115,30),rt(120,4),rt(125,30),rt(145,25),rt(145,-25),rt(125,-25),rt(120,-4),rt(115,-30),rt(110,-5),rt(105,-30),rt(100,-6),rt(95,-30),rt(90,-7),rt(85,-30),rt(80,-8),rt(75,-30),rt(70,-9),rt(65,-30),rt(60,-10),rt(55,-30),rt(50,-20),rt(25,-25),rt(-25,-25)]),xt:[],kt:"No death spikes here"}},function(){const t=Ht(Math.PI,rt(0,0)),n=Et(rt(-30,0),5,rt(1,0)),e=Ft(rt(5e3,-10));return{Mt:n,yt:t,target:e,bt:Wt([rt(-60,60),rt(5010,60),rt(5010,-110),rt(-60,-110)]),xt:[...Array.from(new Array(250)).map((t,n)=>$t(rt(20*n,-10),rt(1,0),!0,!1))],kt:"Chase! Shift or btn to boost!"}}]};function Gt(t){const n=Bt;n.ht=n.state,n.state=t,n.lt=0}function Ut(t){return t*B/1e3}function zt(t){return t.toFixed(3)}function Yt(t){const n=Bt;n.wt=t,n.gt=!1}function qt(){Bt.gt=!0}function Zt(){const t=Bt;t.wt=null,t.gt=!1}function Jt(t,n,e,o){if(!e.ct)return;const r=rt(),c=R(xt(rt(),t,n),t.i,e.nt,e.et,r),s=vt();K(t.i,e.nt,e.et,s),c&&s.M<0&&(e.ct=!1,o.wt&&e.st&&qt())}function Qt(t,n,e){if(e.ct)return;const c=rt(),i=R(xt(rt(),t,n),t.i,e.nt,e.et,c),a=vt();if(K(t.i,e.nt,e.et,a),i&&a.M>0){l=t,h=n,f={t:e.nt,i:e.nt,o:rt()},d={t:e.et,i:e.et,o:rt()},r(N,l.t,l.i),u(P,N),s(H,P,h),o(E,H,l.t),R(E,l.i,f.t,d.t,D)&&(r(I,E,D),r(l.t,l.t,I),r(l.i,l.i,I));const i=1,p=1e7,w=1,g=0,v=0,M=rt(),y=rt();T(t.t,t.i,i,w,g,v,c,c,p,w,g,v,a.v,M,y),r(t.i,t.t,M)}var l,h,f,d}const Vt={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowLeft:!1,ArrowRight:!1,ShiftLeft:!1,ShiftRight:!1,Enter:!1};function Xt(){return Vt}function _t(t,n,e,o){const r=U().j("vp"),c=r.U.target,{Y:s}=r.U,a=[[rt(c.x-s.x,c.y+s.y),rt(c.x+s.x,c.y+s.y),vt()],[rt(c.x+s.x,c.y+s.y),rt(c.x+s.x,c.y-s.y),vt()],[rt(c.x+s.x,c.y-s.y),rt(c.x-s.x,c.y-s.y),vt()],[rt(c.x-s.x,c.y-s.y),rt(c.x-s.x,c.y+s.y),vt()]];for(let n=0;n<a.length;n++){const[e,o,r]=a[n];K(t,e,o,r)}const[[u,l,h],[f,d,p],[w,g,v],[M,y,b]]=a;let x,m,k;const S=dt(o,nt);if(h.M>0&&p.M>0)x=rt(p.p.x,h.p.y),m=i(x,t),k="right";else if(p.M>0&&v.M>0)x=rt(p.p.x,v.p.y+S.Z),m=i(x,t),k="right";else if(v.M>0&&b.M>0)x=rt(b.p.x,v.p.y+S.Z),m=i(x,t),k="left";else if(b.M>0&&h.M>0)x=rt(b.p.x,h.p.y),m=i(x,t),k="left";else if(h.M>0)x=rt(Math.min(Math.max(h.p.x,u.x),l.x),h.p.y),m=h.g,k="center";else if(p.M>0)x=rt(p.p.x,Math.max(Math.min(f.y,p.p.y),d.y)),m=p.g,k="right";else if(v.M>0)x=rt(Math.max(Math.min(w.x,v.p.x),g.x),v.p.y+S.Z),m=v.g,k="center";else{if(!(b.M>0))return;x=rt(b.p.x,Math.min(Math.max(M.y,b.p.y),y.y)),m=b.g,k="left"}if(m<.7*((n.x/2+n.y/2)/2))return;const T=r.B.W;T.save(),ft(o,x,k,nt,tt,X),T.restore()}Q(window,"keydown",t=>{Vt[t.code]=!0}),Q(window,"keyup",t=>{Vt[t.code]=!1});let tn=0,nn=[];const en=()=>{tn=0,nn.length=0},on=U(),rn=on.I([{A:"fps",St:60}]),cn=t=>{if(!kt.has("debug"))return;ht(t.j("fps").St.toFixed(2),rt(100,0),"right",nt,X)};function sn(t){on.data(rn,"fps").St=t}function an(n){const e=U().j("vp"),o=e.B.W,{x:r,y:c}=n.ot.t,s=n.rt.x/2,i=n.rt.x/4,a=e.G/64,u=n.rt.y/a,l=s*Math.SQRT2,h=a*Math.SQRT2/2;if(!A(e.U.target.x,e.U.target.y,3*e.U.Y.x,3*e.U.Y.y,r,2*n.rt.x,c,2*n.rt.y,{resolve:t(),u:t(),l:t()}))return;o.save(),o.fillStyle=X,o.strokeStyle=X;const f=mt(n.it);o.translate(st(r,"x"),st(c,"y")),o.rotate(f-Math.PI/2),un(o,u,a,l,0,0-i+h,Math.PI/4),un(o,u,a,l,0,0+i-h,-Math.PI/4),o.restore()}function un(t,n,e,o,r,c,s){for(let i=0;i<n;i+=2){t.save(),t.translate(ct(c),ct(r+i*e)),t.rotate(s);(i<Math.floor(n/4)?t.strokeRect:t.fillRect).call(t,ct(0-o/2),ct(0),ct(o),ct(e)),t.restore()}}function ln(t,o,c){const s=c.ot.t,i=(c.rt.y,c.rt.x/2),a=rt(s.x,s.y+i),u=rt(s.x,s.y-i),l=mt(c.it),h=rt(s.x-i,s.y-i),f=rt(s.x+i,s.y-i),d=rt(s.x+i,s.y+i),p=rt(s.x-i,s.y+i);gt(a,a,s,l),gt(u,u,s,l),gt(h,h,s,l),gt(f,f,s,l),gt(d,d,s,l),gt(p,p,s,l);const w=[[a,u],[h,f],[d,p]];let g=!1;for(let t=0;t<w.length;t++){const n=w[t],e=rt(),r=R(o.i,o.t,n[0],n[1],e),c=vt();if(K(o.i,n[0],n[1],c),r&&c.M<0){g=!0;break}}if(g){if(n(o.t,c.ot.t),n(o.i,o.t),c.ut)e(o.o,5*c.it.x,5*c.it.y);else{const t=rt(8*c.it.x,8*c.it.y);r(o.i,o.t,t)}c.at&&Yt(o)}}const hn="--ctrlDisplay";function fn(t,n){Y(":root").style.setProperty(t,n)}const dn={Tt:()=>{},Ot:()=>{}},pn={At:!1,move:t(),rotate:rt()};function wn(){const t=Y("#btn-boost"),n=Y("#btn-reset"),e=Y("#stick-move"),o=Y("#stick-move .ui-nub"),r=Y("#stick-rotate"),c=Y("#stick-rotate .ui-nub"),s=vn(e,o,pn.move),i=vn(r,c,pn.rotate),a=function(t,n){const e=Q(t,"mouseup",t=>{t.preventDefault(),n()}),o=Q(t,"touchstart",t=>{t.preventDefault()}),r=Q(t,"touchend",t=>{n()});return()=>{e(),o(),r()}}(n,()=>{dn.Tt()}),u=Q(t,"mousedown",()=>{pn.At=!0}),l=Q(t,"mouseup",()=>{pn.At=!1}),h=Q(t,"touchstart",()=>{pn.At=!0}),f=Q(t,"touchend",()=>{pn.At=!1});dn.Ot=()=>{u(),l(),h(),f(),a(),s(),i()}}function gn(){fn(hn,"none")}function vn(n,e,o){const r=t(),c=t(),s=Q(n,"touchstart",t=>{t.preventDefault();const e=t.targetTouches[0];r.x=e.screenX,r.y=e.screenY;const o=n.getBoundingClientRect();c.x=o.width,c.y=o.height}),i=Q(n,"touchmove",t=>{t.preventDefault();const n=t.targetTouches[0],s=n.screenX-r.x,i=-1*(n.screenY-r.y);o.x=s/(c.x/2),o.y=i/(c.y/2),u(o,e)}),a=Q(n,"touchend",t=>{t.preventDefault(),r.x=r.y=0,c.x=c.y=0,o.x=o.y=0,u(o,e)});function u(t,n){const e=(t.x+1)/2*100,o=-(t.y-1)/2*100,r=Math.max(Math.min(e,100),0),c=Math.max(Math.min(o,100),0);n.style.setProperty("--leftPct",r+"%"),n.style.setProperty("--topPct",c+"%")}return()=>{s(),i(),a(),r.x=r.y=0,c.x=c.y=0,o.x=o.y=0,u(o,e)}}function Mn(){}!async function(){await async function(){}();const t=U();wt(),function(){const t=ct(U().j("vp").U.Y.y),n=2*t,{fontSize:e}=dt("M",nt,et);fn("--yellowRGBA",X),fn("--blackRGBA",tt),fn("--bodyFontSize",e),fn("--ctrlPanelHeight",t+"px"),fn("--ctrlPanelTop",n+"px")}();const c=[],i=[];c.push(t=>{ut()});const h=t.j("vp");c.push((function(t,n){switch(Bt.state){case"boot":{Pt();let t=10;t-=ft("SIGNAL DECAY",rt(0,t),"center",20,X,V,ot),t-=5,ft("a js13k 2020 entry",rt(0,t),"center",nt,X),t-=20,ft("TAP OR CLICK TO START",rt(0,t),"center",nt,X,V,ot),lt();break}case"tutorial":{It();let t=50;const n=-45,e=matchMedia("(hover: none)").matches;t-=5,t-=ft(["Be the best signalmancer in the galaxy!","","Help messages from deep space colonies bounce","their way home as quickly as possible.","","Only you can prevent 404s."].join("\n"),rt(n,t),"left",nt,X),e||(t-=5,t-=ft("CONTROLS (KEYBOARD)",rt(n,t),"left",nt,X,V,ot),t-=5,t-=ft(["WASD: move","Hold any SHIFT to boost","","Arrow Left / Arrow Right: rotate the Deflector"].join("\n"),rt(n,t),"left",nt,X)),e&&(t-=5,t-=ft("CONTROLS (TOUCH)",rt(n,t),"left",nt,X,V,ot),t-=5,t-=ft(["Left Stick:  move","Move stick and hold BOOST to boost","","Right Stick: rotate the Deflector"].join("\n"),rt(n,t),"left",nt,X)),t-=5,t-=ft("TAP OR CLICK TO CONTINUE",rt(0,t),"center",nt,X,V,ot),lt();break}case"level":{if(!Bt.ft)break;const{target:t,yt:n,Mt:e,bt:o,xt:c}=Bt.ft;Pt(),function(t,n){const e=U().j("vp").B.W,{x:o,y:r}=t.ot.t,c=t.rt.x/2,s=t.rt.y/2;e.save(),e.fillStyle=X,e.translate(st(o,"x"),st(r,"y")),e.fillRect(0-ct(c),0-ct(s),ct(t.rt.x),ct(t.rt.y)),e.restore()}(t),function(t){const n=U().j("vp"),e=n.B.W,{x:o,y:r,angle:c,_:s,X:i,tt:a,p1:u}=St(t,n);e.save(),e.fillStyle=X,e.translate(st(o,"x"),st(r,"y")),e.rotate(Math.PI/2+c),e.fillRect(0-ct(i),0-ct(s),ct(t.width),ct(t.height)),e.restore()}(n),function(t,n){const e=U().j("vp"),o=e.B.W,{t:c,i:i,width:l,height:h}=t,f=l/2,d=h/2,p=st(i.x+1*(c.x-i.x),"x"),w=st(i.y+1*(c.y-i.y),"y"),g=ct(l),v=ct(h);o.save();{const t=r(rt(),c,i),n=u(t,t),a=s(n,n,10*e.G);o.lineWidth=ct(1),o.strokeStyle=_,o.setLineDash([ct(1),ct(3)]),o.beginPath(),o.moveTo(p,w),o.lineTo(p+ct(a.x),w+ct(a.y)),o.stroke(),o.setLineDash([])}{const t=f/8,n=r(rt(),c,i),e=a(n)/t,l=u(n,n);o.fillStyle="rgba(255,255,132,0.1)";const h=rt();for(let n=0;n<e;n++)s(h,l,n*t),o.fillRect(p-ct(h.x)-ct(f),w-ct(h.y)-ct(d),g,v)}o.fillStyle=X,o.fillRect(p-ct(f),w-ct(d),g,v),o.restore()}(e),function(t){for(let n=0;n<t.length;n++)an(t[n])}(c),function(t){const{B:{W:n}}=U().j("vp");n.save(),n.strokeStyle=X,n.lineWidth=ct(1);for(let e=0;e<t.length;e++){const o=t[e];o.ct?n.setLineDash([ct(1),ct(2)]):n.setLineDash([]),n.beginPath(),n.moveTo(st(o.nt.x,"x"),st(o.nt.y,"y")),n.lineTo(st(o.et.x,"x"),st(o.et.y,"y")),n.closePath(),n.stroke()}n.restore()}(o),lt(),function(t,n){const e=U().j("vp");if(!t.ft)return;ht(zt(Ut(t.lt)),rt(e.G/2,-1),"center",nt,X),ht(`MISSION ${t.level+1}: ${t.ft.kt.toUpperCase()}`,rt(e.U.Y.x,2*-e.U.Y.y),"center",nt,X,V,ot),_t(t.ft.target.ot.t,t.ft.target.rt,0,"TARGET"),_t(t.ft.Mt.t,rt(t.ft.Mt.width,t.ft.Mt.height),0,"SIGNAL")}(Bt);break}case"win":{It();const t=zt(Ut(Bt.dt[Bt.level]));let n=10;n-=ft("MISSION SUCCESS",rt(0,n),"center",20,X,V,ot),n-=5,n-=ft(t+"s",rt(0,n),"center",nt,X,V,et),n-=10,n-=ft("Finding the next signal in\nneed of assistance...",rt(0,n),"center",nt,X,V,et),lt();break}case"nextlevel":break;case"thanks":{It();let t=45;t-=ft("ALL SIGNALS MADE IT,\nTHANKS TO YOU!",rt(0,t),"center",nt,X,V,ot);let n=0;t-=5;for(let e=0;e<Bt.dt.length;e++){const o=Bt.dt[e];n+=o,ft(`MISSION ${e+1}:`,rt(-45,t),"left",nt,X,V,ot),t-=ft(zt(Ut(o))+"s:",rt(45,t),"right",nt,X,V,ot)}const e=zt(Ut(n));t-=5,t-=ft(`TOTAL: ${e}s`,rt(45,t),"right",nt,X,V,ot),lt(),0===Bt.lt&&(fn("--thanksDisplay","block"),function(t){const n=`I prevented Signal Decay in ${t}s!`,e=new URLSearchParams;e.append("text",n),e.append("url","https://kirbysayshi.com/js13k-2020"),e.append("hashtags",["js13k"].join(",")),Y("#btn-tweet").setAttribute("href","https://twitter.com/intent/tweet?"+e.toString())}(e));break}}})),i.push((t,r)=>{switch(Bt.state){case"boot":if(0===Bt.lt){gn();const n=Q(t.j("vp").B.K,"click",()=>{n(),en(),Gt("tutorial")})}break;case"tutorial":if(0===Bt.lt){gn();const n=Q(t.j("vp").B.K,"click",()=>{n(),en(),Gt("nextlevel")})}break;case"level":{const t=pn,c=Xt();if(0===Bt.lt){const t=Bt.vt[Bt.level];if(!t)return Gt("thanks");Bt.ft=t(),fn(hn,"flex"),wn(),i=()=>{Bt.ft=t(),Zt()},dn.Tt=i}if(c.Enter){const t=Bt.vt[Bt.level];Bt.ft=t(),Zt()}if(!Bt.ft)break;const{target:s,yt:a,Mt:u,xt:f,bt:d}=Bt.ft;c.ArrowLeft&&(a.V+=.1),c.ArrowRight&&function(t){t.V-=.1}(a);const p=0!==t.rotate.x&&0!==t.rotate.y,w=mt(t.rotate);p&&function(t,n){t.V=n}(a,w);const g=rt();let v=0;c.KeyW&&c.KeyD?v=Math.PI/4:c.KeyW&&c.KeyA?v=Math.PI*(3/4):c.KeyS&&c.KeyD?v=-Math.PI/4:c.KeyS&&c.KeyA?v=-Math.PI*(3/4):c.KeyW?v=Math.PI/2:c.KeyA?v=Math.PI:c.KeyS?v=-Math.PI/2:c.KeyD&&(v=0);const M=0!==t.move.x&&0!==t.move.y,y=mt(t.move),b=c.ShiftLeft||c.ShiftRight||t.At?rt(1,0):rt(.2,0);M&&(v=y);const x=gt(rt(),b,g,v);M&&e(x,x.x*Math.abs(t.move.x),x.y*Math.abs(t.move.y));if((0!==v||0===v&&c.KeyD||M)&&!Bt.wt&&function(t,n){o(t.ot.o,t.ot.o,n)}(a,x),((t,n)=>{const e=(t.i.x-t.t.x)*n,o=(t.i.y-t.t.y)*n;t.i.x=t.t.x+e,t.i.y=t.t.y+o})(a.ot,.8),l(a.ot,r),Tt(u,a,h,r),function(t,n,e){for(let t=0;t<e.length;t++)ln(0,n,e[t])}(0,u,f),function(t,n,e){for(let o=0;o<t.length;o++){const r=t[o];Jt(n,n.width/2,r,e),Qt(n,n.width/2,r)}}(d,u,Bt),O(a.ot),Bt.wt&&(n(a.ot.t,Bt.wt.t),n(a.ot.i,Bt.wt.t)),at(a.ot.t),Bt.gt&&Zt(),function(t,n){return!!A(t.ot.t.x,t.ot.t.y,t.rt.x,t.rt.y,n.t.x,n.t.y,n.width,n.height,{resolve:rt(),u:rt(),l:rt()})}(s,u)){const t=Bt;return t.dt[t.level]=t.lt,t.ft=null,Zt(),dn.Ot(),at(rt(0,0)),Gt("win")}break}case"win":{at(rt(0,0));const t=3e3;0===Bt.lt&&(gn(),c=()=>Gt("nextlevel"),s=t,nn.push({id:++tn,action:c,delay:s,Lt:0}));break}case"nextlevel":return Bt.level+=1,Gt("level");case"thanks":gn(),at(rt(0,0))}var c,s,i;Bt.lt+=1}),c.push(cn);const{stop:f}=(({Ct:t,Rt:n,Dt:e,update:o,It:r=10,Nt:c=(()=>{}),Pt:s=(()=>{})})=>{const i=window.performance,a=t,u=n,l=i.now.bind(i),h=window.requestAnimationFrame.bind(window);let f=0,d=null,p=l(),w=l(),g=0,v=60;return function t(){const n=l();d=h(t),f+=n-p,p=n;let i=f-a>=0,M=Math.floor(f/u);if(M>=r)return f=0,p=l(),void c();for(;M-- >0;)f-=u,o(u);i&&e(f/a),g+=1,w+1e3<=n&&(v=.25*g+.75*v,g=0,w=n,s(v))}(),{stop:()=>{d&&cancelAnimationFrame(d)}}})({Ct:16.6666666,Rt:B,update:n=>{((t=1)=>{nn.slice().forEach((n,e)=>{n.Lt+=t,n.Lt>=n.delay&&(nn.splice(e,1),n.action(n.delay,n.Lt))})})(n),i.forEach(e=>e(t,n)),t.H()},Dt:n=>{c.forEach(e=>e(t,n))},Nt:Mn,Pt:sn})}()}();