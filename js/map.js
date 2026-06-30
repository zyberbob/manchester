
function initMap(){
  if(!window.L || MCR.map) return;
  MCR.map = L.map("map", {zoomControl:false}).setView([CONFIG.hotel.lat, CONFIG.hotel.lng], 16);
  L.control.zoom({position:"topright"}).addTo(MCR.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom:19, attribution:"© OpenStreetMap"}).addTo(MCR.map);
  renderMapFilters();
  renderMarkers();
}
function renderMapFilters(){
  const cats=["Alle","Topvalg","Mad","Dart","Shopping","Transport","Oplevelser","Praktisk"];
  $("#mapFilters").innerHTML=cats.map(c=>`<button class="mapBtn ${c==='Alle'?'active':''}" data-mapcat="${c}">${c}</button>`).join("");
}
function markerIcon(p){
  const fav=MCR.store("favs",[]).includes(p.id), vis=MCR.store("visited",[]).includes(p.id);
  return L.divIcon({className:"", html:`<div class="marker ${p.cat} ${fav?'fav':''} ${vis?'visited':''}">${p.emoji}</div>`, iconSize:[34,34], iconAnchor:[17,17]});
}
function popupHtml(p){
  return `<b>${p.emoji} ${p.name}</b><br>${p.cat} · ${distText(distTo(p))}<br><small>${p.note}</small><br><div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap"><a target="_blank" href="${mapsUrl(p.address)}">Maps</a><a target="_blank" href="${dirUrl(p.address)}">Gå</a><button onclick="setTarget('${p.id}')">Walking</button></div>`;
}
function visibleOnMap(p){
  const f=MCR.mapFilter||"Alle";
  if(f==="Alle") return true;
  if(f==="Topvalg") return p.top;
  return p.cat===f;
}
function renderMarkers(){
  if(!MCR.map) return;
  MCR.markers.forEach(m=>m.remove()); MCR.markers.clear();
  MCR.places.filter(visibleOnMap).forEach(p=>{
    const m=L.marker([p.lat,p.lng],{icon:markerIcon(p)}).addTo(MCR.map).bindPopup(popupHtml(p));
    MCR.markers.set(p.id,m);
  });
}
function updateMapMarkerStyles(){ renderMarkers(); updateUserMarker(); }
function updateUserMarker(){
  if(!MCR.map || !MCR.userPos) return;
  const icon=L.divIcon({className:"",html:`<div class="userMarker"></div>`,iconSize:[24,24],iconAnchor:[12,12]});
  if(!MCR.userMarker) MCR.userMarker=L.marker([MCR.userPos.lat,MCR.userPos.lng],{icon}).addTo(MCR.map).bindPopup("Du er her");
  else MCR.userMarker.setLatLng([MCR.userPos.lat,MCR.userPos.lng]);
}
function setTarget(id){
  MCR.targetId=id;
  const p=MCR.places.find(x=>x.id===id);
  if(!p) return;
  $("#targetPanel").classList.remove("hide");
  $("#targetName").textContent=p.emoji+" "+p.name;
  $("#targetMaps").href=dirUrl(p.address);
  updateTargetDistance();
  if(MCR.map) MCR.map.setView([p.lat,p.lng],17);
  vibrate();
}
function updateTargetDistance(){
  if(!MCR.targetId) return;
  const p=MCR.places.find(x=>x.id===MCR.targetId);
  if(!p) return;
  const m=distTo(p);
  $("#targetDistance").textContent = "Afstand: " + distText(m);
  if(m < 35) { $("#targetDistance").textContent += " · Du er fremme"; vibrate(60); }
}
function clearTarget(){ MCR.targetId=null; $("#targetPanel").classList.add("hide"); }
