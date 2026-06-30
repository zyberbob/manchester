
function renderPacking(){
  const hand=["Pas/ID","Mobil","Powerbank","Opladere","Ryanair app/boardingkort","Medicin","Headset","Snacks efter security"];
  const pack=["4 t-shirts/toppe","Undertøj/sokker","Bukser/shorts","Hættetrøje/jakke","Toilettaske","Ekstra plads til shopping","Regnjakke/paraply","Behagelige sko"];
  mini("handList","hand",hand); mini("packList","pack",pack);
  $("#bagWeight").value=MCR.store("bagWeight","");
  $("#bagWeight").oninput=()=>{MCR.save("bagWeight",$("#bagWeight").value);updateBag();}; updateBag();
}
function mini(el,key,items){const checked=MCR.store(key,[]);$("#"+el).innerHTML=`<div class="miniList">`+items.map((x,i)=>`<label><input type="checkbox" ${checked.includes(i)?"checked":""} data-mini="${key}" data-mini-i="${i}"><span>${x}</span></label>`).join("")+`</div>`;$$(`[data-mini="${key}"]`).forEach(cb=>cb.onchange=e=>{let a=MCR.store(key,[]),i=Number(e.target.dataset.miniI);a=e.target.checked?[...new Set([...a,i])]:a.filter(x=>x!==i);MCR.save(key,a);});}
function updateBag(){const kg=Number($("#bagWeight").value||0),pct=Math.min(100,kg/20*100);$("#bagProgress").style.width=pct+"%";$("#bagProgress").classList.toggle("warn",kg>18);$("#bagText").textContent=kg?`${kg} kg / 20 kg · ${Math.max(0,20-kg).toFixed(1)} kg tilbage`:"Skriv vægt når I har vejet kufferten.";}
