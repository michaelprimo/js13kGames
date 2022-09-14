!function(t,e,i){"use strict";function s(t,e,i){switch(this.x=t*c,this.y=e*c,this.type=i,this.isCollected=!1,this.moveDirection=M,this.currentAnimationSprite=0,this.currentDisplayedImage=0,this.type){case x:this.spriteX=A,this.spriteY=D,this.speed=I,this.height=2;break;case u:this.spriteX=C,this.spriteY=O,this.speed=w,this.height=1;break;case m:this.spriteX=N,this.spriteY=Y,this.speed=P,this.height=2}}function a(){this.isJumping=!1,this.goLeft=!1,this.goRight=!1,t.addEventListener("keydown",function(t){if(rt.isLevelEnded)return void(32===t.keyCode&&rt.nextLevel());if(rt.displayStartScreen)return void(32===t.keyCode&&(rt.displayStartScreen=!1));switch(rt.isOver&&32===t.keyCode&&rt.start(),t.keyCode){case 32:case 38:case 87:this.isJumping||this.startJump();break;case 65:case 37:this.goLeft=!0,this.goRight=!1,this.spriteDirection=S;break;case 39:case 68:this.goLeft=!1,this.goRight=!0,this.spriteDirection=M}}.bind(this)),t.addEventListener("keyup",function(t){switch(t.keyCode){case 32:case 38:this.isJumping=!1,this.stopJump();break;case 65:case 37:this.goLeft=!1;break;case 39:case 68:this.goRight=!1}}.bind(this))}function r(){this.backgroundElement=e.getElementById("bg"),this.displayStartScreen=!0}var n=.5,h=8,o=7,l=4,c=32,g=16,p=c,y=2*c,f=3,d=2,v=12,u=1,x=2,m=3,S=-1,L=0,M=1,b=20,E=12,C=2,O=12,w=1.5,A=0,D=12,I=.8,k=24,R=2,N=3,Y=0,P=0,T=24,V=1,H=2,B=3,G=2*c,F=!1,J={data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,10,10,11,0,0,0,0,0,0,0,0,0,0,13,14,14,15,0,0,0,0,41,0,0,0,0,0,13,14,14,15,0,0,0,0,0,0,0,0,0,0,17,10,10,10,10,11,0,12,41,0,0,0,0,0,13,14,14,14,14,15,0,16,0,0,0,0,0,0,13,14,14,14,14,15,0,16,41,0,12,0,0,0,17,10,10,10,10,10,11,16,0,0,16,0,0,0,13,14,14,14,14,14,15,16,0,0,16,0,0,0,13,14,14,14,14,14,15,16,0,0,16,0,0,0,25,26,26,26,26,26,26,26,26,26,26,26,26,27],height:11,width:14,animalList:[{x:0,y:6,type:x},{x:0,y:0,type:u}]},U={data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,12,0,9,10,11,0,0,0,0,0,0,0,16,0,13,14,15,0,0,0,0,0,45,0,16,0,13,14,15,9,10,10,20,10,10,10,10,10,10,10,19,13,14,14,24,14,14,14,14,14,14,14,15,13,14,14,24,14,14,14,14,14,14,14,15,13,14,14,24,14,14,14,14,14,14,14,15],height:10,width:12,animalList:[{x:3,y:4,type:m}]},X=[{data:[0,0,0,0,0,0,41,0,0,41,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,41,0,0,0,0,0,0,0,0,16,0,0,29,30,30,30,30,30,30,30,30,31,0,0,0,0,0,0,0,45,45,0,0,0,0,9,10,10,10,11,0,0,0,0,0,0,0,0,9,10,11,0,0,0,0,9,10,11,0,12,0,0,13,14,14,14,15,33,33,33,33,33,33,33,33,13,14,15,33,33,33,33,13,14,15,0,16,0,0,13,14,14,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,37,37,13,14,15,12,16,0,0,13,21,10,10,19,37,37,37,37,37,37,37,37,13,14,15,37,37,37,37,13,21,19,16,16,0,0,13,13,14,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,37,37,13,13,15,16,16,0,0,18,13,14,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,37,37,13,13,15,10,11,0,0,22,13,14,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,37,37,13,13,15,14,15,45,0,22,13,14,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,37,25,26,26,26,26,26,27,0],height:11,width:27,animalList:[{x:19,y:9,type:x},{x:1,y:5,type:u}]},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,30,31,0,0,0,0,0,41,0,0,0,41,0,0,0,0,0,0,18,0,0,41,0,41,0,0,41,0,41,0,0,41,0,41,0,0,0,9,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,29,30,30,31,0,0,0,0,0,0,0,0,0,0,22,0,0,29,30,31,0,0,29,30,31,0,0,29,30,31,0,0,0,13,15,33,33,33,33,9,11,0,0,0,29,30,30,31,0,0,0,0,22,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,13,15,37,37,37,37,13,15,33,33,33,33,9,11,0,0,0,0,0,22,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,13,15,37,37,37,37,13,15,37,37,37,37,13,15,33,33,33,33,33,22,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,13,15,37,37,37,37,13,15,37,37,37,37,13,15,37,37,37,37,37],height:10,width:38,animalList:[{x:9,y:5,type:x},{x:24,y:4,type:u}]},{data:[0,0,0,0,29,30,30,30,30,30,30,30,30,31,0,0,0,0,0,0,29,30,30,31,0,0,0,0,0,9,10,11,0,0,0,0,0,0,0,0,9,10,10,10,10,10,10,11,0,0,9,10,11,0,0,0,13,14,15,0,0,0,41,41,0,0,0,13,14,14,14,14,14,14,15,0,0,13,14,15,0,0,0,13,14,15,0,41,0,0,0,0,41,0,13,14,14,14,14,14,14,15,0,0,13,14,15,0,0,9,23,14,15,33,33,33,33,33,33,33,33,13,14,14,14,14,14,14,15,33,33,13,14,15,0,0,13,15,14,15,37,37,37,37,37,37,37,37,13,14,14,14,14,14,14,15,37,37,13,14,15,0,0,13,15,14,15,37,37,37,37,37,37,37,37,13,14,14,14,14,14,14,15,37,37,13,14,15,0,9,10,10,23,15,37,37,37,37,37,37,37,37,17,10,23,14,14,21,10,19,37,37,17,23,15,0,13,14,14,15,15,37,37,37,9,11,37,37,37,13,14,15,14,14,13,14,15,37,37,13,15,15,0,13,14,14,15,15,37,37,37,13,15,37,37,37,13,14,15,14,14,13,14,15,37,37,13,15,15,0,13,14,14,21,19,37,37,37,13,15,37,37,37,13,14,15,14,14,13,14,15,37,37,13,15,15,0,13,14,14,13,15,37,37,37,13,15,37,37,37,13,14,15,14,14,13,14,15,37,37,13,15,15,0,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,15,0],height:13,width:27,animalList:[{x:18,y:6,type:x},{x:7,y:-1,type:u}]},{data:[0,0,0,0,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,0,0,0,0,9,10,10,11,0,0,0,0,0,0,0,0,9,10,11,0,0,9,10,11,0,0,9,10,11,0,0,13,14,14,15,0,0,0,0,0,0,0,0,13,14,15,0,0,13,14,15,0,0,13,14,15,0,0,13,14,14,15,0,0,0,0,0,0,0,0,13,14,15,0,0,13,14,15,0,0,13,14,15,0,0,13,14,14,15,33,33,33,33,33,33,33,33,13,14,15,33,33,13,14,15,33,33,13,14,15,0,9,10,23,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,13,14,15,37,37,13,14,15,0,13,14,15,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,13,14,15,37,37,13,14,15,0,13,14,15,14,15,37,37,37,37,37,37,37,37,13,14,15,37,37,13,14,15,37,37,13,14,15,0,13,14,15,14,21,11,37,37,37,37,37,37,37,13,14,15,37,37,13,14,15,37,37,17,23,15,0,13,14,15,14,13,15,37,37,37,37,37,37,37,17,10,19,37,37,13,21,19,37,37,13,15,15,0,13,14,15,14,13,15,37,37,9,11,37,37,37,13,14,15,37,37,13,13,15,37,37,13,15,15,0,13,14,15,14,13,15,37,37,13,15,37,37,37,13,14,15,37,37,13,13,15,37,37,13,15,15,0],height:12,width:27,animalList:[{x:19,y:8,type:x},{x:7,y:-1,type:u}]},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,41,0,0,41,0,0,41,0,0,41,0,0,41,0,0,41,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,18,0,0,0,0,0,18,0,0,22,0,0,0,0,0,0,0,0,9,11,0,22,0,0,0,0,0,22,0,0,0,0,0,22,0,0,22,0,0,0,0,0,18,0,0,13,15,0,22,0,0,0,0,0,22,0,0,0,0,0,22,0,0,22,0,0,18,0,0,22,0,0,18,15,0,22,33,33,18,33,33,22,33,33,18,33,33,22,33,33,22,33,33,22,33,33,22,33,33,22,15,0,22,37,37,22,37,37,22,37,37,22,37,37,22,37,37,22,37,37,22,37,37,22,37,37,22,15,0,22,25,27,22,37,37,22,37,37,22,25,27,22,37,37,22,37,37,22,37,37,22,37,37,22,15,0],height:10,width:27,animalList:[{x:1,y:8,type:x},{x:11,y:8,type:u}]},{data:[0,9,10,10,11,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,15,0,41,0,12,0,0,0,0,0,0,0,0,13,14,14,15,0,0,0,16,0,12,0,0,0,0,0,9,10,10,23,15,0,41,0,16,0,16,0,41,0,0,0,13,14,14,15,15,0,0,0,16,0,16,41,0,41,0,0,13,14,14,15,15,9,10,10,10,11,41,0,0,0,41,0,13,14,14,15,15,13,14,14,14,15,16,0,41,12,0,0,13,14,14,21,10,10,10,23,14,15,16,0,0,16,12,0,13,14,14,13,14,14,14,21,10,10,10,11,41,16,16,0,13,14,14,13,14,14,14,13,14,14,14,15,0,16,16,0,13,14,14,13,14,14,14,13,14,14,14,15,0,16,16,0,13,21,10,10,23,14,14,13,14,14,14,15,9,10,11,0,13,13,14,14,15,14,14,13,14,14,14,15,13,14,15,0,13,13,14,14,15,14,14,13,14,14,14,15,13,14,15,0,13,13,14,14,15,14,14,13,21,10,10,10,23,14,15,0,13,13,21,10,10,23,14,13,13,14,14,14,15,14,15,0,13,13,13,14,14,15,14,13,13,14,14,14,15,14,15,0,13,13,13,14,14,15,14,13,13,14,14,14,15,14,15,0,13,13,13,14,14,15,14,13,13,14,14,14,15,14,15,0,13,13,13,14,14,15,14,13,13,14,14,14,15,14,15,0],height:20,width:16,animalList:[{x:2,y:14,type:x},{x:1,y:-1,type:u}]},{data:[0,0,0,0,0,9,10,10,11,0,0,0,0,0,0,0,0,0,0,0,12,13,33,33,15,0,12,0,0,0,0,0,0,0,0,0,16,13,37,37,15,0,16,0,0,0,0,0,9,10,10,11,16,13,37,37,15,0,16,0,41,0,0,0,13,14,14,15,16,13,37,37,15,0,16,0,0,0,0,0,13,14,14,15,16,13,37,37,21,10,11,0,41,0,0,0,13,14,14,15,16,13,37,37,13,14,15,0,0,0,0,0,13,14,21,10,11,13,37,37,13,14,15,0,41,0,0,0,13,14,13,14,15,13,37,37,13,14,15,0,0,0,0,0,13,14,13,14,15,13,37,37,13,14,15,0,41,0,0,0,13,14,13,14,15,13,37,37,13,14,15,0,0,45,0,0,13,21,10,10,23,13,37,37,13,14,15,0,9,10,11,0,13,13,14,14,15,13,37,37,13,14,15,0,13,14,15,0,13,13,14,14,15,13,37,37,13,14,15,0,13,14,15,0,13,13,14,14,15,13,37,37,13,14,15,0,13,14,15,0,13,13,21,10,10,23,37,37,13,14,15,0,13,33,15,0,13,13,13,14,14,15,37,37,29,30,30,30,31,37,15,0,13,13,13,14,14,15,37,37,13,14,18,14,13,37,15,0,13,13,13,14,14,15,37,37,13,14,22,14,13,37,15,0,13,13,13,14,14,15,37,37,13,14,22,14,13,37,15,0],height:20,width:16,animalList:[{x:2,y:14,type:x},{x:7,y:-1,type:u}]},{data:[0,0,0,0,9,11,29,30,30,30,30,31,0,0,0,0,0,0,0,0,0,0,0,0,13,15,33,33,33,33,33,33,33,33,33,33,9,11,0,0,0,12,0,0,13,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,0,16,0,45,13,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,0,16,9,10,23,15,37,37,37,37,37,37,37,29,30,31,13,15,0,0,0,16,13,14,15,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,9,10,23,14,15,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,13,14,15,14,15,15,37,37,37,29,30,30,31,37,37,37,13,15,0,0,13,14,15,14,15,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,13,14,15,14,15,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,13,14,15,14,15,15,37,37,37,37,37,37,37,37,37,37,13,15,0,0,13,14,15,14,29,30,31,37,37,37,37,37,37,37,37,37,13,15,45,0,13,14,15,14,15,18,37,37,37,37,37,37,37,37,37,37,17,10,11,0,13,21,10,23,15,22,37,37,37,37,37,37,37,37,37,37,13,14,15,0,13,13,14,15,15,22,37,37,37,37,37,37,37,37,37,37,13,14,15,0,13,13,14,15,15,22,37,29,30,31,37,37,37,37,37,37,13,14,15,0,13,13,14,15,15,22,37,37,18,37,37,37,37,29,30,31,13,14,15,0,13,13,14,15,15,22,37,37,22,37,37,37,37,37,18,37,13,14,15,0,13,13,14,15,15,22,37,37,22,37,37,37,37,37,22,37,13,14,15,0],height:19,width:20,animalList:[{x:9,y:6,type:x},{x:7,y:-1,type:u}]}],W={1:X.length-5,2:X.length-3,3:X.length},K=3,q=[9,10,11,17,19,20,21,23],Q=[18,22,25,26,27,29,30,31],Z=[33,37,41,45],j=[9,10,11,12,13,14,15,16,17,18,19,21,22,23,25,26,27],z=4,$=function(){};$.prototype.create=function(){function t(t){for(var e,i,s=t.length;s;e=Math.floor(Math.random()*s),i=t[--s],t[s]=t[e],t[e]=i);return t}this.currentAnimationSprite=0,this.currentDisplayedImage=0,this.imageList=[];var e=t(X);this.blockList=[];for(var i=0;i<W[rt.levelNumber];++i)this.blockList.push(e[i]);this.blockList.push(J),this.blockList.unshift(U),this.designOffset=Math.random()>.5?0:12,this.width=0,this.height=0,this.cellList=[],this.animalList=[];for(var a in this.blockList)this.height=Math.max(this.blockList[a].height,this.height);for(var a in this.blockList){for(var r=this.blockList[a],n=this.height-r.height,h=0;h<n*r.width;++h)"undefined"==typeof this.cellList[Math.floor(h/r.width)]&&(this.cellList[Math.floor(h/r.width)]=[]),this.cellList[Math.floor(h/r.width)].push(0);for(var h in r.data){var o=Math.floor(h/r.width)+n;"undefined"==typeof this.cellList[o]&&(this.cellList[o]=[]),this.cellList[o].push(r.data[h])}for(var c in r.animalList){var g=r.animalList[c];this.animalList.push(new s(g.x+this.width+1,g.y-(r.height-E),g.type))}this.width+=r.width}for(var p=0;l>p;++p)tt.clearRect(0,0,_.width,_.height),this.imageList.push(this.generateImage(p));this.offsetY=E-this.height,F=!0},$.prototype.generateImage=function(t){var i=e.createElement("canvas");i.width=this.width*c/2,i.height=this.height*c/2;var s=i.getContext("2d");for(var a in this.cellList)for(var r in this.cellList[a]){var n=this.cellList[a][r]-1;if(!(0>n)){-1!==Z.indexOf(n+1)&&(n+=t);var h=n%z,o=Math.floor(n/z);-1!==j.indexOf(n+1)&&(o+=this.designOffset),s.drawImage(rt.tileSet,h*c/2,o*g,g,g,c*r/2,c*a/2,g,g)}}var l=new Image;return l.src=i.toDataURL(),l},$.prototype.getCellState=function(t,e){if(0>t||e-this.offsetY<0||e-this.offsetY>=this.height||this.cellList[e-this.offsetY].length<t)return B;var i=this.cellList[e-this.offsetY][t];return-1!==q.indexOf(i)?V:-1!==Q.indexOf(i)?H:B},$.prototype.updatePosition=function(){at.hasBlockCollision||(this.x-=1.2*at.moveDirection*f),this.y=this.offsetY*c+(at.y<G?G-at.y:0),(rt.levelNumber<K&&this.x>4*c||rt.levelNumber>=K&&this.x>5*c)&&(rt.isLevelEnded=!0,rt.endTime=+new Date)};var _=e.getElementById("peach");_.width=_.offsetWidth,_.height=_.offsetHeight;var tt=_.getContext("2d"),et=_.width,it=_.height;s.prototype.updatePosition=function(){if(this.x+=this.speed*this.moveDirection,this.moveDirection===S){var t=st.getCellState(Math.floor(this.x/c)-1,Math.floor(this.y/c)),e=st.getCellState(Math.floor(this.x/c)-1,Math.floor(this.y/c)+1);(t===H||e===B)&&this.setOppositeDirection()}else{var i=st.getCellState(Math.floor(this.x/c),Math.floor(this.y/c)),s=st.getCellState(Math.floor(this.x/c),Math.floor(this.y/c)+1);(i===H||s===B)&&this.setOppositeDirection()}var a=this.x+st.x-at.x,r=this.y-at.y;a>0&&c>a&&r>=-c&&c>=r&&(this.isCollected=!0,++rt.levelScore)},s.prototype.setOppositeDirection=function(){this.moveDirection=this.moveDirection===S?M:S},a.prototype.startJump=function(){this.isOnGround&&(this.currentVelocityY=-v,this.isOnGround=!1,this.isJumping=!0)},a.prototype.stopJump=function(){this.currentVelocityY<-4&&(this.currentVelocityY=-4)},a.prototype.startFall=function(){this.isOnGround&&(this.currentVelocityY=.5,this.isOnGround=!1)},a.prototype.stopFall=function(){this.currentVelocityY=0,this.isOnGround=!0,this.y=Math.floor(this.y/c)*c},a.prototype.updatePosition=function(){var t=!1,e=(st.x-_.width/2+p)/c,i=Math.floor(this.y/c);if(this.goLeft?this.moveDirection=S:this.goRight?this.moveDirection=M:(this.moveDirection=L,this.currentSprite=0),this.moveDirection!==L)if(++this.currentAnimationSprite>h&&(this.currentAnimationSprite=0,this.currentSprite=++this.currentSprite%2),this.hasBlockCollision=!1,this.moveDirection===S){var s=st.getCellState(-Math.floor(e+.5*p/c),i),a=st.getCellState(-Math.floor(e+.5*p/c),i+1),r=st.getCellState(-Math.floor(e+.5*p/c),Math.ceil(this.y/c)+1);(s===H||a===H||r===H)&&(this.hasBlockCollision=!0)}else{var o=st.getCellState(-Math.floor(e-.5*p/c),i),l=st.getCellState(-Math.floor(e-.5*p/c),i+1),g=st.getCellState(-Math.floor(e-.5*p/c),Math.ceil(this.y/c)+1);(o===H||l===H||g===H)&&(this.hasBlockCollision=!0)}if(this.isOnGround||(this.currentSprite=d,this.currentVelocityY=Math.min(this.currentVelocityY+n,11),this.y+=this.currentVelocityY),this.y>E*c)return--rt.lifeNumber,void(rt.lifeNumber<=0?rt.over():rt.reset());if(this.currentVelocityY>0||0===this.currentVelocityY&&this.moveDirection!==L){var r=st.getCellState(-Math.floor(e+.4*p/c),Math.floor((this.y+y)/c)),g=st.getCellState(-Math.floor(e-.4*p/c),Math.floor((this.y+y)/c)),f=st.getCellState(-Math.floor(e),Math.floor((this.y+y)/c));f===V||r===H||g===H?this.currentVelocityY>0&&(this.y>=0&&this.y%c<=v||this.y<0&&this.y%c<=-v)&&(this.stopFall(),this.currentSprite=0,t=!0):this.startFall()}else if(this.currentVelocityY<0){var s=st.getCellState(-Math.floor(e+.2*p/c),i),o=st.getCellState(-Math.floor(e-.2*p/c),i);(s===H||o===H)&&(this.currentVelocityY=0)}},r.prototype.draw=function(){if(F){var t=+new Date;tt.clearRect(0,0,et,it);for(var e in st.animalList){var i=st.animalList[e];if(!i.isCollected){switch(tt.save(),i.type){case x:case u:continue;case m:if(++i.currentAnimationSprite>T?(tt.translate(Math.floor(st.x)+i.x,st.y+i.y),tt.scale(-1,1)):tt.translate(Math.floor(st.x)+i.x-c,st.y+i.y),this.isLevelEnded&&this.levelNumber<K){i.y+=2;i.y}}tt.translate(0,-st.offsetY*c),tt.drawImage(rt.tileSet,(i.spriteX+i.currentDisplayedImage)*g,i.spriteY*g,g,g*i.height,0,0,c,c*i.height),tt.restore()}}++st.currentAnimationSprite>o&&(st.currentAnimationSprite=0,st.currentDisplayedImage=++st.currentDisplayedImage%l);var s=st.imageList[st.currentDisplayedImage];tt.save(),tt.scale(2,2),tt.drawImage(s,Math.floor(st.x)/2,st.y/2),tt.restore();for(var e in st.animalList){var i=st.animalList[e];if(!i.isCollected){switch(tt.save(),i.type){case x:++i.currentAnimationSprite>k&&(i.currentAnimationSprite=0,i.currentDisplayedImage=++i.currentDisplayedImage%R),i.moveDirection===M?(tt.translate(Math.floor(st.x)+i.x,st.y+i.y-c),tt.scale(-1,1)):tt.translate(Math.floor(st.x)+i.x-c,st.y+i.y-c);break;case u:st.currentDisplayedImage%2===0?(tt.translate(Math.floor(st.x)+i.x,st.y+i.y),tt.scale(-1,1)):tt.translate(Math.floor(st.x)+i.x-c,st.y+i.y);break;case m:continue}tt.translate(0,-st.offsetY*c),tt.drawImage(rt.tileSet,(i.spriteX+i.currentDisplayedImage)*g,i.spriteY*g,g,g*i.height,0,0,c,c*i.height),tt.restore()}}if(tt.save(),tt.translate(at.x,Math.floor(Math.max(G,at.y))),at.spriteDirection===S&&tt.scale(-1,1),tt.drawImage(rt.tileSet,at.currentSprite*p/2,0,p/2,y/2,-p/2,0,p,y),tt.restore(),this.isOver||(nt.text({ctx:tt,x:10,y:10,text:"COLLECTED: "+this.levelScore+"/"+(2*W[rt.levelNumber]+2),valign:"top",halign:"left",scale:2,vspacing:10,hspacing:2,color:"rgb(255,255,255)"}),nt.text({ctx:tt,x:550,y:10,text:"LIFE: "+this.lifeNumber,valign:"top",halign:"left",scale:2,vspacing:10,hspacing:2,color:"rgb(255,255,255)"}),nt.text({ctx:tt,x:450,y:10,text:"LEVEL: "+this.levelNumber,valign:"top",halign:"left",scale:2,vspacing:10,hspacing:2,color:"rgb(255,255,255)"})),(this.displayStartScreen||this.isOver)&&(tt.beginPath(),tt.rect(0,0,et,it),tt.fillStyle="rgba(0, 0, 0, 0.8)",tt.fill(),nt.text({ctx:tt,x:210,y:30,text:"SUPER",valign:"top",halign:"left",scale:5,vspacing:10,hspacing:2,color:"rgb(0, 20, 222)"}),nt.text({ctx:tt,x:210,y:65,text:"PEACH",valign:"top",halign:"left",scale:5,vspacing:10,hspacing:2,color:"rgb(29, 135, 0)"}),nt.text({ctx:tt,x:320,y:65,text:"WORLD",valign:"top",halign:"left",scale:5,vspacing:10,hspacing:2,color:"rgb(228, 0, 10)"}),this.displayStartScreen&&(nt.text({ctx:tt,x:et/2,y:120,text:"PEACH IS BORED AND DECIDES TO FIND MARIO.\nAS HER DRESS HAS NO POCKET SHE CANNOT COLLECT COINS!\nBUT AS A PRINCESS SHE CAN COLLECT THE ANIMALS SHE MEETS.",valign:"top",halign:"center",scale:2,vspacing:12,hspacing:2,color:"rgb(255, 255,255)"}),nt.text({ctx:tt,x:et/2,y:220,text:"FIND MARIO WHILE COLLECTING GOOMBAS AND TURTLES.",valign:"top",halign:"center",scale:2,vspacing:12,hspacing:2,color:"rgb(255, 196,0)"}),nt.text({ctx:tt,x:20,y:330,text:"MOVE: ARROWS/WASD\nJUMP: SPACE/UP",valign:"top",halign:"left",scale:2,vspacing:12,hspacing:2,color:"rgba(255, 255,255, 0.7)"})),this.isOver&&nt.text({ctx:tt,x:et/2,y:170,text:"GAME OVER",valign:"top",halign:"center",scale:4,vspacing:12,hspacing:2,color:"rgb(255, 196,0)"}),nt.text({ctx:tt,x:et/2,y:250,text:"PRESS SPACE TO "+(this.isOver?"RE":"")+"START",valign:"top",halign:"center",scale:2,vspacing:12,hspacing:2,color:"rgb(29, 135, 0)"})),this.isLevelEnded){var a=120,r="",n="PRESS SPACE TO CONTINUE",h=2e3;t-this.endTime>1e3&&(r="OH! MARIO"),this.levelNumber===K&&(n="THANK YOU FOR PLAYING! PRESS SPACE TO RESTART GAME IN 2X SPEED!",h=4500,a=50,t-this.endTime>2e3&&(r="OH! MARIO\nMARIO"),t-this.endTime>3500&&(r="OH! MARIO\nMARIO\n\nTHANK YOU PEACH")),nt.text({ctx:tt,x:et/2,y:a,text:r,valign:"top",halign:"center",scale:4,vspacing:12,hspacing:2,color:"rgb(40, 40, 40)"}),t-this.endTime>h&&nt.text({ctx:tt,x:et/2,y:350,text:n,valign:"top",halign:"center",scale:2,vspacing:12,hspacing:2,color:"rgb(70, 70, 70)"})}}},r.prototype.updateBackgroundPosition=function(){this.backgroundElement.style.backgroundPositionX=Math.floor(.5*st.x)+"px",this.backgroundElement.style.backgroundPositionY=Math.floor(.3*st.y+c)+"px",e.getElementById("game").style.backgroundPositionY=Math.floor(.05*st.y)+"px"},r.prototype.reset=function(){st.x=-(st.width-b)*c;for(var t in st.animalList)st.animalList[t].isCollected=!1;at.currentAnimationSprite=0,at.currentSprite=0,at.x=c*b/2,at.y=c*(E-3),at.currentVelocityY=0,at.moveDirection=L,at.spriteDirection=S,at.hasBlockCollision=!1,this.levelScore=0,this.isLevelEnded=!1},r.prototype.start=function(){st=new $,at=new a,this.levelNumber=0,this.score=0,this.isOver=!1,this.levelScore=0,this.lifeNumber=3,this.tileSet=new Image,this.tileSet.src="assets/img/tileset.png",this.tileSet.addEventListener("load",function(){this.nextLevel(),this.loop()}.bind(this))},r.prototype.nextLevel=function(){this.isLevelEnded=!1,this.endTime=0,this.score+=this.levelScore,this.levelScore=0,++this.levelNumber,this.levelNumber>K&&this.start(),st.create(),this.reset()},r.prototype.over=function(){this.isOver=!0,tt.restore(),tt.beginPath(),tt.rect(0,0,et,it),tt.fillStyle="rgba(0, 0, 0, 0.8)",tt.fill()},r.prototype.loop=function(){if(this.isOver||t.requestAnimationFrame(this.loop.bind(this)),!this.isLevelEnded){at.updatePosition(),st.updatePosition();for(var e in st.animalList)st.animalList[e].isCollected||st.animalList[e].updatePosition()}this.updateBackgroundPosition(),this.draw()};var st,at,rt=new r;rt.start();var nt={};nt.definitions={},nt.textLine=function(t){for(var e=t.text.length,i=5,s=0,a=0;e>a;++a){for(var r=nt.definitions.letters[t.text.charAt(a)]||nt.definitions.letters.unknown,n=0;i>n;++n)for(var h=0;i>h;++h)1===r[n][h]&&t.ctx.rect(t.x+h*t.scale+(s*t.scale+t.hspacing*a),t.y+n*t.scale,t.scale,t.scale);s+=r[0].length}},nt.text=function(t){tt.beginPath();var e=5,i=e*t.scale,s=t.text.split("\n"),a=s.slice(0),r=s.length,n=a.sort(function(t,e){return e.length-t.length})[0],h=n.length*i+(n.length-1)*t.hspacing,o=r*i+(r-1)*t.vspacing,l=t.x,c=t.y,g=t.x+h,p=t.y+o;"center"==t.halign?(l=t.x-h/2,g=t.x+h/2):"right"==t.halign&&(l=t.x-h,g=t.x),"center"==t.valign?(c=t.y-o/2,p=t.y+o/2):"bottom"==t.valign&&(c=t.y-o,p=t.y);for(var y=0;r>y;++y){for(var f=s[y],d=(f.length-1)*t.hspacing,v=t.x,u=t.y+(i+t.vspacing)*y,x=0;x<f.length;++x){var m=nt.definitions.letters[f.charAt(x)]||nt.definitions.letters.unknown;d+=m[0].length*t.scale}"center"==t.halign?v=t.x-d/2:"right"==t.halign&&(v=t.x-d),"center"==t.valign?u-=o/2:"bottom"==t.valign&&(u-=o),nt.textLine({ctx:t.ctx,x:v,y:u,text:f,hspacing:t.hspacing,scale:t.scale})}tt.fillStyle=t.color,tt.fill()},nt.definitions.letters={1:[[,1,0],[1,1,0],[,1,0],[,1,0],[1,1,1]],2:[[,1,1,0],[1,,,1],[,,1,0],[,1,,0],[1,1,1,1]],3:[[1,1,1,0],[,,,1],[,1,1,0],[,,,1],[1,1,1,0]],4:[[,,1,1],[,1,,1],[1,,,1],[1,1,1,1],[,,,1]],5:[[1,1,1,1],[1,,,0],[1,1,1,1],[,,,1],[1,1,1,0]],6:[[,1,1,0],[1,,,0],[1,1,1,0],[1,,,1],[,1,1,0]],7:[[1,1,1,1],[,,,1],[,,1,0],[,,1,0],[,,1,0]],8:[[,1,1,0],[1,,,1],[,1,1,0],[1,,,1],[,1,1,0]],9:[[,1,1,0],[1,,,1],[,1,1,1],[,,,1],[,1,1,0]],0:[[,1,1,0],[1,,,1],[1,,,1],[1,,,1],[,1,1,0]],A:[[,1,1,0],[1,,,1],[1,1,1,1],[1,,,1],[1,,,1]],B:[[1,1,0],[1,,1],[1,1,0],[1,,1],[1,1,0]],C:[[,1,1],[1,,0],[1,,0],[1,,0],[,1,1]],D:[[1,1,0],[1,,1],[1,,1],[1,,1],[1,1,0]],E:[[1,1,1],[1,,0],[1,1,1],[1,,0],[1,1,1]],F:[[1,1,1],[1,,0],[1,1,1],[1,,0],[1,,0]],G:[[,1,1,1],[1,,,0],[1,,1,1],[1,,,1],[,1,1,0]],H:[[1,,,1],[1,,,1],[1,1,1,1],[1,,,1],[1,,,1]],I:[[1,1,1],[,1,0],[,1,0],[,1,0],[1,1,1]],J:[[,,,1],[,,,1],[,,,1],[1,,,1],[,1,1,0]],K:[[1,,,1],[1,,1,0],[1,1,,0],[1,,1,0],[1,,,1]],L:[[1,,0],[1,,0],[1,,0],[1,,0],[1,1,1]],M:[[1,,,,1],[1,1,,1,1],[1,,1,,1],[1,,,,1],[1,,,,1]],N:[[1,,,1],[1,1,,1],[1,,1,1],[1,,,1],[1,,,1]],O:[[,1,1,0],[1,,,1],[1,,,1],[1,,,1],[,1,1,0]],P:[[1,1,1,0],[1,,,1],[1,1,1,0],[1,,,0],[1,,,0]],Q:[[,1,1,0],[1,,,1],[1,,,1],[1,,1,0],[,1,,1]],R:[[1,1,1,0],[1,,,1],[1,1,1,0],[1,,1,0],[1,,,1]],S:[[,1,1,1],[1,,,0],[,1,1,0],[,,,1],[1,1,1,0]],T:[[1,1,1],[,1,0],[,1,0],[,1,0],[,1,0]],U:[[1,,,1],[1,,,1],[1,,,1],[1,,,1],[,1,1,0]],V:[[1,,,,1],[1,,,,1],[,1,,1,0],[,1,,1,0],[,,1,,0]],W:[[1,,1,,1],[1,,1,,1],[1,,1,,1],[,1,,1,0],[,1,,1,0]],X:[[1,,,1],[1,,,1],[,1,1,0],[1,,,1],[1,,,1]],Y:[[1,,,1],[1,,,1],[1,1,1,1],[,,,1],[1,1,1,0]],Z:[[1,1,1,1],[,,,1],[,1,1,0],[1,,,0],[1,1,1,1]]," ":[[,,0],[,,0],[,,0],[,,0],[,,0]],",":[[,,0],[,,0],[,,0],[1,,0],[1,,0]],".":[[,,0],[,,0],[,,0],[,,0],[1,,0]],"!":[[1,,0],[1,,0],[1,,0],[,,0],[1,,0]],"/":[[,,,,1],[,,,1,0],[,,1,,0],[,1,,,0],[1,,,,0]],":":[[,,0],[,1,0],[,,0],[,1,0],[,,0]]}}(window,document);