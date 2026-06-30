
function renderMapControls(){
  const filters = [["hotel","Hotel"],["food","Mad"],["shopping","Shopping"],["dart","Dart"],["transport","Transport"],["allplaces","Alle steder"]];
  $("#mapFilters").innerHTML = filters.map(f=>`<button class="mapBtn ${f[0]==='hotel'?'active':''}" data-map="${f[0]}">${f[1]}</button>`).join("");
  $("#hotelMapsBtn").href = mapsUrl(CONFIG.hotel.mapsQuery);
  $("#foodMapsBtn").href = mapsUrl("restaurants near " + CONFIG.hotel.mapsQuery);
  $("#shoppingMapsBtn").href = mapsUrl("shopping near " + CONFIG.hotel.mapsQuery);
  setMap("hotel");
}
function setMap(mode){
  const queries = {
    hotel: CONFIG.hotel.mapsQuery,
    food: "restaurants near " + CONFIG.hotel.mapsQuery,
    shopping: "shopping near " + CONFIG.hotel.mapsQuery,
    dart: "pubs with darts near " + CONFIG.hotel.mapsQuery,
    transport: "Manchester Victoria Station",
    allplaces: MCR.places.map(p=>p.name+" Manchester").join(" | ")
  };
  $("#mapFrame").src = "https://www.google.com/maps?q=" + enc(queries[mode] || CONFIG.hotel.mapsQuery) + "&output=embed";
  $$(".mapBtn").forEach(b=>b.classList.toggle("active", b.dataset.map===mode));
}
