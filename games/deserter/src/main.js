kontra.init();let{initPointer:initPointer,onPointerDown:onPointerDown,pointer:pointer,SpriteSheet:SpriteSheet,setStoreItem:setStoreItem,getStoreItem:getStoreItem}=kontra,htmlCanvas=document.getElementById("canvas"),ctx=htmlCanvas.getContext("2d");htmlCanvas.width=window.innerWidth,htmlCanvas.height=window.innerHeight;let nwdf=0,s=0,bD=0,dJ=!1;document.monetization&&"started"===document.monetization.state&&(dJ=!0);let hs=getStoreItem("hs");null==hs&&(hs=0),ctx.font="42px monospace";let c=kontra.getCanvas(),gR=[c.width/1.6,c.height-150],sP=[],eB=[],eN=[],env=[],pA=[],prE=[],Be=[],AsS=4;initPointer();let pIS=!0,i0=!1,Lb=screen.width,s3=Math.sqrt(c.width*c.width+c.height*c.height),pIl=new Image;pIl.src="img/player.png",pIl.onload=function(){let t=SpriteSheet({image:pIl,frameWidth:24,frameHeight:50,animations:{walk:{frames:[0,1,2,3,2,1],frameRate:6},fly:{frames:[1,2],frameRate:2}}}),e=new Image;e.src="img/bomb.png",e.onload=function(){let i=SpriteSheet({image:e,frameWidth:80,frameHeight:40,animations:{fall:{frames:"0..5",frameRate:5}}}),h=new Image;h.src="img/bunker.png",h.onload=function(){function e(t,e){t.anime!==e&&(t.playAnimation(e),t.anime=e)}onPointerDown(function(){0===y.reloading&&(!function(t,e){let i=3;dJ&&(i=9);let h=kontra.Sprite({x:y.x+y.width/2,y:y.y+y.height/2,v:6,q:Math.atan2(e-y.y-y.height/2,t-y.x-y.width/2),dx:0,dy:0,ttl:300,r:i,force:7,update(){this.collidesWith(p)&&(this.ttl=0),this.advance()},render(){this.context.fillStyle="rgb(78,71,25)",this.context.beginPath(),this.context.arc(this.x,this.y,this.r,0,2*Math.PI),this.context.fill(),dJ&&(this.context.fillStyle="rgb(58,11,0)",this.context.strokeStyle="rgb(197,12,0)",this.context.stroke())}});h.dx=Math.cos(h.q)*h.v,h.dy=Math.sin(h.q)*h.v,y.dx-=Math.cos(h.q)*h.force*.8,y.dy-=Math.sin(h.q)*h.force,sP.push(h)}(pointer.x,pointer.y),y.reloading=dJ?5:40),i0&&location.reload()});let o={x:-s3,y:c.height/2,q:Math.PI},n=[1,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05];function r(t){let e=[];for(let t=0;t<110;t++){let i=[];for(let h=0;h<100;h++)0!==t?Math.random()<=n[Math.floor(t/10)]&&e[t-1][h]?i.push(1):i.push(0):i.push(1);e.push(i)}let i=kontra.Sprite({x:t,y:gR[1],height:1100,width:1e3,RK:e,dx:2,update(){0===this.x&&r(-this.width),this.advance()},render(){for(let t=0;t<this.RK.length;t++){dJ?Math.random()>.5?this.context.fillStyle="rgb(255,25,157)":this.context.fillStyle="rgb(128,255,0)":this.context.fillStyle="rgb(35,52,51)";for(let e=0;e<this.RK[t].length;e++)this.RK[t][e]&&this.context.fillRect(this.x+10*e,this.y-10*t,10,10)}}});env.push(i)}for(let t=0;1e3*t<c.width;t++)r(1e3*t);function l(){pIS=!1,y.ttl=0,S.ttl=0;for(let t=0;t<40;t++){let t=2*Math.random();t<1&&(t=2);let e=1,i=Math.floor(Math.random()*t*2)-t;Math.random()>.5&&(e=-1);let h=kontra.Sprite({x:Math.floor(Math.random()*(y.width-10))+y.x+5,y:Math.floor(Math.random()*(y.height-10))+y.y+5,dx:i,dy:e*Math.sqrt(t*t-i*i),ddy:.09,width:7,height:7,color:"red",ttl:180,update(){this.collidesWith(p)&&(this.dy=0,this.dx=0,this.ddy=0),1===this.ttl&&(this.ttl=1/0,i0||(i0=!0,g())),this.advance()}});pA.push(h)}y.y=2*c.height,y.height=0}let a=[5,10];function d(t,e){for(let i=0;i<50;i++){let i=a[0]*Math.random();i<2&&(i=a[0]);let h=Math.floor(Math.random()*i*2)-i,o=1;Math.random()>=.5&&(o=-1);let n=Math.floor(105*Math.random())+150,r=Math.floor(140*Math.random()),s=Math.floor(60*Math.random()),d="rgb("+n.toString()+","+r.toString()+","+s.toString()+")",c=kontra.Sprite({ttl:60,x:t,y:e,dx:h,dy:Math.sqrt(i*i-h*h)*o,color:d,ddy:.11,height:5,width:5,update(){this.collidesWith(p)&&(this.ttl=0),this.advance(),this.collidesWith(y)&&pIS&&l()}});pA.push(c)}}function x(){Lb=-200;let t=kontra.Sprite({height:80,width:160,x:-200,y:gR[1]-80,dx:AsS,ttl:600,pause:18,counter:0,i:1,image:h,update(){Lb==this.x&&(Lb+=this.dx),this.counter<=0&&(this.i<3?this.counter=this.pause:(this.i=0,this.counter=7*this.pause),this.x<c.width&&pIS&&function(t,e,i,h){let o=kontra.Sprite({x:t,y:e,v:8,q:Math.atan2(h-e,i-t),dx:0,dy:0,ttl:300,r:5,update(){this.collidesWith(y)&&(this.ttl=0,l()),this.advance()},render(){this.context.fillStyle="rgb(0,0,0)",this.context.beginPath(),this.context.arc(this.x,this.y,this.r,0,2*Math.PI),this.context.strokeStyle="rgba(203,255,0,0.97)",this.context.stroke(),this.context.fill()}});o.dx=Math.cos(o.q)*o.v,o.dy=Math.sin(o.q)*o.v,eB.push(o)}(e.x+e.width*Math.cos(e.rotation),e.y+e.width*Math.sin(e.rotation),y.x+y.width/2,y.y+y.height/2),this.i+=1),this.counter-=1,this.advance()}}),e=kontra.Sprite({height:10,width:120,anchor:{x:0,y:.5},x:t.x+t.width/2,y:t.y+t.height/2,ttl:600,dx:AsS,color:"black",update(){pIS&&(this.rotation=Math.atan2(y.y+y.height/2-t.y-t.height/2,y.x+y.width/2-t.x-t.width/2)),this.advance()}});eN.push(e),eN.push(t)}function g(){let t=[env,eB,eN,sP,pA,prE,Be];for(let e=0;e<t.length;e++)for(let i=0;i<t[e].length;i++)t[e][i].dx=0,t[e][i].dy=0,t[e][i].ddx=0,t[e][i].ddy=0}function f(t){let e=[];for(let t=0;t<11;t++){let i=[],h="rgb("+Math.floor(Math.random()*t*7).toString()+","+(Math.floor(155*Math.random())+100).toString()+","+Math.floor(Math.random()*t*7).toString()+")";0===t&&(h="rgb(0,100,0)"),1===t&&(h="rgb(10,130,10)"),2===t&&(h="rgb(20,160,20)"),i.push(h);for(let e=0;e<10;e++)Math.random()*(t+1)<=.99?i.push(1):i.push(0);e.push(i)}let i=kontra.Sprite({x:t,y:gR[1],dx:AsS,clLr:e,ttl:800,update(){0===this.x&&f(-100),this.advance()},render(){for(let t=0;t<11;t++){this.context.fillStyle=e[t][0];for(let i=0;i<10;i++)e[t][i+1]&&this.context.fillRect(this.x+10*i,this.y+10*t,10,10)}}});prE.push(i)}for(let t=0;100*t<c.width;t++)f(100*t);let p=kontra.Sprite({x:0,y:gR[1],height:c.height-gR[1],width:c.width,color:"#9f9f9f"});env.push(p),p.render();let y=kontra.Sprite({x:gR[0],y:gR[1]-100,dx:0,ddx:0,dy:0,ddy:.13,g:.1,vMax:5,reloading:0,height:100,width:48,animations:t.animations,anime:"walk",update(){this.currentAnimation.update(),this.reloading>0&&(this.reloading-=1),this.dx+=this.ddx,this.dx*=.98,Math.abs(this.dx)>this.vMax&&(this.dx=Math.sign(this.dx)*this.vMax),this.x+this.dx>c.width-100?(this.dx=0,this.x=c.width-100):this.x+this.dx<100&&(this.dx=0,this.x=100),this.y+this.height<gR[1]?(this.x+=this.dx,e(this,"fly")):e(this,"walk"),this.dy+=this.ddy,this.y+this.height+this.dy>=gR[1]?(this.dy=0,this.y=gR[1]-this.height):this.y+this.dy<100?(this.dy=0,this.y=100):this.y+=this.dy}});y.playAnimation("walk"),sP.push(y);let m=4;dJ&&(m=18);let M={x:1,y:.5};dJ&&(M={x:.5,y:.5});let u=28;dJ&&(u=80);let S=new kontra.Sprite({color:"black",width:u,height:m,anchor:M,rotation:0,update(){this.x=y.x+y.width/2,this.y=y.y+y.height/2,this.rotation=3.1416+Math.atan2(pointer.y-y.y-y.height/2,pointer.x-y.x-y.width/2),this.advance()}});sP.push(S),kontra.GameLoop({update(){if(dJ||document.monetization&&"started"===document.monetization.state&&(dJ=!0),pIS&&(s+=.1),!i0){let t=Math.floor(991*Math.random());t>=0&&t<=9&&function(t){let e=kontra.Sprite({height:40,width:80,x:t,y:-100,dy:0,ddy:.18,vMax:9,dx:0,ttl:600,animations:i.animations,update(){this.currentAnimation.update(),this.dy>this.vMax&&(this.ddy=0,this.dy=this.vMax),this.collidesWith(y)&&(this.ttl=0,d(this.x+this.width/2,this.y+this.height/2)),this.collidesWith(p)&&(this.ttl=0,d(this.x+this.width/2,gR[1]-5));for(let t=2;t<sP.length;t++)this.collidesWith(sP[t])&&(bD+=1,s+=15,sP[t].ttl=0,this.ttl=0,d(this.x+this.width/2,this.y+this.height/2));this.advance()}});eN.push(e),e.playAnimation("fall")}(Math.floor(Math.random()*(c.width-50))+50),t>9&&t<=12&&Lb>2*c.height/3&&x(),t>=0&&t<=2&&function(){let t=Math.floor(60*Math.random())+20,e=Math.floor(8*Math.random())+2,i=[],h=Math.floor(60*Math.random())+35;for(let o=0;o<h;o++){let h=t*Math.random(),o=h*e/t,n=1;Math.random()>.5&&(n=-1);let r=n*Math.floor(Math.random()*h),l=-Math.sqrt(o*o*(1-r*r/(h*h))),a="red";Math.random()>.9&&(a="rgb(200,176,117)"),i.push([r,l,a])}let o=kontra.Sprite({x:-t-10,y:gR[1]-3,clLr:i,dx:AsS,ttl:800,render(){for(let t=0;t<this.clLr.length;t++)this.context.fillStyle=this.clLr[t][2],this.context.fillRect(this.clLr[t][0]+this.x,this.clLr[t][1]+this.y,7,7)}});Be.push(o)}(),sP=sP.filter(t=>t.isAlive()),eN=eN.filter(t=>t.isAlive()),eB=eB.filter(t=>t.isAlive()),pA=pA.filter(t=>t.isAlive()),env=env.filter(t=>t.isAlive()),prE=prE.filter(t=>t.isAlive()),Be=Be.filter(t=>t.isAlive());for(let t=0;t<env.length;t++)env[t].update();for(let t=0;t<eB.length;t++)eB[t].update();for(let t=0;t<eN.length;t++)eN[t].update();for(let t=0;t<sP.length;t++)sP[t].update();for(let t=0;t<pA.length;t++)pA[t].update();for(let t=0;t<prE.length;t++)prE[t].update();for(let t=0;t<Be.length;t++)Be[t].update()}},render(){o.q-=.004,o.x=s3*Math.cos(o.q),o.y=s3*Math.sin(o.q);let t=ctx.createLinearGradient(o.x,o.y,-o.x,-o.y);t.addColorStop(0,"rgba(191,54,0,0.46)"),t.addColorStop(1,"rgba(0,0,0,0.46)"),ctx.fillStyle=t,ctx.fillRect(0,0,c.width,c.height);for(let t=0;t<env.length;t++)env[t].render();for(let t=0;t<eB.length;t++)eB[t].render();for(let t=0;t<eN.length;t++)eN[t].render();for(let t=2;t<sP.length;t++)sP[t].render();S.isAlive()&&sP[1].render(),y.isAlive()&&sP[0].render();for(let t=0;t<pA.length;t++)pA[t].render();for(let t=0;t<Be.length;t++)Be[t].render();for(let t=0;t<prE.length;t++)prE[t].render();let e=Math.floor(s).toString();i0?(ctx.fillStyle="black",(Math.floor(s)>Math.floor(hs)||1===nwdf)&&(nwdf=1,ctx.fillText("NEW HIGHSCORE!!",c.width-600,275),hs=Math.floor(s),setStoreItem("hs",hs),console.log("ugay)")),ctx.fillText("Click to retry",c.width-600,100,1e3),ctx.fillText("Score: "+e,c.width-600,50,1e3),ctx.fillText("Highscore: "+Math.floor(hs).toString(),c.width-600,150),bD>0&&ctx.fillText("Bombs destroyed: "+bD.toString(),c.width-600,200)):(ctx.fillStyle="black",ctx.fillText(e,c.width-42*(e.length+1),70,1e3))}}).start()}}};