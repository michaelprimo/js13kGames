function e(){let e,t,n=0,o=!0;const i=document.getElementById("startButton"),l=[0,60,120,180],c=document.getElementById("gameContainer"),r=document.createElement("canvas"),s=r.getContext("2d"),d=()=>{r.width=Math.min(window.innerWidth,240),r.height=Math.min(window.innerHeight,575),e=Math.floor(window.innerWidth/20),t=Math.floor(window.innerHeight/20)};"gameCanvas"==c.childNodes[0].id&&c.removeChild(c.childNodes[0]),i.style.display="none",d(),r.id="gameCanvas",c.insertBefore(r,c.childNodes[0]),document.querySelector(".controls").style.display="flex";let a=function(){const e=localStorage.getItem("carBlockGameJs13k.highScore")||"0";return parseInt(e,10)}();window.onresize=()=>{d()};class h{constructor(e,t){this.x=e,this.y=t,this.speed=1}update(e){if(this.y+this.speed>e.height){const e=Math.floor(4*Math.random()+1)-1;this.x=l[e],this.y=-102,this.speed+=.15,n+=.5}else this.y+=this.speed}render(e){let t=this.x,n=this.y;f(t,n);for(let e=0;e<2;e++)n+=21,f(t,n);for(let e=0;e<2;e++)t+=21,f(t,n);for(let e=0;e<2;e++)n+=21,f(t,n);for(let e=0;e<3;e++)n+=-21;f(t,n),n+=-21,f(t,n)}}function f(e,t){s.fillStyle="#000";const n=new Path2D;n.rect(e,t,18,18),s.stroke(n);const o=new Path2D;o.rect(e+3,t+3,12,12),s.fill(o)}const u=new class{constructor(){this.x=l[1],this.color="#FFF"}update(e){this.y=e.height-102}render(){let e=this.x,t=this.y;f(e,t);for(let n=0;n<2;n++)e+=21,f(e,t);for(let n=0;n<4;n++)t+=21,f(e,t);for(let n=0;n<2;n++)e-=21,f(e,t);for(let n=0;n<3;n++)t-=21,f(e,t)}},m=new h(l[0],0),g=new h(l[3],0),w=[m,g,u];function k(){o=!1,i.textContent="Play again!",i.style.display="block",document.querySelector(".controls").style.display="none",n>a&&(a=n,function(e){localStorage.setItem("carBlockGameJs13k.highScore",e)}(n)),clearInterval(v)}function p(){const e=l.indexOf(u.x);e<3&&(u.x=l[e+1])}function S(){const e=l.indexOf(u.x);e>0&&(u.x=l[e-1])}document.addEventListener("keydown",(function(e){"Right"==e.key||"ArrowRight"==e.key?p():"Left"!=e.key&&"ArrowLeft"!=e.key||S()}),!1),document.getElementById("moveRight").addEventListener("click",p),document.getElementById("moveLeft").addEventListener("click",S);const v=setInterval((function(){if(o){for(s.fillStyle="#a4b6ad",s.fillRect(0,0,r.width,r.height),x=0;x<e;x++)for(y=0;y<t;y++)s.fillStyle="#9ca9a3",s.fillRect(20*x,20*y,18,18),s.fillStyle="#a4b6ad",s.fillRect(20*x+2,20*y+2,14,14),s.fillStyle="#9ca9a3",s.fillRect(20*x+4,20*y+4,10,10);w.forEach(e=>{e.update(r),e.render(s)}),m.y+102>r.height-102&&(m.x==u.x||g.x==u.x)&&k(),function(e){e.fillStyle="#000",e.font="16px Arial",e.fillText(`Score: ${n}   High score: ${a}`,15,15)}(s)}}),10)}window.onload=()=>{document.getElementById("startButton").addEventListener("click",e)}