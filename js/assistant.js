
function chooseSuggestion(){
  const weatherText = ($("#weatherDetail")?.textContent || "").toLowerCase();
  const rainy = weatherText.includes("regn") && !weatherText.includes("0 mm");
  let pool = MCR.places.filter(p => p.top);
  if(MCR.persona === "Emily") pool = MCR.places.filter(p => p.persona.includes("Emily") && (p.vibe.includes("shopping") || p.vibe.includes("kaffe")));
  if(MCR.persona === "Jonas") pool = MCR.places.filter(p => p.persona.includes("Jonas") && (p.vibe.includes("dart") || p.vibe.includes("sulten") || p.vibe.includes("fodbold")));
  if(rainy) pool = MCR.places.filter(p => p.vibe.includes("regnvejr") || p.cat === "Shopping");
  if(!pool.length) pool = MCR.places.filter(p=>p.top);
  const p = pool[Math.floor(Math.random()*pool.length)];
  const reason = rainy ? "Godt valg hvis vejret er vådt." : (MCR.persona==="Emily" ? "Emily-mode prioriterer shopping/café." : MCR.persona==="Jonas" ? "Jonas-mode prioriterer dart/mad/oplevelser." : "Godt topvalg tæt på jeres base.");
  $("#suggestionBox").innerHTML = `<div class="suggestion">${p.emoji} <b>${p.name}</b><br><span class="tiny">${reason}</span><p>${p.note}</p><div class="actions"><a class="btn" target="_blank" href="${mapsUrl(p.address)}">Maps</a><a class="btn secondary" target="_blank" href="${dirUrl(p.address)}">Gå</a></div></div>`;
}
function renderPacking(){
  const hand = ["Pas/ID","Mobil","Powerbank","Opladere","Ryanair app/boardingkort","Medicin","Headset","Snacks efter security"];
  const pack = ["4 t-shirts/toppe","Undertøj/sokker","Bukser/shorts","Hættetrøje/jakke","Toilettaske","Ekstra plads til shopping","Regnjakke/paraply","Behagelige sko"];
  renderMiniChecklist("handList", "hand", hand);
  renderMiniChecklist("packList", "pack", pack);
  const kg = MCR.store("bagWeight2","");
  $("#bagWeight2").value = kg;
  updateBag2();
  $("#bagWeight2").oninput = () => { MCR.save("bagWeight2", $("#bagWeight2").value); updateBag2(); };
}
function renderMiniChecklist(el, key, items){
  const checked = MCR.store(key,[]);
  $("#"+el).innerHTML = `<div class="miniList">` + items.map((x,i)=>`<label><input type="checkbox" ${checked.includes(i)?"checked":""} data-mini="${key}" data-mini-i="${i}"><span>${x}</span></label>`).join("") + `</div>`;
  $$(`[data-mini="${key}"]`).forEach(cb => cb.onchange = e => {
    let a = MCR.store(key,[]);
    const i = Number(e.target.dataset.miniI);
    a = e.target.checked ? [...new Set([...a,i])] : a.filter(x=>x!==i);
    MCR.save(key,a);
  });
}
function updateBag2(){
  const kg=Number($("#bagWeight2").value||0), pct=Math.min(100,kg/20*100);
  $("#bagProgress2").style.width=pct+"%";
  $("#bagProgress2").classList.toggle("warn", kg>18);
  $("#bagText2").textContent = kg ? `${kg} kg / 20 kg · ${Math.max(0,20-kg).toFixed(1)} kg tilbage` : "Skriv vægt når I har vejet kufferten.";
}
