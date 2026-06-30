
function startGPS(){
  if(!navigator.geolocation){ alert("GPS virker ikke i denne browser."); return; }
  $("#gpsStatusMini").textContent="Finder...";
  navigator.geolocation.getCurrentPosition(pos=>{
    setGPS(pos);
    if(!MCR.watchId){
      MCR.watchId = navigator.geolocation.watchPosition(setGPS, gpsError, {enableHighAccuracy:true, maximumAge:5000, timeout:15000});
    }
  }, gpsError, {enableHighAccuracy:true, timeout:15000});
}
function setGPS(pos){
  MCR.userPos={lat:pos.coords.latitude,lng:pos.coords.longitude,accuracy:pos.coords.accuracy};
  $("#gpsStatusMini").textContent="Live";
  $("#gpsAccuracy").textContent="± "+Math.round(pos.coords.accuracy)+" m";
  updateUserMarker();
  updateDistances();
  updateTargetDistance();
}
function gpsError(err){
  $("#gpsStatusMini").textContent="Hotel";
  $("#gpsAccuracy").textContent="GPS ikke aktiv";
  alert("Kunne ikke få GPS. Tjek at browseren må bruge lokation.");
}
