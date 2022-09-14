var Player=function(){function e(e,r,a,s,o,l,d,c){var u=this;n=c.canvas||document.getElementById("canvas1"),i=n.getContext("2d"),this.x=e,this.y=r,this.h=triangleSideLength,this.direction=o,this.colour=a,this.username=l,this.lastX=e,this.lastY=r,this.lastDirection=o,this.mapX=e,this.mapY=r,this.luck=d,this.socketId=s,this.activePlayer=c.activePlayer||!1,this.dead=!1,this.playerSound=gs.get("shipSound").vol(s==socketId?0:0).start(),this.player=new Ship({colour:this.colour,size:20}),this.luckBar=new Shape({edges:4,fill:!0,offsetX:20,offsetY:10,width:5,offsetRotation:-45}),this.orb=new Shape({edges:30,fill:!0,offsetX:60,width:5,length:5}),this.rotationOffset=0,this.checkCollision=function(){var e=i.getImageData(u.x,u.y,1,1).data,t=findObjectICollidedWith(e);t!==!1&&playerEvent({type:"hit",data:t})},this.draw=function(){u.rotationOffset+=3,u.player.draw(u.x+(u.socketId!=socketId?mapOffsetX:0),u.y+(u.socketId!=socketId?mapOffsetY:0),u.direction),gs.playerPosition(u.x,u.y),u.playerSound.at(u.x,u.y),u.luckBar.setColour(t(luck)).setLength(luck/2).draw(u.x+(u.socketId!=socketId?mapOffsetX:0),u.y+(u.socketId!=socketId?mapOffsetY:0),u.direction)},this.kill=function(){i.beginPath(),i.textAlign="center",i.textBaseline="middle",i.fillStyle="white",i.fillText("You dedboi! you got: "+globalScoreThatJarredWillNeedToRefactor,n.width/2,n.height/2),i.font="20px Lucida Console",i.closePath(),u.dead=!0},this.updateCoords=function(e,t,i){if(!u.dead){var r;"undefined"==typeof i&&(r=e,i=t),socketId==this.socketId?r&&(moveRate=0,this.x>n.width-Math.floor(n.width/4)&&Math.abs(mapOffsetX)<map.width-n.width?0>r?this.direction>0&&this.direction<180?mapOffsetX>n.width-map.width?0!=moveX(this.x,this.y,r,i,this.h/2,-1)&&(mapOffsetX+=moveSteps*Math.sin(i*Math.PI/180)):mapOffsetX=n.width-map.width:this.x-=moveX(this.x,this.y,r,i,this.h/2,-1):this.direction<360&&this.direction>180?mapOffsetX>n.width-map.width?0!=moveX(this.x,this.y,r,i,this.h/2,1)&&(mapOffsetX+=moveSteps*Math.sin(i*Math.PI/180)):mapOffsetX=n.width-map.width:this.x-=moveX(this.x,this.y,r,i,this.h/2,1):this.x<0+Math.floor(n.width/4)&&0>mapOffsetX?0>r?this.direction<360&&this.direction>180?0>mapOffsetX?0!=moveX(this.x,this.y,r,i,this.h/2,1)&&(mapOffsetX-=moveSteps*Math.abs(Math.sin(i*Math.PI/180))):mapOffsetX=0:this.x-=moveX(this.x,this.y,r,i,this.h/2,1):this.direction>0&&this.direction<180?0>mapOffsetX?0!=moveX(this.x,this.y,r,i,this.h/2,-1)&&(mapOffsetX+=moveSteps*Math.abs(Math.sin(i*Math.PI/180))):mapOffsetX=0:this.x-=moveX(this.x,this.y,r,i,this.h/2,-1):this.x<this.h/2?0>r?this.direction<360&&this.direction>180||(this.x-=moveX(this.x,this.y,r,i,this.h/2,1)):this.direction>0&&this.direction<180||(this.x-=moveX(this.x,this.y,r,i,this.h/2,-1)):this.x>n.width-this.h/2?0>r?this.direction>0&&this.direction<180||(this.x-=moveX(this.x,this.y,r,i,this.h/2,-1)):this.direction<360&&this.direction>180||(this.x-=moveX(this.x,this.y,r,i,this.h/2,1)):this.x-=this.direction<360&&this.direction>180?moveX(this.x,this.y,r,i,this.h/2,1):moveX(this.x,this.y,r,i,this.h/2,-1),this.y>n.height-Math.floor(n.height/4)&&Math.abs(mapOffsetY)<map.height-n.height?0>r?this.direction>90&&this.direction<270?mapOffsetY>n.height-map.height?0!=moveY(this.x,this.y,r,i,this.h/2,1)&&(mapOffsetY+=moveSteps*Math.abs(Math.cos(i*Math.PI/180))):mapOffsetY=n.height-map.height:this.y+=r*Math.cos(i*Math.PI/180):this.direction<90||this.direction>270?mapOffsetY>n.height-map.height?0!=moveY(this.x,this.y,r,i,this.h/2,-1)&&(mapOffsetY-=moveSteps*Math.abs(Math.cos(i*Math.PI/180))):mapOffsetY=n.height-map.height:this.y-=r*Math.cos(i*Math.PI/180):this.y<0+Math.floor(n.height/4)&&0>mapOffsetY?0>r?this.direction<90||this.direction>270?0>mapOffsetY?0!=moveY(this.x,this.y,r,i,this.h/2,-1)&&(mapOffsetY-=moveSteps*Math.cos(i*Math.PI/180)):mapOffsetY=0:this.y+=r*Math.cos(i*Math.PI/180):this.direction>90&&this.direction<270?0>mapOffsetY?0!=moveY(this.x,this.y,r,i,this.h/2,1)&&(mapOffsetY-=moveSteps*Math.cos(i*Math.PI/180)):mapOffsetY=0:this.y+=r*Math.cos(i*Math.PI/180):this.y<this.h/2?0>r?this.direction<90||this.direction>270||(this.y+=r*Math.cos(i*Math.PI/180)):this.direction>90&&this.direction<270||(this.y+=r*Math.cos(i*Math.PI/180)):this.y>n.height-this.h/2?0>r?this.direction>90&&this.direction<270||(this.y+=r*Math.cos(i*Math.PI/180)):this.direction<90||this.direction>270||(this.y+=r*Math.cos(i*Math.PI/180)):this.y+=this.direction>90&&this.direction<270?moveY(this.x,this.y,r,i,this.h/2,1):moveY(this.x,this.y,r,i,this.h/2,-1)):(this.x=e,this.y=t),this.direction=i}},this.update=function(){if(u.checkCollision(),u.draw(),!u.dead&&socketId==u.socketId){if(u.lastX==u.x&&u.lastY==u.y&&u.lastDirection==u.direction)return;u.lastDirection=u.direction,u.lastX=u.x,u.lastY=u.y,u.mapY=u.y+Math.abs(mapOffsetY),u.mapX=u.x+Math.abs(mapOffsetX),socket.emit("playerMoved",{coords:{x:u.mapX,y:u.mapY,vpx:mapOffsetX,vpy:mapOffsetY},direction:u.direction})}},this.updatePlayerState=function(e,t){switch(e.type){case"luckUpdate":t?luck=e.data:this.luck=e.data;break;case"itemsUpdate":items=e.data}}}function t(e){var t=255-255*(e/100),n=255*(e/100),i=0;return"rgba("+Math.floor(t)+","+Math.floor(n)+","+Math.floor(i)+",0.9)"}var n,i;return e}();