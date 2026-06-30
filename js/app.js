
async function loadData(){
  const [p,r,i] = await Promise.all([
    fetch("data/places.json").then(x=>x.json()),
    fetch("data/routes.json").then(x=>x.json()),
    fetch("data/itinerary.json").then(x=>x.json())
  ]);
  MCR.places=p; MCR.routes=r; MCR.itinerary=i;
}
function bindGlobal(){
  $("#hotelTitle").textContent = CONFIG.hotel.shortName;
  $("#search").oninput = renderPlaces;
  $("#addBudget").onclick=()=>{let b=MCR.store("budget",[]); b.push(["",0,"Dag 1"]); MCR.save("budget",b); renderBudget();};
  $("#clearData").onclick=()=>{if(confirm("Nulstil app-data?")){localStorage.clear(); location.reload();}};
  $("#rateInput").onchange=e=>{MCR.save("rate",Number(e.target.value||CONFIG.trip.gbpToDkk)); calcBudget();};
  $("#addJournal").onclick=addJournal;
  $("#exportMemory").onclick=exportMemory;
  $("#suggestNow").onclick=chooseSuggestion;
  document.addEventListener("click",e=>{
    if(e.target.matches(".filterBtn")){MCR.filter=e.target.dataset.filter; $$(".filterBtn").forEach(b=>b.classList.toggle("active",b===e.target)); renderPlaces();}
    if(e.target.matches(".modeBtn")){MCR.persona=e.target.dataset.persona; $$(".modeBtn").forEach(b=>b.classList.toggle("active",b===e.target)); renderPlaces();}
    if(e.target.matches(".vibeBtn")){MCR.vibe=e.target.dataset.vibe; $$(".vibeBtn").forEach(b=>b.classList.toggle("active",b===e.target)); renderPlaces(); location.hash="#places";}
    if(e.target.closest(".bigAction")){MCR.vibe=e.target.closest(".bigAction").dataset.vibe; renderPlaces(); location.hash="#places";}
    if(e.target.matches(".mapBtn")) setMap(e.target.dataset.map);
    if(e.target.matches(".spinBtn")) spin(e.target.dataset.spin);
  });
  window.addEventListener("online",loadWeather);
  window.addEventListener("offline",loadWeather);
}
async function start(){
  await loadData();
  renderFilters(); renderMapControls(); renderPlaces(); renderBudget(); renderRyanair(); renderJournal(); renderRoutes(); renderPacking(); bindGlobal(); loadWeather();
}
start();
if("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js").catch(()=>{});
