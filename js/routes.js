
function renderRoutes(){
  $("#routes").innerHTML = MCR.routes.map(r=>{
    const url = "https://www.google.com/maps/dir/?api=1&origin="+enc(CONFIG.hotel.mapsQuery)+"&destination="+enc(CONFIG.hotel.mapsQuery)+"&waypoints="+r.waypoints.map(enc).join("%7C")+"&travelmode=walking";
    return `<div class="card"><h3>${r.title}</h3><p class="note">${r.desc}</p><a class="btn" target="_blank" href="${url}">Åbn rute</a></div>`;
  }).join("");
  $("#daysGrid").innerHTML = MCR.itinerary.map(d=>`<div class="card"><h3>${d.day}</h3><p><b>${d.plan}</b></p><p class="note">${d.note}</p></div>`).join("");
  const items=["Pas + boarding pass","Ryanair check-in 15. aug. 12:55","Ryanair check-in hjem 19. aug. 19:25","Rejseforsikring","UK-adapter","Powerbank + kabler","Installer appen på begge telefoner","Download offline Google Maps område","Tjek 20 kg kuffert","Spørg Rat & Pigeon om dartskiver"];
  const checked=MCR.store("check",[]);
  $("#checklist").innerHTML=items.map((x,i)=>`<label class="checkline"><input type="checkbox" ${checked.includes(i)?'checked':''} data-check="${i}"><span>${x}</span></label>`).join("");
  $$("[data-check]").forEach(x=>x.onchange=e=>{let a=MCR.store("check",[]);a=e.target.checked?[...new Set([...a,Number(x.dataset.check)])]:a.filter(n=>n!==Number(x.dataset.check));MCR.save("check",a);});
}
