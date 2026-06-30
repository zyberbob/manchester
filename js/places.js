
function passPlace(p){
  if(MCR.persona !== "Begge" && !(p.persona.includes(MCR.persona) || p.persona.includes("Begge"))) return false;
  if(MCR.vibe !== "Alle" && !(p.vibe||[]).includes(MCR.vibe)) return false;
  if(MCR.filter === "Topvalg") return !!p.top;
  if(MCR.filter === "Favoritter") return MCR.store("favs",[]).includes(p.id);
  if(MCR.filter !== "Alle") return p.cat === MCR.filter;
  return true;
}
function renderFilters(){
  const cats = ["Alle","Topvalg","Favoritter","Mad","Dart","Shopping","Transport","Oplevelser","Praktisk"];
  $("#catFilters").innerHTML = cats.map(c=>`<button class="filterBtn ${c==='Alle'?'active':''}" data-filter="${c}">${c==='Topvalg'?'⭐ ':c==='Favoritter'?'❤️ ':''}${c}</button>`).join("");
  const vibes = [["Alle","Alt"],["sulten","🍔 Sulten"],["shopping","🛍️ Shopping"],["dart","🎯 Dart"],["aften","🌙 Aften"],["billigt","💷 Billigt"],["regnvejr","🌧️ Regnvejr"]];
  $("#vibeFilters").innerHTML = vibes.map(v=>`<button class="vibeBtn ${v[0]==='Alle'?'active':''}" data-vibe="${v[0]}">${v[1]}</button>`).join("");
}
function renderPlaces(){
  const favs = MCR.store("favs",[]), visited = MCR.store("visited",[]), notes = MCR.store("notes",{});
  const q = $("#search").value.toLowerCase().trim();
  $("#cards").innerHTML = MCR.places.map(p=>{
    const search = [p.name,p.cat,p.address,p.note,...p.vibe,...p.persona].join(" ").toLowerCase();
    const hidden = !((!q || search.includes(q)) && passPlace(p));
    return `<article class="card place ${hidden?'hide':''}" data-id="${p.id}" data-search="${search}">
      ${p.top?'<div class="topstar">⭐</div>':''}
      <h3>${p.emoji} ${p.name}</h3>
      <div class="meta"><span class="badge">🚶 ${p.walk}</span><span class="badge">${p.cat}</span></div>
      <p><b>Adresse:</b><br>${p.address}</p>
      <p class="note">${p.note}</p>
      <div class="actions">
        <a class="btn" target="_blank" href="${mapsUrl(p.address)}">Maps</a>
        <a class="btn secondary" target="_blank" href="${dirUrl(p.address)}">Gå</a>
        <button class="btn fav ${favs.includes(p.id)?'on':''}" data-fav="${p.id}">❤️</button>
        <button class="btn visited ${visited.includes(p.id)?'on':''}" data-visited="${p.id}">${visited.includes(p.id)?'✅':'☐'}</button>
        <button class="btn secondary" data-copy="${p.address}">Kopiér</button>
      </div>
      <details><summary>Noter</summary><textarea data-note="${p.id}">${notes[p.id]||""}</textarea></details>
    </article>`;
  }).join("");
  bindPlaceButtons(); renderStats();
}
function bindPlaceButtons(){
  $$("[data-copy]").forEach(b=>b.onclick=async()=>{ await navigator.clipboard.writeText(b.dataset.copy); b.textContent="Kopieret"; setTimeout(()=>b.textContent="Kopiér",900); });
  $$("[data-fav]").forEach(b=>b.onclick=()=>{ let a=MCR.store("favs",[]); a=a.includes(b.dataset.fav)?a.filter(x=>x!==b.dataset.fav):[...a,b.dataset.fav]; MCR.save("favs",a); renderPlaces(); });
  $$("[data-visited]").forEach(b=>b.onclick=()=>{ let a=MCR.store("visited",[]); a=a.includes(b.dataset.visited)?a.filter(x=>x!==b.dataset.visited):[...a,b.dataset.visited]; MCR.save("visited",a); renderPlaces(); });
  $$("[data-note]").forEach(t=>t.oninput=()=>{ let n=MCR.store("notes",{}); n[t.dataset.note]=t.value; MCR.save("notes",n); });
}
function renderStats(){
  $("#statTotal").textContent = MCR.places.length;
  $("#statFav").textContent = MCR.store("favs",[]).length;
  $("#statVisited").textContent = MCR.store("visited",[]).length;
  renderAchievements();
}
function renderAchievements(){
  const ids = new Set(MCR.store("visited",[]));
  const ach = ["greggs","fiveguys","nandos","ratpigeon","afflecks","trafford"];
  $("#achievements").innerHTML = ach.map(id=>{
    const p=MCR.places.find(x=>x.id===id);
    return `<div class="ach ${ids.has(id)?'on':''}">${ids.has(id)?'🏆':'🔒'} ${p?p.name:id}</div>`;
  }).join("");
}
