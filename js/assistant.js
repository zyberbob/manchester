
function chooseSuggestion(){
  const weatherText=($("#weatherDetail")?.textContent||"").toLowerCase();
  const rainy=weatherText.includes("regn")&&!weatherText.includes("0 mm");
  let pool=MCR.places.filter(p=>p.top);
  if(MCR.persona==="Emily") pool=MCR.places.filter(p=>p.persona.includes("Emily")&&(p.vibe.includes("shopping")||p.vibe.includes("kaffe")));
  if(MCR.persona==="Jonas") pool=MCR.places.filter(p=>p.persona.includes("Jonas")&&(p.vibe.includes("dart")||p.vibe.includes("sulten")||p.vibe.includes("fodbold")));
  if(rainy) pool=MCR.places.filter(p=>p.vibe.includes("regnvejr")||p.cat==="Shopping");
  if(MCR.vibe!=="Alle") pool=pool.filter(p=>p.vibe.includes(MCR.vibe));
  if(!pool.length) pool=MCR.places.filter(p=>p.top);
  const p=pool[Math.floor(Math.random()*pool.length)];
  $("#suggestionBox").innerHTML=`<div class="suggestion">${p.emoji} <b>${p.name}</b><br><span class="tiny">${distText(distTo(p))} · ${p.cat}</span><p>${p.note}</p><div class="actions"><a class="btn" target="_blank" href="${mapsUrl(p.address)}">Maps</a><button class="btn secondary" onclick="showTab('map');setTimeout(()=>setTarget('${p.id}'),150)">Walking</button></div></div>`;
}
