"use strict";!function(){function e(e,t,n){return e.addEventListener(t,n)}function t(e){return document.getElementById(e)}function n(e){return t(e).value}function i(){var e=Math.floor(8*Math.random());return e>0&&e<=3?" bg"+e:""}function a(e){var t="square";return e&SPL&&(t+=" player"),e&SWL&&(t+=" wall"),e&STDY&&(t+=" dynamite"),e&STMO&&(t+=" money"),e&STRH&&(t+=" rhum"),e&STBM&&(t+=" boum"),t}function d(e){return e&STDY?"Dynamite":e&SWL?"Wall":void 0}function o(e){var t=.8*window.innerWidth*.48,n=.9*window.innerHeight*.85,i=Math.min(Math.floor(t/e.columns),Math.floor(n/e.rows));return{width:i+"px",height:i+"px"}}function s(e){for(;e.children.length;)e.removeChild(e.children[e.children.length-1])}function r(e,t){t="boolean"==typeof t?t:e.className.includes("off"),b[e.id]=t,t?e.classList.remove("off"):e.classList.add("off")}function l(e){s(S),e.forEach(function(e){var t=document.createElement("option");t.setAttribute("value",e.id),t.innerHTML=e.name+" - player(s) : "+e.dungeons.length,S.appendChild(t)})}function u(){Array.apply(null,k.getElementsByTagName("button")).forEach(function(e){var t=e.getAttribute("data-option-index");parseInt(t,10)==C.selectedOption?e.classList.add("selected"):e.classList.remove("selected")})}function c(e){var t=e.target.getAttribute("data-option-index");C.selectedOption=parseInt(t),u()}function p(){var e=find(C.game.dungeons,L.id).config,t=C.game.options;if(t.length<=0)throw new Error("Invalid option list for controll.");s(k),-1==t.indexOf(C.selectedOption)&&(C.selectedOption=t[0]),t.forEach(function(t){var n=m("li"),i=m("button",{"data-option-index":t},{click:c}),a=d(t);i.innerHTML=a+" "+e[a.toLowerCase()+"Cost"]+'<div class="icon money"></div>',n.appendChild(i),k.appendChild(n)}),u()}function h(e,t){for(var n in t)e.style[n]=t[n]}function f(e,t){for(var n in t)e.setAttribute(n,t[n])}function m(e,t,n){var i=document.createElement(e);t=t||{},n=n||{},f(i,t);for(var a in n)i.addEventListener(a,n[a]);return i}function g(e){C=new v(L),C.updateGame(e)}function v(e){this.id=e.id,this.game,this.dungeonsUI=[],this.selectedOption=SWL,this.selectedAdversary,this.keypressed=!1;var t=this;window.addEventListener("wheel",function(e){t.navigateThroughAdversaries(e)})}function y(e){C&&C.notify({title:"Welcome in "+e.name,body:"Hit the ready button when you are \n don't forget to name your warrior !",duration:12e3})}function E(){L.on(GELDED,function(e){l(e)}),L.on(GECDD,function(e){g(e),p()}),L.on(GESTDED,function(){r(G),C.notify({title:"Game STARTED !",body:"Fight for your life, and remember... watch you steps"},O)}),L.on(GEJN,function(e){e.id===L.id?y(e):C.notify({title:"new Player joined "+e.name,body:"Another mighty heroe to join the battle",duration:O})}),L.on(PELS,function(e){C.notify({title:e.name+" lost the game !",body:"Alas, another hero falls",duration:O})}),L.on(DSW,function(e){C.notify({title:e.name+" won the game !",body:"All hails the mighty Hero who defeated his foes",duration:1e4})}),L.on(GELV,function(e){C.notify({title:e.name+" left the game",body:"The corridors feel a little bit more peacefull",duration:O})}),L.on(GEEDT,function(e){C?C.updateGame(e):g(e),p()}),L.on(D_STATUS_READY,function(e){C.notify({title:e.dungeon.name+" ready !",body:e.readyPlayers+"/"+C.game.dungeons.length+" players are ready",duration:O})}),L.on(GEFD,function(e){C.updateGame(e)}),L.on("disconnect",function(){window.location.reload(!0)}),H.forEach(function(t){e(t,"click",function(){switch(t.id){case GECD:L.emit(t.id,{areaColumns:n("ac"),areaRows:n("ar"),name:n("gn")});break;case GEJN:L.emit(t.id,{gameId:n("gl")});break;case GESTD:L.emit(t.id,{name:n("dn")});break;case GELD:L.emit(t.id,{playerId:L.id});break;default:throw new Error("Un-managed button : "+t.id)}})}),window.addEventListener("resize",function(){C&&C.updateUI()}),window.addEventListener("mousemove",function(e){N=e.clientX,x=e.clientY}),window.addEventListener("contextmenu",function(e){e.preventDefault(),e.stopPropagation(),r(G),b[G.id]&&(G.style.left=N+"px",G.style.top=x+"px")}),window.addEventListener("keydown",function(e){var t,n=e.keyCode;C&&(C.keypressed||(C.keypressed=!0,87===n||38===n?t=MUP:40===n||83===n?t=MDW:65===n||37===n?t=MLT:68!==n&&39!==n||(t=MRH),t&&L.emit(PEMV,t),I=window.setTimeout(function(){C.keypressed=!1},100)))}),window.addEventListener("keyup",function(){clearInterval(I),C&&(C.keypressed=!1)})}function w(e,t){this.id=t.id,this.randomBGMap=[],this.style,this.area=[],this.dungeonElt,this.nameElt,this.lifeCountElt,this.moneyCountElt,this.dpelt,this.pdn,this.plce,this.pmce,this.statusElt,this.sne,this.slce,this.smce,this.init(t)}function T(){L=io({upgrade:!1,transports:["websocket"]}),E(),L.emit(GELD,{playerId:L.id})}v.prototype={updateGame:function(e){this.game=e,this.updateUI()},selectAdversary:function(e){var t=this;e=e||t.selectedAdversary;for(var n=0;!e&&n<t.dungeonsUI.length;){var i=t.dungeonsUI[n].id;i!=t.id&&(e=i),n++}if(t.id==e)throw new Error("Invalid id selected for adversary.");var a=find(t.dungeonsUI,t.selectedAdversary);a&&(a.dungeonElt.classList.remove("selected"),a.dpelt.classList.remove("selected")),t.selectedAdversary=e,(a=find(t.dungeonsUI,e))&&(a.dungeonElt.classList.add("selected"),a.dpelt.classList.add("selected"))},navigateThroughAdversaries:function(e){var t=this.dungeonsUI.length;if(!(t<2)){var n=findIndex(this.dungeonsUI,this.selectedAdversary),i=findIndex(this.dungeonsUI,this.id);do{e.deltaY<0?n++:n--,n=n>t-1?0:n,n=n<0?t-1:n}while(n==i);this.selectAdversary(this.dungeonsUI[n].id)}},deleteDungeonUI:function(e){[e.dungeonElt,e.dpelt,e.statusElt].forEach(function(e){e.parentElement.removeChild(e)});var t=this.dungeonsUI.indexOf(e);this.dungeonsUI.splice(t,1),this.selectedAdversary==e.id&&(this.selectedAdversary=void 0),this.selectAdversary()},applyOptionEvent:function(e){var t=e.target,n=t.getAttribute("data-dungeon-id"),i=parseInt(t.getAttribute("data-area-x"),10),a=parseInt(t.getAttribute("data-area-y"),10);L.emit(PEAP,{opponentId:n,state:C.selectedOption,x:i,y:a})},addDungeonUI:function(n){var i=this,a=new w(i,n);i.dungeonsUI.push(a),t("m-status").appendChild(a.statusElt),n.id==i.id?t("m-panel").appendChild(a.dungeonElt):(t("a-panels").appendChild(a.dungeonElt),t("a-previews").appendChild(a.dpelt),e(a.dpelt,"click",function(e){e.preventDefault(),e.stopPropagation(),i.selectAdversary(a.id)}),i.selectAdversary())},updateUI:function(){var e=this;e.dungeonsUI.forEach(function(t){find(e.game.dungeons,t.id)||e.deleteDungeonUI(t)}),e.game.dungeons.forEach(function(t){var n=find(e.dungeonsUI,t.id);n?n.updateFromDungeon(t):e.addDungeonUI(t)}),e.updateUIFromSTatus(),e.selectAdversary(e.selectedAdversary)},notify:function(e){var t,n=m("div",{id:"modal"}),i=m("h1"),a=m("p");i.innerHTML=e.title,a.innerHTML=e.body,n.appendChild(i),n.appendChild(a),document.body.appendChild(n),window.setTimeout(function(){n.classList.add("modal-in"),t=window.setTimeout(function(){n.classList.add("modal-out"),window.setTimeout(function(){document.body.removeChild(n)},3e3)},e.duration||1500)},100),window.addEventListener("keydown",function(e){27===e.keyCode&&(window.clearTimeout(t),document.body.removeChild(n))})},updateUIFromSTatus:function(){var e=this,t=e.game.status,n=find(e.game.dungeons,e.id);if(D.className=t,M.className=n.status,U.className=n.status,t==G_STATUS_SETUP)r(A,!1),r(G,!1);else if(e.game.status==G_STATUS_RUNNING)r(A,!1);else{if(e.game.status!=G_STATUS_FINISHED)throw new Error("Unknown game status.");r(A,!1),r(G,!1)}}};var L,C,I,b={},A=t("home-menu"),D=t("main-ctrl"),U=t("m-setup"),M=t("m-panel"),S=(t("a-panels"),t("gl")),G=t("option-list"),k=G.getElementsByTagName("ul")[0],H=Array.apply(null,document.getElementsByTagName("button")),N=0,x=0,O=5e3;w.prototype={updateFromDungeon:function(e){var t=this;t.nameElt.innerHTML=e.name,t.pdn.innerHTML=e.name,t.sne.innerHTML=e.name,t.lifeCountElt.innerHTML=e.life,t.plce.innerHTML=e.life,t.slce.innerHTML=e.life,t.moneyCountElt.innerHTML=e.money,t.pmce.innerHTML=e.money,t.smce.innerHTML=e.money,t.dungeonElt.className=e.status,t.statusElt.className=e.status,t.dpelt.className=e.status,t.style=o(e.area),e.area.states.forEach(function(e,n){e.forEach(function(e,i){f(t.area[n][i],{class:a(e.state)+t.randomBGMap[n][i]}),h(t.area[n][i],t.style)})})},init:function(e){this.createDungeonElt(e),this.createdpelt(e),this.createStatusElt(e),this.updateFromDungeon(e)},createDungeonElt:function(e){var t=this;t.dungeonElt=m("section",{id:e.id});for(var n=m("h1"),d=m("div",{class:"area"}),o=m("div",{class:"status-container"}),s=m("p",{class:"life-count"}),r=m("p",{class:"money-count"}),l=0;l<3;l++)d.appendChild(m("div",{class:"light"}));for(var u=0;u<e.area.rows;u++){var c=[],p=[],f=m("div",{class:"row"});d.appendChild(f);for(var g=0;g<e.area.columns;g++){var v=i(),y=m("div",{class:"boum"}),E=m("div",{class:a(e.area.states[u][g].state)+v,"data-area-x":g,"data-area-y":u,"data-dungeon-id":e.id},{click:C.applyOptionEvent.bind(t)});E.appendChild(y),h(E,t.style),f.appendChild(E),c.push(E),p.push(v)}t.area.push(c),t.randomBGMap.push(p)}o.appendChild(s),o.appendChild(r),t.dungeonElt.appendChild(n),t.dungeonElt.appendChild(o),t.dungeonElt.appendChild(d),t.nameElt=n,t.lifeCountElt=s,t.moneyCountElt=r},createdpelt:function(e){var t=this;t.dpelt=m("div",{"data-dungeon-id":e.id}),t.plce=m("p",{class:"life-count"}),t.pmce=m("p",{class:"money-count"}),t.pdn=m("h2"),t.dpelt.appendChild(t.pdn),t.dpelt.appendChild(t.plce),t.dpelt.appendChild(t.pmce)},createStatusElt:function(e){var t=this;t.statusElt=m("div",{"data-dungeon-id":e.id}),t.sne=m("h2"),t.slce=m("p",{class:"life-count"}),t.smce=m("p",{class:"money-count"});var n=m("p",{class:"status"});t.statusElt.appendChild(t.sne),t.statusElt.appendChild(t.slce),t.statusElt.appendChild(t.smce),t.dpelt.appendChild(n)}},window.addEventListener("load",T,!1)}();