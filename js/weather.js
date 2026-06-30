
async function loadWeather(){
  const status=$("#status"), now=$("#weatherNow"), detail=$("#weatherDetail");
  if(!navigator.onLine){
    status.textContent="Offline: gemte data virker. Vejr/kort kræver internet.";
    now.textContent="Offline"; detail.textContent="";
    return;
  }
  status.textContent="Online: vejr og kort virker.";
  try{
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${CONFIG.hotel.lat}&longitude=${CONFIG.hotel.lng}&current=temperature_2m,precipitation,wind_speed_10m&daily=sunrise,sunset&timezone=Europe%2FLondon`;
    const r=await fetch(url), d=await r.json();
    now.textContent=Math.round(d.current.temperature_2m)+"°C";
    detail.textContent="Regn "+d.current.precipitation+" mm · vind "+Math.round(d.current.wind_speed_10m)+" km/t";
  }catch(e){
    now.textContent="Fejl";
    detail.textContent="kunne ikke hente";
  }
}
