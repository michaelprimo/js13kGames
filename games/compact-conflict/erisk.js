function n(n,t){return Math.floor(n+Math.random()*(t-n))}function t(n,t){for(var r=[],i=n;t>i;i++)r.push(i);return r}function r(n){return n}function i(n,t){if(!t||"object"!=typeof n)return n;var r=void 0!==n.length?[]:{};return f(n,function(n,u){r[u]=i(n,t-1)}),r}function u(n,t,r){return t>n?t:n>r?r:n}function e(){return Date.now()}function o(n,t){return n.replace(/X/g,t)}function c(n,t){return[].slice.call(n).map(t)}function f(n,t){for(var r in n)t(n[r],r)}function a(n,r,i,u,e){c(t(n,i),function(n){c(t(r,u),e.bind(0,n))})}function s(n){return Tr.querySelector("#"+n)}function d(n,t,r){var i={c:"class",s:"style",i:"id"},u="<"+n+" ";for(var e in t)u+=(i[e]||e)+"='"+t[e]+"'";return u+=">"+(r||"")+"</"+n+">"}function l(n,t){n.style.transform=t,n.style["-webkit-transform"]=t}function v(n,t){n.onclick=t,n.addEventListener("touchstart",function(n){return n.preventDefault(),t(n)})}function p(n,t){s(n).style.display=t?"block":"none"}function h(n,t){t=t||r;var i,u=t(n[0]);return c(n,function(n){t(n)<=u&&(i=n,u=t(n))}),i}function m(n,t){return t=t||r,h(n,function(n){return-t(n)})}function b(n,t){var r=0;return c(n,function(n){r+=t(n)}),r}function g(n,t){return n&&n.indexOf(t)>=0}function y(n,t){var r=[];return c(n,function(i,u){c(n.slice(u+1),function(n){r.push(t(i,n))})}),r}function T(t){return c(t,function(r,i){var u=n(i,t.length),e=t[u];t[u]=t[i],t[i]=e}),t}function w(r){function i(t){var r=n(0,4);return r%2?t.w--:t.h--,2==r&&t.t++,3==r&&t.l++,t.w*t.h<9}function u(n){var t=!1;return a(n.l,n.t,n.l+n.w,n.t+n.h,function(n,r){t=t||s[n][r]}),t}function e(n,r){var i=r.l,u=r.t,e=r.w,f=r.h,d=[];c(t(0,e),function(n){d[n]=o(i+n,u),d[e+f+n]=o(i+e-n,u+f)}),c(t(0,f),function(n){d[e+n]=o(i+e,u+n),d[e+f+e+n]=o(i,u+f-n)});var l={i:n,p:d,d:[]};return a(r.l,r.t,r.l+r.w,r.t+r.h,function(n,t){s[n][t]=l}),l}function o(n,t){var r=6.28*br(n*n*t*t*600+357*m),i=br(n*t*600+211*m)/2;return[n+br(r)*i,t+gr(r)*i]}function f(){a(1,1,qt-1,Ft-1,function(n,t){var r=s[n][t];r&&(r.n||(r.n=[]),c([[-1,0],[1,0],[0,-1],[0,1]],function(i){var u=s[n+i[0]][t+i[1]];u&&u!=r&&-1==r.n.indexOf(u)&&r.n.push(u)}))})}var s,d,l,v,p=11-r,h=13+3*r,m=n(1e4,1e5);do for(s=t(0,qt).map(function(){return[]}),d=[],l=0,v=2500;h>l&&--v>0;){var b={l:n(1,qt-p+1),t:n(1,Ft-p+1),w:n(3,p),h:n(3,p)};if(!l||u(b))for(;!i(b);)if(!u(b)){d.push(e(l++,b));break}}while(!v);return f(),d}function M(n){var t=0,r=0,i=n.length;return c(n,function(n){t+=n[0],r+=n[1]}),[t/i,r/i]}function k(n,t,r,i,u){var e=M(n);return c(n,function(n){return[e[0]+(n[0]-e[0])*t+i,e[1]+(n[1]-e[1])*r+u]})}function L(n){var t=n[0]/qt,r=n[1]/Ft,i=.4*t+.6;return r=r*i+.5*(1-i),[100*t,100*r]}function x(n,t){return d("stop",{offset:n+"%",s:"stop-color:"+t})}function H(n,t,r){return d("radialGradient",{i:n,cx:"-100%",cy:"50%",fx:"-100%",fy:"50%",r:"200%",gradientUnits:"userSpaceOnUse"},x(60,r)+x(100,t))}function C(n,t,r,i,u){i=i||"stroke:#000;stroke-width:0.25;",r=r?"url(#"+r+")":"transparent";var e={i:t,points:c(n,L).join(" "),s:"fill:"+r+";"+i+";"};return u&&(e["clip-path"]=u),d("polygon",e)}function j(n,t){function r(){return c(e,function(n,t){return d("clipPath",{i:"clip"+t},C(n.p,"cp"+t,"l",""))}).join("")}function i(n,t,r,i,u,o,f,a){return d("g",{},c(e,function(e,c){return C(k(e.p,r,i,u,o),n+c,t,f,a?"url(#"+a+c+")":"")}).join(""))}function u(){f(t.t,function(t,r){var i=t.r.c,u="tp"+r,e="left:"+(i[0]-1.5)+"%;top:"+(i[1]-4)+"%",o=wr({i:u,c:"o",s:e},wr({c:"i"},wr({c:"i"},wr({c:"i"},wr({c:"i"})))));n.insertAdjacentHTML("beforeend",o),t.e=s(""+u),v(t.e,S.bind(0,t.r,"t"))})}var e=t.r,o=d("defs",{},r()+H("b","#88f","#113")+H("l","#fa6","#530")+H("lh","#fb7","#741")+H("d","#210","#000")+H("w","#55f","#003")+c(t.p,function(n,t){return H("p"+t,n.l,n.d)+H("p"+t+"h",n.h,n.hd)}).join("")),a=C([[0,0],[qt,0],[qt,Ft],[0,Ft]],"b","b"),l=i("r","l",1,1,0,0),p=i("d","d",1,1,.05,.05),h=i("w","w",1.05,1.05,.2,.2," "),m=i("hl","",1,1,0,0,"stroke:#fff;stroke-width:1.5;opacity:0.0;","clip");n.innerHTML=d("svg",{viewbox:"0 0 100 100",preserveAspectRatio:"none"},o+a+h+p+l+m),xr={},c(e,function(n,t){n.e=s("r"+t),n.c=L(M(n.p)),n.hl=s("hl"+t),v(n.hl,S.bind(0,n,"c"))}),v(Tr.body,S.bind(0,null,"c")),u()}function A(n){var t=wr({i:"tc",c:"sc"});t+=wr({i:"pd",c:"sc un"},c(n.p,function(n){var t=n.i;return wr({i:"pl"+t,c:"pl",style:"background: "+n.d},n.n+wr({c:"ad",i:"pr"+t})+wr({c:"ad",i:"pc"+t}))}).join("")),t+=wr({c:"sc un ds",i:"in"}),s("d").innerHTML=t,s("mv").style.display="block"}function S(n,t,r){var i=Mr[t];return i&&(Gt(Er),i(n)),r.stopPropagation(),!1}function z(n,t,r){function u(){t.d=i(f,3),t.d.h=t.r.filter(mt.bind(0,t,n)),N(t)}function e(r){var i=Tt(t,r.r),u=c(tr,function(u){var e=r.u==u?r.l+1:u==ir?t.m.h||0:0,c=u.c[e],f=o(u.n,rr[e])+d("b",{}," ("+c+"&#9775;)"),a=o(u.d,u.x[e]),s=!1;return s=s||u==fr&&!r.u,s=s||r.u&&r.u!=u&&u!=ir&&u!=fr,s=s||e>=u.c.length,s=s||e<Mt(t,i,u),s=s||i!=n,{t:f,d:a,o:c>wt(t,n),h:s}});return u.push({t:"Done"}),u}var f={b:[{t:"Cancel move",h:1},{t:"End turn"}]};Mr.c=function(i){if(i&&t.d.t!=$t||u(),!t.d.s&&i)mt(t,n,i)&&(u(),t.d.t=Zt,t.d.s=i,t.d.c=pt(t,i),t.d.b[0].h=0,t.d.h=i.n.concat(i));else if(i){var e=t.d;if(i==e.s)e.c=e.c%pt(t,i)+1;else{if(e.s.n.indexOf(i)>-1)return Mr={},e.d=i,r(e);u()}}N(t)},Mr.t=function(n){var r=t.t[n.i];t.d={t:$t,w:r,r:n,b:e(r)},N(t)},Mr.s=function(n){var r=null;c(t.r,function(i){g(t.s[i.i],n)&&(r=i)}),r&&Mr.c(r)},Mr.b=function(i){t.d&&t.d.t==$t?i>=tr.length?u():(t.d.u=tr[i],t.d.u==ir&&(kr[n.i]=t.d.r),r(t.d)):1==i?(Mr={},r({t:_t})):u()},u(),kr[n.i]&&(Mr.t(kr[n.i]),delete kr[n.i])}function X(n,t){function r(){var n=Lr[0];n.f(),setTimeout(function(){Lr.shift(),Lr.length&&r()},n.d)}Lr.push({d:n,f:t}),1==Lr.length&&r()}function O(n){function t(t){var r=Tt(n,t),i=r?"p"+r.i:"l",u=g(n.d&&n.d.h||[],t)||n.e&&r==n.e;u&&(i+="h");var e=.08+.003*t.c[0];n.e&&(e*=2),t.hl.style.opacity=u?e:0,t.hl.style.cursor=u?"pointer":"default",t.e.style.fill="url(#"+i+")"}function r(t){for(var r=t.e,i=t.u?t.l+3:2;r;)r.style.display=i>0?"block":"none",r.style.background=t.u?t.u.b:"#999",i--,r=r.firstChild;var u=Tt(n,t.r);t.e.style.cursor=u==yt(n)?"zoom-in":"help";var e=n.d&&n.d.w==t;t.e.classList[e?"add":"remove"]("l")}function i(t,r,i){u.push(r.i);var e=xr[r.i];if(!e){var o=wr({c:"s",s:"display: none"}),c=s("m");c.insertAdjacentHTML("beforeEnd",o),e=xr[r.i]=c.lastChild,e.onclick=S.bind(0,r,"s")}var f=t.c,a=pt(n,t),d=h([a,5]),l=i%5,v=Math.floor(i/5),p=-.6*d+1.2*l,m=.8*v,b=f[0]+p-.2*m-.3,g=f[1]+1.5+.2*p+m;if(r.a){var y=r.a.c;b=(b+y[0])/2,g=(g+y[1])/2}e.style.left=b+"%",e.style.top=g+"%",e.style.zIndex=20+5*v+l,e.style.display="block";var T=n.d||{};T.s==t&&i<T.c?e.classList.add("l"):e.classList.remove("l")}c(n.r,t),f(n.t,r);var u=[];f(n.s,function(t,r){c(t,i.bind(0,n.r[r]))}),f(xr,function(n,t){u.indexOf(parseInt(t))<0&&(s("m").removeChild(n),delete xr[t])})}function E(n){var t=n.m,r=n.d,i=r&&r.t==$t,u=r&&r.s,e=yt(n);if(i){var o=Ht(n,r.w);s("tc").innerHTML=wr({},o.n)+wr({c:"ds"},o.d)}else s("tc").innerHTML="Turn <b>"+n.m.t+"</b> / "+Kt;c(n.p,function(t,r){var i=bt(n,t),u=n.e;i?(s("pr"+r).innerHTML=bt(n,t)+"&#9733;",s("pc"+r).innerHTML=u?u==t?"&#9819;":"":n.c[t.i]+"&#9775;"):(s("pr"+r).innerHTML="&#9760;",s("pc"+r).innerHTML="")});var o;o=e.u==z?i?Tt(n,r.r)==e?d("p",{},"Choose an upgrade to build."):"":u?d("p",{},"Click on a target region to move your army.")+d("p",{},"Click on the source region to choose how many to move."):d("p",{},"Click on a region to move or attack with its army.")+d("p",{},"Click on a temple to buy soldiers or upgrades with &#9775;."):d("p",{},e.n+" is taking her turn."),s("in").innerHTML=o,s("in").style.background=e.d,s("pd").style.display=i?"none":"block",s("mc").innerHTML=t.l+d("span",{s:"font-size: 80%"},"&#10138;"),s("ft").innerHTML=n.c[e.i]+d("span",{s:"font-size: 80%"},"&#9775;"),I(r&&r.b)}function I(n){s("u").innerHTML="",c(n||[],function(n,t){if(!n.h){var r="b"+t,i=wr({},n.t);n.d&&(i+=wr({c:"ds"},n.d));var u=d("a",{href:"#",i:r,c:n.o?"off":""},i);s("u").insertAdjacentHTML("beforeend",u),n.o||v(s(r),S.bind(0,t,"b"))}})}function N(n){Hr=n,O(n),E(n),n.sc&&(Gt(n.sc),n.sc=null)}function D(n,t,r){function i(n){return"translate3d(1.2em,"+n+"em,0) rotateY("+(10+2*n)+"deg)"}r=r||1,X(r,function(){var r="bn"+Cr++;s("c").insertAdjacentHTML("beforeend",wr({i:r,c:"bn"},t));var u=s(r),e=u.style;e.background=n,e.opacity=0,l(u,i(-1)),setTimeout(function(){e.opacity=1,l(u,i(1))},100),setTimeout(function(){e.opacity=1},600),setTimeout(function(){e.opacity=0},1100),setTimeout(function(){u.parentNode.removeChild(u)},1600)})}function B(){setTimeout(function(){var n=yr.innerWidth,t=yr.innerHeight,r=1.65,i="px";n/t>r?n=t*r:t=n/r;var u=s("c").style;u.width=n+i,u.height=t+i,u.fontSize=.025*t+i},1)}function P(r){function u(n,t){for(var r=[{r:n,d:0}],i=[n],u=-1,e=100;0>u;){var o=r.shift(),f=o.r,a=o.d;f==t?u=a:a>=e?u=e:(f.d[t.i]&&(e=h([e,f.d[t.i]+a])),c(f.n,function(n){g(i,n)||r.push({r:n,d:a+1})}),i.push(f))}return n.d[t.i]=t.d[n.i]=u,u}function e(n){return h(y(n,u))}function o(){return d[n(0,d.length)]}function f(){function n(n){return c(f,function(t,r){return d[r]+u(t,n)})}function r(t){if(g(v,t))return-100;var r=n(t),i=m(r)-h(r),u=e(v.concat(f).concat(t));return u||(u=-5),u-i}c(s,function(n,t){l.c[t]=l.l[t]=0});var i=c(t(0,1e3),function(){return c(l.p,o)}),f=m(i,e);c(s,function(n,t){var r=f[t];l.o[r.i]=n,a(r,3)});var d=c(f,function(){return 0}),v=[],p=[3,3,4][s.length-2];c(t(0,p),function(){var t=m(l.r,function(n){return r(n)});a(t,3),v.push(t),d=n(t)})}function a(n,t){var r=n.i;l.t[r]={r:n,i:r},ct(l,n,t)}var s=[];c(r.p,function(t,r){if(t!=dr){var u=i(nr[r],1);u.u=t==sr?z:R,t==ar&&(u.p=i(mr[n(0,mr.length)],2)),u.i=s.length,s.push(u)}});var d=w(s.length),l={p:s,r:d,o:{},t:{},s:{},c:{},l:{},m:{t:1,p:0,m:Zt,l:Yt}};return f(),l}function R(n,t,r){if(U(n,t)){var i=q(n,t);return setTimeout(r.bind(0,i),Qt)}var u=J(n,t);if(u)return setTimeout(r.bind(0,u),Qt);var e=t.m.l||1;K(n,t,e,r)}function U(n,t){if(!gt(t,n).length)return!1;var r=n.p.u.length?n.p.s:1,i=xt(t)/t.c[n.i];if(i>1)return!1;var u=c(t.p,G.bind(0,t)),e=m(u)/G(t,n),o=e*r-i;return o>=0}function G(n,t){return 2*bt(n,t)+Lt(n,t)}function J(n,t){if(n.p.u.length){var r=n.p.u[0],i=Mt(t,n,r);if(!(t.c[n.i]<r.c[i])){var u=gt(t,n).filter(function(n){return!n.u&&!i||n.u==r});if(u.length){var e=h(u,W.bind(0,t));return n.p.u.shift(),{t:$t,u:r,w:e,r:e.r}}}}}function W(n,t){var r=Tt(n,t.r);return _(n,r,t.r)+nt(n,r,t.r)}function q(n,t){var r=m(gt(t,n),W.bind(0,t));return{t:$t,u:ir,w:r,r:r.r}}function F(n){if(0==n.d)return n.v=Z(n.a,n.s),Y(n.p,n);var t=n.u.shift();if(t){var r=it(n.s,t);return{p:n,a:n.a,d:n.d-1,m:t,s:r,u:Q(r)}}return Y(n.p,n)}function Y(n,t){if(n){var r=n.s.p[n.s.m.p],i=r==n.a,u=!n.b||i&&t.v>n.v||!i&&t.v<n;u&&(n.b=t.m,n.v=t.v)}return n}function K(n,t,r,i){function u(){for(var n=a;n--;){f=F(f);var t=e()-s;if(t>Vt&&(f=null),!f){var r=c.b;return r||(r={t:_t}),void setTimeout(i.bind(0,r),m([Qt-t,1]))}}setTimeout(u,1)}var o=ut(t,n),c={p:null,a:n,s:o,d:r,u:Q(t)},f=c,a=100,s=e();setTimeout(u,1)}function Q(n){function t(t,u,e){Tt(n,u)!=i&&pt(n,u)>e||r.push({t:Zt,s:t,d:u,c:e})}var r=[{t:_t}],i=yt(n);return n.m.l?(c(n.r,function(r){if(mt(n,i,r)){var u=pt(n,r);c(r.n,function(n){t(r,n,u),u>1&&t(r,n,Math.floor(u/2))})}}),T(r),r):r}function V(n,t,r,i){var u=(n.m.t-i)/(Kt-i);return 0>u&&(u=0),t+(r-t)*u}function Z(n,t){function r(r){var e=$(t,r);return Sr.l!=lr&&(e+=(1-_(t,n,r))*u*e+nt(t,n,r)*u),e+=pt(t,r)*i}var i=V(t,.33,0,10),u=V(t,1,0,10);return b(t.r,function(i){return Tt(t,i)==n?r(i):0})}function $(n,t){var r=V(n,8,0,1);return 1+(n.t[t.i]?r:0)}function _(n,t,r){var i=pt(n,r),e=b(r.n,function(r){var i=Tt(n,r);return i&&i!=t?pt(n,r):0});return u(.5*(e/(i+1e-4)-1),0,.9)}function nt(n,t,r){var i=pt(n,r);return i?b(r.n,function(r){if(Tt(n,r)!=t){var e=pt(n,r);return u(.5*(i/(e+.01)-.9),0,.5)*$(n,r)}return 0}):0}function tt(){c(Hr.p,function(n,t){Hr.c[t]+=500}),N(Hr)}function rt(n,t,r){return bt(t,n)?void n.u(n,t,r):r({t:_t})}function it(n,t){n=ut(n);var r=t.t;return r==Zt?ft(n,t.s,t.d,t.c):r==$t?st(n,t.r,t.u):r==_t&&dt(n),ot(n),n}function ut(n,t){return{r:n.r,p:n.p,a:n.a||t,m:i(n.m,1),o:i(n.o,1),t:i(n.t,2),s:i(n.s,3),c:i(n.c,1),l:i(n.l,1)}}function et(n){X(150,function(){var t=yt(n);rt(t,n,function(r){t.u==R&&Gt(Er);var i=it(n,r);return i.e?(X(150,N.bind(0,i)),void vt(i)):void setTimeout(et.bind(0,i),1)}),N(n)})}function ot(n){c(n.p,function(t){var r=b(n.r,function(r){return Tt(n,r)==t?pt(n,r):0});!r&&bt(n,t)&&(f(n.o,function(r,i){t==r&&delete n.o[i]}),yt(n)==t&&(n.m.l=0),n.a||(X(150,N.bind(0,n)),D("#222",t.n+" has been eliminated!",900)))});var t=n.p.filter(bt.bind(0,n)).length>1;return t?void 0:void(n.e=lt(n))}function ct(n,r,i){c(t(0,i),function(){jr=jr+1||0;var t=n.s[r.i];t||(t=n.s[r.i]=[]),t.push({i:jr++})})}function ft(r,i,u,e){function o(t){var i=120+y;return r.a?(t+3)*i/(g+5):n(.12*i,.88*i)}var f=r.s[i.i],a=r.s[u.i]||(r.s[u.i]=[]),s=Tt(r,i),d=Tt(r,u);if(s!=d){var l=a.length,v=h([e,kt(r,d,cr)]),p=kt(r,s,er);if((v||l)&&(r.a||c(f.slice(0,e),function(n){n.a=u}),at(r)),v&&(c(t(0,v),function(){f.shift(),e--}),at(r)),l&&e){var m=e*(1+.01*kt(r,s,er)),b=l*(1+.01*kt(r,d,cr)),g=h([e,l]),y=100*Math.pow(m/b,1.6);c(t(0,g),function(n){o(n)<=120?p--<=0&&(f.shift(),e--,at(r,250,Nr)):(a.shift(),d&&(r.c[d.i]+=4),at(r,250,Ir))}),c(f,function(n){n.a=0}),a.length&&(e=0,r.sc=Br)}}if(e>0&&(c(t(0,e),function(){a.push(f.shift())}),s!=d)){r.o[u.i]=s,r.m.z=(r.m.z||[]).concat(u);var T=r.t[u.i];T&&delete T.u,l&&(r.sc=Dr)}r.m.l--}function at(n,t,r){if(!n.a){var i=ut(n);i.sc=r,X(t||500,N.bind(0,i))}}function st(n,t,r){var i=n.t[t.i],u=Tt(n,t);return r==ir?(n.m.h||(n.m.h=0),n.c[u.i]-=r.c[n.m.h++],ct(n,t,1)):r==fr?void delete i.u:(i.u!=r?(i.u=r,i.l=0):i.l++,n.c[u.i]-=r.c[i.l],void(r==or&&n.m.l++))}function dt(n){var t=yt(n);n.c[t.i]+=ht(n,t),f(n.t,function(r,i){n.o[i]==t&&ct(n,r.r,1)});do{var r=n.p.length,i=(n.m.p+1)%r,u=n.p[i],e=n.m.t+(i?0:1);n.m={t:e,p:i,m:Zt,l:Yt+kt(n,u,or)}}while(!bt(n,u));return n.m.t>Kt?(n.m.t=Kt,void(n.e=lt(n))):void(n.a||D(yt(n).d,yt(n).n+"'s turn"))}function lt(n){var t=bt.bind(0,n),r=m(n.p,t),i=n.p.filter(function(n){return n!=r}),u=m(i,t);return t(r)!=t(u)?r:hr}function vt(n){X(1,function(){var t=n.e;t!=hr?D(t.d,t.n+" wins the game!"):D("#333","The game ends in a draw!"),N(n),s("tc").innerHTML="Game complete",s("in").innerHTML=d("p",{},"Click the button bellow to start a new game."),s("in").style.background="#555",s("mv").style.display="none",I([{t:"New game"}]),Mr.b=St})}function pt(n,t){var r=n.s[t.i];return r?r.length:0}function ht(n,t){var r=bt(n,t),i=b(gt(n,t),function(t){return pt(n,t.r)}),u=1+.01*kt(n,t,ur);return t.u==R&&Sr.l==pr&&(u+=.4),Math.ceil(u*(r+i))}function mt(n,t,r){return n.m.l>0&&Tt(n,r)==t&&pt(n,r)&&!g(n.m.z,r)}function bt(n,t){var r=0;return c(n.r,function(i){Tt(n,i)==t&&r++}),r}function gt(n,t){var r=[];return f(n.t,function(i,u){n.o[u]==t&&r.push(i)}),r}function yt(n){return n.p[n.m.p]}function Tt(n,t){return n.o[t.i]}function wt(n,t){return n.c[t.i]}function Mt(n,t,r){return m(c(gt(n,t),function(n){return n.u&&n.u==r?n.l+1:0}).concat(0))}function kt(n,t,r){return t?m(c(n.r,function(i){var u=n.t[i.i];return u?Tt(n,i)!=t?0:u.u==r?r.x[u.l]:0:0})):0}function Lt(n,t){return b(n.r,function(r){return Tt(n,r)==t?pt(n,r):0})}function xt(n){return ir.c[n.m.h||0]}function Ht(n,t){if(t.u){var r=t.u,i=t.l,u=o(r.d,r.x[i]);return{n:o(r.n,rr[i]),d:u}}var e=Tt(n,t.r)?"Basic Temple":"Neutral Temple";return{n:e,d:"No upgrades."}}function Ct(){if(localStorage){var n=localStorage.getItem("s");return n&&JSON.parse(n)}}function jt(n){localStorage&&localStorage.setItem("s",JSON.stringify(n))}function At(){function n(){return c(["Unfair","Tough","Easy"],function(n,t){var r="ai"+(2-t);return d("a",{i:r,c:"rt",href:"#",s:"font-size: 90%"},n)}).join("")}function r(n){return c(["AI","Human","Off"],function(t,r){var i="sb"+n+r;return d("a",{i:i,c:"rt",href:"#"},t)}).join("")}var i=wr({c:"sc ds"},"Player setup"),u=c(nr,function(n){var t=n.i;return wr({i:"pl"+t,c:"pl",style:"background: "+n.d},n.n+r(t))}).join("");i+=wr({i:"pd",c:"sc un"},u),i+=wr({c:"sc ds",s:"padding-right: 0.5em"},"AI level"+n()),s("d").innerHTML=i,s("mv").style.display="none",a(0,0,nr.length,3,function(n,t){v(s("sb"+n+t),S.bind(0,{p:n,b:t},"sb"))}),c(t(0,3),function(n){v(s("ai"+n),S.bind(0,n,"ai"))})}function St(){function n(){var n=b(Sr.p,function(n){return n!=dr?1:0});return n>1}function r(){var t=!n();I([{t:"Change map",o:t},{t:"Start game",o:t}])}function i(){jt(Sr),c(Sr.p,function(n,r){c(t(0,3),function(t){s("sb"+r+t).classList[n==t?"add":"remove"]("sl")})}),c(t(0,3),function(n){s("ai"+n).classList[n==Sr.l?"add":"remove"]("sl")})}function u(){n()&&(e=P(Sr),j(s("m"),e),O(e))}var e;u(),At(),r(),i(),Mr.b=function(t){n()&&(0==t?u():(A(e),N(e),et(e)))},Mr.sb=function(n){Sr.p[n.p]=n.b,i(),r(),u()},Mr.ai=function(n){Sr.l=n,i()}}function zt(){c(["o","tub","snd"],function(n){p(n,1)}),v(s("cb"),Ot.bind(0,!1)),v(s("nxt"),Xt.bind(0,1)),v(s("prv"),Xt.bind(0,-1)),v(s("tub"),Ot.bind(0,!0)),v(s("snd"),Wt),Xt(0),setTimeout(Ot.bind(0,!0),10)}function Xt(n){zr=u(zr+n,0,Xr-1),l(s("tuc"),"translate3d("+100*-zr/Xr+"%,0,0)"),p("prv",zr>0),p("nxt",Xr-1>zr)}function Ot(n){n&&(s("ts").style.display="block"),setTimeout(function(){s("ts").classList[n?"remove":"add"]("h")},50),n||setTimeout(function(){s("ts").style.display="none"},500)}function Et(n,t,r){return n=u(n,0,1),r*n+t*(1-n)}function It(n,t,r,i,u,e){var o=0;return function(c){var f=e(c);return o+=c,n>o?Et(o/n,0,1)*f:n+t>o?Et((o-n)/t,1,u)*f:n+t+r>o?u*f:Et((o-n-r-t)/i,u,0)*f}}function Nt(n){var t=0;return function(r){return t+=r,Math.sin(t*n*6.283)}}function Dt(n,t,r,i){var u=0;return function(e){u+=e;var o=e*Et(u/r,n,t);return i(o)}}function Bt(n,t,r,i){var u=0;return function(e){return u+=e,i(u>r?e*t:e*n)}}function Pt(n){c(n,function(n){n.f=It(.01,.03,.03*n.d,.03*n.d,.7,Nt(n.p))});var t=0;return function(r){t+=r;var i=0;return c(n,function(n){t>=n.t&&(i+=n.f(r))}),i}}function Rt(n,t,r){for(var r=r||1,i=Or.sampleRate,u=i*t,e=Or.createBuffer(1,u,i),o=1/i,c=e.getChannelData(0),f=0;u>f;f++)c[f]=n(o)*r;return e}function Ut(){Or&&(Er=Rt(It(.01,.03,.01,.01,.2,Nt(110)),.1),Ir=Rt(It(.01,.05,.05,.05,.5,Dt(1,.3,.1,Nt(300))),.2,.6),Nr=Rt(It(.01,.05,.05,.05,.5,Dt(1,.3,.1,Nt(200))),.2,.6),Dr=Rt(Pt([{t:0,p:261,d:1},{t:0,p:329,d:2},{t:0,p:392,d:3},{t:.2,p:261,d:1},{t:.2,p:349,d:2},{t:.2,p:440,d:3}]),.6,.2),Br=Rt(Pt([{t:0,p:392,d:3},{t:.15,p:329,d:2},{t:.3,p:261,d:1}]),.6,.2),Jt())}function Gt(n){if(n&&Sr.s){var t=Or.createBufferSource();t.buffer=n,t.connect(Or.destination),t.start()}}function Jt(){s("snd").innerHTML=Sr.s?"♪":" ",jt(Sr)}function Wt(){Sr.s=!Sr.s,Jt()}var qt=30,Ft=20,Yt=3,Kt=12,Qt=1e3,Vt=5e3,Zt=1,$t=2,_t=3,nr=[{i:0,n:"Amber",l:"#fd8",d:"#960",h:"#fd8",hd:"#a80"},{i:1,n:"Crimson",l:"#f88",d:"#722",h:"#faa",hd:"#944"},{i:2,n:"Lavender",l:"#d9d",d:"#537",h:"#faf",hd:"#759"},{i:3,n:"Emerald",l:"#9d9",d:"#262",h:"#bfb",hd:"#484"}],tr=[{n:"Extra soldier",d:"",c:c(t(0,100),function(n){return 8+4*n}),x:[]},{n:"X of Water",d:"Income: X% more each turn.",c:[15,25],x:[20,40],b:"#66f"},{n:"X of Fire",d:"Attack: X invincible soldier(s).",c:[20,30],x:[1,2],b:"#f88"},{n:"X of Air",d:"Move: X extra move(s) per turn.",c:[25,35],x:[1,2],b:"#ffa"},{n:"X of Earth",d:"Defense: Always kill X invader(s).",c:[30,45],x:[1,2],b:"#696"},{n:"Rebuild temple",d:"Switch to a different upgrade.",c:[0],x:[]}],rr=["Temple","Cathedral"],ir=tr[0],ur=tr[1],er=tr[2],or=tr[3],cr=tr[4],fr=tr[5],ar=0,sr=1,dr=2,lr=0,vr=1,pr=2,hr={},mr=[{s:1,u:[]},{s:.2,u:[ur,cr]},{s:.25,u:[ur,er,er]},{s:.15,u:[ur,ur,cr,cr]},{s:.4,u:[ur]},{s:.3,u:[ur,ur]},{s:.25,u:[er,er]},{s:.2,u:[cr,cr]}],br=Math.sin,gr=Math.cos,yr=window,Tr=document,wr=d.bind(0,"div"),Mr={},kr={},Lr=[],xr={},Hr,Cr=1,jr,Ar={p:[sr,ar,ar,dr],l:lr,s:!0},Sr=Ct()||Ar,zr=0,Xr=5,Or=window.AudioContext&&new AudioContext,Er,Ir,Nr,Dr,Br;(yr.onresize=B)(),window.onload=function(){setTimeout(function(){Ut(),St(),zt()},500)};