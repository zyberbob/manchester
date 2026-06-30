
function renderRyanair(){
  $("#outCheckin").textContent = daysUntil(CONFIG.trip.outboundCheckin);
  $("#returnCheckin").textContent = daysUntil(CONFIG.trip.returnCheckin);
  $("#bagWeight").value = MCR.store("bagWeight","");
  updateBag();
  $("#bagWeight").oninput=()=>{ MCR.save("bagWeight", $("#bagWeight").value); updateBag(); };
}
function updateBag(){
  const kg=Number($("#bagWeight").value||0), pct=Math.min(100,kg/20*100);
  $("#bagProgress").style.width=pct+"%";
  $("#bagProgress").classList.toggle("warn", kg>18);
  $("#bagText").textContent = kg ? `${kg} kg / 20 kg · ${Math.max(0,20-kg).toFixed(1)} kg tilbage` : "Skriv vægt når I har vejet kufferten.";
}
