
async function loadData(){
  const [p,r,i]=await Promise.all([fetch("data/places.json").then(x=>x.json()),fetch("data/routes.json").then(x=>x.json()),fetch("data/itinerary.json").then(x=>x.json())]);
  MCR.places=p; MCR.routes=r; MCR.itinerary=i;
}
function showTab(tab){
  $$(".screen").forEach(s=>s.classList.toggle("active",s.id==="screen-"+tab));
  $$(".tabBtn").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  MCR.save("lastTab",tab);
  if(tab==="map"){ setTimeout(()=>{initMap(); MCR.map?.invalidateSize();},80); }
}
function bindGlobal(){
  $("#hotelTitle").textContent=CONFIG.hotel.shortName;
  $("#search").oninput=renderPlaces;
  $("#gpsBtn").onclick=startGPS; $("#gpsHeaderBtn").onclick=startGPS; $("#fabGps").onclick=startGPS;
  $("#clearTarget").onclick=clearTarget;
  $("#suggestNow").onclick=chooseSuggestion; $("#fabSuggest").onclick=()=>{showTab("home");setTimeout(chooseSuggestion,80);};
  $("#addBudget").onclick=()=>{let b=MCR.store("budget",[]);b.push(["",0,"Dag 1"]);MCR.save("budget",b);renderBudget();};
  $("#clearData").onclick=()=>{if(confirm("Nulstil app-data?")){localStorage.clear();location.reload();}};
  $("#rateInput").onchange=e=>{MCR.save("rate",Number(e.target.value||CONFIG.trip.gbpToDkk));calcBudget();};
  $("#addJournal").onclick=addJournal; $("#exportMemory").onclick=exportMemory;
  $("#fab").onclick=()=>$("#fabMenu").classList.toggle("hide");
  document.addEventListener("click",e=>{
    if(e.target.matches(".tabBtn")||e.target.closest("[data-tab]")){const b=e.target.closest("[data-tab]");if(b)showTab(b.dataset.tab);}
    if(e.target.matches(".filterBtn")){MCR.filter=e.target.dataset.filter;$$(".filterBtn").forEach(b=>b.classList.toggle("active",b===e.target));renderPlaces();}
    if(e.target.matches(".modeBtn")){MCR.persona=e.target.dataset.persona;$$(".modeBtn").forEach(b=>b.classList.toggle("active",b===e.target));renderPlaces();}
    if(e.target.matches(".vibeBtn")){MCR.vibe=e.target.dataset.vibe;$$(".vibeBtn").forEach(b=>b.classList.toggle("active",b===e.target));renderPlaces();showTab("places");}
    if(e.target.closest(".bigAction")){MCR.vibe=e.target.closest(".bigAction").dataset.vibe;renderPlaces();showTab("places");}
    if(e.target.matches(".mapBtn")){MCR.mapFilter=e.target.dataset.mapcat;$$(".mapBtn").forEach(b=>b.classList.toggle("active",b===e.target));renderMarkers();}
  });
  window.addEventListener("online",loadWeather); window.addEventListener("offline",loadWeather);
}
async function start(){
  await loadData();
  renderFilters(); renderPlaces(); renderBudget(); renderPacking(); renderRyanair(); renderJournal(); renderRoutes(); bindGlobal(); loadWeather();
  const last=MCR.store("lastTab","home"); showTab(last);
}
start();
if("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js").catch(()=>{});
