
function passPlace(p){
  if(MCR.persona!=="Begge" && !(p.persona.includes(MCR.persona)||p.persona.includes("Begge"))) return false;
  if(MCR.vibe!=="Alle" && !(p.vibe||[]).includes(MCR.vibe)) return false;
  if(MCR.filter==="Topvalg") return !!p.top;
  if(MCR.filter==="Favoritter") return MCR.store("favs",[]).includes(p.id);
  if(MCR.filter!=="Alle") return p.cat===MCR.filter;
  return true;
}
function renderFilters(){
  const cats=["Alle","Topvalg","Favoritter","Mad","Dart","Shopping","Transport","Oplevelser","Praktisk"];
  $("#catFilters").innerHTML=cats.map(c=>`<button class="filterBtn ${c==='Alle'?'active':''}" data-filter="${c}">${c}</button>`).join("");
  const vibes=[["Alle","Alt"],["sulten","🍔 Sulten"],["shopping","🛍️ Shopping"],["dart","🎯 Dart"],["aften","🌙 Aften"],["billigt","💷 Billigt"],["regnvejr","🌧️ Regnvejr"]];
  $("#vibeFilters").innerHTML=vibes.map(v=>`<button class="vibeBtn ${v[0]==='Alle'?'active':''}" data-vibe="${v[0]}">${v[1]}</button>`).join("");
}
function renderPlaces(){
  const favs=MCR.store("favs",[]), visited=MCR.store("visited",[]), notes=MCR.store("notes",{}), q=$("#search").value.toLowerCase().trim();
  const sorted=[...MCR.places].sort((a,b)=>distTo(a)-distTo(b));
  $("#cards").innerHTML=sorted.map(p=>{
    const search=[p.name,p.cat,p.address,p.note,...p.vibe,...p.persona].join(" ").toLowerCase();
    const hidden=!((!q||search.includes(q))&&passPlace(p));
    return `<article class="card place ${hidden?'hide':''}" data-id="${p.id}">
      ${p.top?'<div class="topstar">⭐</div>':''}
      <h3>${p.emoji} ${p.name}</h3>
      <div class="meta"><span class="badge dist" data-dist="${p.id}">${distText(distTo(p))}</span><span class="badge">🚶 ${p.walk}</span><span class="badge">${p.cat}</span></div>
      <p><b>Adresse:</b><br>${p.address}</p><p class="note">${p.note}</p>
      <div class="actions"><a class="btn" target="_blank" href="${mapsUrl(p.address)}">Maps</a><button class="btn secondary" data-target="${p.id}">Walking</button><button class="btn fav ${favs.includes(p.id)?'on':''}" data-fav="${p.id}">❤️</button><button class="btn visited ${visited.includes(p.id)?'on':''}" data-visited="${p.id}">${visited.includes(p.id)?'✅':'☐'}</button></div>
      <details><summary>Noter</summary><textarea data-note="${p.id}">${notes[p.id]||""}</textarea></details>
    </article>`;
  }).join("");
  bindPlaceButtons(); updateDistances(); renderQuests();
}
function bindPlaceButtons(){
  $$("[data-fav]").forEach(b=>b.onclick=()=>{let a=MCR.store("favs",[]);a=a.includes(b.dataset.fav)?a.filter(x=>x!==b.dataset.fav):[...a,b.dataset.fav];MCR.save("favs",a);renderPlaces();updateMapMarkerStyles();});
  $$("[data-visited]").forEach(b=>b.onclick=()=>{let a=MCR.store("visited",[]);a=a.includes(b.dataset.visited)?a.filter(x=>x!==b.dataset.visited):[...a,b.dataset.visited];MCR.save("visited",a);renderPlaces();updateMapMarkerStyles();});
  $$("[data-note]").forEach(t=>t.oninput=()=>{let n=MCR.store("notes",{});n[t.dataset.note]=t.value;MCR.save("notes",n);});
  $$("[data-target]").forEach(b=>b.onclick=()=>{ showTab("map"); setTimeout(()=>setTarget(b.dataset.target),150); });
}
function updateDistances(){
  $$("[data-dist]").forEach(el=>{const p=MCR.places.find(x=>x.id===el.dataset.dist); if(p) el.textContent=distText(distTo(p));});
  renderNearest();
}
function renderNearest(){
  const list=[...MCR.places].filter(p=>p.id!=="hotel").sort((a,b)=>distTo(a)-distTo(b)).slice(0,6);
  if(list[0]){ $("#nearestDash").textContent=list[0].emoji+" "+list[0].name.split(" ")[0]; $("#nearestDashDetail").textContent=distText(distTo(list[0])); }
  $("#nearestList").innerHTML=list.map(p=>`<div class="compactItem"><span><b>${p.emoji} ${p.name}</b><small>${p.cat} · ${distText(distTo(p))}</small></span><button class="btn secondary" data-near="${p.id}">Walking</button></div>`).join("");
  $$("[data-near]").forEach(b=>b.onclick=()=>{ showTab("map"); setTimeout(()=>setTarget(b.dataset.near),150); });
}
function renderQuests(){
  const ids=new Set(MCR.store("visited",[]));
  const picks=MCR.places.filter(p=>p.quest).slice(0,24);
  $("#questList").innerHTML=picks.map(p=>`<div class="quest ${ids.has(p.id)?'on':''}">${ids.has(p.id)?'🏆':'□'} ${p.quest}</div>`).join("");
}
