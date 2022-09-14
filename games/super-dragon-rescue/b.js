(function(){var L=function(a,b,c,d){this.x=a;this.y=b;this.width=c;this.height=d;this.tr=this.tl=this.dead=this.pickup=this.exit=this.pl=this.mb=this.next=this.dest=this.kill=!1},m=function(a,b){this.ss=a;this.data=b;this.c=0;this.s=4;this.ts=(new Date).getTime()};m.prototype={render:function(a,b,c,d){b?a.drawImage(this.ss,this.f(0),this.f(1),this.f(2),this.f(3),c,d,this.f(2)*this.s,this.f(3)*this.s):(a.save(),a.translate(a.canvas.width,0),a.scale(-1,1),a.drawImage(this.ss,this.f(0),this.f(1),this.f(2),
this.f(3),a.canvas.width-c-this.f(2)*this.s,d,this.f(2)*this.s,this.f(3)*this.s),a.restore())},update:function(){var a=(new Date).getTime();a-this.ts>this.f(4)&&(this.ts=a,this.c=this.f(5))},f:function(a){return this.data[a+6*this.c]}};var C=function(){var a=this;this.keyState={};window.addEventListener("keydown",function(b){-1<a.preventKeys.indexOf(b.keyCode)&&(b.preventDefault(),b.stopPropagation());a.keyState[b.keyCode]=!0});window.addEventListener("keyup",function(b){a.keyState[b.keyCode]=!1});
this.KEYS={LEFT:37,RIGHT:39,UP:38,DOWN:40,SPACE:32,ENTER:13,ESC:27};for(var b=65;91>b;b++)this.KEYS[String.fromCharCode(b)]=b;this.preventKeys=[this.KEYS.LEFT,this.KEYS.RIGHT,this.KEYS.UP,this.KEYS.DOWN,this.KEYS.SPACE,this.KEYS.ENTER,this.KEYS.ESC]};C.prototype={isDown:function(a){return!0===this.keyState[this.KEYS[a]]},isUp:function(a){return!1===this.keyState[this.KEYS[a]]}};var z=function(a,b,c,d,e,f){this.height=a.gameSize.height;this.width=a.gameSize.width;this.halfwidth=this.width/2;this.bgcolour=
b;this.text=c;this.continueKey=d||null;this.keyWord=e;this.nextstate=f;this.g=a;this.lvl=null;this.d=1;this.ctr=0};z.prototype={render:function(a){null!==this.lvl&&this.lvl.render(a);a.fillStyle=this.bgcolour;a.globalAlpha=.75;a.fillRect(262,0,500,this.height);a.globalAlpha=1;a.font="40px Verdana";a.textAlign="center";a.fillStyle="#FFF";for(var b=100,c=0;c<this.text.length;c++)a.fillText(this.text[c],this.halfwidth,b),b+=40,0!==c%2&&(b+=30),a.font="24px Verdana";null!==this.continueKey&&a.fillText("Press "+
this.continueKey+" to "+this.keyWord,this.halfwidth,this.height-80)},update:function(){null!==this.continueKey&&this.g.keyboarder.isDown(this.continueKey)&&(this.g.state=this.nextstate);null!==this.lvl&&(this.lvl.update(),this.lvl.move(this.d),this.ctr++,1200<this.ctr&&(0>this.d&&this.lvl.next(),this.d*=-1,this.ctr=0))}};var D=function(a){this.width=a.width;this.height=a.height;this.y=this.x=0;this.minXmove=400;this.maxXmove=this.width-500};D.prototype={vis:function(a){if(a.isBoss)return!0;var b=
a.x,c=a.y,d=a.y+a.height,e=-1*this.x+this.width,f=this.y,k=this.y+this.height;return!(-1*this.x>a.x+a.width||e<b||f>d||k<c)}};var E=function(a,b,c,d,e){this.lvl=a;this.x=b;this.y=c;this.height=this.width=64;this.velY=this.velX=0;this.speed=.5;this.friction=this.gravity=.9;this.goingLeft=this.dead=!1;this.isMonster=this.grounded=!0;this.harmless=!1;a=[112,32,16,16,300,1,128,32,16,16,300,2,144,32,16,16,300,3,160,32,16,16,300,4,144,32,16,16,300,5,128,32,16,16,300,0];b=[160,32,16,16,300,4];this.t=e;1===
e&&(a=[176,32,16,16,400,1,192,32,16,16,400,0],b=[208,32,16,16,1E3,0],this.speed=.25);2===e&&(this.harmless=!0,this.speed=0,a=b=[48,48,16,16,1E3,0]);3===e&&(this.harmless=!0,this.speed=0,a=b=[48,32,16,16,1E3,0]);if(2>e&&d){for(d=1;d<a.length;d+=6)a[d]+=16;b[1]+=16}this.anim=new m(this.lvl.parent.images[0],a);this.shan=new m(this.lvl.parent.images[0],b);this.blo=[];this.state=0;this.grabbed=!1;this.id=this.guid()};E.prototype={guid:function(){var a=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};
return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},update:function(){if(this.dead)800>this.y&&(this.velX=2,this.goingLeft&&(this.velX=-2),this.velY=15,this.y+=this.velY,this.x+=this.velX);else{if(1!==this.state){2>this.t&&(this.goingLeft?this.velX>-this.speed&&this.velX--:this.velX<this.speed&&this.velX++);this.velX*=this.friction;this.velY+=this.gravity;this.grounded=!1;var a=this.blo,b=-1;this.goingLeft&&a.reverse();0<this.state&&(a=a.filter(function(a){return!a.isPlayer&&!a.mb}));for(var c=
this.lvl.player,d=0;d<a.length;d++)if(a[d].y!==b){var e=c.colCheck(this,a[d]);null!==e&&2===this.state&&a[d].isMonster&&!a[d].harmless&&(a[d].isBoss?a[d].hit():a[d].dead=!0,this.dead=!0);null!==e&&(this.state=0,this.grabbed=!1);"l"===e||"r"===e?c.onSlope(a[d],this)?b=a[d].y:(this.velX=0,this.harmless||(this.goingLeft=!this.goingLeft)):"b"===e&&(c.onSlope(a[d],this)?b=a[d].y:(this.grounded=!0,a[d].pl&&.2>this.velX&&(this.x+=2*a[d].velX)))}this.grounded&&(this.state=this.velY=0);0<this.x+this.velX&&
this.x+this.width+this.velX<this.lvl.width&&(this.x+=this.velX);this.y+=this.velY}this.anim.update()}},render:function(a){var b=this.x+this.lvl.viewport.x;800>this.y&&(0<this.state?this.shan.render(a,this.goingLeft,b,this.y):this.anim.render(a,this.goingLeft,b,this.y))},blockfilter:function(a){return a.exit||a.pickup||a.next||a.dest||a.isPlayer||a.id&&a.id===this.id?!1:!0},grab:function(){this.state=1;this.grabbed=!0},chuck:function(a,b){this.state=2;this.velX=10;if(.3<a||-.3>a)this.velX=25;this.goingLeft&&
(this.velX*=-1);this.velX+=a;this.velY=-6+b}};var F=function(a,b,c,d,e,f,k){this.lvl=a;this.x=b;this.y=c;this.fb=!0;this.height=this.width=32;this.dead=!1;this.kill=!0;this.velX=d;this.velY=e;this.sx=f;this.sy=k;this.anim=new m(this.lvl.parent.images[0],[256,49,8,8,50,1,264,49,8,8,50,0])};F.prototype={update:function(){!this.dead&&(this.anim.update(),this.x+=this.velX,this.y+=this.velY,this.velX+=this.sx,this.velY+=this.sy,0>this.x||0>this.y||800<this.y||3E3<this.x)&&(this.dead=!0)},render:function(a){this.dead||
this.anim.render(a,!0,this.x+this.lvl.viewport.x,this.y)}};var G=function(a,b,c,d){this.lvl=a;this.x=b;this.y=c;this.width=56;this.height=108;this.dead=this.door=this.pickup=this.isKnight=!1;a=[[333,32,14,27,1E3,0],[347,32,24,17,1E3,0],[64,48,16,16,1E3,0],[240,48,16,16,1E3,0]];this.anim1=new m(this.lvl.parent.images[0],a[0]);this.anim2=new m(this.lvl.parent.images[0],a[1]);0===d?this.isKnight=!0:1===d?(this.anim1.data=a[2],this.width=this.height=64,this.door=!0):(this.anim1.data=a[3],this.width=this.height=
64,this.pickup=!0);this.t=d};G.prototype={update:function(){},render:function(a){if(!this.dead){var b=this.x+this.lvl.viewport.x;0<this.t?this.anim1.render(a,!0,b,this.y):(this.anim1.render(a,!0,b,this.y),this.anim2.render(a,!0,b+50,this.y-50),a.font="50px Verdana",a.fillStyle="#fff",a.fillText("The End",b+20,this.y-100))}}};var I=function(a,b,c,d,e,f,k){this.x=e;this.y=f;this.width=c;this.height=d;this.lvl=a;this.buffer=b;this.velY=this.velX=0;this.speed=3;this.pl=!0;this.goesUp=k};I.prototype={render:function(a,
b){a.drawImage(this.buffer.b,this.x+b,this.y)},update:function(){for(var a=this.lvl.blockers,a=a.filter(function(a){return!a.pl}),b=0;b<a.length;b++){var c=this.lvl.player.colCheck(this,a[b]);this.goesUp?("b"===c&&(this.velY=-1),"t"===c&&(this.velY=1)):("l"===c&&(this.velX=1),"r"===c&&(this.velX=-1))}this.x+=this.velX;this.y+=this.velY},init:function(a,b,c,d){var e=[[23,3,23],[23,22,23]];b=[];c=0;b.push(e[a][0]);for(c=0;c<d-2;c++)b.push(e[a][1]);b.push(e[a][2]);d=!0;for(c=0;c<b.length;c++)this.lvl.drawTile(this.buffer.c,
b[c],c,0,d,a),d=!1;this.goesUp?this.velY=1:this.velX=1}};var J=function(a,b,c){this.lvl=a;this.x=b;this.y=c;this.width=84;this.height=68;this.velX=0;this.speed=1;this.friction=.5;this.dead=this.goingLeft=!1;this.isBoss=this.isMonster=this.kill=!0;this.health=3;a=[[256,32,21,17,300,0],[277,32,28,26,300,0],[305,32,28,29,1E3,1,277,32,28,26,1E3,0],[371,32,20,20,2E3,0]];this.anim={bd:new m(this.lvl.parent.images[0],a[0]),w:new m(this.lvl.parent.images[0],a[1]),b:new m(this.lvl.parent.images[0],a[2]),h:new m(this.lvl.parent.images[0],
a[3])};this.blo=[];this.c="w";this.ho={b:[-12,-20],w:[-12,-20],h:[-12,-12]};this.s="w";this.tl=!1;this.st()};J.prototype={update:function(){if(this.dead&&1E3>this.y)this.y+=this.velY,this.x+=this.velX;else{if("h"===this.s)500<this.gt()-this.ts&&(this.s="w");else if("w"===this.s){this.goingLeft?this.velX>-this.speed&&this.velX--:this.velX<this.speed&&this.velX++;this.velX*=this.friction;for(var a=this.blo,b=this.lvl.player,c=0;c<a.length;c++){var d=b.colCheck(this,a[c]);if("l"===d||"r"===d)this.goingLeft&&
"w"===this.s&&this.tl?(this.s="s",this.c="b"):(this.velX=0,this.goingLeft=!this.goingLeft,"r"===d&&(this.tl=!0))}this.x+=this.velX}else"p"===this.s?2E3<this.gt()-this.ts&&(this.st(),this.c=this.s="w"):100<this.gt()-this.ts&&0===this.anim[this.c].c&&(this.shootFireball(),this.st(),this.s="p",this.tl=!1);this.anim[this.c].update()}},render:function(a){var b=this.goingLeft,c=this.x+this.lvl.viewport.x;this.anim.bd.render(a,b,c,this.y);this.anim[this.c].render(a,b,c+this.ho[this.c][this.goingLeft?0:1],
this.y-96);"h"===this.s&&this.anim[this.s].render(a,b,c+this.ho[this.s][this.goingLeft?0:1]+12,this.y-96+20)},blockfilter:function(a){return a.isMonster||a.fb?!1:!0},shootFireball:function(){for(var a=[-1,0,-.2,-.2,-1,0,-.2,-.1,-1,0,-.2,.2,-1,0,-.2,0,-1,0,-.2,.1],b=0;b<a.length;b+=4){var c=new F(this.lvl,this.x,this.y-8,a[b],a[b+1],a[b+2],a[b+3]);this.lvl.things.push(c);this.lvl.blockers.push(c)}},hit:function(){--this.health;this.s="h";this.c="w";this.st();1>this.health&&this.dies()},st:function(){this.ts=
this.gt()},gt:function(){return(new Date).getTime()},dies:function(){this.dead=!0;this.velX=.75;this.velY=8;for(var a=this.lvl.things,b=0;b<a.length;b++)a[b].door&&(a[b].dead=!0)}};var K=function(a,b,c,d){this.lives=3;this.chi=0;this.game=a;this.viewport=d;this.x=b;this.y=c;this.height=this.width=64;this.boxes=[];this.isPlayer=!0;this.mx=this.x+this.width/2;this.by=this.y+this.height;this.velY=this.velX=0;this.speed=5;this.jumping=!1;this.gravity=.2;this.grounded=!0;this.friction=.9;this.goingLeft=
!1;this.vx=0;this.onPlatform=!1;this.holding=null;a=[[16,32,16,8,1E3,0],[16,40,16,8,200,1,15,48,16,8,200,2,16,56,16,8,200,3,32,32,16,8,200,0],[33,40,15,14,1E3,0]];b=[[0,32,16,11,400,0],[0,54,16,11,400,0],[32,54,16,11,400,0],[347,49,25,16,1E3,0],[240,48,16,16,1E3,0]];this.ho=[[-12,12,0],[-12,12,0],[-12,12,-16]];this.cha=this.cba=0;this.ab=[new m(this.game.images[0],a[0]),new m(this.game.images[0],a[1]),new m(this.game.images[0],a[2])];this.ah=[new m(this.game.images[0],b[0]),new m(this.game.images[0],
b[1]),new m(this.game.images[0],b[2]),new m(this.game.images[0],b[4])];this.ouch=new m(this.game.images[0],b[3]);this.release=!0};K.prototype={died:function(){--this.lives;this.dead=!0},render:function(a){var b=this.x+this.viewport.x;this.ab[this.cba].render(a,this.goingLeft,b,this.y+32+this.ho[this.cha][2]);this.ah[this.cha].render(a,this.goingLeft,b+this.ho[this.cha][this.goingLeft?0:1],this.y-12);this.dead&&(this.ouch.render(a,!0,b+40,this.y-84),790<=this.y&&(a.fillStyle="#000",a.globalAlpha=.75,
a.fillRect(262,200,500,250),a.globalAlpha=1,a.textAlign="center",a.fillStyle="#fff",a.font="35px Verdana",0<this.lives?this.drwLvs(a,440,270,0,this.lives):a.fillText("Game Over!",512,310),a.font="22px Verdana",a.fillText("Press R to continue",512,400)));this.drawHud(a)},drawHud:function(a){this.drwLvs(a,10,10,0,this.lives);this.drwLvs(a,10,60,3,this.chi)},drwLvs:function(a,b,c,d,e){a.font="35px Verdana";this.ah[d].render(a,!1,b,c);a.fillText("x "+e,b+110,c+40)},onSlope:function(a,b){if(a.tr||a.tl){var c=
a.x,d=a.y+a.height;a.tr?(c=Math.floor(d-(b.x+b.width/2-c)),b.y>=c-b.height&&(b.y=c-b.height,b.velY=0,b.grounded=!0,b.jumping=!1,this.cha=this.cba=1)):a.tl&&(c=Math.floor(d-(a.height-(b.x+b.width/2-c))),b.y>=c-b.height&&(b.y=c-b.height,b.velY=0,b.grounded=!0,b.jumping=!1,this.cha=this.cba=1));return!0}return!1},update:function(){var a=this.game.keyboarder;if(this.dead){if(800>this.y){this.velX=0;this.velY=8;this.y+=this.velY;this.cha=this.cba=2;this.ab[this.cba].update();this.ah[this.cha].update();
return}a.isDown("R")&&(0<this.lives?this.game.level.restart(this):this.game.state=1)}a.isDown("LEFT")&&(this.velX>-this.speed&&(this.velX--,this.cha=this.grounded?this.cba=1:this.cba=2),this.goingLeft=!0);a.isDown("RIGHT")&&(this.velX<this.speed&&(this.velX++,this.cha=this.grounded?this.cba=1:this.cba=2),this.goingLeft=!1);(a.isDown("SPACE")||a.isDown("UP"))&&!this.jumping&&this.grounded&&(this.jumping=!0,this.grounded=!1,this.velY=2*-this.speed,this.cha=this.cba=2);a.isUp("Z")&&(this.release=!0);
if(a.isDown("Z"))if(null!==this.holding&&this.release)this.holding.chuck(this.velX,this.velY),this.holding=null;else if(null===this.holding&&!this.jumping&&this.grounded){a=this.game.level.blockers.filter(this.viewport.vis,this.viewport);a=a.filter(function(a){return!a.dead&&a.isMonster&&!a.boss});this.y+=1;for(var b=0;b<a.length;b++){var c=this.colCheck(this,a[b]);if("b"===c){this.holding=a[b];a[b].grab();this.release=!1;break}}}this.velX*=this.friction;this.velY+=this.gravity;this.grounded=!1;var a=
this.game.level.blockers.filter(this.viewport.vis,this.viewport),a=a.filter(function(a){return!a.dest&&!a.mb&&!a.dead&&!a.grabbed}),d=-1;this.goingLeft&&a.reverse();for(b=0;b<a.length;b++)if(a[b].y!==d&&(c=this.colCheck(this,a[b]),"l"!==c&&"r"!==c||a[b].pickup?"b"!==c||a[b].pickup?"t"!==c||a[b].pickup||(this.velY*=-1):this.onSlope(a[b],this)?d=a[b].y:(this.onPlatform&&this.jumping&&0>this.velY||(this.grounded=!0,this.jumping=!1),this.onPlatform=!1,(a[b].pl&&!a[b].goesUp||a[b].isMonster)&&.2>this.velX&&
(this.x+=2*a[b].velX,this.viewport.x-=2*a[b].velX,this.game.level.move(2*a[b].velX),this.onPlatform=!0),a[b].pl&&a[b].goesUp&&(this.onPlatform=!0)):this.onSlope(a[b],this)?d=a[b].y:(this.velX=0,this.jumping=!1),null!==c&&a[b].kill&&this.died(),null!==c&&"b"!==c&&a[b].isMonster&&!a[b].harmless&&(this.dead=!0,this.died()),null!==c&&a[b].exit&&this.game.level.next(this),null!==c&&a[b].isKnight&&(this.game.state=1),null!==c&&a[b].pickup&&(this.chi+=1,a[b].dead=!0,2<this.chi&&(this.lives+=1,this.chi-=
3)),null!==c&&a[b].next))for(var c=this.game.level.blockers,e=0;e<c.length;e++)if(c[e].dest){this.y=c[e].y;c=-1*c[e].x-this.viewport.x+512;this.x-=c;this.viewport.x+=c;this.game.level.move(-1*c);break}this.grounded&&!this.jumping&&(this.velY=0,this.cha=this.cba=1);this.grounded||!(.2<this.velY||-.2>this.velY)||this.onPlatform||(this.cha=this.cba=2);this.x+this.viewport.x>=this.viewport.minXmove&&this.x+this.viewport.x<=this.viewport.maxXmove||this.x+this.viewport.x<=this.viewport.minXmove&&0<this.velX||
this.x+this.viewport.x>=this.viewport.maxXmove&&0>this.velX||Math.abs(this.viewport.x-this.game.gameSize.width)>=this.game.level.width-this.velX&&0<this.velX||0<this.viewport.x-this.velX&&0>this.velX||(this.viewport.x-=this.velX,this.game.level.move(this.velX));0<this.x+this.velX&&this.x+this.width+this.velX<this.game.level.width&&(this.x+=this.velX);this.y+=this.velY;.4>this.velX&&-.4<this.velX&&this.grounded&&(this.cha=this.cba=0);770<this.y&&!this.dead&&this.died();this.ab[this.cba].update();this.ah[this.cha].update();
null!==this.holding&&(this.holding.x=this.x,this.holding.y=this.y-this.holding.height,this.holding.goingLeft=this.goingLeft)},colCheck:function(a,b){if(b.dead)return null;var c=a.x+a.width/2-(b.x+b.width/2),d=a.y+a.height/2-(b.y+b.height/2),e=a.width/2+b.width/2,f=a.height/2+b.height/2,k=null;if(Math.abs(c)<e&&Math.abs(d)<f)if(e-=Math.abs(c),f-=Math.abs(d),e>=f)0<d?(k="t",b.tr||b.tl||b.pickup||a.pl&&b.isMonster||(a.y+=f)):(k="b",b.tr||b.tl||b.pickup||a.pl&&b.isMonster||a.isMonster&&b.mb||(a.y-=f));
else{if(a.isPlayer&&b.isMonster&&!b.harmless)return c=a.x+20+(a.width-40)/2-(b.x+20+(b.width-40)/2),0<c&&35>c?"l":0>c&&-35<c?"r":null;0<c?(k="l",b.tr||b.tl||b.pickup||(a.pl||a.harmless&&!b.harmless)&&b.isMonster||(a.x+=e)):(k="r",b.tr||b.tl||b.pickup||(a.pl||a.harmless&&!b.harmless)&&b.isMonster||(a.x-=e))}return k}};var A=function(a,b,c){this.number=a;this.player=null;this.dud=c;this.data="..........................................*....................................................................................................nL....VcUucv.......................................................................2nN............Ghhhg.....Tt..................n2nKLN....................888.........................Ghhhg..]..................Tt.................Immmmmmi...................444................................Ln$................Tt....$.nKL]n$....IJsoooooji.....+++..........464.....nn1.......................Immg................TtN...Ghhhhhhg$nlIJsbbbbbboji.LnN.NNlk$.......444....Ghhhg........+............IJso................Immmg..........GmmJswaaaaaaeojmmmmmmmmmi.......444NN~...............N..........IJsbblkn.......N....IJsoo............ooowa*aaaaaaeoooooooooob2......464mmmi.NKLn........Imi........IJsbbbmmmg....GmmmilIJsbbb...........Ibbbaaaaaaaaaaaaaaaaaaaaa22.....4!4ooojmmmmmg$lnnNKIJsji......IJsbbbbooon.L...ooojmJsbbbbn-.nn.KLn.IJbbbyaaaaaa(aaaaaaaaaaaaa222.N.Immmbbboooooo.GmmmmmJsboji-nkLIJsbbbbbbbbmmmg..bbbooobbbbbmmmmmmmmmmJsbbbbbbbbbbbyaazbbyaaaaazmmmmmmJsoobbbbbbbbbffoooooobbbojmmmmJsbbbbbbbbboooFFFbbbbbbbbbbbooooooooooobbbbbbbbbbbbbbbbbbbbbbbbbbbbbboobbb0 ..............................................&&&............................GJsbbbbbbbbbbbbbbbbbbbb..............................................&&&.............................sbbwaaaaaaaaaebbbbbbbb...........*..................................&&&.............................bbwa$aaaaaaaaaaebbbbbb.........................................777..&&&.............................bwaaaaaa09aaaaaaebbbbb..........$..(...$.@.....................333.+&&&..777.........................aaaaaaabbyaaaaaabbbbb...........VcUucv..Xdx.$...]$............353..&&&..333......................n..aaaaaaabbbyaaaaaebbbb.............Tt.........VUuv............n3%3NI&&&i.353.........*...........Imi.aaaaaaabbbbyaaaaa444b.............Tt..........Tt............ImmmmmJ&&&ji3^3....................IJojmmaaaaaaebbbbyaaaa444b.............Tt......1...Tt..kL.......IJsooooo&&&ojmmmmg.................IJsboooaa#aaaabbbbbyaaa464b.~n.lkn..1+n.Tt.N.n-11..NTtnImmi)$$nLIJsbbbbbb&&&booooo.................IJsbbbbbaaXdxaabbbbbby094!4bmmmmmmmmmmmmmmMMMMMMMMMMMMMMJsojmgGmmJsbbbbbbb&&&bb[...................GJsbbbbbbaaaaaaabbbbbbbbbbbbbooooooooobbbboooooooooooooooobboofFooobbbbbbbb&&&bbfffffffffffffffffffffobbbbbbwaa$aaaaebbbbbbbbbbbb0 ....ImmmJBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSjmi........i.~.BBBBBBEaaaaaaaaaaWBBBBBBBBBBBBBBBBEaaaaaaaaaWBBBBEaaaaWBEaaaaaAAaaaaaaaaaaWBBBBBBBBBBOOE........BAAAWBBBBEaaaaaaaaaaaaBBBBBBBBBBBBBEaaaaaa}09aaaaWBBBa{aaaaaaaaaaaAAaaaaaaaaaaaWBBBBBBBEaaaa........BAAAAWBBEaaaaaa$-09a$aWBBBBBBBBBBEaaaaa}aYBBBBZaaaBBBZaaaaaaa1090$$Aaaaaa09a}aaaaWBBBBEaaaaa.....888BAAAAAaaaaaaaaazbbbbyaaWBEaaWBBBEaaa90YBBBBBBBBZaaWBBBZ0a09aYBBBBZAAaaaYBBBBBZaaaaaaaaaaaaaa.....444BAAAAAaaaaaaaaaebbbbwaaaaaaaaaaaaa0YBBBBBBBBBBBBZaaBBBBBBBBBBBBBBEAAaaaBBBBBBBaaaaaaaaaaaaaa.....464BAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaYBBBBBBEaaaaWBBBaaBBBBBBBBBEaaaaaAAaaaBBBBBBBZ9aaaaaaaaaaaaN....444BAAAAAaaaaaaaaaaaaaaaaaaaaaa$09YBBBBBEaaaaaaaaWBEaaBBBBEaaaaaaaaaaAAaaaBBBBBBBBBaaaaaaaaaa0Ymi...444BZAAAAaa90aaaaaaaaaaaaa09aaaYBBBBBBBBa*aaaa0aaaaaaaWBEaaaaaaa$0aaaAAaaaBBBBBBBBEaaaaaaaaaYBBSji..464BBZAAAaYBBZa)aaaaaaaaaYBBZ$aBBBBBBBBBaaaaaYBZaaaaaaaaaaa0a09YBBZaa#AaaaWBBBBBBEaaa@aaaaaYBBBBSji.4!4BBBZaYBBBBBBBBZa09a{aYBBBBaaBBBBBBBBBZ09YBBBBZaa+aa09aYBBBBBBBBBZaXdxaaaBBBBBBaaaaXxaaa$BBBBBBSjMmmmBBBBBBBBBBBBBBBBBBBBBBBBBEaaWBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBa$AaaaaWBBBBEaaaaaaaaaaWBBBBBBOOOOO0 .............................................................................................................................$...............................................*................888...888.888.................................................@...............$..+.$................444...444.444...............................$.(..$.....VcUucv$Xx.....$.....Xx$VcUucv................464...464.464.......VcUucv..................VcUuCv.......Tt.....................Tt..................444...444.444.........Tt.............VUuv.....Tt.........Tt.....................Tt..................444888444.444.........Tt..............Tt......Tt.........Tt.....................Tt...........VUuv...444444444.464....VUuv.Tt..............Tt......Tt.........Tt.....................Tt............Tt....444464444.4a4~n...Tt..Tt....$...]$#...Tt......Tt.........Tt.....................Tt.$..(...$...Tt....4444!4444Nmmmmmi..Tt..Tt....VCUucvXdx.Tt......Tt.........Tt..$......].$.........Tt.VccUuCCv...Tt...ImmmmmmmmmmOOOOSj..Tt..Tt......Tt......TtVcUucvTt...VcUucvTt..VcccUuCCCv.....VUuvTt....Tt......Tt...JsoooooooooBBBBBS..Tt..Tt......Tt...$..Tt..Tt..TtVUuv.Tt..Tt......Tt...VUuv...Tt.Tt....Tt......Tt...sbbbbbbbbbb0 bbbbbbbbbbbbbbBBBBbbbbbBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbgttttttttttvttGbgttttttGbgtttVttttttttttttttttVtttttttttVtttGbgtttVtttttttVtttttttt3333333GbbbbPbbbbg..........d..Gbg.....*Gbg...D................D.........D...Gbg...D.......D........3333333Gbbbbbbbbbg..........d..GPg......ttt...D................D.........D...Gbg...D.......D........3p353p3Gtttttttvtt..........d..Gbg............C................C.........C...Gbg...D.......D........333!333G.......d............d..ttt.........IHhhF.........@....fHF.......fhF..Gbg.2.D.......D.......fhhhhhhhb.......d............d.............IJbbPg.........XWx..GbgYYYYYYYGbg..GbbhhhhF......D.......tEtEtEttG.......d............c.{..........IJbbbbg...$.1..).$...GbgZZZZZZZGbg..GbgTTTET......D........D.D.D..G.......d...........IhhHi.l..$.@..Gbbbbbg....fhhhhF....GbgZZZZZZZGbg..TTT...D.......D........D.D.D..G.......c.N..)l.$..IJBPbjhhhF..Xx.Gbbbbbg....tETTEt....GbgZZZZZZZGbg........D.......D........D.D.D..G.~..IHHHHHHHHF..fhJBBBbbbbbgyyyyyGbbbbbg.....D..D.....GbgZZZZZZZGbg........C}.}.1..C........C.C.C1IJHHHHJBBBBBBBBgyyGbBBBBbbbbbgZZZZZGbbbbbgYYYYYYYYYYYYYYGbgZZZZZZZGbgMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMhJb1 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................TTTTVTTTTTTT333GbbbbgttttVttttttVtttVttGbgtTTTVtTTTTVTTTGbbbbbbbbb......................................D.......333Gbbbbg....D......D...D..Gbg....D.....D...Gbbbbbbbbb......................................D.......353Gbbbbg1...D......D...D..Gbg....D.....D...Gbbbbbbbbb......................................D.....)L3%3Gbbbbg12..D......D...D..Gbg....D.....D...Gbbbbbbbbb......................................D......&&&&Gbbbbg&&&.D......D...D..Gbg....D.....D...Gbbbbbbbbb......................................D....l&&&&&Gbbbbg333.D&.....D...D..Gbg....D.....D...Gbbbbbbbbb......................................D....&&&&&&Gbbbbg333.D......D...D..AAA....D.....D...Gbbbbbbbbb......................................D...&&&&&&&Gbbbbg333&D......D...D..AAA....C..U..C...Gbbbbbbbbb......................................D..&&&&&&&&Gbbbbg353.D...$..C.u.Cl$AAA....&&&&&&&...Gbbbbbbbbb...................................~.nC.&&&&&&&&&Gbbbbg3^3.CL..n&&&&&&&&&AAA...&&&&&&&&&..Gbbbbbbbbb..................................hhhhhhhhhhhhhhhBbbbbbmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmbbbbbbbbbb..................................1".split(" ");
this.parent=b;this.height=12;this.width=0;this.tilesize=16;this.scale=4;this.tileset=0;c&&(this.number=this.rand(0,this.data.length-1));this.setup();this.init(this.buffers[0],!1);this.init(this.buffers[1],!0)};A.prototype={rand:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},genBG:function(a,b,c){if(1===this.tileset){for(var d=[10,15,16,17],e=0,f=0,k=0;100>k;k++)e=this.rand(0,b-1),f=this.rand(0,c-1),a[e][f]=14;for(e=this.rand(5,8);e<b;e+=this.rand(4,7))k=this.rand(0,3),f=this.rand(3,5),
a[e][f]=d[k],3===k&&(a[e][f+1]=d[k]+1)}else{d=[[17,0],[-16,-17],[16,15]];k=[[1,1,2,0],[0,0,1,1,2,0],[0,-1,2,-1,1,0]];f=e=0;c=this.rand(4,8);for(var m=0;m<b;m++){a[m][c]=d[e][0];a[m][c+1]=d[e][1];for(var p=c+2;p<this.height;p++)a[m][p]=0;if(9<c)for(p=-1;0>p;)f=2*this.rand(0,k[e].length/2-1),p=k[e][f+1];else if(2>c)for(p=1;0<p;)f=2*this.rand(0,k[e].length/2-1),p=k[e][f+1];else f=2*this.rand(0,k[e].length/2-1);c-=k[e][f+1];e=k[e][f]}}},genBlockers:function(a,b,c){this.blockers=[];for(var d=this.tilesize*
this.scale,e=[],f=[{t_l:[-24,-8,25],t_r:[8,-7,24],ign:[6,-26,10,-22,11,-21,-13,19,-19,13,-32,0],half:[7,-25,-11,21,-12,20,-30,2,-28,4,-10,22],plat:[-29,3,-9,23],dead:[5,-27],item:[],boss:[],kni:[],door:[],merge:[-20,12,-18,14,-31,1,-12,20,-11,21,-30,2,-25,7,-59]},{t_l:[-24],t_r:[8],ign:[-21,11,-19,13,-30,2,-29,3,-17,15,-16,16],half:[-13,19,-11,21],plat:[-10,22,-9,23],dead:[-7,25,-8,24],item:[],boss:[20],kni:[-12],door:[-32],merge:[-31,1,-27,5,-26,6,-25,7,-23,9,-20,12,-59]}][this.tileset],k=["~"],
m=["!","%","^"],p=["-","+","(",")"],y=["(",")"],r=[")","+"],t=["[","]","{","}"],x=["{","}"],z=["]","}"],A=["1","2"],C=["*"],D=["$"],F="34567890@#".split(""),h=0;h<c;h++)for(var l=0;l<b;l++){var v=a[l][h],n=String.fromCharCode(v+97);if(-51!==v){var u=new L(l*d,h*d,d,d),q=!1;this.io(k,n)&&(q=!0,this.player=new K(this.parent,l*d,h*d,this.viewport),a[l][h]=-51,this.chkCave(a,l,h));this.io(D,n)&&(u.mb=!0,q=!1,this.chkCave(a,l,h));if(this.io(A,n)){var q=!0,g=new E(this,l*d,h*d,!1,"1"===n?2:3);this.things.push(g);
this.blockers.push(g);a[l][h]=-51;this.chkCave(a,l,h)}this.io(p,n)&&(q=!0,g=new E(this,l*d,h*d,this.io(y,n),0),g.goingLeft=this.io(r,n),this.things.push(g),this.blockers.push(g),a[l][h]=-51,this.chkCave(a,l,h));this.io(f.boss,v)&&(q=!0,g=new J(this,l*d,h*d),this.things.push(g),this.blockers.push(g),a[l][h]=-51);this.io(f.kni,v)&&(q=!0,g=new G(this,l*d,h*d-44,0),this.things.push(g),this.blockers.push(g),a[l][h]=-51);this.io(C,n)&&(g=new G(this,l*d,h*d,2),this.things.push(g),this.blockers.push(g),a[l][h]=
-51,this.chkCave(a,l,h),q=!0);this.io(t,n)&&(q=!0,g=new E(this,l*d,h*d,this.io(x,n),1),g.goingLeft=this.io(z,n),this.things.push(g),this.blockers.push(g),a[l][h]=-51,this.chkCave(a,l,h));this.io(F,n)&&(q=!0);this.io(m,n)&&("%"===n?u.next=!0:"^"===n?u.dest=!0:u.exit=!0);this.io(f.door,v)&&(g=new G(this,l*d,h*d,1),this.things.push(g),this.blockers.push(g),a[l][h]=-51,q=!0);if(this.io(f.plat,v)){var n=l*d,q=h*d,g=l,w=a[g][h],B=!1,H=String.fromCharCode(a[g][h-1]+97);if("#"===H||"@"===H)a[l][h-1]=-51,
this.chkCave(a,l,h-1),"#"===H&&(B=!0);for(;this.io(f.plat,w);)a[g][h]=-51,this.chkCave(a,g,h),g++,w=a[g][h];w={b:null,c:null};this.createImage(g*d-n,d,w);n=new I(this,w,g*d-n,d/2,n,q,B);n.init(this.tileset,this.tilesize,this.tilesize*this.scale,g-l);this.things.push(n);this.blockers.push(n);q=!0}if(this.io(f.t_l,v))u.tr=!0,e.push([l,h+1]);else if(this.io(f.t_r,v))u.tl=!0,e.push([l,h+1]);else if(this.io(f.half,v))u.height=d/2;else if(this.io(f.ign,v))q=!0;else if(this.io(f.dead,v)){u.kill=!0;u.y+=
d/2;u.height=d/2;n=l*d;g=l+1;for(w=a[g][h];this.io(f.dead,w);)e.push([g,h]),this.chkCave(a,g,h),g++,w=a[g][h];u.width=g*d-n}for(g=0;g<e.length;g++)e[g][0]===l&&e[g][1]===h&&(q=!0);if(!q){if(this.io(f.merge,v)&&l<b-1){n=l*d;g=l;for(w=a[g][h];this.io(f.merge,w)&&g<b-1;)e.push([g,h]),g++,w=a[g][h];u.width=g*d-n}this.blockers.push(u)}}}this.player.boxes=this.blockers;for(a=0;a<this.things.length;a++)b=this.things[a],!b.isMonster||b.isKnight||b.pickup||(b.blo=this.blockers.filter(b.blockfilter,b))},chkCave:function(a,
b,c){if(0===a[b-1][c]||0===a[b+1][c]||0===a[b][c-1])a[b][c]=0},init:function(a,b){this.viewport=new D(this.parent.gameSize);var c=[];this.tileset=parseInt(this.data[this.number][this.data[this.number].length-1],10);this.emptyTilemap(c,a.w,this.height,this.tileset-1);b?(this.convertTilemap(c,this.data[this.number],a.w),this.genBlockers(c,a.w,this.height)):this.genBG(c,a.w,this.height);this.createImage(a.w*this.tilesize*this.scale,this.parent.gameSize.height,a);this.drawTileMap(a.c,c,this.height,a.w)},
update:function(){this.dud||this.player.update();for(var a=this.things.filter(this.viewport.vis,this.viewport),b=0;b<a.length;b++)a[b].update()},render:function(a){for(var b=0;b<this.buffers.length;b++)null!==this.buffers[b].b&&a.drawImage(this.buffers[b].b,Math.floor(this.buffers[b].xo),0,a.canvas.width,a.canvas.height,0,0,a.canvas.width,a.canvas.height);if(!this.dud){for(var b=0,c=this.things.filter(this.viewport.vis,this.viewport),b=0;b<c.length;b++)c[b].render(a,Math.floor(this.viewport.x));this.player.render(a,
Math.floor(this.buffers[1].xo))}},drawTile:function(a,b,c,d,e,f){if(!(0>b)){var k=this.tilesize*this.scale,m=this.tileset;-1<f&&(m=f);e?(a.save(),a.translate(a.canvas.width,0),a.scale(-1,1),a.drawImage(this.parent.images[0],b*this.tilesize,m*this.tilesize,this.tilesize,this.tilesize,a.canvas.width-c*k-k,d*k,k,k),a.restore()):a.drawImage(this.parent.images[0],b*this.tilesize,m*this.tilesize,this.tilesize,this.tilesize,c*k,d*k,k,k)}},createImage:function(a,b,c){var d=document.createElement("canvas");
d.width=a;d.height=b;a=d.getContext("2d");a.imageSmoothingEnabled=a.mozImageSmoothingEnabled=a.oImageSmoothingEnabled=!1;c.b=d;c.c=a},move:function(a){this.buffers[1].xo+=a;this.buffers[0].xo+=a/2},emptyTilemap:function(a,b,c,d){for(var e=0;e<b;e++){a[e]=[];for(var f=0;f<c;f++)a[e].push(d)}},convertTilemap:function(a,b,c){for(var d=0,e=0,f=0;f<b.length;f++)a[d][e]=b[f].charCodeAt()-97,d++,d>c-1&&(d=0,e++)},drawTileMap:function(a,b,c,d){for(var e=["4","6","8"],f=["3","5","7"],k=["!","%","^"],m=["&",
"9","0"],p=!1,y=-1,r=0;r<c;r++)for(var t=0;t<d;t++){var x=String.fromCharCode(b[t][r]+97),p=!1;-6>b[t][r]&&(b[t][r]+=32,p=!0);this.io(e,x)&&(y=2,b[t][r]=parseInt(x,10)/2+2,p=!1);this.io(f,x)&&(y=3,b[t][r]=(parseInt(x,10)+1)/2+2,p=!1);this.io(k,x)&&(y=b[t][r]=0);this.io(m,x)&&(y=2,b[t][r]=14,p=!1,"&"===x&&(b[t][r]=15),"0"===x&&(y=3));this.drawTile(a,b[t][r],t,r,p,y);y=-1}},io:function(a,b){return-1<a.indexOf(b)},next:function(a){this.number++;this.number>this.data.length-1&&(this.number=0);this.bl();
a&&(this.player.lives=a.lives,this.player.chi=a.chi)},bl:function(){this.setup();this.init(this.buffers[0],!1);this.init(this.buffers[1],!0)},restart:function(a){this.bl();this.player.lives=a.lives;this.player.chi=0},setup:function(){this.buffers=[{b:null,c:null,w:80,xo:0},{b:null,c:null,w:100,xo:0}];this.width=this.buffers[1].w*this.tilesize*this.scale;this.blockers=[];this.things=[];this.viewport=null}};var B=function(){var a=this;this.images=[];var b=document.querySelector("#g");this.ctx=b.getContext("2d");
this.ctx.imageSmoothingEnabled=this.ctx.mozImageSmoothingEnabled=this.ctx.oImageSmoothingEnabled=!1;this.gameSize={width:b.width,height:b.height};this.state=0;this.keyboarder=new C;this.loadingScreen=new z(this,"#000",["Loading..."]);this.titleScreen=new z(this,"#6b036e","Super Dragon Rescue;made for #js13k;Code by;madmarcel;Art by;surt & madmarcel".split(";"),"S","start",2);this.loadImgs();var c=1E3/60,d=function(){a.render();requestAnimationFrame(d)};d();var e=function(){a.update();setTimeout(e,
c)};e()};B.prototype={render:function(){this.ctx.clearRect(0,0,this.gameSize.width,this.gameSize.height);switch(this.state){case 0:this.loadingScreen.render(this.ctx);break;case 1:this.titleScreen.render(this.ctx);break;case 3:this.level.render(this.ctx)}},update:function(){switch(this.state){case 0:this.loadingScreen.update();break;case 1:this.titleScreen.update();break;case 2:this.level=new A(0,this,!1);this.state=3;break;case 3:this.level.update()}},loadImgs:function(){for(var a=this,b=["s"],c=
0,d=0;d<b.length;d++){var e=new Image;e.onload=function(){c++;c>=b.length&&(a.titleScreen.lvl=new A(0,a,!0),a.state=1)};e.src=b[d]+".png";a.images[d]=e}}};window.addEventListener("load",function(){new B})})();