"use strict";var CPlayer=function(){var r,n,i,t,a,e=function(r){return Math.sin(6.283184*r)},o=function(r){return 2*(r%1)-1},f=function(r){return.5>r%1?1:-1},u=function(r){var n=r%1*4;return 2>n?n-1:3-n},c=function(r){return.003959503758*Math.pow(2,(r-128)/12)},h=function(r,n,i){var t,a,e,o,f,u,h,s=v[r.i[0]],w=r.i[1],M=r.i[3],p=v[r.i[4]],y=r.i[5],g=r.i[8],A=r.i[9],l=r.i[10]*r.i[10]*4,L=r.i[11]*r.i[11]*4,I=r.i[12]*r.i[12]*4,d=1/I,D=r.i[13],P=i*Math.pow(2,2-r.i[14]),m=new Int32Array(l+L+I),C=0,U=0;for(t=0,a=0;l+L+I>t;t++,a++)a>=0&&(D=D>>8|(255&D)<<4,a-=P,u=c(n+(15&D)+r.i[2]-128),h=c(n+(15&D)+r.i[6]-128)*(1+8e-4*r.i[7])),e=1,l>t?e=t/l:t>=l+L&&(e-=(t-l-L)*d),o=u,M&&(o*=e*e),C+=o,f=s(C)*w,o=h,g&&(o*=e*e),U+=o,f+=p(U)*y,A&&(f+=(2*Math.random()-1)*A),m[t]=80*f*e|0;return m},v=[e,f,o,u];this.init=function(e){r=e,n=e.endPattern-2,i=0,t=e.rowLen*e.patternLen*(n+1)*2,a=new Int32Array(t)},this.generate=function(){var o,f,u,c,s,w,M,p,y,g,A,l,L,I,d=new Int32Array(t),D=r.songData[i],P=r.rowLen,m=r.patternLen,C=0,U=0,W=!1,b=[];for(u=0;n>=u;++u)for(M=D.p[u],c=0;m>c;++c){var j=M?D.c[M-1].f[c]:0;j&&(D.i[j-1]=D.c[M-1].f[c+m]||0,15>j&&(b=[]));var k=v[D.i[15]],q=D.i[16]/512,x=Math.pow(2,D.i[17]-9)/P,z=D.i[18],B=D.i[19],E=43.23529*D.i[20]*3.141592/44100,F=1-D.i[21]/255,G=1e-5*D.i[22],H=D.i[23]/32,J=D.i[24]/512,K=6.283184*Math.pow(2,D.i[25]-9)/P,N=D.i[26]/255,O=D.i[27]*P;for(A=(u*m+c)*P,s=0;4>s;++s)if(w=M?D.c[M-1].n[c+s*m]:0){b[w]||(b[w]=h(D,w,P));var Q=b[w];for(f=0,o=2*A;f<Q.length;f++,o+=2)d[o]+=Q[f]}for(f=0;P>f;f++)p=2*(A+f),g=d[p],g||W?(l=E,z&&(l*=k(x*p)*q+.5),l=1.5*Math.sin(l),C+=l*U,L=F*(g-U)-C,U+=l*L,g=3==B?U:1==B?L:C,G&&(g*=G,g=1>g?g>-1?e(.25*g):-1:1,g/=G),g*=H,W=g*g>1e-5,y=Math.sin(K*p)*J+.5,I=g*(1-y),g*=y):I=0,p>=O&&(I+=d[p-O+1]*N,g+=d[p-O]*N),d[p]=0|I,d[p+1]=0|g,a[p]+=0|I,a[p+1]+=0|g}return i++,i/8},this.createWave=function(){var r=44,n=r+2*t-8,i=n-36,e=new Uint8Array(r+2*t);e.set([82,73,70,70,255&n,n>>8&255,n>>16&255,n>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&i,i>>8&255,i>>16&255,i>>24&255]);for(var o=0,f=r;t>o;++o){var u=a[o];u=-32767>u?-32767:u>32767?32767:u,e[f++]=255&u,e[f++]=u>>8&255}return e},this.getData=function(r,n){for(var i=2*Math.floor(44100*r),t=new Array(n),e=0;2*n>e;e+=1){var o=i+e;t[e]=r>0&&o<a.length?a[o]/32768:0}return t}};