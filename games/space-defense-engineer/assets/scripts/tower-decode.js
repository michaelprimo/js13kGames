function tower_decode(e){return e.charCodeAt(0).toString(2).padStart(8,"0")}function removeOrphanBullets(){var r=-1;for(G.bullets.forEach((e,t)=>{e.tower.isConnected||(r=t)});-1<r;){var e=G.bullets[r];G.bullets.splice(r,1),document.body.removeChild(e),r=-1,G.bullets.forEach((e,t)=>{e.tower.isConnected||(r=t)})}}function create_bullet(e,r=1,o=0){var a=dcr("div");a.tower=e,G.bullets.push(a),a.idx=G.bullets.length-1,a.style.position="absolute",a.style.zIndex="0",a.damage=3,null!==e.getAttribute("quantum")&&(a.classList.add("b-q"),a.damage=G.qDamage),null!==e.getAttribute("phaser")&&(a.classList.add("b-p"),a.damage=G.pDamage,a.slow=1e-5),null!==e.getAttribute("thermal")&&(a.classList.add("b-t"),a.damage=G.tDamage),null!==e.getAttribute("blaster")&&(a.damage=G.bDamage,a.classList.add("b-b"));var l=e.getBoundingClientRect(),t=l.x+l.width/2,s=l.y+l.height/2;a.style.left=t+"px",a.style.top=s+"px",a.ox=t,a.oy=s,a.x=t,a.y=s;e=e.parentNode.parentNode.parentNode.parentNode.parentNode.tagName;a.lefttower="L-G"==e.toUpperCase(),dba(a);var n=document.body.getBoundingClientRect().width/2;a.style.zIndex="100000",setInterval(()=>{var e=!1;if(l.y>a.y?a.style.transform=a.lefttower?"rotate(-45deg)":"rotate(45deg)":l.y<a.y-50&&(a.style.transform=a.lefttower?"rotate(45deg)":"rotate(-45deg)"),!a.lefttower&&a.x<n-63&&(a.x=a.ox,a.y=a.oy,e=!0),!a.lefttower&&a.x>=n-63&&(a.x-=r,a.y+=o),a.lefttower&&a.x>63+n&&(a.x=a.ox,a.y=a.oy,e=!0),a.lefttower&&a.x<=63+n&&(a.x+=r,a.y+=o),a.reset&&(a.reset=!1,a.x=a.ox,a.y=a.oy,a.style.left=a.x+"px",a.style.top=a.y+"px"),(e||a.reset)&&window?.ene?.recentHits.includes(a.idx)){a.reset=!1,a.x=a.ox,a.y=a.oy;for(var t=0;t<window?.ene?.recentHits.length;t++)window?.ene?.recentHits[t]==a.idx&&(window.ene.recentHits[t]=-1)}a.style.left=a.x+"px",a.style.top=a.y+"px"},10)}function create_tower(e,t){var r=dcr("div"),o=dcr("span");o.style.borderRadius="50%",r.appendChild(o),o.setAttribute("one",""),1==t.length&&(o.style.width="65px",o.style.height="65px",o.style.backgroundImage="url('assets/images/sat.png')",o.style.backgroundRepeat="no-repeat",o.style.backgroundPosition="14px 11px",r.style.zIndex="1"),r.rot=0;e=parseInt(e[5]+""+e[6]+e[7],2)%G.tower_types.length;return r.setAttribute(G.tower_types[e],""),setTimeout(()=>{create_bullet(r)}),r}