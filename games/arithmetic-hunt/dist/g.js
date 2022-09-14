function Ball(t,e,i){let n,s;this.id=t,this.data=e,this.x=0,this.y=0,this.r=10,this.vx=0,this.vy=0,this.c=i.base,this.ct=i.invert,this.isAlive=!0,this.isYoung=!0,this.bumped=[],this.done=!1;let r=0;const o=2*Math.PI,h={hor:!1,vert:!1},l=[.45,.35,.3],a=()=>{return`bold ${Math.round(this.r*l[e.complexity])}px sans-serif`};this.render=(()=>{this.isAlive&&(n.fillStyle=this.c,n.beginPath(),n.arc(this.x,this.y,this.r,0,o),n.fill(),n.fill(),n.fillStyle=this.ct,n.font=a(),n.fillText(e.expression,this.x,this.y))}),this.bump=((t,e,i)=>{this.bumped.includes(t)||(this.c="red",this.ct="red",this.vx=1.1*e,this.vy=1.1*i,this.bumped.push(t),this.done=!0)}),this.setData=(t=>{n=t.ctx,s=t.bounds,this.x=t.x,this.y=t.y,this.vx=t.vx,this.vy=t.vy}),this.update=(()=>{let t=-4;this.done||(t=++r%5==0?1:0),this.r+=t,this.r=this.r>120?120:this.r,this.r<=0?this.isAlive=!1:this.r>30&&(this.isYoung=!1),this.x+this.r>s.w||this.x-this.r<0?h.vert||(this.vx*=-1,h.vert=!0):h.vert=!1,this.y+this.r>s.h||this.y-this.r<0?h.hor||(this.vy*=-1,h.hor=!0):h.hor=!1,this.x+=this.vx,this.y+=this.vy}),this.intersects=(t=>{if(this.done)return!1;return function(t,e){return Math.hypot(t.x-e.x,t.y-e.y)}(this,t)<this.r+t.r})}function ColorGenerator(){const t={r:25,g:10,b:0},e=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}.bind(null,0,255);function i(t){return t.reduce((t,e)=>t+function(t){const e=t.toString(16);return 1===e.length?"0"+e:e}(e),"#")}this.getColors=(()=>{const n=function(t){let i=e(),n=e(),s=e();return i=Math.round((i+t.r)/2),n=Math.round((n+t.g)/2),s=Math.round((s+t.b)/2),[i,n,s]}(t),s=function(t){return t.map(t=>255-t)}(n);return{base:i(n),invert:i(s)}})}function Game(t,e,i){let n,s,r,o=0,h=15,l=Date.now(),a=!0,c=8;function u(u){const d=Date.now()-l,f=12-Math.round(d/1e3);u<c&&function(){const n=function(){let t="";for(let e=0;e<10;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}();a=!a;const s=t.getExpression(a),o=e.getColors(),h=new i(n,s,o);r.spawn(h)}(),f!==h&&(h=f,s.setText(h)),d>12e3&&(n.setText(`TIME OUT! SCORE: ${o}`),r.stop())}this.onCorrect=(()=>{l=Date.now(),h=12,o++,n.setText(`SCORE: ${o}`),o%10==0&&t.levelUp(),c=Math.floor(o/15)+8}),this.onFail=(()=>{r.stop(),n.setText(`WRONG! SCORE: ${o}`)}),this.reset=(()=>{o=0,h=12,l=Date.now(),n.setText("SCORE: 0")}),this.start=(t=>{(r=t).addCallback(u)}),this.setTextfields=((t,e)=>{s=e,(n=t).setText("SCORE: 0"),s.setText(h)})}function Generator(){const t={add:function(t,e){return t+e},substract:function(t,e){return t-e},multiply:function(t,e){return t*e},addSign:"+",substractSign:"-",multiplySign:"*"},e=[[1,1,0],[1,1,1],[2,1,0],[2,1,1],[2,2,0],[2,2,1]];let i=0,n=[e[i]];function s(t=1){return Array.from({length:t},(t,e)=>e?r():r(e)).join("")}function r(t){let e=Math.floor(10*Math.random());for(;e===t;)e=Math.floor(10*Math.random());return e.toString()}function o(t){return t[Math.floor(Math.random()*t.length)]}this.getExpression=(e=>{return function(e,n){const r=s(e[0]),h=s(e[1]),l=function(t){const e=["substract","add","multiply"];t||e.pop();return o(e)}(e[2]),a=t[`${l}Sign`],c=t[l](+r,+h),u=n?c:function(t){let e;const i=Math.round(Math.random());e=t<10?i?t+1:t-1:i?Math.ceil(1.04*t):Math.floor(.98*t);return e}(c);return{complexity:i,isCorrect:n,actual:c,expression:`${r} ${a} ${h} = ${u}`}}(o(n),e)}),this.levelUp=(()=>{e[++i]&&n.push(e[i])}),this.reset=(()=>{n=[e[i=0]]})}const help=document.querySelector(".help-outer");let isHelpShown=!0;const colorGen=new ColorGenerator,generator=new Generator,game=new Game(generator,colorGen,Ball),world=new World,player=new Player(game,world.centerX,world.centerY),scoreText=new Textfield({x:world.centerX,y:30,color:"#DDDCC5",fontSize:36}),timerText=new Textfield({x:world.width-40,y:30,color:"#DDDCC5",fontSize:36,text:"12"}),toolbar=new Rect({x:0,y:0,w:world.width,h:60,color:"rgba(29,35,38,0.7)"});function init(){generator.reset(),player.reset(),game.reset(),world.reset(),world.spawn(player),world.spawn(toolbar),world.spawn(scoreText),world.spawn(timerText)}function toggleHelp(){isHelpShown=!isHelpShown,help.style.display=isHelpShown?"table":"none"}function Player(t,e,i){this.x=e,this.y=i,this.r=50,this.id="player";let n=!1;this.data={isCorrect:null};let s=null,r=null;const o=2*Math.PI;this.render=(()=>{n&&(s.fillStyle=this.c1,s.beginPath(),s.arc(this.x,this.y,this.r,0,o),s.fill(),s.fillStyle=this.c2,s.beginPath(),s.arc(this.x,this.y,.9*this.r,0,o),s.fill())}),this.reset=(()=>{this.c1="#611427",this.c2="#958976",this.isAlive=!0,n=!1}),this.bump=((e,i,n,s)=>{s?(this.c1="#958976",t.onCorrect(),setTimeout(()=>{this.c1="#611427"},500)):(this.c2="#611427",t.onFail())}),this.setData=(e=>{s=e.ctx,r=e.bounds,s.canvas.addEventListener("mousemove",e=>{if(t.over)return;n=!0;const{x:i,y:r}=function(t,e){const i=t.getBoundingClientRect();return{x:e.pageX-i.left,y:e.pageY-i.top}}(s.canvas,e);this.x=i,this.y=r})}),this.update=(()=>{}),this.intersects=(t=>{if(!n)return!1;return function(t,e){return Math.hypot(t.x-e.x,t.y-e.y)}(this,t)<this.r+t.r})}function Rect({x:t,y:e,w:i,h:n,color:s}){this.isStatic=!0;let r=null;this.render=(()=>{r.fillStyle=s,r.fillRect(t,e,i,n)}),this.setData=(t=>{r=t.ctx})}function Textfield({x:t,y:e,color:i,fontSize:n,text:s=""}){this.text=s,this.prefix="",this.id="TF",this.isStatic=!0;const r=`${n}px sans-serif`;let o=null;this.setText=(t=>{this.text=t}),this.setPrefix=(t=>{this.prefix=t}),this.render=(()=>{o.fillStyle=i,o.font=r,o.fillText(this.prefix+this.text,t,e)}),this.setData=(t=>{o=t.ctx})}function World(){const t=document.querySelector("canvas"),e=t.getContext("2d"),i=.3;let n=[],s=[],r=!0;const o={w:window.innerWidth,h:window.innerHeight},h=[];let l=performance.now(),a=0;function c(o){if(a>3)return;const d=o-l;!function(){for(let t=n.length-1;t>=0;t--){let e=n[t];e.isAlive?(n.forEach(u),e.update()):(n.splice(t,1),e=null)}}(),d>i&&(l=o,e.clearRect(0,0,t.width,t.height),n.forEach(t=>t.render()),s.forEach(t=>t.render()),function(){const t=n.length;h.forEach(e=>e(t))}()),r&&a++,requestAnimationFrame(c)}function u(t,e){t.done||t.isYoung||n.forEach((i,n)=>{if(n<=e||i.done||i.isYoung)return;if(t.intersects(i)){const e=t.vx,n=t.vy;t.bump(i.id,i.vx,i.vy,i.data.isCorrect),i.bump(t.id,e,n,t.data.isCorrect)}})}function d(t,e){return Math.floor(Math.random()*(e-t+1)+t)}t.width=o.w,t.height=o.h,e.textAlign="center",e.textBaseline="middle",this.centerX=o.w/2,this.centerY=o.h/2,this.width=o.w,this.height=o.h,this.add=(t=>{t.isStatic?s.push(t):n.push(t)}),this.stop=(()=>{r=!0}),this.isStopped=(()=>r),this.reset=(()=>{r=!1,n=[],s=[],l=performance.now(),a=0,c(l)}),this.addCallback=(t=>{h.push(t)}),this.spawn=(t=>{const i=function(){let t,e,i,n;switch(d(0,3)){case 0:t=d(0,o.w),e=0,i=d(-5,5),n=d(-5,-1);break;case 1:t=o.w,e=d(0,o.h),i=d(1,5),n=d(-5,5);break;case 2:t=d(0,o.w),e=o.h,i=d(-5,5),n=d(1,5);break;case 3:t=0,e=d(0,o.h),i=d(-5,-1),n=d(-5,5)}return{x:t,y:e,vy:n,vx:i}}();i.ctx=e,i.bounds=o,t.setData(i),this.add(t)})}window.onkeyup=(t=>{world.isStopped()&&(32===t.keyCode?(isHelpShown&&toggleHelp(),init()):27===t.keyCode&&toggleHelp())}),game.setTextfields(scoreText,timerText),game.start(world);
//# sourceMappingURL=g.js.map